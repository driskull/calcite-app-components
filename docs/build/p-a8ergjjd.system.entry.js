var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n["throw"](t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(o[0]===6&&i.label<s[1]){i.label=s[1];s=o;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(o);break}if(s[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];r=0}finally{n=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-c2917d38.system.js","./p-db9a160c.system.js","./p-c14c347a.system.js","./p-6f5289b6.system.js","./p-1b465636.system.js"],function(t){"use strict";var e,i,n,r,s,o,a,c,l,u,h,p;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;s=t.g},function(t){o=t.C},function(t){a=t.o;c=t.k;l=t.n},function(t){u=t.c},function(t){h=t.T;p=t.C}],execute:function(){var d=t("calcite_tip_manager",function(){function t(t){var n=this;e(this,t);this.textClose=h.close;this.textDefaultTitle=h.defaultGroupTitle;this.textNext=h.next;this.textPaginationLabel=h.defaultPaginationLabel;this.textPrevious=h.previous;this.groupTitle=this.textDefaultTitle;this.observer=new MutationObserver(function(){return n.setUpTips()});this.hideTipManager=function(){n.el.setAttribute("hidden","");n.el.setAttribute("aria-hidden","");n.calciteTipManagerClose.emit()};this.previousClicked=function(){n.previousTip()};this.nextClicked=function(){n.nextTip()};this.calciteTipManagerClose=i(this,"calciteTipManagerClose",7)}t.prototype.selectedChangeHandler=function(){this.showSelectedTip();this.updateGroupTitle()};t.prototype.connectedCallback=function(){this.setUpTips()};t.prototype.componentDidLoad=function(){this.observer.observe(this.el,{childList:true,subtree:true})};t.prototype.componentDidUnload=function(){this.observer.disconnect()};t.prototype.nextTip=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){this.direction="advancing";t=this.selectedIndex+1;this.selectedIndex=(t+this.total)%this.total;return[2]})})};t.prototype.previousTip=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){this.direction="retreating";t=this.selectedIndex-1;this.selectedIndex=(t+this.total)%this.total;return[2]})})};t.prototype.setUpTips=function(){var t=Array.from(this.el.querySelectorAll("calcite-tip"));var e=this.el.querySelector("calcite-tip[selected]");this.tips=t;this.total=t.length;this.selectedIndex=e?t.indexOf(e):0;t.forEach(function(t){t.setAttribute("non-dismissible","")});this.showSelectedTip();this.updateGroupTitle()};t.prototype.showSelectedTip=function(){var t=this;this.tips.forEach(function(e,i){var n=t.selectedIndex===i;n?e.setAttribute("selected",""):e.removeAttribute("selected");n?e.removeAttribute("hidden"):e.setAttribute("hidden","")})};t.prototype.updateGroupTitle=function(){var t=this.tips[this.selectedIndex];var e=t.closest("calcite-tip-group");this.groupTitle=e?e.textGroupTitle:this.textDefaultTitle};t.prototype.render=function(){if(this.total===0){return n(r,null)}return n(r,null,n("header",{class:p.header},n("h2",{class:p.heading},this.groupTitle),n("calcite-action",{text:this.textClose,onClick:this.hideTipManager,class:p.close},n(o,{size:"16",path:l}))),n("div",{class:u(p.tipContainer,this.direction),key:this.selectedIndex},n("slot",null)),n("footer",{class:p.pagination},n("calcite-action",{text:this.textPrevious,onClick:this.previousClicked,class:p.pagePrevious},n(o,{size:"16",path:c})),n("span",{class:p.pagePosition},this.textPaginationLabel+" "+(this.selectedIndex+1)+"/"+this.total),n("calcite-action",{text:this.textNext,onClick:this.nextClicked,class:p.pageNext},n(o,{size:"16",path:a}))))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedIndex:["selectedChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}:host{overflow:hidden;position:relative;display:block;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;background-color:var(--calcite-app-background)}:host([hidden]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:22vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;background-color:var(--calcite-app-background)}::slotted(calcite-tip),::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container.advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container.retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half);color:var(--calcite-app-foreground)}"},enumerable:true,configurable:true});return t}())}}});