(function(t){function e(e){for(var n,a,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)a=l[p],o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("9f7b"),i=r.n(o),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-jumbotron",{attrs:{id:"content1","bg-variant":"secondary","text-variant":"light","header-level":"4"}},[r("template",{slot:"header"},[t._v("謝時銘")]),r("template",{slot:"lead"},[t._v("\n      對軟體開發充滿熱誠，常於休閒時間透過閱讀及實驗充實自身技術，以提升編程效率及品質為樂。\n    ")]),r("hr",{staticStyle:{"background-color":"#282828"}}),r("p",[t._v("\n      此頁面為作品呈現\n    ")]),r("b-button",{attrs:{variant:"primary",href:"https://github.com/bevis00/Resume"}},[t._v("Profile")]),r("b-button",{attrs:{id:"mailbtn",variant:"success"}},[t._v("E-mail")]),r("b-popover",{attrs:{target:"mailbtn",placement:"bottom"}},[t._v("\n      shihming.hsieh@gmail.com\n    ")])],2),r("b-jumbotron",{attrs:{id:"content2",header:"Works List","header-level":"4"}},[r("b-container",{staticClass:"p-4 bg-dark",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{fade:"",indicators:""},on:{"sliding-start":t.onSlideStart},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{attrs:{"img-src":"img/Tron.jpg"}},[r("b-button",{attrs:{variant:"outline-light"},on:{click:function(e){t.show=!0}}},[t._v("video")]),r("b-modal",{attrs:{centered:"","hide-footer":"","hide-header":"",size:"lg"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("iframe",{attrs:{width:"100%",height:"480",src:"https://www.youtube.com/embed/duDXEQRgYRs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),r("b-button",{attrs:{variant:"outline-danger",block:""},on:{click:function(e){t.show=!1}}},[t._v("Close")])],1),r("h1",{staticStyle:{color:"#ffffff"}},[t._v("Tron 立方射擊遊戲")])],1),r("b-carousel-slide",{attrs:{"img-src":"img/GameProgramming.jpg"}},[r("h1",{staticStyle:{color:"#ffffff"}},[t._v("Game Programming")])]),r("b-carousel-slide",{attrs:{"img-src":"img/Web3D.jpg"}},[r("h1",{staticStyle:{color:"#000000"}},[t._v("Web 3D")])]),r("b-carousel-slide",{attrs:{"img-src":"img/ComputerGraphics.jpg"}},[r("h1",{staticStyle:{color:"#ffffff"}},[t._v("Computer Graphics")])])],1)],1)],1)],1),r("br"),r("b-button",{attrs:{variant:"primary",href:t.link}},[t._v("link")])],1)],1)},l=[],s=(r("b54a"),{name:"App",data:function(){return{slide:0,show:!1,link:"https://ojrock.github.io/tron/tron.html"}},methods:{onSlideStart:function(t){0===t?this.link="https://ojrock.github.io/tron/tron.html":1===t?this.link="https://bevis00.github.io/ex/index.html":2===t?this.link="https://bevis00.github.io/w3d/index.html":3===t&&(this.link="https://bevis00.github.io/ComputerGraphics/index.html")}}}),c=s,u=(r("5c0b"),r("2877")),p=Object(u["a"])(c,a,l,!1,null,null,null),f=p.exports;r("f9e3"),r("2dd8");n["a"].config.productionTip=!1,n["a"].use(i.a),new n["a"]({render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){}});
//# sourceMappingURL=app.de172788.js.map