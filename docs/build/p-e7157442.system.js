var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="calcite-app";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var o=c(r,i);var l=v(n);Ee.ael(s,a,o,l);return function(){return Ee.rel(s,a,o,l)}}));return function(){return n.forEach((function(e){return e()}))}};var c=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var v=function(e){return(e&2)!==0};var d="hydrated";var h="sty-id";var m="http://www.w3.org/1999/xlink";var p=function(e,r){if(r===void 0){r=""}{return function(){return}}};var g=function(e,r){{return function(){return}}};var y=new WeakMap;var b=function(e,r,t){var n=Be.get(e);if(Le&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Be.set(e,n)};var w=function(e,r,t,n){var a=S(r.$tagName$);var i=Be.get(a);e=e.nodeType===11?e:ke;if(i){if(typeof i==="string"){e=e.head||e;var s=y.get(e);var o=void 0;if(!s){y.set(e,s=new Set)}if(!s.has(a)){{if(Ee.$cssShim$){o=Ee.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=ke.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var R=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=p("attachStyles",r.$tagName$);var i=w(Ce&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var S=function(e,r){return"sc-"+e};var N={};var _=function(e){return e!=null};var x=function(e){e=typeof e;return e==="object"||e==="function"};var k=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!x(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?E(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,f,T)}var c=E(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var E=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var C=e("H",{});var L=function(e){return e&&e.$tag$===C};var T={forEach:function(e,r){return e.map(j).forEach(r)},map:function(e,r){return e.map(j).map(r).map(A)}};var j=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var A=function(e){var r=E(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var P=function(e,r){if(e!=null&&!x(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var M=function(e,r,t,n,a,i){if(t===n){return}var s=Me(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=U(t);var $=U(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Me(xe,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){Ee.rel(e,r,t,false)}if(n){Ee.ael(e,r,n,false)}}else{var c=x(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(h){}}var d=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;d=true}}if(n==null||n===false){if(d){e.removeAttributeNS(m,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(d){e.setAttributeNS(m,r,n)}else{e.setAttribute(r,n)}}}};var I=/\s/;var U=function(e){return!e?[]:e.split(I)};var O=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||N;var s=r.$attrs$||N;{for(n in i){if(!(n in s)){M(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){M(a,n,i[n],s[n],t,r.$flags$)}};var B=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=ke.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=ke.createTextNode("")}else{c=l.$elm$=ke.createElement(l.$flags$&2?"slot-fb":l.$tag$);{O(null,l,$)}if(_(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=B(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===l.$tag$&&e.$elm$){q(e.$elm$,false)}}}return c};var q=function(e,r){Ee.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){F(a).insertBefore(a,D(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){q(a,r)}}Ee.$flags$&=~1};var z=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=B(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,D(r))}}}};var H=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;Y(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{q(a,true)}}a.remove()}}};var V=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(W(f,c)){G(f,c);f=r[++a];c=n[++i]}else if(W($,v)){G($,v);$=r[--l];v=n[--u]}else if(W(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){q(f.$elm$.parentNode,false)}G(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(W($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){q($.$elm$.parentNode,false)}G($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=B(r&&r[i],t,s,e)}else{G(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=B(r&&r[i],t,i,e);c=n[++i]}if(d){{F(f.$elm$).insertBefore(d,D(f.$elm$))}}}}if(a>l){z(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){H(r,a,l)}};var W=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var D=function(e){return e&&e["s-ol"]||e};var F=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var G=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{O(e,r,$)}}if(n!==null&&a!==null){V(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}z(t,null,r,a,0,a.length-1)}else if(n!==null){H(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var Q=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Q(t)}}};var J=[];var K=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(X(t,a)){i=J.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{J.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){J.forEach((function(e){if(X(e.$nodeToRelocate$,t["s-sn"])){i=J.find((function(e){return e.$nodeToRelocate$===t}));if(i){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!J.some((function(e){return e.$nodeToRelocate$===t}))){J.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){K(r)}}};var X=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var Y=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(Y)}};var Z=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||E(null,null);var u=L(r)?r:k(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.forEach((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=Ce&&(n.$flags$&1)!==0;l=false}G($,u);{if(f){K(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var h=void 0;var m=void 0;var p=void 0;var g=0;for(;g<J.length;g++){c=J[g];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=ke.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}Ee.$flags$|=1;for(g=0;g<J.length;g++){c=J[g];v=c.$nodeToRelocate$;if(c.$slotRefNode$){h=c.$slotRefNode$.parentNode;m=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){p=d["s-nr"];if(p&&p["s-sn"]===v["s-sn"]&&h===p.parentNode){p=p.nextSibling;if(!p||!p["s-nr"]){m=p;break}}}if(!m&&h!==v.parentNode||v.nextSibling!==m){if(v!==m){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}h.insertBefore(v,m)}}}else{if(v.nodeType===1){v.hidden=true}}}Ee.$flags$&=~1}if(l){Q(u.$elm$)}J.length=0}};var ee=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var re=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=p("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return te(e,a,r)};ee(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return oe(a,r,t)}));e.$queuedListeners$=null}}{s=oe(a,"componentWillLoad")}}t();return le(s,(function(){return Qe(i)}))};var te=function(e,r,t){var n=e.$hostElement$;var a=p("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){R(e)}var s=p("render",e.$cmpMeta$.$tagName$);{{Z(e,ne(r))}}if(Ee.$cssShim$){Ee.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.forEach((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return ae(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ne=function(e){try{e=e.render()}catch(r){Ie(r)}return e};var ae=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=p("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{t.classList.add(d)}{oe(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){se()}}}else{n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ge((function(){return re(e,false)}))}e.$flags$&=~(4|512)}};var ie=function(e){{var r=je(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){re(r,false)}return t}};var se=function(e){{ke.documentElement.classList.add(d)}{Ee.$flags$|=2}};var oe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Ie(n)}}return undefined};var le=function(e,r){return e&&e.then?e.then(r):r()};var fe=function(e,r){return je(e).$instanceValues$.get(r)};var $e=function(e,r,t,n){var a=je(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=P(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.forEach((function(e){try{o[e](t,i,r)}catch(n){Ie(n)}}))}}if((s&(2|16))===2){re(a,false)}}}};var ue=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return fe(this,n)},set:function(e){$e(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=je(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;Ee.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var ce=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Oe(a);if(!s.then)return[3,2];e=g();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}ue(s,a,2);s.isProxied=true}t=p("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ie(c)}{n.$flags$&=~8}{n.$flags$|=128}t();ve(n.$lazyInstance$);i=S(a.$tagName$);if(!(!Be.has(i)&&s.style))return[3,5];o=p("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-9a8a6c65.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:b(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return re(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var ve=function(e){{oe(e,"connectedCallback")}};var de=function(e){if((Ee.$flags$&1)===0){var r=je(e);var t=r.$cmpMeta$;var n=p("connectedCallback",t.$tagName$);if(t.$listeners$){r.$rmListeners$=u(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){he(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ee(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ge((function(){return ce(e,r,t)}))}}ve(r.$lazyInstance$);n()}};var he=function(e){var r=e["s-cr"]=ke.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var me=function(e){if((Ee.$flags$&1)===0){var r=je(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(Ee.$cssShim$){Ee.$cssShim$.removeHost(e)}{oe(t,"componentDidUnload")}}};var pe=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var r=e["s-sn"]=ge(e);var t=ye(this,r);if(t){var n=be(t,r);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var ge=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var ye=function(e,r){var t=e.childNodes;var n=0;var a;for(;n<t.length;n++){a=t[n];if(a["s-sr"]&&a["s-sn"]===r){return a}a=ye(a,r);if(a){return a}}return null};var be=function(e,r){var t=[e];while((e=e.nextSibling)&&e["s-sn"]===r){t.push(e)}return t};var we=e("b",(function(e,r){if(r===void 0){r={}}var t=p();var n=[];var a=r.exclude||[];var i=ke.head;var s=xe.customElements;var o=i.querySelector("meta[charset]");var l=ke.createElement("style");var f=[];var $=ke.querySelectorAll("["+h+"]");var u;var c=true;Object.assign(Ee,r);Ee.$resourcesUrl$=new URL(r.resourcesUrl||"./",ke.baseURI).href;if(r.syncQueue){Ee.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!Ce&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Pe(r,t);if(t.$flags$&1){if(Ce){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){f.push(this)}else{Ee.jmp((function(){return de(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;Ee.jmp((function(){return me(e)}))};r.prototype.forceUpdate=function(){ie(this)};r.prototype.componentOnReady=function(){return je(this).$onReadyPromise$};return r}(HTMLElement);{pe(o.prototype)}t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,ue(o,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);c=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{Ee.jmp((function(){return u=setTimeout(se,30,"timeout")}))}t()}));var Re=e("g",(function(e){return je(e).$hostElement$}));var Se=e("c",(function(e,r,t){var n=Re(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e});n.dispatchEvent(a);return a}}}));var Ne=0;var _e=false;var xe=typeof window!=="undefined"?window:{};var ke=xe.document||{head:{}};var Ee={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var Ce=function(){return(ke.head.attachShadow+"").indexOf("[native")>-1}();var Le=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var Te=new WeakMap;var je=function(e){return Te.get(e)};var Ae=e("r",(function(e,r){return Te.set(r.$lazyInstance$=e,r)}));var Pe=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Te.set(e,t)};var Me=function(e,r){return r in e};var Ie=function(e){return console.error(e)};var Ue=new Map;var Oe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=Ue.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Ue.set(i,e)}return e[a]}),Ie)};var Be=new Map;var qe=[];var ze=[];var He=[];var Ve=function(e,r){return function(t){e.push(t);if(!_e){_e=true;if(r&&Ee.$flags$&4){Ge(Fe)}else{Ee.raf(Fe)}}}};var We=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Ie(t)}}e.length=0};var De=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){Ie(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Fe=function(){Ne++;We(qe);var e=(Ee.$flags$&6)===2?performance.now()+10*Math.ceil(Ne*(1/22)):Infinity;De(ze,e);De(He,e);if(ze.length>0){He.push.apply(He,ze);ze.length=0}if(_e=qe.length+ze.length+He.length>0){Ee.raf(Fe)}else{Ne=0}};var Ge=function(e){return Promise.resolve().then(e)};var Qe=Ve(ze,true);var Je=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var Ke=e("a",(function(){if(!(xe.CSS&&xe.CSS.supports&&xe.CSS.supports("color","var(--c)"))){return r.import("./p-b5ffc2ad.system.js").then((function(){Ee.$cssShim$=xe.__stencil_cssshim;if(Ee.$cssShim$){return Ee.$cssShim$.initShim()}}))}return Promise.resolve()}));var Xe=e("p",(function(){{Ee.$cssShim$=xe.__stencil_cssshim}var e=Array.from(ke.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){t.resourcesUrl=new URL(".",a).href}else{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,xe.location.href)).href;{Ye(t.resourcesUrl,e)}if(!window.customElements){return r.import("./p-fc903f0b.system.js").then((function(){return t}))}}return Promise.resolve(t)}));var Ye=function(e,r){var t=Je(n);try{xe[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;xe[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=ke.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(xe[t].m);o.remove()}}));a.set(i,s);ke.head.appendChild(o)}return s}}}}}}));