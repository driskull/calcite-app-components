System.register(["./p-a6bbd023.system.js","./p-f108b16c.system.js"],(function(t){"use strict";var e,i,c,a,n,l;return{setters:[function(t){e=t.h;i=t.r;c=t.H},function(t){a=t.h;n=t.C;l=t.a}],execute:function(){var o={isActive:"is-active",link:"link",open:"open",close:"close",hamburger:"hamburger"};var r=[{id:"home",path:"",content:e(n,{size:"16",path:a,title:"Home"})},{id:"calcite-action",path:"demos/calcite-action.html",content:"Action"},{id:"calcite-action-bar",path:"demos/calcite-action-bar.html",content:"Action Bar"},{id:"calcite-action-pad",path:"demos/calcite-action-pad.html",content:"Action Pad"},{id:"calcite-block",path:"demos/calcite-block.html",content:"Block"},{id:"calcite-flow",path:"demos/calcite-flow.html",content:"Flow"},{id:"calcite-flow-item",path:"demos/calcite-flow-item.html",content:"Flow Item"},{id:"calcite-panel",path:"demos/calcite-panel.html",content:"Panel"},{id:"calcite-pick-list",path:"demos/calcite-pick-list.html",content:"Pick List"},{id:"calcite-shell",path:"demos/calcite-shell.html",content:"Shell"},{id:"calcite-shell-panel",path:"demos/calcite-shell-panel.html",content:"Shell Panel"},{id:"calcite-tip",path:"demos/calcite-tip.html",content:"Tip"},{id:"calcite-tip-manager",path:"demos/calcite-tip-manager.html",content:"Tip Manager"},{id:"calcite-typography",path:"demos/calcite-typography.html",content:"Typography"},{id:"calcite-value-list",path:"demos/calcite-value-list.html",content:"Value List"}];var s=t("calcite_demo_nav",function(){function t(t){var e=this;i(this,t);this.root=window.location.origin+window.location.pathname.split("demos").shift();this.open=false;this.hamburgerClickHandler=function(t){t.preventDefault();e.open=!e.open};this.blurHandler=function(){e.open=false}}t.prototype.renderNavItem=function(t){var i=this,c=i.pageId,a=i.root;var n=t.content,l=t.id,r=t.path;return e("li",null,e("a",{class:l===c?o.isActive+" "+o.link:o.link,href:""+a+r},n))};t.prototype.render=function(){var t=this;return e(c,{onBlur:this.blurHandler},e("button",{class:o.hamburger,onClick:this.hamburgerClickHandler},e(n,{size:"32",path:l,title:"Home"})),e("ul",{class:this.open?o.open:o.close},r.map((function(e){return t.renderNavItem(e)}))))};Object.defineProperty(t,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-header-min-height:3rem;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8)}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;min-height:var(--calcite-app-header-min-height);color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2);font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h2.heading,h3.heading,h4.heading,h5.heading{font-weight:var(--calcite-app-font-weight-demi)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host{line-height:16px}.hamburger,:host{position:relative;display:block}.hamburger{margin:6px;padding:0;border:none;cursor:pointer;z-index:999}\@media (min-width:1025px){.hamburger{display:none}}.hamburger :hover{fill:#00f}ul{list-style:none;margin:0;padding:0;color:#fff;fill:#fff;background-color:#333}\@media (max-width:1024px){ul{display:none;position:absolute;top:0;left:0;margin-top:38px;z-index:9999}ul.open{display:block}}\@media (min-width:1025px){ul{display:-ms-flexbox;display:flex;position:static}}li{border-top:1px solid #fff}\@media (min-width:1025px){li{border-top:none;border-left:1px solid #fff}}li:first-child{border-top:none}\@media (min-width:1025px){li:first-child{border-left:none}}li:last-child{border-bottom:1px solid #fff}\@media (min-width:1025px){li:last-child{border-bottom:none;border-right:1px solid #fff}}.link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5em 1em;color:inherit;text-decoration:none;white-space:nowrap}\@media (min-width:1025px){.link{padding:12px 24px}}.link:hover{background-color:#000}.link.is-active{background-color:#007bc7}svg{fill:inherit}"},enumerable:true,configurable:true});return t}())}}}));