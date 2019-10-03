var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{f(n.next(e))}catch(t){s(t)}}function o(e){try{f(n["throw"](e))}catch(t){s(t)}}function f(e){e.done?r(e.value):a(e.value).then(i,o)}f((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(t){return f([e,t])}}function f(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;a=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(i[0]===6&&r.label<s[1]){r.label=s[1];s=i;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(i);break}if(s[2])r.ops.pop();r.trys.pop();continue}i=t.call(e,r)}catch(o){i=[6,o];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var s=arguments[t],i=0,o=s.length;i<o;i++,a++)n[a]=s[i];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="calcite-app";var a=0;var s=false;var i;var o;var f;var l=false;var $=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var g=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(t){}return e}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var S=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));return y.set(e,t)}};var _=function(e,t){return t in e};var R=function(e){return console.error(e)};var E=new Map;var N=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var s=e.$lazyBundleIds$;var i=E.get(s);if(i){return i[a]}return t.import("./"+s+".entry.js"+"").then((function(e){{E.set(s,e)}return e[a]}),R)};var L=new Map;var T=[];var j=[];var x=[];var k=function(e,t){return function(r){e.push(r);if(!s){s=true;if(t&&h.$flags$&4){P(A)}else{h.raf(A)}}}};var C=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){R(r)}}e.length=0};var O=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){R(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var A=function(){a++;C(T);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;O(j,e);O(x,e);if(j.length>0){x.push.apply(x,j);j.length=0}if(s=T.length+j.length+x.length>0){h.raf(A)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var U=k(j,true);var I={};var z="http://www.w3.org/2000/svg";var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var q=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-9b741424.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var V=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,s,i;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));s=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},s),{resourcesUrl:new URL(".",e).href})];case 1:i=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));W(i.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},s),{resourcesUrl:i.href})]}}))}))}));var W=function(e){var t=q(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var s=r.get(a);if(!s){var i=d.createElement("script");i.type="module";i.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){i.onload=function(){e(v[t].m);i.remove()}}));r.set(a,s);d.head.appendChild(i)}return s}}};var D=function(e,t){if(e!=null&&!M(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var F="hydrated";var G=new WeakMap;var Q=function(e,t,r){var n=L.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}L.set(e,n)};var J=function(e,t,r,n){var a=X(t.$tagName$);var s=L.get(a);e=e.nodeType===11?e:d;if(s){if(typeof s==="string"){e=e.head||e;var i=G.get(e);var o=void 0;if(!i){G.set(e,i=new Set)}if(!i.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,s,!!(t.$flags$&10));var f=o["s-sc"];if(f){a=f;i=null}}else{o=d.createElement("style");o.setAttribute("data-styles","");o.innerHTML=s}e.insertBefore(o,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[s])}}return a};var K=function(e,t,r){var n=J(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var X=function(e,t){return"sc-"+e};var Y=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var s=false;var i=false;var o;var f;var l=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!M(a)){a=String(a)}if(s&&i){l[l.length-1].$text$+=a}else{l.push(s?{$flags$:0,$text$:a}:a)}i=s}}};$(r);if(t){{o=t.key||undefined}{f=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t,l,te)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=f}return c}));var Z=e("H",{});var ee=function(e){return e&&e.$tag$===Z};var te={forEach:function(e,t){return e.map(re).forEach(t)},map:function(e,t){return e.map(re).map(t).map(ne)}};var re=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ne=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var ae=function(e,t,r,n,a,s){if(r===n){return}var i=_(e,t);var o=t.toLowerCase();if(t==="class"){var f=e.classList;se(r).forEach((function(e){return f.remove(e)}));se(n).forEach((function(e){return f.add(e)}))}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.substr(3)}else if(_(e,o)){t=o.substr(2)}else{t=o[2]+t.substr(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var l=M(n);if((i||l&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(r==null||e[t]!==($=String($))){e[t]=$}}else{e[t]=n}}catch(u){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!i||s&4||a)&&!l){n=n===true?"":n;{e.setAttribute(t,n)}}}};var se=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var ie=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var s=e&&e.$attrs$||I;var i=t.$attrs$||I;{for(n in s){if(!(n in i)){ae(a,n,s[n],undefined,r,t.$flags$)}}}for(n in i){ae(a,n,s[n],i[n],r,t.$flags$)}};var oe=function(e,t,r,n){var a=t.$children$[r];var s=0;var $;var v;var h;if(!l){u=true;if(a.$tag$==="slot"){if(i){n.classList.add(i+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(B(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{$=a.$elm$=c||a.$tag$==="svg"?d.createElementNS(z,a.$tag$):d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{c=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:c}{ie(null,a,c)}if(B(i)&&$["s-si"]!==i){$.classList.add($["s-si"]=i)}if(a.$children$){for(s=0;s<a.$children$.length;++s){v=oe(e,a,s,$);if(v){$.appendChild(v)}}}{if(a.$tag$==="svg"){c=false}else if(a.$elm$.tagName==="foreignObject"){c=true}}}{a.$elm$["s-hn"]=f;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=o;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){fe(e.$elm$,false)}}}return a.$elm$};var fe=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==f&&a["s-ol"]){de(a).insertBefore(a,ve(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){fe(a,t)}}h.$flags$&=~1};var le=function(e,t,r,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(i.shadowRoot&&i.tagName===f){i=i.shadowRoot}for(;a<=s;++a){if(n[a]){o=oe(null,r,a,e);if(o){n[a].$elm$=o;i.insertBefore(o,ve(t))}}}};var $e=function(e,t,r,n){for(;t<=r;++t){if(B(e[t])){n=e[t].$elm$;ye(e[t],true);{$=true;if(n["s-ol"]){n["s-ol"].remove()}else{fe(n,true)}}n.remove()}}};var ue=function(e,t,r,n){var a=0;var s=0;var i=0;var o=0;var f=t.length-1;var l=t[0];var $=t[f];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=f&&s<=u){if(l==null){l=t[++a]}else if($==null){$=t[--f]}else if(c==null){c=n[++s]}else if(v==null){v=n[--u]}else if(ce(l,c)){he(l,c);l=t[++a];c=n[++s]}else if(ce($,v)){he($,v);$=t[--f];v=n[--u]}else if(ce(l,v)){if(l.$tag$==="slot"||v.$tag$==="slot"){fe(l.$elm$.parentNode,false)}he(l,v);e.insertBefore(l.$elm$,$.$elm$.nextSibling);l=t[++a];v=n[--u]}else if(ce($,c)){if(l.$tag$==="slot"||v.$tag$==="slot"){fe($.$elm$.parentNode,false)}he($,c);e.insertBefore($.$elm$,l.$elm$);$=t[--f];c=n[++s]}else{i=-1;{for(o=a;o<=f;++o){if(t[o]&&B(t[o].$key$)&&t[o].$key$===c.$key$){i=o;break}}}if(i>=0){h=t[i];if(h.$tag$!==c.$tag$){d=oe(t&&t[s],r,i,e)}else{he(h,c);t[i]=undefined;d=h.$elm$}c=n[++s]}else{d=oe(t&&t[s],r,s,e);c=n[++s]}if(d){{de(l.$elm$).insertBefore(d,ve(l.$elm$))}}}}if(a>f){le(e,n[u+1]==null?null:n[u+1].$elm$,r,n,s,u)}else if(s>u){$e(t,a,f)}};var ce=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var ve=function(e){return e&&e["s-ol"]||e};var de=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var he=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;{c=r&&B(r.parentNode)&&r.ownerSVGElement!==undefined;c=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:c}if(!B(t.$text$)){{if(t.$tag$==="slot");else{ie(e,t,c)}}if(B(n)&&B(a)){ue(r,n,t,a)}else if(B(a)){le(r,null,t,a,0,a.length-1)}else if(B(n)){$e(n,0,n.length-1)}}if(c&&t.$tag$==="svg"){c=false}};var me=function(e,t,r,n,a,s,i,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){i=t["s-sn"];t.hidden=false;for(s=0;s<a;s++){if(r[s]["s-hn"]!==t["s-hn"]){o=r[s].nodeType;if(i!==""){if(o===1&&i===r[s].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[s].textContent.trim()!==""){t.hidden=true;break}}}}}me(t)}}};var ge=[];var pe=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var s=0;var i;var o;var f;var l;for(r=t.length;n<r;n++){i=t[n];if(i["s-sr"]&&(o=i["s-cr"])){f=o.parentNode.childNodes;l=i["s-sn"];for(a=f.length-1;a>=0;a--){o=f[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==i["s-hn"]){s=o.nodeType;if((s===3||s===8)&&l===""||s===1&&o.getAttribute("slot")===null&&l===""||s===1&&o.getAttribute("slot")===l){if(!ge.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=l;ge.push({$slotRefNode$:i,$nodeToRelocate$:o})}}}}}if(i.nodeType===1){pe(i)}}};var ye=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach((function(e){ye(e,t)}))}};var be=function(e,t,r,n){f=e.tagName;var a=t.$vnode$||{$flags$:0};var s=ee(n)?n:Y(null,null,n);if(r.$attrsToReflect$){s.$attrs$=s.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return s.$attrs$[n]=e[r]}))}s.$tag$=null;s.$flags$|=4;t.$vnode$=s;s.$elm$=a.$elm$=e.shadowRoot||e;{i=e["s-sc"]}{o=e["s-cr"];l=m&&(r.$flags$&1)!==0;u=$=false}he(a,s);{if(u){pe(s.$elm$);for(var c=0;c<ge.length;c++){var v=ge[c];if(!v.$nodeToRelocate$["s-ol"]){var g=d.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<ge.length;c++){var v=ge[c];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){me(s.$elm$)}ge.length=0}};var we=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var s=function(){return Se(e,t,r,a,n)};var i;if(n){{t.$flags$|=256}if(t.$queuedListeners$){t.$queuedListeners$.forEach((function(e){var t=e[0],r=e[1];return Ne(a,t,r)}));t.$queuedListeners$=null}{i=Ne(a,"componentWillLoad")}}return Le(i,(function(){return U(s)}))};var Se=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){K(e,r,t.$modeName$)}{{t.$flags$|=4;try{be(e,t,r,n.render())}catch(s){R(s)}t.$flags$&=~4}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach((function(e){return e()}));e["s-rc"].length=0}_e(e,t)};var _e=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(F)}{Ne(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Ee()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Re=function(e,t){{var r=b(e);if(r.$flags$&2){we(e,r,t,false)}}};var Ee=function(){{d.documentElement.classList.add(F)}{h.$flags$|=2}};var Ne=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){R(n)}}return undefined};var Le=function(e,t){return e&&e.then?e.then(t):t()};var Te=function(e,t){return b(e).$instanceValues$.get(t)};var je=function(e,t,r,n){var a=b(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(t);var o=a.$flags$;var f=a.$lazyInstance$;r=D(r,n.$members$[t][0]);if(r!==i&&(!(o&8)||i===undefined)){a.$instanceValues$.set(t,r);if(f){if(n.$watchers$&&o&128){var l=n.$watchers$[t];if(l){l.forEach((function(e){try{f[e](r,i,t)}catch(n){R(n)}}))}}if((o&(4|2|16))===2){we(s,a,n,false)}}}};var xe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],s=e[1][0];if(s&31||r&2&&s&32){Object.defineProperty(a,n,{get:function(){return Te(this,n)},set:function(e){je(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&s&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=b(this);return r.$onReadyPromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var s=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=s.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;s.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ke=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map((function(r){var n=r[0],a=r[1],s=r[2];var i=e;var o=Ce(t,s);var f=Oe(n);h.ael(i,a,o,f);return function(){return h.rel(i,a,o,f)}}));return function(){return n.forEach((function(e){return e()}))}};var Ce=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var Oe=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Ae=function(e,n,a,s,i){return __awaiter(r,void 0,void 0,(function(){var r,s,o,f;return __generator(this,(function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;i=N(a);if(!i.then)return[3,2];return[4,i];case 1:i=l.sent();l.label=2;case 2:if(!i.isProxied){{a.$watchers$=i.watchers}xe(i,a,2);i.isProxied=true}{n.$flags$|=8}try{new i(n)}catch($){R($)}{n.$flags$&=~8}{n.$flags$|=128}Pe(n.$lazyInstance$);r=X(a.$tagName$);if(!(!L.has(r)&&i.style))return[3,5];s=i.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(s,r,false)}))];case 3:s=l.sent();l.label=4;case 4:Q(r,s,!!(a.$flags$&1));l.label=5;case 5:o=n.$ancestorComponent$;f=function(){return we(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var Pe=function(e){{Ne(e,"connectedCallback")}};var Ue=function(e,t){if((h.$flags$&1)===0){var r=b(e);if(t.$listeners$){r.$rmListeners$=ke(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Ie(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{P((function(){return Ae(e,r,t)}))}}Pe(r.$lazyInstance$)}};var Ie=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var ze=function(e){if((h.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{Ne(r,"componentDidUnload")}}};var Be=e("b",(function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var s=v.customElements;var i=a.querySelector("meta[charset]");var o=d.createElement("style");var f;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!m&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}S(t);if(a.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}h.jmp((function(){return Ue(e,a)}))};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return ze(e)}))};t.prototype["s-init"]=function(){var e=b(this);if(e.$lazyInstance$){_e(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Re(this,a)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!s.get(i)){r.push(i);s.define(i,xe(o,a,1))}}))}));o.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");a.insertBefore(o,i?i.nextSibling:a.firstChild);h.jmp((function(){return f=setTimeout(Ee,30)}))}));var Me=e("c",(function(e,t,r){var n=qe(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var qe=e("g",(function(e){return b(e).$hostElement$}))}}}));