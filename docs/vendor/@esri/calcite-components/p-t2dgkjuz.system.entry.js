var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(a,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1073cf27.system.js","./p-2977e6f6.system.js"],(function(e,t){"use strict";var r,n,i,o,a,s;return{setters:[function(e){r=e.d;n=e.r;i=e.h;o=e.H;a=e.g},function(e){s=e.g}],execute:function(){var c={icon:"icon",mirrored:"mirrored"};var u={};var l={};var f={s:16,m:24,l:32};function h(e){var n=e.icon,i=e.scale,o=e.filled;return __awaiter(this,void 0,void 0,(function(){var e,a,s,c,h;return __generator(this,(function(v){switch(v.label){case 0:e=f[i];a=""+p(n)+e+(o?"F":"");if(u[a]){return[2,u[a]]}s=l[a]||(l[a]=t.import(r("./assets/"+a+".js")));return[4,s];case 1:c=v.sent();h=c[a];u[a]=h;return[2,h]}}))}))}function p(e){var t=!isNaN(Number(e.charAt(0)));var r=e.split("-");if(r.length===1){return t?"i"+e:e}return r.map((function(e,r){if(r===0){return t?"i"+e.toUpperCase():e}return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}var v=e("calcite_icon",function(){function e(e){n(this,e);this.filled=false;this.icon=null;this.mirrored=false;this.scale="m";this.theme="light";this.visible=false}e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible((function(){e.visible=true;e.loadIconPathData()}))};e.prototype.disconnectedCallback=function(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}};e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.loadIconPathData();return[2]}))}))};e.prototype.render=function(){var e;var t=this,r=t.el,n=t.mirrored,a=t.pathData,u=t.scale;var l=s(r);var h=f[u];return i(o,{role:"img"},i("svg",{class:(e={},e[c.mirrored]=l==="rtl"&&n,e),xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:h,width:h,viewBox:"0 0 "+h+" "+h},i("path",{d:a})))};e.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,n,i,o;return __generator(this,(function(a){switch(a.label){case 0:e=this,t=e.filled,r=e.icon,n=e.scale,i=e.visible;if(!r||!i){return[2]}o=this;return[4,h({icon:r,scale:n,filled:t})];case 1:o.pathData=a.sent();return[2]}}))}))};e.prototype.waitUntilVisible=function(e){var t=this;if(typeof window==="undefined"||!window.IntersectionObserver){e();return}this.intersectionObserver=new IntersectionObserver((function(r){var n=r[0];if(n.isIntersecting){t.intersectionObserver.disconnect();t.intersectionObserver=null;e()}}),{rootMargin:"50px"});this.intersectionObserver.observe(this.el)};Object.defineProperty(e,"assetsDirs",{get:function(){return["assets"]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{icon:["loadIconPathData"],filled:["loadIconPathData"],size:["loadIconPathData"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:-ms-inline-flexbox;display:inline-flex}.mirror{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"},enumerable:true,configurable:true});return e}())}}}));