var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="calcite";var a=0;var i=false;var s;var o;var l;var $=false;var f=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var g=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(t){}return e}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var R=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,t)};var N=function(e,t){return t in e};var S=function(e){return console.error(e)};var x=new Map;var _=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=x.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{x.set(i,e)}return e[a]}),S)};var L=new Map;var T=[];var E=[];var k=[];var C=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){P(I)}else{h.raf(I)}}}};var j=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){S(r)}}e.length=0};var A=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){S(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var I=function(){a++;j(T);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;A(E,e);A(k,e);if(E.length>0){k.push.apply(k,E);E.length=0}if(i=T.length+E.length+k.length>0){h.raf(I)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var O=C(E,true);var U={};var B="http://www.w3.org/2000/svg";var M="http://www.w3.org/1999/xhtml";var q=function(e){return e!=null};var z=function(e){e=typeof e;return e==="object"||e==="function"};var H=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var V=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var W=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));D(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var D=function(e){var t=H(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));r.set(a,i);d.head.appendChild(s)}return i}}};var F=function(e,t){if(e!=null&&!z(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var G="r";var Q="o";var Y="s";var J="t";var K="hydrated";var X="s-id";var Z="c-id";var ee="http://www.w3.org/1999/xlink";var te=function(e,t){if(t===void 0){t=""}{return function(){return}}};var re=function(e,t){{return function(){return}}};var ne=new WeakMap;var ae=function(e,t,r){var n=L.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}L.set(e,n)};var ie=function(e,t,r,n){var a=oe(t.$tagName$);var i=L.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=ne.get(e);var o=void 0;if(!s){ne.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(o=e.firstElementChild)&&o.tagName==="STYLE"){o.innerHTML=i}else{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var se=function(e,t,r){var n=te("attachStyles",t.$tagName$);var a=ie(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var oe=function(e,t){return"sc-"+e};var le=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var $e=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var $=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!z(a)){a=String(a)}if(o&&l){$[$.length-1].$text$+=a}else{$.push(o?fe(null,a):a)}l=o}}};f(r);if(t){if(t.key){i=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t,$,ve)}var c=fe(e,null);c.$attrs$=t;if($.length>0){c.$children$=$}{c.$key$=i}{c.$name$=s}return c}));var fe=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var ue=e("H",{});var ce=function(e){return e&&e.$tag$===ue};var ve={forEach:function(e,t){return e.map(de).forEach(t)},map:function(e,t){return e.map(de).map(t).map(he)}};var de=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var he=function(e){var t=fe(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var me=function(e,t,r,n,a,i){if(r===n){return}var s=N(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var $=pe(r);var f=pe(n);l.remove.apply(l,$.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(N(v,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var c=z(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(g){}}var m=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){t=o;m=true}}if(n==null||n===false){if(m){e.removeAttributeNS(ee,t)}else{e.removeAttribute(t)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(m){e.setAttributeNS(ee,t,n)}else{e.setAttribute(t,n)}}}};var ge=/\s/;var pe=function(e){return!e?[]:e.split(ge)};var ye=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||U;var s=t.$attrs$||U;{for(n in i){if(!(n in s)){me(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){me(a,n,i[n],s[n],r,t.$flags$)}};var be=function(e,t,r,n){var a=t.$children$[r];var i=0;var f;var v;var h;if(!$){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){f=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){f=a.$elm$=d.createTextNode("")}else{if(!c){c=a.$tag$==="svg"}f=a.$elm$=d.createElementNS(c?B:M,a.$flags$&2?"slot-fb":a.$tag$);if(c&&a.$tag$==="foreignObject"){c=false}{ye(null,a,c)}if(q(s)&&f["s-si"]!==s){f.classList.add(f["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=be(e,a,i,f);if(v){f.appendChild(v)}}}{if(a.$tag$==="svg"){c=false}else if(f.tagName==="foreignObject"){c=true}}}{f["s-hn"]=l;if(a.$flags$&(2|1)){f["s-sr"]=true;f["s-cr"]=o;f["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){we(e.$elm$,false)}}}return f};var we=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){Le(a).insertBefore(a,_e(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){we(a,t)}}h.$flags$&=~1};var Re=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=be(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,_e(t))}}}};var Ne=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;je(n);{f=true;if(a["s-ol"]){a["s-ol"].remove()}else{we(a,true)}}a.remove()}}};var Se=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var $=t[0];var f=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if($==null){$=t[++a]}else if(f==null){f=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(xe($,c)){Te($,c);$=t[++a];c=n[++i]}else if(xe(f,v)){Te(f,v);f=t[--l];v=n[--u]}else if(xe($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){we($.$elm$.parentNode,false)}Te($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=t[++a];v=n[--u]}else if(xe(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){we(f.$elm$.parentNode,false)}Te(f,c);e.insertBefore(f.$elm$,$.$elm$);f=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&t[o].$key$!==null&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=be(t&&t[i],r,s,e)}else{Te(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=be(t&&t[i],r,i,e);c=n[++i]}if(d){{Le($.$elm$).insertBefore(d,_e($.$elm$))}}}}if(a>l){Re(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){Ne(t,a,l)}};var xe=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var _e=function(e){return e&&e["s-ol"]||e};var Le=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Te=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{c=r&&r.parentNode&&r.ownerSVGElement!==undefined;c=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:c}if(t.$text$===null){{if(t.$tag$==="slot");else{ye(e,t,c)}}if(n!==null&&a!==null){Se(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Re(r,null,t,a,0,a.length-1)}else if(n!==null){Ne(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.data=t.$text$}if(c&&t.$tag$==="svg"){c=false}};var Ee=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var o;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){o=t[i].nodeType;if(s!==""){if(o===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}Ee(r)}}};var ke=[];var Ce=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var $;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;$=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&$===""||i===1&&o.getAttribute("slot")===null&&$===""||i===1&&o.getAttribute("slot")===$){if(!ke.some((function(e){return e.$nodeToRelocate$===o}))){f=true;o["s-sn"]=$;ke.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){Ce(s)}}};var je=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(je)}};var Ae=function(e,t,r,n){l=e.tagName;var a=t.$vnode$||fe(null,null);var i=ce(n)?n:$e(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]}))}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];$=m&&(r.$flags$&1)!==0;f=false}Te(a,i);{if(u){Ce(i.$elm$);for(var c=0;c<ke.length;c++){var v=ke[c];if(!v.$nodeToRelocate$["s-ol"]){var g=d.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<ke.length;c++){var v=ke[c];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if(f){Ee(i.$elm$)}ke.length=0}};var Ie=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var Pe=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=te("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var s=t.$lazyInstance$;var o=function(){return Oe(e,t,r,s,n)};Ie(t,i);var l;if(n){{t.$flags$|=256;if(t.$queuedListeners$){t.$queuedListeners$.forEach((function(e){var t=e[0],r=e[1];return qe(s,t,r)}));t.$queuedListeners$=null}}{l=qe(s,"componentWillLoad")}}else{{l=qe(s,"componentWillUpdate")}}{l=ze(l,(function(){return qe(s,"componentWillRender")}))}a();return ze(l,(function(){return O(o)}))};var Oe=function(e,t,r,n,a){var i=te("update",r.$tagName$);var s=e["s-rc"];if(a){se(e,r,t.$modeName$)}var o=te("render",r.$tagName$);{{try{Ae(e,t,r,n.render())}catch(f){S(f)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var $=function(){return Ue(e,t,r)};if(l.length===0){$()}else{Promise.all(l).then($);t.$flags$|=4;l.length=0}}};var Ue=function(e,t,r){var n=te("postUpdate",r.$tagName$);var a=t.$lazyInstance$;var i=t.$ancestorComponent$;{qe(a,"componentDidRender")}if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(K)}{qe(a,"componentDidLoad")}n();{t.$onReadyResolve$(e);if(!i){Me()}}}else{n()}{t.$onInstanceResolve$(e)}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){P((function(){return Pe(e,t,r,false)}))}t.$flags$&=~(4|512)}};var Be=function(e,t){{var r=b(e);if((r.$flags$&(2|16))===2){Pe(e,r,t,false)}}};var Me=function(e){{d.documentElement.classList.add(K)}{h.$flags$|=2}};var qe=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){S(n)}}return undefined};var ze=function(e,t){return e&&e.then?e.then(t):t()};var He=function(e,t){return b(e).$instanceValues$.get(t)};var Ve=function(e,t,r,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=F(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(l){if(n.$watchers$&&o&128){var $=n.$watchers$[t];if($){$.forEach((function(e){try{l[e](r,s,t)}catch(n){S(n)}}))}}if((o&(2|16))===2){Pe(i,a,n,false)}}}};var We=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return He(this,n)},set:function(e){Ve(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=b(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var De=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=Ge(e,n);var o=Fe(t,i);var l=Qe(n);h.ael(s,a,o,l);return function(){return h.rel(s,a,o,l)}}));return function(){return n.forEach((function(e){return e()}))}};var Fe=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var Ge=function(e,t){if(t&8)return v;if(t&32)return d.body;if(t&16)return e.parentElement;return e};var Qe=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Ye=function(e,t,r,n){var a=te("hydrateClient",t);var i=e.shadowRoot;var s=[];var o=[];var l=i?[]:null;var $=n.$vnode$=fe(t,null);if(!h.$orgLocNodes$){Ke(d.body,h.$orgLocNodes$=new Map)}e[X]=r;e.removeAttribute(X);Je($,s,o,l,e,e,r);s.forEach((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=h.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&(n["s-sd"]||e.$hostId$==="0")){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}h.$orgLocNodes$.delete(r)}));if(i){l.forEach((function(e){if(e){i.appendChild(e)}}))}a()};var Je=function(e,t,r,n,a,i,s){var o;var l;var $;var f;if(i.nodeType===1){o=i.getAttribute(Z);if(o){l=o.split(".");if(l[0]===s||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(Z);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){Je(e,t,r,n,a,i.childNodes[f],s)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){Je(e,t,r,n,a,i.shadowRoot.childNodes[f],s)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===s||l[1]==="0"){o=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(o===J){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===s){if(o===Y){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=d.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(o===G){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=fe(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Ke=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Ke(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Ke(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===Q){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-sd"]=n[3]===""}}};var Xe=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l,$,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=_(a);if(!s.then)return[3,2];r=re();return[4,s];case 1:s=c.sent();r();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}We(s,a,2);s.isProxied=true}i=te("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){S(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Ze(n.$lazyInstance$);o=oe(a.$tagName$);if(!(!L.has(o)&&s.style))return[3,5];l=te("registerStyles",a.$tagName$);$=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss($,o,false)}))];case 3:$=c.sent();c.label=4;case 4:ae(o,$,!!(a.$flags$&1));l();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return Pe(e,n,a,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var Ze=function(e){{qe(e,"connectedCallback")}};var et=function(e,t){if((h.$flags$&1)===0){var r=te("connectedCallback",t.$tagName$);var n=b(e);if(t.$listeners$){n.$rmListeners$=De(e,n,t.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;{a=e.getAttribute(X);if(a){if(m&&t.$flags$&1){var i=ie(e.shadowRoot,t);e.classList.remove(i+"-h",i+"-s")}Ye(e,t.$tagName$,a,n)}}if(!a){if(t.$flags$&4||t.$flags$&8){tt(e)}}{var s=e;while(s=s.parentNode||s.host){if(s.nodeType===1&&s.hasAttribute("s-id")||s["s-p"]){Ie(n,n.$ancestorComponent$=s);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{P((function(){return Xe(e,n,t)}))}}Ze(n.$lazyInstance$);r()}};var tt=function(e){var t="";var r=e["s-cr"]=d.createComment(t);r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var rt=function(e){if((h.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{qe(r,"disconnectedCallback")}{qe(r,"componentDidUnload")}}};var nt=e("b",(function(e,t){if(t===void 0){t={}}var r=te();var n=[];var a=t.exclude||[];var i=d.head;var s=v.customElements;var o=i.querySelector("meta[charset]");var l=d.createElement("style");var $=[];var f;var u=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}{h.$flags$|=2}{var c=d.querySelectorAll("style[s-id]");for(var g=0;g<c.length;g++){var p=c[g];ae(p.getAttribute(X),le(p.innerHTML),true)}}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!m&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;R(t);if(r.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){$.push(this)}else{h.jmp((function(){return et(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return rt(e)}))};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Be(this,r)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,We(o,r,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);u=false;if($.length>0){$.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return f=setTimeout(Me,30,"timeout")}))}r()}));var at=e("c",(function(e,t,r){var n=st(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var it=e("d",(function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname}));var st=e("g",(function(e){return b(e).$hostElement$}))}}}));