import{r as t,h as e,H as r,g as n}from"./p-aef71dcb.js";for(var i="undefined"!=typeof window&&"undefined"!=typeof document,o=["Edge","Trident","Firefox"],a=0,u=0;u<o.length;u+=1)if(i&&navigator.userAgent.indexOf(o[u])>=0){a=1;break}var f=i&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},a))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function c(t,e){if(1!==t.nodeType)return[];var r=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?r[e]:r}function h(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function l(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=c(t);return/(auto|scroll|overlay)/.test(e.overflow+e.overflowY+e.overflowX)?t:l(h(t))}var d=i&&!(!window.MSInputMethodContext||!document.documentMode),p=i&&/MSIE 10/.test(navigator.userAgent);function v(t){return 11===t?d:10===t?p:d||p}function m(t){if(!t)return document.documentElement;for(var e=v(10)?document.body:null,r=t.offsetParent||null;r===e&&t.nextElementSibling;)r=(t=t.nextElementSibling).offsetParent;var n=r&&r.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(r.nodeName)&&"static"===c(r,"position")?m(r):r:t?t.ownerDocument.documentElement:document.documentElement}function b(t){return null!==t.parentNode?b(t.parentNode):t}function g(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var r=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=r?t:e,i=r?e:t,o=document.createRange();o.setStart(n,0),o.setEnd(i,0);var a,u,f=o.commonAncestorContainer;if(t!==f&&e!==f||n.contains(i))return"BODY"===(u=(a=f).nodeName)||"HTML"!==u&&m(a.firstElementChild)!==a?m(f):f;var s=b(t);return s.host?g(s.host,e):g(t,b(e).host)}function w(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",r=t.nodeName;return"BODY"===r||"HTML"===r?(t.ownerDocument.scrollingElement||t.ownerDocument.documentElement)[e]:t[e]}function y(t,e){var r="x"===e?"Left":"Top",n="Left"===r?"Right":"Bottom";return parseFloat(t["border"+r+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}function O(t,e,r,n){return Math.max(e["offset"+t],e["scroll"+t],r["client"+t],r["offset"+t],r["scroll"+t],v(10)?parseInt(r["offset"+t])+parseInt(n["margin"+("Height"===t?"Top":"Left")])+parseInt(n["margin"+("Height"===t?"Bottom":"Right")]):0)}function M(t){var e=t.body,r=t.documentElement,n=v(10)&&getComputedStyle(r);return{height:O("Height",e,r,n),width:O("Width",e,r,n)}}var H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},T=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),L=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function F(t){return x({},t,{right:t.left+t.width,bottom:t.top+t.height})}function E(t){var e={};try{if(v(10)){e=t.getBoundingClientRect();var r=w(t,"top"),n=w(t,"left");e.top+=r,e.left+=n,e.bottom+=r,e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?M(t.ownerDocument):{},a=t.offsetWidth-(o.width||t.clientWidth||i.right-i.left),u=t.offsetHeight-(o.height||t.clientHeight||i.bottom-i.top);if(a||u){var f=c(t);a-=y(f,"x"),u-=y(f,"y"),i.width-=a,i.height-=u}return F(i)}function k(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=v(10),i="HTML"===e.nodeName,o=E(t),a=E(e),u=l(t),f=c(e),s=parseFloat(f.borderTopWidth,10),h=parseFloat(f.borderLeftWidth,10);r&&i&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=F({top:o.top-a.top-s,left:o.left-a.left-h,width:o.width,height:o.height});if(d.marginTop=0,d.marginLeft=0,!n&&i){var p=parseFloat(f.marginTop,10),m=parseFloat(f.marginLeft,10);d.top-=s-p,d.bottom-=s-p,d.left-=h-m,d.right-=h-m,d.marginTop=p,d.marginLeft=m}return(n&&!r?e.contains(u):e===u&&"BODY"!==u.nodeName)&&(d=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=w(e,"top"),i=w(e,"left"),o=r?-1:1;return t.top+=n*o,t.bottom+=n*o,t.left+=i*o,t.right+=i*o,t}(d,e)),d}function j(t){if(!t||!t.parentElement||v())return document.documentElement;for(var e=t.parentElement;e&&"none"===c(e,"transform");)e=e.parentElement;return e||document.documentElement}function D(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},a=i?j(t):g(t,e);if("viewport"===n)o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.ownerDocument.documentElement,n=k(t,r),i=Math.max(r.clientWidth,window.innerWidth||0),o=Math.max(r.clientHeight,window.innerHeight||0),a=e?0:w(r),u=e?0:w(r,"left");return F({top:a-n.top+n.marginTop,left:u-n.left+n.marginLeft,width:i,height:o})}(a,i);else{var u=void 0;"scrollParent"===n?"BODY"===(u=l(h(e))).nodeName&&(u=t.ownerDocument.documentElement):u="window"===n?t.ownerDocument.documentElement:n;var f=k(u,a,i);if("HTML"!==u.nodeName||function t(e){var r=e.nodeName;if("BODY"===r||"HTML"===r)return!1;if("fixed"===c(e,"position"))return!0;var n=h(e);return!!n&&t(n)}(a))o=f;else{var s=M(t.ownerDocument),d=s.height,p=s.width;o.top+=f.top-f.marginTop,o.bottom=d+f.top,o.left+=f.left-f.marginLeft,o.right=p+f.left}}var v="number"==typeof(r=r||0);return o.left+=v?r:r.left||0,o.top+=v?r:r.top||0,o.right-=v?r:r.right||0,o.bottom-=v?r:r.bottom||0,o}function B(t,e,r,n,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=D(r,n,o,i),u={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},f=Object.keys(u).map(function(t){return x({key:t},u[t],{area:(e=u[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),s=f.filter(function(t){return t.width>=r.clientWidth&&t.height>=r.clientHeight}),c=s.length>0?s[0].key:f[0].key,h=t.split("-")[1];return c+(h?"-"+h:"")}function A(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k(r,n?j(e):g(e,r),n)}function S(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),r=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+n,height:t.offsetHeight+r}}function Y(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function C(t,e,r){r=r.split("-")[0];var n=S(t),i={width:n.width,height:n.height},o=-1!==["right","left"].indexOf(r),a=o?"top":"left",u=o?"left":"top",f=o?"height":"width",s=o?"width":"height";return i[a]=e[a]+e[f]/2-n[f]/2,i[u]=r===u?e[u]-n[s]:e[Y(u)],i}function N(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function W(t,e,r){return(void 0===r?t:t.slice(0,function(t,e,r){if(Array.prototype.findIndex)return t.findIndex(function(t){return t.name===r});var n=N(t,function(t){return t.name===r});return t.indexOf(n)}(t,0,r))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=t.function||t.fn;t.enabled&&s(r)&&(e.offsets.popper=F(e.offsets.popper),e.offsets.reference=F(e.offsets.reference),e=r(e,t))}),e}function z(t,e){return t.some(function(t){return t.enabled&&t.name===e})}function I(t){for(var e=[!1,"ms","Webkit","Moz","O"],r=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var i=e[n],o=i?""+i+r:t;if(void 0!==document.body.style[o])return o}return null}function P(t){var e=t.ownerDocument;return e?e.defaultView:window}function R(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function _(t,e){Object.keys(e).forEach(function(r){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(r)&&R(e[r])&&(n="px"),t.style[r]=e[r]+n})}var q=i&&/Firefox/i.test(navigator.userAgent);function G(t,e,r){var n=N(t,function(t){return t.name===e}),i=!!n&&t.some(function(t){return t.name===r&&t.enabled&&t.order<n.order});if(!i){var o="`"+e+"`";console.warn("`"+r+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var U=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],V=U.slice(3);function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=V.indexOf(t),n=V.slice(r+1).concat(V.slice(0,r));return e?n.reverse():n}var X="flip",J="clockwise",K="counterclockwise";var Q={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,r=e.split("-")[0],n=e.split("-")[1];if(n){var i=t.offsets,o=i.reference,a=i.popper,u=-1!==["bottom","top"].indexOf(r),f=u?"left":"top",s=u?"width":"height",c={start:L({},f,o[f]),end:L({},f,o[f]+o[s]-a[s])};t.offsets.popper=x({},a,c[n])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var r,n=e.offset,i=t.offsets,o=i.popper,a=i.reference,u=t.placement.split("-")[0];return r=R(+n)?[+n,0]:function(t,e,r,n){var i=[0,0],o=-1!==["right","left"].indexOf(n),a=t.split(/(\+|\-)/).map(function(t){return t.trim()}),u=a.indexOf(N(a,function(t){return-1!==t.search(/,|\s/)}));a[u]&&-1===a[u].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,s=-1!==u?[a.slice(0,u).concat([a[u].split(f)[0]]),[a[u].split(f)[1]].concat(a.slice(u+1))]:[a];return(s=s.map(function(t,n){var i=(1===n?!o:o)?"height":"width",a=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,r,n){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],a=i[2];if(!o)return t;if(0===a.indexOf("%")){var u=void 0;switch(a){case"%p":u=r;break;case"%":case"%r":default:u=n}return F(u)[e]/100*o}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o}(t,i,e,r)})})).forEach(function(t,e){t.forEach(function(r,n){R(r)&&(i[e]+=r*("-"===t[n-1]?-1:1))})}),i}(n,o,a,u),"left"===u?(o.top+=r[0],o.left-=r[1]):"right"===u?(o.top+=r[0],o.left+=r[1]):"top"===u?(o.left+=r[0],o.top-=r[1]):"bottom"===u&&(o.left+=r[0],o.top+=r[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var r=e.boundariesElement||m(t.instance.popper);t.instance.reference===r&&(r=m(r));var n=I("transform"),i=t.instance.popper.style,o=i.top,a=i.left,u=i[n];i.top="",i.left="",i[n]="";var f=D(t.instance.popper,t.instance.reference,e.padding,r,t.positionFixed);i.top=o,i.left=a,i[n]=u,e.boundaries=f;var s=t.offsets.popper,c={primary:function(t){var r=s[t];return s[t]<f[t]&&!e.escapeWithReference&&(r=Math.max(s[t],f[t])),L({},t,r)},secondary:function(t){var r="right"===t?"left":"top",n=s[r];return s[t]>f[t]&&!e.escapeWithReference&&(n=Math.min(s[r],f[t]-("right"===t?s.width:s.height))),L({},r,n)}};return e.priority.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";s=x({},s,c[e](t))}),t.offsets.popper=s,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,r=e.popper,n=e.reference,i=t.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(i),u=a?"right":"bottom",f=a?"left":"top",s=a?"width":"height";return r[u]<o(n[f])&&(t.offsets.popper[f]=o(n[f])-r[s]),r[f]>o(n[u])&&(t.offsets.popper[f]=o(n[u])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var r;if(!G(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,a=o.popper,u=o.reference,f=-1!==["left","right"].indexOf(i),s=f?"height":"width",h=f?"Top":"Left",l=h.toLowerCase(),d=f?"left":"top",p=f?"bottom":"right",v=S(n)[s];u[p]-v<a[l]&&(t.offsets.popper[l]-=a[l]-(u[p]-v)),u[l]+v>a[p]&&(t.offsets.popper[l]+=u[l]+v-a[p]),t.offsets.popper=F(t.offsets.popper);var m=u[l]+u[s]/2-v/2,b=c(t.instance.popper),g=parseFloat(b["margin"+h],10),w=parseFloat(b["border"+h+"Width"],10),y=m-t.offsets.popper[l]-g-w;return y=Math.max(Math.min(a[s]-v,y),0),t.arrowElement=n,t.offsets.arrow=(L(r={},l,Math.round(y)),L(r,d,""),r),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(z(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var r=D(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),n=t.placement.split("-")[0],i=Y(n),o=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case X:a=[n,i];break;case J:a=$(n);break;case K:a=$(n,!0);break;default:a=e.behavior}return a.forEach(function(u,f){if(n!==u||a.length===f+1)return t;n=t.placement.split("-")[0],i=Y(n);var s=t.offsets.popper,c=t.offsets.reference,h=Math.floor,l="left"===n&&h(s.right)>h(c.left)||"right"===n&&h(s.left)<h(c.right)||"top"===n&&h(s.bottom)>h(c.top)||"bottom"===n&&h(s.top)<h(c.bottom),d=h(s.left)<h(r.left),p=h(s.right)>h(r.right),v=h(s.top)<h(r.top),m=h(s.bottom)>h(r.bottom),b="left"===n&&d||"right"===n&&p||"top"===n&&v||"bottom"===n&&m,g=-1!==["top","bottom"].indexOf(n),w=!!e.flipVariations&&(g&&"start"===o&&d||g&&"end"===o&&p||!g&&"start"===o&&v||!g&&"end"===o&&m)||!!e.flipVariationsByContent&&(g&&"start"===o&&p||g&&"end"===o&&d||!g&&"start"===o&&m||!g&&"end"===o&&v);(l||b||w)&&(t.flipped=!0,(l||b)&&(n=a[f+1]),w&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=n+(o?"-"+o:""),t.offsets.popper=x({},t.offsets.popper,C(t.instance.popper,t.offsets.reference,t.placement)),t=W(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,r=e.split("-")[0],n=t.offsets,i=n.popper,o=n.reference,a=-1!==["left","right"].indexOf(r),u=-1===["top","left"].indexOf(r);return i[a?"left":"top"]=o[r]-(u?i[a?"width":"height"]:0),t.placement=Y(e),t.offsets.popper=F(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!G(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,r=N(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<r.top||e.left>r.right||e.top>r.bottom||e.right<r.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var r=e.x,n=e.y,i=t.offsets.popper,o=N(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,u,f=void 0!==o?o:e.gpuAcceleration,s=m(t.instance.popper),c=E(s),h={position:i.position},l=function(t,e){var r=t.offsets,n=r.popper,i=Math.round,o=Math.floor,a=function(t){return t},u=i(r.reference.width),f=i(n.width),s=-1!==["left","right"].indexOf(t.placement),c=-1!==t.placement.indexOf("-"),h=e?s||c||u%2==f%2?i:o:a,l=e?i:a;return{left:h(u%2==1&&f%2==1&&!c&&e?n.left-1:n.left),top:l(n.top),bottom:l(n.bottom),right:h(n.right)}}(t,window.devicePixelRatio<2||!q),d="bottom"===r?"top":"bottom",p="right"===n?"left":"right",v=I("transform");if(u="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-c.height+l.bottom:l.top,a="right"===p?"HTML"===s.nodeName?-s.clientWidth+l.right:-c.width+l.right:l.left,f&&v)h[v]="translate3d("+a+"px, "+u+"px, 0)",h[d]=0,h[p]=0,h.willChange="transform";else{var b="right"===p?-1:1;h[d]=u*("bottom"===d?-1:1),h[p]=a*b,h.willChange=d+", "+p}return t.attributes=x({},{"x-placement":t.placement},t.attributes),t.styles=x({},h,t.styles),t.arrowStyles=x({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,r;return _(t.instance.popper,t.styles),e=t.instance.popper,r=t.attributes,Object.keys(r).forEach(function(t){!1!==r[t]?e.setAttribute(t,r[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&_(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,r,n,i){var o=A(i,e,t,r.positionFixed),a=B(r.placement,o,e,t,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return e.setAttribute("x-placement",a),_(e,{position:r.positionFixed?"fixed":"absolute"}),r},gpuAcceleration:void 0}}},Z=function(){function t(e,r){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};H(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=f(this.update.bind(this)),this.options=x({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(x({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=x({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return x({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return T(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=A(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=B(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=C(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=W(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,z(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[I("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=function(t,e,r,n){r.updateBound=n,P(t).addEventListener("resize",r.updateBound,{passive:!0});var i=l(t);return function t(e,r,n,i){var o="BODY"===e.nodeName,a=o?e.ownerDocument.defaultView:e;a.addEventListener(r,n,{passive:!0}),o||t(l(a.parentNode),r,n,i),i.push(a)}(i,"scroll",r.updateBound,r.scrollParents),r.scrollElement=i,r.eventsEnabled=!0,r}(this.reference,0,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.state,P(this.reference).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}.call(this)}}]),t}();Z.Utils=("undefined"!=typeof window?window:global).PopperUtils,Z.placements=U,Z.Defaults=Q;const tt=class{constructor(e){t(this,e),this.open=!1,this.placement="horizontal",this.xOffset=0,this.yOffset=0}openHandler(t){t?this.reposition():this.destroyPopper()}placementHandler(){this.reposition()}referenceElementHandler(){this.destroyPopper(),this.reposition()}xOffsetHandler(){this.reposition()}yOffsetHandler(){this.reposition()}componentDidLoad(){this.reposition()}componentDidUnload(){this.destroyPopper()}async reposition(){const{el:t,placement:e,open:r,popper:n,referenceElement:i,xOffset:o,yOffset:a}=this,u="vertical"===e?"bottom-start":"auto-start",f={hide:{enabled:!1},offset:{enabled:!(!a&&!o),offset:`${a}, ${o}`},preventOverflow:{enabled:!1}};if(n)return n.options.placement=u,n.options.modifiers=Object.assign({},n.options.modifiers,f),void n.scheduleUpdate();if(i&&r){const e=new Z(i,t,{eventsEnabled:!1,placement:u,modifiers:f,onCreate:t=>{"bottom-start"===t.originalPlacement&&document.body.clientWidth&&t.offsets&&t.offsets.reference&&t.offsets.reference.left>document.body.clientWidth/2&&(t.instance.options.placement="bottom-end",t.instance.scheduleUpdate())}});window.addEventListener("resize",e.scheduleUpdate,{passive:!0}),this.popper=e}}async toggle(){this.open=!this.open}destroyPopper(){const{popper:t}=this;t&&(window.removeEventListener("resize",t.scheduleUpdate),t.destroy()),this.popper=null}render(){return e(r,null,e("div",{class:{container:!0,"container--open":this.open}},e("slot",null)))}get el(){return n(this)}static get watchers(){return{open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],xOffset:["xOffsetHandler"],yOffset:["yOffsetHandler"]}}static get style(){return":host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}.container{visibility:hidden}.container--open{visibility:visible}"}};export{tt as calcite_popover};