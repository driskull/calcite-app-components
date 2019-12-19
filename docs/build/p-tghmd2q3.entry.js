import{r as t,c as s,h as e,H as i,g as a}from"./p-3dbfa717.js";import{C as h,n as c,s as l,o as r,p as n}from"./p-ac353393.js";import{I as d}from"./p-4d533d6f.js";import{C as o}from"./p-c92526df.js";const p=class{constructor(e){t(this,e),this.compact=!1,this.disabled=!1,this.disableDeselect=!1,this.icon=null,this.selected=!1,this.pickListClickHandler=t=>{this.disabled||this.disableDeselect&&this.selected||(this.shiftPressed=t.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=t=>{if(" "===t.key){if(t.preventDefault(),this.disableDeselect&&this.selected)return;this.selected=!this.selected}},this.calciteListItemChange=s(this,"calciteListItemChange",7),this.calciteListItemPropsUpdated=s(this,"calciteListItemPropsUpdated",7)}metadataWatchHandler(){this.calciteListItemPropsUpdated.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}textHeadingWatchHandler(){this.calciteListItemPropsUpdated.emit()}textDescriptionWatchHandler(){this.calciteListItemPropsUpdated.emit()}textLabelWatchHandler(){this.calciteListItemPropsUpdated.emit()}async toggleSelected(t){this.disabled||(this.selected="boolean"==typeof t?t:!this.selected)}renderIcon(){const{compact:t,icon:s,selected:i}=this;return!s||t?null:e("span",{class:o.icon},e(h,{size:"16",path:s===d.square?i?c:l:i?r:n}))}render(){const t=this.textDescription&&!this.compact?e("span",{class:o.description},this.textDescription):null;return e(i,{role:"checkbox","aria-checked":this.selected.toString()},e("label",{class:o.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,"aria-label":this.textLabel},this.renderIcon(),e("div",{class:o.textContainer},e("span",{class:o.title},this.textLabel?this.textLabel:this.textHeading),t)),e("div",{class:o.action},e("slot",{name:"secondaryAction"})))}get el(){return a(this)}static get watchers(){return{metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],textHeading:["textHeadingWatchHandler"],textDescription:["textDescriptionWatchHandler"],textLabel:["textLabelWatchHandler"]}}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.heading{font-weight:var(--calcite-app-font-weight-demi)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8)}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:hsla(0,0%,100%,0.8)}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-size:var(--calcite-app-font-size-0)}:host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}:host{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-minimum);background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host(:hover){background-color:var(--calcite-app-background-hover)}:host(:last-child){margin-bottom:0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border)}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-half);-ms-flex-align:center;align-items:center;cursor:pointer}.label:focus{outline-offset:var(--calcite-app-outline-inset)}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-app-side-spacing-half)}.title{font-size:var(--calcite-app-font-size-0)}.description,.title{display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter)}.action{-ms-flex:0 0 0%;flex:0 0 0%;justify-self:flex-end;margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half)}"}};export{p as calcite_pick_list_item};