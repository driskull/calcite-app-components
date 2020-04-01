import{r as a,c as i,h as t,H as e,g as c}from"./p-17403eb8.js";import{d as p,f as r}from"./p-bdefc18b.js";const n=class{constructor(t){a(this,t),this.empty=!0,this.filter=p(a=>{const i=new RegExp(a,"ig");if(0===this.data.length)return console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects"),void this.calciteFilterChange.emit([]);const t=(a,i)=>{let e=!1;return r(a,a=>{"function"!=typeof a&&(Array.isArray(a)||"object"==typeof a&&null!==a?t(a,i)&&(e=!0):i.test(a)&&(e=!0))}),e},e=this.data.filter(a=>t(a,i));this.calciteFilterChange.emit(e)},250),this.inputHandler=a=>{const i=a.target;this.empty=""===i.value,this.filter(i.value)},this.clear=()=>{this.textInput.value="",this.empty=!0,this.calciteFilterChange.emit(this.data)},this.calciteFilterChange=i(this,"calciteFilterChange",7)}render(){return t(e,null,t("label",null,t("input",{type:"text",value:"",placeholder:this.placeholder||this.textPlaceholder,onInput:this.inputHandler,"aria-label":this.intlLabel||this.textLabel||"filter",ref:a=>{this.textInput=a}}),t("div",{class:"search-icon"},t("calcite-icon",{scale:"s",icon:"search"}))),this.empty?null:t("button",{onClick:this.clear,class:"clear-button","aria-label":this.intlClear||"Clear filter"},t("calcite-icon",{icon:"x"})))}get el(){return c(this)}};n.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);width:100%}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-quarter);overflow:hidden;position:relative;width:100%}input[type=text]{background-color:transparent;border:0;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);margin-bottom:calc(var(--calcite-app-cap-spacing-minimum) * 2);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-plus-half);-webkit-transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);width:100%}input[type=text]::-ms-clear{display:none}input[type=text]:focus{border-color:var(--calcite-app-foreground-active);-webkit-box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);outline:none;padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-quarter)}.search-icon{color:var(--calcite-app-foreground-subtle);display:-ms-flexbox;display:flex;left:0;position:absolute;-webkit-transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.clear-button{color:var(--calcite-app-foreground);background:none;border:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-app-foreground-hover)}.calcite--rtl input[type=text]{padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-plus-half)}.calcite--rtl .search-icon{left:unset;right:0}input[type=text]:focus~.search-icon{left:calc(var(--calcite-app-icon-size) * -1);opacity:0}";export{n as calcite_filter}