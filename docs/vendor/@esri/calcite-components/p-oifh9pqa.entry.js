import{r as t,c as i,h as s,H as e,g as c}from"./p-dde25702.js";import{g as h,b as a}from"./p-f4073644.js";import{g as o}from"./p-c526d604.js";import{E as r,H as n,U as l,D as d,b as m,S as u}from"./p-fba2df54.js";const p=class{constructor(s){t(this,s),this.theme="light",this.scale="m",this.appearance="default",this.iconPosition="end",this.iconType="chevron",this.selectionMode="multi",this.items=[],this.sorted=!1,this.requestedAccordionItem="",this.sortItems=t=>t.sort((t,i)=>t.position-i.position).map(t=>t.item),this.calciteAccordionItemHasChanged=i(this,"calciteAccordionItemHasChanged",7)}connectedCallback(){["default","minimal","transparent"].includes(this.appearance)||(this.appearance="default"),["start","end"].includes(this.iconPosition)||(this.iconPosition="end"),["chevron","caret","plus-minus"].includes(this.iconType)||(this.iconType="chevron"),["light","dark"].includes(this.theme)||(this.theme="light"),["s","m","l"].includes(this.scale)||(this.scale="m"),["multi","single","single-persist"].includes(this.selectionMode)||(this.selectionMode="multi")}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){const t=h(this.el);return s(e,{dir:t},s("slot",null))}calciteAccordionItemKeyEvent(t){let i=t.detail.item,s=t.target,e=0===this.itemIndex(s),c=this.itemIndex(s)===this.items.length-1;switch(i.keyCode){case d:c?this.focusFirstItem():this.focusNextItem(s);break;case l:e?this.focusLastItem():this.focusPrevItem(s);break;case n:this.focusFirstItem();break;case r:this.focusLastItem()}}registerCalciteAccordionItem(t){this.items.push({item:t.target,position:t.detail.position})}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionItemHasChanged.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){this.focusElement(this.items[0])}focusLastItem(){this.focusElement(this.items[this.items.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i+1]||this.items[0])}focusPrevItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return c(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.8125rem;line-height:1.5}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.875rem;line-height:1.5}:host([scale=l]){--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.9375rem;line-height:1.5}:host([icon-position=start]){--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:90deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:-90deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-item-spacing-unit)}:host([icon-position=end]){--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:-90deg;--calcite-accordion-item-active-icon-rotation:-180deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:180deg;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-item-spacing-unit);--calcite-accordion-item-icon-spacing-end:0}:host{display:block;position:relative;max-width:100%;border:1px solid var(--calcite-ui-border-2);border-bottom:none;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground)}:host([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}:host([appearance=transparent]){border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}"}},g=class{constructor(s){t(this,s),this.active=!1,this.accordionItemId=`calcite-accordion-item-${o()}`,this.selectionMode=a(this.el,"selection-mode","multi"),this.iconType=a(this.el,"icon-type","chevron"),this.itemHeaderClickHander=()=>this.emitRequestedItem(),this.calciteAccordionItemKeyEvent=i(this,"calciteAccordionItemKeyEvent",7),this.calciteAccordionItemSelected=i(this,"calciteAccordionItemSelected",7),this.closeCalciteAccordionItem=i(this,"closeCalciteAccordionItem",7),this.registerCalciteAccordionItem=i(this,"registerCalciteAccordionItem",7)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.registerCalciteAccordionItem.emit({position:this.itemPosition})}render(){const t=h(this.el);return s(e,{dir:t,tabindex:"0","aria-expanded":this.active.toString()},s("div",{class:"accordion-item-header",onClick:this.itemHeaderClickHander},s("div",{class:"accordion-item-header-text"},s("span",{class:"accordion-item-title"},this.itemTitle),s("span",{class:"accordion-item-subtitle"},this.itemSubtitle)),s("calcite-icon",{class:"accordion-item-icon",icon:"chevron"===this.iconType?"chevronUp":"caret"===this.iconType?"caretUp":this.active?"minus":"plus",scale:"s"})),s("div",{class:"accordion-item-content"},s("slot",null)))}keyDownHandler(t){if(t.target===this.el)switch(t.keyCode){case u:case m:this.emitRequestedItem(),t.preventDefault();break;case l:case d:case n:case r:this.calciteAccordionItemKeyEvent.emit({item:t}),t.preventDefault()}}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.accordionItemId===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.accordionItemId===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.accordionItemId===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelected.emit({requestedAccordionItem:this.accordionItemId})}getItemPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return c(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background);color:var(--calcite-ui-text-3);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;text-decoration:none;outline:none;position:relative}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border)}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host .accordion-item-content{display:none;color:var(--calcite-ui-text-3);padding-top:0}:host .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end);color:var(--calcite-ui-text-3);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host([dir=rtl]) .accordion-item-header-text{margin-left:auto;margin-right:0}:host .accordion-item-subtitle,:host .accordion-item-title{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:active) .accordion-item-title,:host(:focus) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1);font-weight:500}:host(:active) .accordion-item-subtitle,:host(:focus) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}"}};export{p as calcite_accordion,g as calcite_accordion_item};