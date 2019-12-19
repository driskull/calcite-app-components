System.register(["./p-1c20b7e0.system.js","./p-d5e7aa8a.system.js","./p-1071578d.system.js"],(function(e){"use strict";var t,r,a,i,n,l,c,u,o,s;return{setters:[function(e){t=e.r;r=e.c;a=e.h;i=e.H;n=e.g},function(e){l=e.x;c=e.C;u=e.q},function(e){o=e.d;s=e.f}],execute:function(){var f={searchIcon:"search-icon",clearButton:"clear-button"};var h={filterLabel:"filter",clear:"Clear filter"};var p=250;var y=e("calcite_filter",function(){function e(e){var a=this;t(this,e);this.empty=true;this.filter=o((function(e){var t=new RegExp(e,"ig");if(a.data.length===0){console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects");a.calciteFilterChange.emit([]);return}var r=function(e,t){var a=false;s(e,(function(e){if(typeof e==="function"){return}if(Array.isArray(e)||typeof e==="object"&&e!==null){if(r(e,t)){a=true}}else if(t.test(e)){a=true}}));return a};var i=a.data.filter((function(e){return r(e,t)}));a.calciteFilterChange.emit(i)}),p);this.inputHandler=function(e){var t=e.target;a.empty=t.value==="";a.filter(t.value)};this.clear=function(){a.el.shadowRoot.querySelector("input").value="";a.empty=true;a.calciteFilterChange.emit(a.data)};this.calciteFilterChange=r(this,"calciteFilterChange",7)}e.prototype.render=function(){return a(i,null,a("label",null,a("input",{type:"text",value:"",placeholder:this.textPlaceholder,onInput:this.inputHandler,"aria-label":this.textLabel||h.filterLabel}),a("div",{class:f.searchIcon},a(c,{size:"16",path:u}))),!this.empty?a("button",{onClick:this.clear,class:f.clearButton,"aria-label":h.clear},a(c,{size:"16",path:l})):null)};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.heading{font-weight:var(--calcite-app-font-weight-demi)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8)}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0)}:host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}:host{padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half)}:host,label{display:-ms-flexbox;display:flex;width:100%}label{-ms-flex-align:center;align-items:center;margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-quarter);overflow:hidden;position:relative}input[type=text]{background-color:transparent;border:0;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);margin-bottom:calc(var(--calcite-app-cap-spacing-minimum) * 2);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-plus-half);-webkit-transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);width:100%}input[type=text]::-ms-clear{display:none}input[type=text]:focus{border-color:var(--calcite-app-foreground-active);-webkit-box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);outline:none;padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-quarter)}input[type=text]:focus~.search-icon{left:calc(var(--calcite-app-icon-size) * -1);opacity:0}.search-icon{color:var(--calcite-app-foreground-subtle);display:-ms-flexbox;display:flex;left:0;position:absolute;-webkit-transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function),opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.clear-button{color:var(--calcite-app-foreground);background:none;border:0;cursor:pointer}.clear-button:hover{color:var(--calcite-app-foreground-hover)}.calcite--rtl input[type=text]{padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-plus-half)}.calcite--rtl .search-icon{left:unset;right:0}"},enumerable:true,configurable:true});return e}())}}}));