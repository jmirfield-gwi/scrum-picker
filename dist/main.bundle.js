(()=>{"use strict";var e={525:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,'body{font-family:"Fredoka One",sans-serif;background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size:400% 400%;animation-name:gradient;animation-duration:15s;animation-iteration-count:infinite;animation-direction:alternate;animation-timing-function:ease}#gradient{width:100%;height:100%;padding:0px;margin:0px;position:absolute;top:0;right:0;bottom:0;left:0}#names-wrapper{width:1000px;display:block;margin:5% auto 0 auto}.names{font-size:100px;color:#fff;margin:auto;padding:0px;display:block;width:100%;text-align:center}#done{font-size:50px;opacity:.3;text-align:left;padding-left:10%;width:500px}#next{margin-bottom:5%}.names.li{padding:0px;margin:0px;text-align:left}#title{font-size:45px;margin-bottom:5%}#pick{width:150px;margin:5% auto 5% auto;display:block;padding:10px;border-radius:10px;background-color:rgba(0,0,0,0);border-color:#fff;border-width:2px;color:#fff;font-size:30px;font-family:"Fredoka One",cursive}#pick:hover{box-shadow:0px 15px 25px -5px rgba(255,255,255,.2);transform:scale(1.03)}#pick:active{box-shadow:0px 4px 8px rgba(255,255,255,.2);transform:scale(0.98)}#pick:focus{outline:0;outline-offset:0}.single-before{list-style:none;padding:0;margin:0 0 2rem}.single-before li{padding-left:1rem;text-indent:-0.6rem}.single-before li::before{content:"✅"}@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.bubbly-button{font-family:"Helvetica","Arial",sans-serif;display:inline-block;font-size:1em;width:150px;padding:10px;margin:5% auto 5% auto;-webkit-appearance:none;appearance:none;background-color:rgba(0,0,0,0);color:#fff;border-radius:10px;cursor:pointer;position:relative;transition:transform ease-in .1s,box-shadow ease-in .25s;border-color:#fff;border-width:2px;font-size:30px;font-family:"Fredoka One",cursive}.bubbly-button:focus{outline:0}.bubbly-button:before,.bubbly-button:after{position:absolute;content:"";display:block;width:140%;height:100%;left:-20%;z-index:-1000;transition:all ease-in-out .5s;background-repeat:no-repeat}.bubbly-button:before{display:none;top:-75%;background-image:radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, transparent 20%, #fff 20%, transparent 30%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, transparent 10%, #fff 15%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%);background-size:10% 10%,20% 20%,15% 15%,20% 20%,18% 18%,10% 10%,15% 15%,10% 10%,18% 18%}.bubbly-button:after{display:none;bottom:-75%;background-image:radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, transparent 10%, #fff 15%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%),radial-gradient(circle, #fff 20%, transparent 20%);background-size:15% 15%,20% 20%,18% 18%,20% 20%,15% 15%,10% 10%,20% 20%}.bubbly-button:active{transform:scale(0.9);box-shadow:0 2px 25px rgba(255,0,130,.2);outline:0}.bubbly-button.animate:before{display:block;animation:topBubbles ease-in-out .75s forwards}.bubbly-button.animate:after{display:block;animation:bottomBubbles ease-in-out .75s forwards}@keyframes topBubbles{0%{background-position:5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%}50%{background-position:0% 80%,0% 20%,10% 40%,20% 0%,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%}100%{background-position:0% 70%,0% 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;background-size:0% 0%,0% 0%,0% 0%,0% 0%,0% 0%,0% 0%}}@keyframes bottomBubbles{0%{background-position:10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0%}50%{background-position:0% 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0%}100%{background-position:0% 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;background-size:0% 0%,0% 0%,0% 0%,0% 0%,0% 0%,0% 0%}}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=o[l]||0,f="".concat(l," ").concat(d);o[l]=d+1;var u=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var b=r(p,a);a.byIndex=s,t.splice(s,0,{identifier:f,updater:b,references:1})}i.push(f)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=a(e,r),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),f=n(589),u=n.n(f),p=n(525),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),t()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;var g=new Array("Rebecca","Justin","Ryan","Milo","Craig","John");$("#pick").on("click",(function(){$("#pick").attr("disabled",!0);var e=g.length;if(console.log("names: ",e),e>0)return $("#pick").html("Go"),m=0,v=setInterval(y,50),void console.log("done filtering")}));var m,v,h=new Array;function y(){var e,t=g.length;if(t>0){var n=(e=t,Math.floor(Math.random()*Math.floor(e))),a=g[n];if($("#next").html(a),++m>=20)return clearInterval(v),h.push(a),console.log("doneNames:",h.length),$("#done ul").html(function(e){var t="";return e.forEach((function(e){t=t+"<li>"+e+"</li>"})),t}(h)),g=g.filter((function(e){return!h.includes(e)})),$("#pick").attr("disabled",!1),void(0==g.length&&(g=h,h=new Array,$("#done").html('<ul class="single-before"></ul>'),$("#pick").html("Again!"),$("#pick").attr("disabled",!1)))}}$("#pick.confetti-button").on("click",(function(){function e(e){return Math.random()*(e-0)+0}for(var t=document.createDocumentFragment(),n=0;n<100;n++){var a="transform: translate3d("+(e(500)-250)+"px, "+(e(200)-150)+"px, 0) rotate("+e(360)+"deg);        background: hsla("+e(360)+",100%,50%,1);        animation: bang 700ms ease-out forwards;        opacity: 0",r=document.createElement("i");r.style.cssText=a.toString(),t.appendChild(r)}$(this).append(t)}));for(var x=function(e){e.preventDefault,e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},k=document.getElementsByClassName("bubbly-button"),w=0;w<k.length;w++)k[w].addEventListener("click",x,!1)})()})();