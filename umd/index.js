(function () {var j={};Object.defineProperty(j,"__esModule",{value:!0});var d=void 0;j.globalState=d,d={currentFn:void 0},j.globalState=d;var k={};Object.defineProperty(k,"__esModule",{value:!0});var l=void 0;k.useDependency=l;function T(){var e=new Set;return window.addEventListener("hashchange",function(){e.clear()}),{depend:function(){"function"==typeof d.currentFn&&e.add(d.currentFn)},notify:function(){e.forEach(function(e){return e()})}}}l=T,k.useDependency=l;var f={};Object.defineProperty(f,"__esModule",{value:!0});var h=(I=void 0,f.useAsyncUpdateQueue=I);function H(){var e=new Set,u=!0;function $(){e.size&&(e.forEach(function(e){e()}),e.clear(),u=!0)}return{add:function(t){e.has(t)||(e.add(t),u&&(u=!1,setTimeout($,0)))},nextTick:$}}f.asyncUpdateQueue=h;var I=H;f.useAsyncUpdateQueue=I,h=H(),f.asyncUpdateQueue=h;var m={};Object.defineProperty(m,"__esModule",{value:!0});var p=void 0;m.createState=p;function U(e){var t=l();return new Proxy(e,{get:function(e,r,$){return t.depend(),Reflect.get(e,r,$)},set:function(e,r,$,a){var W=Reflect.set(e,r,$,a);return h.add(t.notify),W}})}p=U,m.createState=p;var q={};Object.defineProperty(q,"__esModule",{value:!0});var c=void 0;q.createComponent=c;function V(e){d.currentFn=e,e(),d.currentFn=void 0}function X(e,t){var $=t();V(function(){document.querySelector(e).innerHTML="function"!=typeof $?$:$()})}c=X,q.createComponent=c;var v={};Object.defineProperty(v,"__esModule",{value:!0});var i=void 0;function Y(o){setTimeout(function(){o()},0)}v.onMounted=i,i=Y,v.onMounted=i;var w={};Object.defineProperty(w,"__esModule",{value:!0});var x=void 0;function Z(n){window.addEventListener("hashchange",function e(o){n(),window.removeEventListener("hashchange",e,!1)},!1)}w.onUnmounted=x,x=Z,w.onUnmounted=x;var y={};Object.defineProperty(y,"__esModule",{value:!0});var z=void 0;y.on=z;var A=[];function _(e){return{click:function(n){A.some(function(e){return e===n})||setTimeout(function(){return document.querySelector(e).addEventListener("click",n,!1)},0)},event:function(n,t){A.some(function(e){return e===t})||setTimeout(function(){return document.querySelector(e).addEventListener(n,t,!1)},0)},removeEvent:function(n,t){A.some(function(e){return e===t})||document.querySelector(e).removeEventListener(n,t,!1)}}}z=_,y.on=z;var B={};Object.defineProperty(B,"__esModule",{value:!0});var C=void 0;B.component=C;function aa(e,o){i(function(){c(e,o)})}C=aa,B.component=C;var g={};Object.defineProperty(g,"__esModule",{value:!0});var D=(E=void 0,g.getParams=E);g.useRouter=D;var J=Object.create(null);function ba(){return J}var E=ba;function ca(){var e=Object.create(null);function t(){J={};for(var e=location.hash;e.startsWith("/")||e.startsWith("#");)e=e.substring(1);for(;e.endsWith("/");)e=e.substring(0,e.length-1);return e}function r(t,r){if("function"!=typeof e[t]){for(var o=function(o){if(o.includes(":")){var n=t.split("/"),a=o.split("/"),$=[];if(a.forEach(function(e,t){e.startsWith(":")&&$.push(t)}),$.forEach(function(e){n[e]=a[e]}),n.join("/")===o){var s=t.split("/");return $.forEach(function(e){J[a[e].substring(1)]=s[e]}),c(r,e[o]),{value:void 0}}}if(o.endsWith("**")){var u=o.slice(0,-2);if(t.startsWith(u))return c(r,e[o]),{value:void 0}}},n=0,a=Object.keys(e);n<a.length;n++){var $=o(a[n]);if("object"==typeof $)return $.value}"function"!=typeof e["*"]?c(r,function(){return function(){return"<p>404 Not Found</p>"}}):c(r,e["*"])}else c(r,e[t])}return{route:function(t,r){for(;t.startsWith("/");)t=t.substring(1);e[t]=r},render:function(e){window.addEventListener("hashchange",function(){r(t(),e)},!1),r(t(),e)}}}g.getParams=E,D=ca,g.useRouter=D;var F={};Object.defineProperty(F,"__esModule",{value:!0});var G=void 0;function da(e){return new Proxy(e,{get:function(e,r,o){return Reflect.get(e,r,o)},set:function(){throw new Error("Cannot set a readonly object")}})}F.readonly=G,G=da,F.readonly=G;var b={};Object.defineProperty(b,"__esModule",{value:!0});var K=(L=void 0,M=b.reactive=L,N=b.render=M,O=b.onMounted=N,P=b.onUnmounted=O,Q=b.on=P,R=b.component=Q,S=b.Router=R,b.nextTick=S);b.readonly=K;var L=p;b.reactive=L;var M=c;b.render=M;var N=i;b.onMounted=N;var O=x;b.onUnmounted=O;var P=z;b.on=P;var Q=C;b.component=Q;var R={getParams:E,useRouter:D};b.Router=R;var S=h.nextTick;b.nextTick=S,K=G,b.readonly=K;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}else{this["ReOdd"]=b}})();