import{r as s,c as t,h as l,H as a,g as e}from"./p-3dbfa717.js";import{d as i,e as o,C as n}from"./p-73986e99.js";import{C as c}from"./p-0e6af3bf.js";const r=class{constructor(l){s(this,l),this.collapsible=!1,this.disabled=!1,this.open=!1,this.loading=!1,this.textExpand="Expand",this.textCollapse="Collapse",this.onHeaderClick=s=>{const t=this.el.shadowRoot.querySelector("slot[name=control]"),l=t&&t.assignedNodes()[0];if(l&&l.contains(s.target))return s.stopPropagation(),void s.preventDefault();this.open=!this.open,this.calciteBlockToggle.emit()},this.calciteBlockToggle=t(this,"calciteBlockToggle",7)}render(){const{collapsible:s,disabled:t,el:e,heading:r,loading:d,open:h,summary:u,textCollapse:p,textExpand:g}=this,m=h?p:g,b=d?l("calcite-loader",{inline:!0,"is-active":!0}):t?null:l("slot",{name:"control"}),f=this.el.querySelector("[slot=icon]"),v=l("header",{class:"header"},f?l("div",{class:"icon"},l("slot",{name:"icon"})):null,l("div",{class:"title"},l("h3",{class:"heading"},r),u?l("div",{class:"summary"},u):null),b);let x=!1,C=!1;for(let l=0;l<e.children.length;l++){const s="control"===e.children[l].slot;x=x||s,C=C||!s}const E=l("div",{class:"header-container"},s?l("button",{"aria-label":m,class:"toggle",onClick:this.onHeaderClick,title:m},v,x?null:l(n,{size:"16",path:h?i:o,svgAttributes:{class:"toggle-icon"}})):v);return l(a,null,l("article",{"aria-expanded":s?h?"true":"false":null,"aria-busy":d},E,l("div",{class:"content",hidden:!C||!h},l(c,{loading:d,disabled:t},l("slot",null)))))}get el(){return e(this)}static get style(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:16px;--calcite-app-cap-spacing:16px;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8)}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}:host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-preferred-size:var(--calcite-app-header-min-height);flex-basis:var(--calcite-app-header-min-height);color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2);font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h2.heading,h3.heading,h4.heading,h5.heading{font-weight:var(--calcite-app-font-weight-demi)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);margin:var(--calcite-app-cap-spacing-third) var(--calcite-app-side-spacing-third);-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border)}calcite-loader[inline]{color:var(--calcite-app-foreground-subtle)}.header-container>.header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters)}.header,.title{-ms-flex-positive:1;flex-grow:1}.title{margin:0}.header .title .heading,.summary{padding:0 0 var(--calcite-app-cap-spacing-quarter)}.summary{font-size:var(--font-size--1)}.toggle{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters);background-color:transparent;border:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;text-align:unset;width:100%;color:var(--calcite-app-foreground)}.icon{margin-right:var(--calcite-app-side-spacing-third)}.toggle-icon{fill:currentColor;-ms-flex:0 0 var(--calcite-app-icon-size);flex:0 0 var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.content{padding:0 var(--calcite-app-side-spacing-three-quarters) var(--calcite-app-cap-spacing-half);position:relative}"}};export{r as calcite_block};