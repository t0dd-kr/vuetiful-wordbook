(function(t){function e(e){for(var r,s,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)s=a[u],o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4104:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("5c0b"),n("2877")),a={},c=Object(s["a"])(a,o,i,!1,null,null,null),l=c.exports,d=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("table",{staticClass:"fixed"},[n("tr",{directives:[{name:"show",rawName:"v-show",value:!t.parsed&&!t.loading,expression:"!parsed && !loading"}]},[n("td",[n("div",{staticClass:"container-wordbook"},[n("div",{staticClass:"wordbook unparsed"},[t._l(t.words,function(e,r){return n("div",{staticClass:"word-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.words[r],expression:"words[i]"}],style:"width:"+14*(e.length+1)+"px",attrs:{type:"text"},domProps:{value:t.words[r]},on:{keydown:function(e){9===e.keyCode&&t.words.length<10&&t.words.push("")},input:function(e){e.target.composing||t.$set(t.words,r,e.target.value)}}})])}),t.words.length<10?n("div",{staticClass:"word-input",on:{click:function(e){return t.words.push("")}}},[t._v("\n              +\n            ")]):t._e(),n("div",{staticClass:"container-btn-parse"},[n("div",{staticClass:"word-input btn-parse",on:{click:t.parse}},[t._v("\n                단어장 만들기\n              ")])])],2)])])]),n("tr",{directives:[{name:"show",rawName:"v-show",value:!t.parsed&&t.loading,expression:"!parsed && loading"}]},[n("td",[n("div",{staticClass:"container-wordbook"},[n("div",{staticClass:"wordbook loading"},[n("table",[n("tr",[n("td",[n("Spinner",{attrs:{color:"#fff",depth:7,size:70}})],1)])])])])])]),n("tr",{directives:[{name:"show",rawName:"v-show",value:t.parsed,expression:"parsed"}]},[n("td",[n("div",{staticClass:"container-wordbook"},[n("div",{staticClass:"header-html"},[n("div",{staticClass:"container-tab"},[n("div",{staticClass:"tab active",on:{click:t.capture}},[t._v("\n                IMG\n              ")])])]),n("div",{staticClass:"wordbook"},t._l(t.datas,function(e){return n("div",{staticClass:"line"},[n("div",{staticClass:"left"},[n("div",{staticClass:"word"},[t._v("\n                  "+t._s(e.word)+"\n                ")]),t._l(e.class,function(e){return n("div",{class:"wordclass "+e},[t._v("\n                  "+t._s(e)+"\n                ")])})],2),n("div",{staticClass:"right"},[n("div",{staticClass:"translate"},[n("font",{staticClass:"big"},[t._v(t._s(e.translate[0])),e.translate.length>1?n("div",{staticStyle:{display:"inline-block"}},[t._v(",")]):t._e()]),t._v(" \n                  "),e.translate.length>1?[t._v("\n                    "+t._s(e.translate.slice(1).join(", "))+"\n                  ")]:t._e()],2)])])}),0)])])])]),n("div",{attrs:{id:"captured"}})])},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"sl-spinner",style:t.spinnerStyle})},f=[],v=(n("c5f6"),{props:{status:{type:Boolean,default:!0},rotation:{type:Boolean,default:!0},size:{type:Number,default:30},depth:{type:Number,default:3},speed:{type:Number,default:1},color:{type:String,default:"#6589b6"}},data:function(){return{rotationAnimations:["forward","backward"],sizeUnits:"px",timeUnits:"s"}},computed:{rotationDirection:function(){return this.rotation?this.rotationAnimations[0]:this.rotationAnimations[1]},spinnerSize:function(){return this.size+this.sizeUnits},spinnerDepth:function(){return this.depth+this.sizeUnits},spinnerSpeed:function(){return this.speed+this.timeUnits},spinnerStyle:function(){return{borderTopColor:this.hexToRGB(this.color,.15),borderRightColor:this.hexToRGB(this.color,.15),borderBottomColor:this.hexToRGB(this.color,.15),borderLeftColor:this.color,width:this.spinnerSize,height:this.spinnerSize,borderWidth:this.spinnerDepth,animationName:this.rotationDirection,animationDuration:this.spinnerSpeed}}},methods:{hexToRGB:function(t,e){var n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return e?"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(e,")"):"rgb(".concat(n,", ").concat(r,", ").concat(o,")")}}}),w=v,b=(n("f22a"),Object(s["a"])(w,h,f,!1,null,null,null)),m=b.exports,g={components:{Spinner:m},data:function(){return{parsed:!1,loading:!1,words:[""],datas:[]}},methods:{parse:function(){var t=this;this.loading=!0,this.$http.post("/api/translate",{words:this.words}).then(function(e){t.loading=!1,t.datas=e.data.translation,t.parsed=!0}).catch(function(t){console.log(t)})},getScreenshotOfElement:function(t){html2canvas(t).then(function(t){while($("#captured")[0].children.length>0)$("#captured")[0].removeChild($("#captured")[0].children[0]);$("#captured")[0].appendChild(t);var e=document.createElement("a");e.setAttribute("href",t.toDataURL()),e.setAttribute("download","wordbook.png"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)})},capture:function(){this.getScreenshotOfElement($(".container-wordbook")[2])}},mounted:function(){},beforeCreate:function(){}},y=g,C=(n("a2d4"),Object(s["a"])(y,u,p,!1,null,"03070441",null)),_=C.exports;r["a"].use(d["a"]);var x=new d["a"]({mode:"history",routes:[{path:"/",component:_}]}),k=n("2f62");r["a"].use(k["a"]);var S=new k["a"].Store({state:{},mutations:{},actions:{}}),O=n("bc3a"),j=n.n(O);r["a"].prototype.$http=j.a,r["a"].config.productionTip=!1,new r["a"]({router:x,store:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5c33":function(t,e,n){},"5e27":function(t,e,n){},a2d4:function(t,e,n){"use strict";var r=n("4104"),o=n.n(r);o.a},f22a:function(t,e,n){"use strict";var r=n("5c33"),o=n.n(r);o.a}});
//# sourceMappingURL=app.3313f117.js.map