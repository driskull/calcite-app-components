import{g as t}from"./p-23528106.js";function r(r,n){const e=["left","right"];return"rtl"===t(r)&&e.reverse(),n.replace(/leading/gi,e[0]).replace(/trailing/gi,e[1])}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */for(var n="undefined"!=typeof window&&"undefined"!=typeof document,e=["Edge","Trident","Firefox"],i=0,o=0;o<e.length;o+=1)if(n&&navigator.userAgent.indexOf(e[o])>=0){i=1;break}var a=n&&window.Promise?function(t){var r=!1;return function(){r||(r=!0,window.Promise.resolve().then((function(){r=!1,t()})))}}:function(t){var r=!1;return function(){r||(r=!0,setTimeout((function(){r=!1,t()}),i))}};function u(t){return t&&"[object Function]"==={}.toString.call(t)}function f(t,r){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return r?n[r]:n}function s(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function c(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var r=f(t);return/(auto|scroll|overlay)/.test(r.overflow+r.overflowY+r.overflowX)?t:c(s(t))}var h=n&&!(!window.MSInputMethodContext||!document.documentMode),l=n&&/MSIE 10/.test(navigator.userAgent);function d(t){return 11===t?h:10===t?l:h||l}function v(t){if(!t)return document.documentElement;for(var r=d(10)?document.body:null,n=t.offsetParent||null;n===r&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var e=n&&n.nodeName;return e&&"BODY"!==e&&"HTML"!==e?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===f(n,"position")?v(n):n:t?t.ownerDocument.documentElement:document.documentElement}function p(t){return null!==t.parentNode?p(t.parentNode):t}function m(t,r){if(!(t&&t.nodeType&&r&&r.nodeType))return document.documentElement;var n=t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING,e=n?t:r,i=n?r:t,o=document.createRange();o.setStart(e,0),o.setEnd(i,0);var a,u,f=o.commonAncestorContainer;if(t!==f&&r!==f||e.contains(i))return"BODY"===(u=(a=f).nodeName)||"HTML"!==u&&v(a.firstElementChild)!==a?v(f):f;var s=p(t);return s.host?m(s.host,r):m(t,p(r).host)}function g(t){var r="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;return"BODY"===n||"HTML"===n?(t.ownerDocument.scrollingElement||t.ownerDocument.documentElement)[r]:t[r]}function b(t,r){var n="x"===r?"Left":"Top",e="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+e+"Width"],10)}function w(t,r,n,e){return Math.max(r["offset"+t],r["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],d(10)?parseInt(n["offset"+t])+parseInt(e["margin"+("Height"===t?"Top":"Left")])+parseInt(e["margin"+("Height"===t?"Bottom":"Right")]):0)}function y(t){var r=t.body,n=t.documentElement,e=d(10)&&getComputedStyle(n);return{height:w("Height",r,n,e),width:w("Width",r,n,e)}}var M=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},O=function(){function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),r}}(),T=function(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t},F=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};function L(t){return F({},t,{right:t.left+t.width,bottom:t.top+t.height})}function x(t){var r={};try{if(d(10)){r=t.getBoundingClientRect();var n=g(t,"top"),e=g(t,"left");r.top+=n,r.left+=e,r.bottom+=n,r.right+=e}else r=t.getBoundingClientRect()}catch(c){}var i={left:r.left,top:r.top,width:r.right-r.left,height:r.bottom-r.top},o="HTML"===t.nodeName?y(t.ownerDocument):{},a=t.offsetWidth-(o.width||t.clientWidth||i.right-i.left),u=t.offsetHeight-(o.height||t.clientHeight||i.bottom-i.top);if(a||u){var s=f(t);a-=b(s,"x"),u-=b(s,"y"),i.width-=a,i.height-=u}return L(i)}function k(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=d(10),i="HTML"===r.nodeName,o=x(t),a=x(r),u=c(t),s=f(r),h=parseFloat(s.borderTopWidth,10),l=parseFloat(s.borderLeftWidth,10);n&&i&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var v=L({top:o.top-a.top-h,left:o.left-a.left-l,width:o.width,height:o.height});if(v.marginTop=0,v.marginLeft=0,!e&&i){var p=parseFloat(s.marginTop,10),m=parseFloat(s.marginLeft,10);v.top-=h-p,v.bottom-=h-p,v.left-=l-m,v.right-=l-m,v.marginTop=p,v.marginLeft=m}return(e&&!n?r.contains(u):r===u&&"BODY"!==u.nodeName)&&(v=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=g(r,"top"),i=g(r,"left"),o=n?-1:1;return t.top+=e*o,t.bottom+=e*o,t.left+=i*o,t.right+=i*o,t}(v,r)),v}function H(t){if(!t||!t.parentElement||d())return document.documentElement;for(var r=t.parentElement;r&&"none"===f(r,"transform");)r=r.parentElement;return r||document.documentElement}function j(t,r,n,e){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},a=i?H(t):m(t,r);if("viewport"===e)o=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,e=k(t,n),i=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),a=r?0:g(n),u=r?0:g(n,"left");return L({top:a-e.top+e.marginTop,left:u-e.left+e.marginLeft,width:i,height:o})}(a,i);else{var u=void 0;"scrollParent"===e?"BODY"===(u=c(s(r))).nodeName&&(u=t.ownerDocument.documentElement):u="window"===e?t.ownerDocument.documentElement:e;var h=k(u,a,i);if("HTML"!==u.nodeName||function t(r){var n=r.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===f(r,"position"))return!0;var e=s(r);return!!e&&t(e)}(a))o=h;else{var l=y(t.ownerDocument),d=l.height,v=l.width;o.top+=h.top-h.marginTop,o.bottom=d+h.top,o.left+=h.left-h.marginLeft,o.right=v+h.left}}var p="number"==typeof(n=n||0);return o.left+=p?n:n.left||0,o.top+=p?n:n.top||0,o.right-=p?n:n.right||0,o.bottom-=p?n:n.bottom||0,o}function B(t,r,n,e,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=j(n,e,o,i),u={top:{width:a.width,height:r.top-a.top},right:{width:a.right-r.right,height:a.height},bottom:{width:a.width,height:a.bottom-r.bottom},left:{width:r.left-a.left,height:a.height}},f=Object.keys(u).map((function(t){return F({key:t},u[t],{area:(r=u[t],r.width*r.height)});var r})).sort((function(t,r){return r.area-t.area})),s=f.filter((function(t){return t.width>=n.clientWidth&&t.height>=n.clientHeight})),c=s.length>0?s[0].key:f[0].key,h=t.split("-")[1];return c+(h?"-"+h:"")}function D(t,r,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k(n,e?H(r):m(r,n),e)}function A(t){var r=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),e=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0);return{width:t.offsetWidth+e,height:t.offsetHeight+n}}function E(t){var r={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}function S(t,r,n){n=n.split("-")[0];var e=A(t),i={width:e.width,height:e.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",u=o?"left":"top",f=o?"height":"width",s=o?"width":"height";return i[a]=r[a]+r[f]/2-e[f]/2,i[u]=n===u?r[u]-e[s]:r[E(u)],i}function Y(t,r){return Array.prototype.find?t.find(r):t.filter(r)[0]}function N(t,r,n){return(void 0===n?t:t.slice(0,function(t,r,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t.name===n}));var e=Y(t,(function(t){return t.name===n}));return t.indexOf(e)}(t,0,n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&u(n)&&(r.offsets.popper=L(r.offsets.popper),r.offsets.reference=L(r.offsets.reference),r=n(r,t))})),r}function W(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=D(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=B(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=S(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=N(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function I(t,r){return t.some((function(t){return t.enabled&&t.name===r}))}function C(t){for(var r=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<r.length;e++){var i=r[e],o=i?""+i+n:t;if(void 0!==document.body.style[o])return o}return null}function P(){return this.state.isDestroyed=!0,I(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[C("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function R(t){var r=t.ownerDocument;return r?r.defaultView:window}function z(){this.state.eventsEnabled||(this.state=function(t,r,n,e){n.updateBound=e,R(t).addEventListener("resize",n.updateBound,{passive:!0});var i=c(t);return function t(r,n,e,i){var o="BODY"===r.nodeName,a=o?r.ownerDocument.defaultView:r;a.addEventListener(n,e,{passive:!0}),o||t(c(a.parentNode),n,e,i),i.push(a)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}(this.reference,0,this.state,this.scheduleUpdate))}function q(){var t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.state,R(this.reference).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(r){r.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function G(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function V(t,r){Object.keys(r).forEach((function(n){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&G(r[n])&&(e="px"),t.style[n]=r[n]+e}))}var U=n&&/Firefox/i.test(navigator.userAgent);function J(t,r,n){var e=Y(t,(function(t){return t.name===r})),i=!!e&&t.some((function(t){return t.name===n&&t.enabled&&t.order<e.order}));if(!i){var o="`"+r+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var K=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Q=K.slice(3);function X(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Q.indexOf(t),e=Q.slice(n+1).concat(Q.slice(0,n));return r?e.reverse():e}var Z="flip",$="clockwise",_="counterclockwise";var tt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var r=t.placement,n=r.split("-")[0],e=r.split("-")[1];if(e){var i=t.offsets,o=i.reference,a=i.popper,u=-1!==["bottom","top"].indexOf(n),f=u?"left":"top",s=u?"width":"height",c={start:T({},f,o[f]),end:T({},f,o[f]+o[s]-a[s])};t.offsets.popper=F({},a,c[e])}return t}},offset:{order:200,enabled:!0,fn:function(t,r){var n,e=r.offset,i=t.offsets,o=i.popper,a=i.reference,u=t.placement.split("-")[0];return n=G(+e)?[+e,0]:function(t,r,n,e){var i=[0,0],o=-1!==["right","left"].indexOf(e),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),u=a.indexOf(Y(a,(function(t){return-1!==t.search(/,|\s/)})));a[u]&&-1===a[u].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,s=-1!==u?[a.slice(0,u).concat([a[u].split(f)[0]]),[a[u].split(f)[1]].concat(a.slice(u+1))]:[a];return(s=s.map((function(t,e){var i=(1===e?!o:o)?"height":"width",a=!1;return t.reduce((function(t,r){return""===t[t.length-1]&&-1!==["+","-"].indexOf(r)?(t[t.length-1]=r,a=!0,t):a?(t[t.length-1]+=r,a=!1,t):t.concat(r)}),[]).map((function(t){return function(t,r,n,e){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],a=i[2];if(!o)return t;if(0===a.indexOf("%")){var u=void 0;switch(a){case"%p":u=n;break;case"%":case"%r":default:u=e}return L(u)[r]/100*o}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o}(t,i,r,n)}))}))).forEach((function(t,r){t.forEach((function(n,e){G(n)&&(i[r]+=n*("-"===t[e-1]?-1:1))}))})),i}(e,o,a,u),"left"===u?(o.top+=n[0],o.left-=n[1]):"right"===u?(o.top+=n[0],o.left+=n[1]):"top"===u?(o.left+=n[0],o.top-=n[1]):"bottom"===u&&(o.left+=n[0],o.top+=n[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,r){var n=r.boundariesElement||v(t.instance.popper);t.instance.reference===n&&(n=v(n));var e=C("transform"),i=t.instance.popper.style,o=i.top,a=i.left,u=i[e];i.top="",i.left="",i[e]="";var f=j(t.instance.popper,t.instance.reference,r.padding,n,t.positionFixed);i.top=o,i.left=a,i[e]=u,r.boundaries=f;var s=t.offsets.popper,c={primary:function(t){var n=s[t];return s[t]<f[t]&&!r.escapeWithReference&&(n=Math.max(s[t],f[t])),T({},t,n)},secondary:function(t){var n="right"===t?"left":"top",e=s[n];return s[t]>f[t]&&!r.escapeWithReference&&(e=Math.min(s[n],f[t]-("right"===t?s.width:s.height))),T({},n,e)}};return r.priority.forEach((function(t){var r=-1!==["left","top"].indexOf(t)?"primary":"secondary";s=F({},s,c[r](t))})),t.offsets.popper=s,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var r=t.offsets,n=r.popper,e=r.reference,i=t.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(i),u=a?"right":"bottom",f=a?"left":"top",s=a?"width":"height";return n[u]<o(e[f])&&(t.offsets.popper[f]=o(e[f])-n[s]),n[f]>o(e[u])&&(t.offsets.popper[f]=o(e[u])),t}},arrow:{order:500,enabled:!0,fn:function(t,r){var n;if(!J(t.instance.modifiers,"arrow","keepTogether"))return t;var e=r.element;if("string"==typeof e){if(!(e=t.instance.popper.querySelector(e)))return t}else if(!t.instance.popper.contains(e))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,a=o.popper,u=o.reference,s=-1!==["left","right"].indexOf(i),c=s?"height":"width",h=s?"Top":"Left",l=h.toLowerCase(),d=s?"left":"top",v=s?"bottom":"right",p=A(e)[c];u[v]-p<a[l]&&(t.offsets.popper[l]-=a[l]-(u[v]-p)),u[l]+p>a[v]&&(t.offsets.popper[l]+=u[l]+p-a[v]),t.offsets.popper=L(t.offsets.popper);var m=u[l]+u[c]/2-p/2,g=f(t.instance.popper),b=parseFloat(g["margin"+h],10),w=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[l]-b-w;return y=Math.max(Math.min(a[c]-p,y),0),t.arrowElement=e,t.offsets.arrow=(T(n={},l,Math.round(y)),T(n,d,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,r){if(I(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=j(t.instance.popper,t.instance.reference,r.padding,r.boundariesElement,t.positionFixed),e=t.placement.split("-")[0],i=E(e),o=t.placement.split("-")[1]||"",a=[];switch(r.behavior){case Z:a=[e,i];break;case $:a=X(e);break;case _:a=X(e,!0);break;default:a=r.behavior}return a.forEach((function(u,f){if(e!==u||a.length===f+1)return t;e=t.placement.split("-")[0],i=E(e);var s=t.offsets.popper,c=t.offsets.reference,h=Math.floor,l="left"===e&&h(s.right)>h(c.left)||"right"===e&&h(s.left)<h(c.right)||"top"===e&&h(s.bottom)>h(c.top)||"bottom"===e&&h(s.top)<h(c.bottom),d=h(s.left)<h(n.left),v=h(s.right)>h(n.right),p=h(s.top)<h(n.top),m=h(s.bottom)>h(n.bottom),g="left"===e&&d||"right"===e&&v||"top"===e&&p||"bottom"===e&&m,b=-1!==["top","bottom"].indexOf(e),w=!!r.flipVariations&&(b&&"start"===o&&d||b&&"end"===o&&v||!b&&"start"===o&&p||!b&&"end"===o&&m)||!!r.flipVariationsByContent&&(b&&"start"===o&&v||b&&"end"===o&&d||!b&&"start"===o&&m||!b&&"end"===o&&p);(l||g||w)&&(t.flipped=!0,(l||g)&&(e=a[f+1]),w&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=e+(o?"-"+o:""),t.offsets.popper=F({},t.offsets.popper,S(t.instance.popper,t.offsets.reference,t.placement)),t=N(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var r=t.placement,n=r.split("-")[0],e=t.offsets,i=e.popper,o=e.reference,a=-1!==["left","right"].indexOf(n),u=-1===["top","left"].indexOf(n);return i[a?"left":"top"]=o[n]-(u?i[a?"width":"height"]:0),t.placement=E(r),t.offsets.popper=L(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!J(t.instance.modifiers,"hide","preventOverflow"))return t;var r=t.offsets.reference,n=Y(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(r.bottom<n.top||r.left>n.right||r.top>n.bottom||r.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,r){var n=r.x,e=r.y,i=t.offsets.popper,o=Y(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,u,f=void 0!==o?o:r.gpuAcceleration,s=v(t.instance.popper),c=x(s),h={position:i.position},l=function(t,r){var n=t.offsets,e=n.popper,i=Math.round,o=Math.floor,a=function(t){return t},u=i(n.reference.width),f=i(e.width),s=-1!==["left","right"].indexOf(t.placement),c=-1!==t.placement.indexOf("-"),h=r?s||c||u%2==f%2?i:o:a,l=r?i:a;return{left:h(u%2==1&&f%2==1&&!c&&r?e.left-1:e.left),top:l(e.top),bottom:l(e.bottom),right:h(e.right)}}(t,window.devicePixelRatio<2||!U),d="bottom"===n?"top":"bottom",p="right"===e?"left":"right",m=C("transform");if(u="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-c.height+l.bottom:l.top,a="right"===p?"HTML"===s.nodeName?-s.clientWidth+l.right:-c.width+l.right:l.left,f&&m)h[m]="translate3d("+a+"px, "+u+"px, 0)",h[d]=0,h[p]=0,h.willChange="transform";else{var g="right"===p?-1:1;h[d]=u*("bottom"===d?-1:1),h[p]=a*g,h.willChange=d+", "+p}return t.attributes=F({},{"x-placement":t.placement},t.attributes),t.styles=F({},h,t.styles),t.arrowStyles=F({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var r,n;return V(t.instance.popper,t.styles),r=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?r.setAttribute(t,n[t]):r.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&V(t.arrowElement,t.arrowStyles),t},onLoad:function(t,r,n,e,i){var o=D(i,r,t,n.positionFixed),a=B(n.placement,o,r,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return r.setAttribute("x-placement",a),V(r,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},rt=function(){function t(r,n){var e=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};M(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(e.update)},this.update=a(this.update.bind(this)),this.options=F({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=r&&r.jquery?r[0]:r,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(F({},t.Defaults.modifiers,i.modifiers)).forEach((function(r){e.options.modifiers[r]=F({},t.Defaults.modifiers[r]||{},i.modifiers?i.modifiers[r]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return F({name:t},e.options.modifiers[t])})).sort((function(t,r){return t.order-r.order})),this.modifiers.forEach((function(t){t.enabled&&u(t.onLoad)&&t.onLoad(e.reference,e.popper,e.options,t,e.state)})),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return O(t,[{key:"update",value:function(){return W.call(this)}},{key:"destroy",value:function(){return P.call(this)}},{key:"enableEventListeners",value:function(){return z.call(this)}},{key:"disableEventListeners",value:function(){return q.call(this)}}]),t}();rt.Utils=("undefined"!=typeof window?window:global).PopperUtils,rt.placements=K,rt.Defaults=tt;export{rt as P,r as g};