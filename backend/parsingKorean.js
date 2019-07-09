const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeCapabilities = webdriver.Capabilities.chrome();
const { spawn } = require('child_process');

// var options = new chrome.Options();
// var prefs = new webdriver.logging.Preferences();
// prefs.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.ALL);
// options.setLoggingPrefs(prefs);
// console.log(JSON.stringify(options, null, 2))

const chromeOptions = {
  'args': ['--disable-extensions', '--headless', '--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox', 'log-level=3'],
};
chromeCapabilities.set('chromeOptions', chromeOptions);

let driver;
const By = webdriver.By;
const until = webdriver.until;

function getTranslate (idx) {
  driver.get('https://translate.google.co.kr/?hl=ko#view=home&op=translate&sl=en&tl=ko&text=' + words[idx])
  .then(() => {
    setTimeout(function () {
      driver.findElement(By.css('.tlid-translation.translation')).getText()
      .then(capital => {
        translation.push({
          word: words[idx],
          translate: [capital],
          class: []
        })
        return driver.findElement(By.css('.gt-cd-pos')).getText()
      })
      .then(capitalClass => {
        switch(capitalClass) {
          case '동사':
            translation[idx].class.push('v')
          break;
          case '명사':
            translation[idx].class.push('n')
          break;
          case '형용사':
            translation[idx].class.push('adj')
          break;
          case '부사':
            translation[idx].class.push('adv')
          break;
        }
        return driver.findElements(By.css('.gt-baf-table td:first-child'))
      }, () => {
        return driver.findElements(By.css('.gt-baf-table td:first-child'))
      })
      .then(translations => {
        return Promise.all(translations.map(getText));
      }, () => {
        return Promise.all([]);
      })
      .then(data => {
        if(data.length > 0) {
          if(translation[idx].class.length == 0) {
            switch(data[0].split('\n')[0]) {
              case '동사':
                translation[idx].class.push('v')
              break;
              case '명사':
                translation[idx].class.push('n')
              break;
              case '형용사':
                translation[idx].class.push('adj')
              break;
              case '부사':
                translation[idx].class.push('adv')
              break;
            }
          }

          let count = 0
          for(var i=1;i<data.length;i++) {
            if(data[i] != '') {
              if(i > 3 && data[i - 1] == '' && data[i - 2] == '') {
                switch(data[i]) {
                  case '동사':
                    translation[idx].class.push('v')
                  break;
                  case '명사':
                    translation[idx].class.push('n')
                  break;
                  case '형용사':
                    translation[idx].class.push('adj')
                  break;
                  case '부사':
                    translation[idx].class.push('adv')
                  break;
                }
              }

              else if(count < 2 * translation[idx].class.length) {
                translation[idx].translate.push(data[i])
                count++
              }
            }
          }
          translation[idx].translate = translation[idx].translate.filter((el, i, a) => a.indexOf(el) == i)
        }
        if(words[idx + 1]) getTranslate(++idx)
        else send()
      })
      .catch(err => {
        console.log(err)
      })
    }, 1000)
  })
}

function getText(el) {
  return new Promise(function(res, rej) {
    el.getText()
    .then(data => {
      res(data)
    })
    .catch(err => {
      console.log(err)
      close()
      rej(err)
    })
  })
}
//
// function getSrc(el) {
//   return new Promise(function(res, rej) {
//     el.getAttribute('src').then(data => {
//       var championString = '';
//       championString = data.split('.png')[0].split('/').pop();
//       if (championString === 'pic_none') {
//         res('No ban selected');
//       }
//       else {
//         res(championString);
//       }
//     })
//     .catch(err => {
//       console.log(err)
//       close()
//       rej(err)
//     })
//   })
// }
//
//
// function getAlt(el) {
//   return new Promise(function(res, rej) {
//     el.getAttribute('alt').then(data => {
//       res(data)
//     })
//     .catch(err => {
//       console.log(err)
//       close()
//       rej(err)
//     })
//   })
// }

let idx = 0
let words = []
let translation = []
let response
function crawler (w, isFirst, res) {
  idx = 0
  words = w
  response = res
  translation = []
  driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
  getTranslate(idx)
}

function send() {
  response.send({status: true, translation})
}

function close() {
  if(driver) driver.close()
  if(driver) driver.quit()
  // setTimeout(function () {
  //   spawn('killall',['-9','chromedriver'])
  //   spawn('killall',['-9','chrome'])
  // }, 5000)
  spawn('taskkill',['/F','/IM','chromedriver.exe'])
}
// crawler(['help'], true)

module.exports = crawler
