System.register(["./p-4f592ebe.system.js","./p-6eb997cb.system.js"],(function(e){"use strict";var t,i,s,n,l,r,a;return{setters:[function(e){t=e.r;i=e.c;s=e.h;n=e.H;l=e.g},function(e){r=e.x;a=e.C}],execute:function(){function o(){return typeof Storage!=="undefined"}function c(e){if(!e||!o()){return null}return localStorage.getItem(e)}function u(e,t){if(!e||!o()){return}localStorage.setItem(e,t)}var h={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info",link:"link"};var m={close:"Close"};var d=e("calcite_tip",function(){function e(e){var s=this;t(this,e);this.nonDismissible=false;this.textClose=m.close;this.dismissed=c(this.el.tagName.toLowerCase()+"-"+this.storageId)!==null;this.hideTip=function(){s.dismissed=true;var e=s.storageId;if(e){u(s.el.tagName.toLowerCase()+"-"+e,"dismissed")}s.calciteTipDismiss.emit()};this.calciteTipDismiss=i(this,"calciteTipDismiss",7)}e.prototype.render=function(){return s(n,null,s("article",{class:h.container,hidden:this.dismissed},s("header",{class:h.header},s("h3",{class:h.heading},this.heading),!this.nonDismissible?s("calcite-action",{text:this.textClose,onClick:this.hideTip,class:h.close},s(a,{size:"16",path:r})):null),s("div",{class:h.content},this.thumbnail?s("div",{class:h.imageFrame},s("img",{src:this.thumbnail,alt:this.textThumbnail})):null,s("div",{class:h.info},this.el.querySelector("[slot=info]")?s("slot",{name:"info"}):null,this.el.querySelector("[slot=link]")?s("p",{class:h.link},s("slot",{name:"link"})):null))))};Object.defineProperty(e.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2);font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h2.heading,h3.heading,h4.heading,h5.heading{font-weight:var(--calcite-app-font-weight-demi)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.container{color:var(--calcite-app-foreground);background-color:var(--calcite-app-background);padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing) var(--calcite-app-cap-spacing);margin:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);border-radius:var(--calcite-app-border-radius)}:host([selected]) .container{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.header .heading{padding-left:0;padding-right:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex;padding-top:var(--calcite-app-cap-spacing-half)}.info{padding:0 var(--calcite-app-side-spacing);width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}.info ::slotted(p){margin-top:0}.info ::slotted(a){color:var(--calcite-app-foreground)}.image-frame{width:25%}.image-frame img{max-width:100%}"},enumerable:true,configurable:true});return e}())}}}));