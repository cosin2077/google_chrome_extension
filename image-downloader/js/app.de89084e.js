(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c7398141"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"227b":function(t,e,n){"use strict";n("549c")},4077:function(t,e,n){"use strict";n("eea2")},"549c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("cdfc"),n("2877")),s={},c=Object(i["a"])(s,r,a,!1,null,"134ad048",null),u=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("ImageItem",{attrs:{dataList:t.receiveList}})],1)},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo",attrs:{title:"image downloader"}},[o("img",{attrs:{src:n("cf05"),alt:"image downloader"}})])}],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"image-item-container"},[o("div",{staticClass:"download-all"},[o("div",{staticClass:"total"},[t._v("Total: "),o("span",[t._v(t._s(t.dataList.length))])]),o("Button",{attrs:{className:"green"},nativeOn:{click:function(e){return t.downloadImages(e)}}},[t._v("DOWNLOAD ALL")])],1),t.dataList.length?t._e():o("div",{staticClass:"reload"},[t._v("Please reload page")]),t._l(t.dataList,(function(e,r){return o("div",{key:r,staticClass:"image-item"},[o("div",{staticClass:"head"},[t._v(" "+t._s(e.filename)+" "),o("img",{attrs:{src:n("6369"),alt:"download",title:"download this image"},on:{click:function(n){return t.downloadImage(e)}}})]),o("div",{staticClass:"preview"},[o("img",{attrs:{src:e.previewUrl,alt:e.filename}})])])}))],2)},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.className},[t._t("default")],2)},g=[],h={name:"Button",props:{className:String,content:String}},b=h,w=(n("da19"),Object(i["a"])(b,v,g,!1,null,"cc4ca638",null)),_=w.exports;function y(t){chrome.runtime.sendMessage({action:"background",type:"download",content:t})}var L={name:"ImageItem",components:{Button:_},props:{dataList:Array},methods:{downloadImage:function(t){console.log(t),y([t])},downloadImages:function(){console.log(this.dataList),y(this.dataList)}}},O=L,j=(n("4077"),Object(i["a"])(O,p,m,!1,null,"6761b7f5",null)),x=j.exports,C={name:"Home",components:{ImageItem:x},data:function(){return{name:"Image downloader",receiveList:[]}},methods:{initListener:function(){var t=this;chrome&&chrome.runtime&&chrome.runtime.onMessage.addListener((function(e,n,o){"popup"===e.action&&t.handleListener(e,n,o)}))},handleListener:function(t,e,n){console.log(t,e,n),t.content&&(this.receiveList=t.content)}},created:function(){window.vm=this,this.initListener()}},I=C,P=(n("227b"),Object(i["a"])(I,d,f,!1,null,"a77c3e10",null)),k=P.exports;o["a"].use(l["a"]);var E=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new l["a"]({routes:E}),M=S,T=n("2f62");o["a"].use(T["a"]);var $=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("5a8b");o["a"].config.productionTip=!1,new o["a"]({router:M,store:$,render:function(t){return t(u)}}).$mount("#app")},"5a8b":function(t,e,n){},"5f1e":function(t,e,n){},6369:function(t,e,n){t.exports=n.p+"img/download.6f526a03.svg"},"752b":function(t,e,n){},cdfc:function(t,e,n){"use strict";n("752b")},cf05:function(t,e,n){t.exports=n.p+"img/logo.f6c0326e.png"},da19:function(t,e,n){"use strict";n("5f1e")},eea2:function(t,e,n){}});
//# sourceMappingURL=app.de89084e.js.map