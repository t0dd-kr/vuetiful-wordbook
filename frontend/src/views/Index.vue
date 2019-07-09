<template>
  <div class="index">
    <table class="fixed">
      <tr v-show="!parsed && !loading">
        <td>
          <div class="container-wordbook">
            <div class="wordbook unparsed">
              <div class="word-input" v-for="(word, i) in words">
                <input type="text" v-model="words[i]" @keydown="($event) => { if ($event.keyCode === 9) { if(words.length < 10) words.push('') } }" :style="'width:' + ((word.length + 1) * 14) + 'px'">
              </div>
              <div class="word-input" @click="words.push('')" v-if="words.length < 10">
                +
              </div>
              <div class="container-btn-parse">
                <div class="word-input btn-parse" @click="parse">
                  단어장 만들기
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr v-show="!parsed && loading">
        <td>
          <div class="container-wordbook">
            <div class="wordbook loading">
              <table>
                <tr>
                  <td>
                    <Spinner
                      :color="'#fff'"
                      :depth="7"
                      :size="70"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr v-show="parsed">
        <td>
          <div class="container-wordbook">
            <div class="header-html">
              <div class="container-tab">
                <div class="tab active" @click="capture">
                  IMG
                </div>
              </div>
            </div>
            <div class="wordbook">
              <div v-for="word in datas" class="line">
                <div class="left">
                  <div class="word">
                    {{word.word}}
                  </div>
                  <div :class="'wordclass ' + f" v-for="f in word.class">
                    {{f}}
                  </div>
                </div>
                <div class="right">
                  <div class="translate">
                    <font class="big">{{word.translate[0]}}<div style="display: inline-block" v-if="word.translate.length > 1">,</div></font>&nbsp;
                    <template v-if="word.translate.length > 1">
                      {{word.translate.slice(1).join(', ')}}
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <div id="captured">

    </div>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      parsed: false,
      loading: false,
      words:[
        ''
      ],
      datas:[
        // {
        //   word: 'finance',
        //   class: ['n'],
        //   translate: '재정, 금융, 재무, 자금, 재원'
        // },
        // {
        //   word: 'fortune',
        //   class: ['n'],
        //   translate: '재산, 행운, 운'
        // },
        // {
        //   word: 'commerce',
        //   class: ['n'],
        //   translate: '상업, 무역'
        // },
        // {
        //   word: 'profit',
        //   class: ['n', 'v'],
        //   translate: '이익, 수익, 이윤, 도움이 되다'
        // },
        // {
        //   word: 'advantage',
        //   class: ['n', 'v'],
        //   translate: '이점, 우위, ~을 이롭게 하다'
        // },
        // {
        //   word: 'economy',
        //   class: ['n', 'adj', 'adv'],
        //   translate: '경제, 경제적인, 할인 가격으로'
        // },
        // {
        //   word: 'industry',
        //   class: ['n'],
        //   translate: '산업, 업계, 제조업'
        // },
        // {
        //   word: 'invest',
        //   class: ['n', 'v'],
        //   translate: '투자, 투자하다'
        // },
        // {
        //   word: 'income',
        //   class: ['n'],
        //   translate: '수입, 소득'
        // },
      ],
    }
  },
  methods: {
    parse: function () {
      // console.log(this.words)
      this.loading = true
      this.$http.post('/api/translate', {words: this.words})
      .then(res => {
        this.loading = false
        this.datas = res.data.translation
        this.parsed = true
      })
      .catch(err => {
        console.log(err)
      })
    },
    getScreenshotOfElement: function(element) {
      html2canvas(element)
      .then(canvas => {
        while($('#captured')[0].children.length > 0) {
          $('#captured')[0].removeChild($('#captured')[0].children[0])
        }
        $('#captured')[0].appendChild(canvas)

        var element = document.createElement('a');
        element.setAttribute('href', canvas.toDataURL());
        element.setAttribute('download', 'wordbook.png');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      })
    },
    capture: function () {
      this.getScreenshotOfElement($('.container-wordbook')[2])
    }
  },
  mounted () {

  },
  beforeCreate() {

  }
}
</script>
<style lang="scss" scoped>
  $full: 100%;
  .header-html {
    position: absolute;
    display: inline-block;
    width: 600px;
    text-align: right;
    top: -40px;
    right: 40px;
  }
  .header-img {
    position: absolute;
    display: inline-block;
    width: 680px;
    padding: 0 40px;
    text-align: right;
    top: 0px;
    right: 40px;
  }
  .container-tab {
    display: inline-flex;
    overflow: hidden;
    justify-content: flex-end;
  }
  .tab {
    cursor: pointer;
    background-color: #272822;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    padding: 5px 10px;
    &:first-child {
      margin: {
        right: 3px;
      }
    }
    &.active {
      background-color: #4caf50;
    }
  }
  table.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: $full;
    height: $full;
    background: 0% 0% / auto repeat rgb(171, 184, 195);
    border-collapse: collapse;
  }
  table.fixed td {
    vertical-align: middle;
    text-align: center;
  }
  .word-input {
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 10px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 50px;
    color: #fff;
    display: inline-block;

    font: {
      family: 'Roboto', sans-serif !important;
      size: 24px;
    }

    input {
      background-color: transparent;
      color: #fff;
      border: none;
      width: 180px;
      height: 100%;
      outline: none;
      text-align: center;
      min-width: 50px;
      font: {
        family: 'Roboto', sans-serif !important;
        size: 24px;
        weight: 700;
      }
    }
  }
  .container-btn-parse {
    cursor: pointer;
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 0px;
    text-align: center;
  }
  .container-wordbook {
    display: inline-block;
    padding: 40px;
    background: 0% 0% / auto repeat rgb(171, 184, 195);
    position: relative;
  }
  .wordbook {
    display: inline-block;
    width: 600px;
    min-height: 800px;
    background-color: #272822;
    border-radius: 10px;
    padding: {
      top: 20px;
      bottom: 20px;
    }
    box-sizing: border-box;
    position: relative;
    &.unparsed {
      padding: 20px;
    }
    &.loading table {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &.loading td {
      padding: 315px 0;
      vertical-align: middle;
      text-align: center;
    }
    // $shadow: rgba(0, 0, 0, 0.55) 0px 15px 38px;
    // -webkit-box-shadow: $shadow;
    // -moz-box-shadow: $shadow;
    // box-shadow: $shadow;
  }
  .line {
    display: flex;
  }
  .left, .right {
    width: 50%;
    text-align: left;
    padding: 0 20px 40px;
    min-height: 40px;
    display: flex;
  }
  .left {
    border: {
      color: #fff;
      style: solid;
      width: 0 1px 0 0;
    }
  }
  .word {
    font: {
      family: 'Roboto', sans-serif !important;
      size: 24px;
      weight: 700;
    }
    color: #fff;
  }
  .wordclass {
    color: #fff;
    background-color: rgba(255,255,255,0.5);
    display: inline-block;
    height: 16px;
    // width: 30px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 2px 5px;
    text-align: center;
    text-transform: uppercase;
    font: {
      size: 10px;
      weight: 800;
    }
    &:nth-child(2) {
      margin: {
        left: 8px;
      }
    }
    &:nth-child(n+3) {
      margin: {
        left: 5px;
      }
    }
    transform: rotate(0.1deg);
    &.v {
      background-color: #e91e63;
    }
    &.adj {
      background-color: #ff5722;
    }
    &.n {
      background-color: #2196f3;
    }
    &.adv {
      background-color: #ff9800;
    }
  }
  .translate {
    display: inline-block;
    vertical-align: text-bottom;
    font: {
      size: 16px;
      weight: 400;
    }
    letter-spacing: 1px;
    line-height: 26px;
    color: #fff;
    .big {
      font: {
        size: 24px;
      }
    }
  }
  #captured {
    position: fixed;
    left: -9999px;
    top: -9999px;
  }
</style>
