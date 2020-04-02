import{r as t,h as e,H as i,g as o,c as s}from"./p-b0b0104a.js";import{g as r}from"./p-a6a32ff6.js";import{a as n,E as a,S as c,T as l,b as h,H as d,U as m,D as p}from"./p-eb6a0c18.js";import{f as u,a as w}from"./p-13cfbb21.js";const g=class{constructor(e){t(this,e),this.active=!1,this.alignment="start",this.scale="m",this.width="m",this.type="click",this.items=[],this.sorted=!1,this.sortItems=t=>t.sort((t,e)=>t.position-e.position).concat.apply([],this.items.map(t=>t.items))}connectedCallback(){["start","center","end"].includes(this.alignment)||(this.alignment="start"),["s","m","l"].includes(this.scale)||(this.scale="m"),["s","m","l"].includes(this.width)||(this.width="m"),["hover","click"].includes(this.type)||(this.type="hover")}componentDidLoad(){this.trigger=this.el.querySelector("[slot=dropdown-trigger]"),this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return e(i,null,e("slot",{name:"dropdown-trigger","aria-haspopup":"true","aria-expanded":this.active.toString()}),e("div",{class:"calcite-dropdown-wrapper",role:"menu"},e("slot",null)))}openDropdown(t){"dropdown-trigger"===t.target.getAttribute("slot")&&(this.openCalciteDropdown(),t.preventDefault())}closeCalciteDropdownOnClick(t){this.active&&t.target.offsetParent!==this.el&&this.closeCalciteDropdown()}closeCalciteDropdownOnEvent(){this.closeCalciteDropdown()}keyDownHandler(t){if("dropdown-trigger"===t.target.getAttribute("slot"))if("BUTTON"!==t.target.nodeName&&"CALCITE-BUTTON"!==t.target.nodeName)switch(t.keyCode){case c:case a:this.openCalciteDropdown();break;case n:this.closeCalciteDropdown()}else(t.keyCode===n||t.shiftKey&&t.keyCode===l)&&this.closeCalciteDropdown()}mouseoverHandler(){"hover"===this.type&&this.openCalciteDropdown()}mouseoffHandler(){"hover"===this.type&&this.closeCalciteDropdown()}calciteDropdownItemKeyEvent(t){let e=t.detail.item,i="A"!==e.target.nodeName?e.target:e.target.parentNode,o=0===this.itemIndex(i),s=this.itemIndex(i)===this.items.length-1;switch(e.keyCode){case l:s&&!e.shiftKey||o&&e.shiftKey?this.closeCalciteDropdown():e.shiftKey?this.focusPrevItem(i):this.focusNextItem(i);break;case p:this.focusNextItem(i);break;case m:this.focusPrevItem(i);break;case d:this.focusFirstItem();break;case h:this.focusLastItem()}}calciteDropdownMouseover(t){t.detail.target.focus()}registerCalciteDropdownGroup(t){this.items.push({items:t.detail.items,position:t.detail.position})}closeCalciteDropdown(){this.active=!1,this.trigger.focus()}focusOnFirstActiveOrFirstItem(){this.getFocusableElement(this.items.find(t=>t.active)||this.items[0])}focusFirstItem(){this.getFocusableElement(this.items[0])}focusLastItem(){this.getFocusableElement(this.items[this.items.length-1])}focusNextItem(t){const e=this.itemIndex(t);this.getFocusableElement(this.items[e+1]||this.items[0])}focusPrevItem(t){const e=this.itemIndex(t);this.getFocusableElement(this.items[e-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}getFocusableElement(t){if(!t)return;const e=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;u(e)}openCalciteDropdown(){this.active=!this.active,this.active&&setTimeout(()=>this.focusOnFirstActiveOrFirstItem(),50)}get el(){return o(this)}};g.style=":host([hidden]){display:none}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;max-height:90vh;overflow-y:auto;visibility:visible;pointer-events:initial}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out, max-height 0.15s;transition:all 0.15s ease-in-out, max-height 0.15s;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);pointer-events:none}:host-context([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([alignment=end]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper{right:50%;left:0;-webkit-transform:translateX(50%);transform:translateX(50%)}";const f=class{constructor(e){t(this,e),this.selectionMode="single",this.items=[],this.dropdownGroupId=`calcite-dropdown-group-${r()}`,this.sortItems=t=>t.sort((t,e)=>t.position-e.position).map(t=>t.item),this.calciteDropdownItemHasChanged=s(this,"calciteDropdownItemHasChanged",7),this.registerCalciteDropdownGroup=s(this,"registerCalciteDropdownGroup",7)}connectedCallback(){["multi","single","none"].includes(this.selectionMode)||(this.selectionMode="single")}componentDidLoad(){this.groupPosition=this.getGroupPosition(),this.items=this.sortItems(this.items),this.registerCalciteDropdownGroup.emit({items:this.items,position:this.groupPosition,groupId:this.dropdownGroupId})}render(){const t=this.groupTitle?e("span",{class:"dropdown-title"},this.groupTitle):null;return e(i,null,t,e("slot",null))}registerCalciteDropdownItem(t){this.items.push({item:t.target,position:t.detail.position}),this.requestedDropdownItem=t.detail.requestedDropdownItem}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteDropdownItemHasChanged.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}get el(){return o(this)}};f.style=":host([hidden]){display:none}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:0.875rem;line-height:1.5}";const b=class{constructor(e){t(this,e),this.active=!1,this.dropdownItemId=`calcite-dropdown-item-${r()}`,this.selectionMode=w(this.el,"selection-mode","single"),this.calciteDropdownItemKeyEvent=s(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownItemMouseover=s(this,"calciteDropdownItemMouseover",7),this.calciteDropdownItemSelected=s(this,"calciteDropdownItemSelected",7),this.closeCalciteDropdown=s(this,"closeCalciteDropdown",7),this.registerCalciteDropdownItem=s(this,"registerCalciteDropdownItem",7)}async setFocus(){this.el.focus()}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.registerCalciteDropdownItem.emit({position:this.itemPosition})}render(){const t=this.getAttributes(),o=w(this.el,"scale","m"),s="s"===o||"m"===o?"s":"m",r=e("calcite-icon",{class:"dropdown-item-icon-start",icon:this.iconStart,scale:s}),n=e("calcite-icon",{class:"dropdown-item-icon-end",icon:this.iconEnd,scale:s}),a=this.iconStart&&this.iconEnd?[r,e("slot",null),n]:this.iconStart?[r,e("slot",null)]:this.iconEnd?[e("slot",null),n]:e("slot",null),c=this.href?e("a",Object.assign({},t),a):a;return e(i,{tabindex:"0",role:"menuitem","selection-mode":this.selectionMode,"aria-selected":this.active.toString(),isLink:this.href},"multi"===this.selectionMode?e("calcite-icon",{class:"dropdown-item-check-icon",scale:"s",icon:"check"}):null,c)}onClick(){this.emitRequestedItem()}onMouseover(t){this.calciteDropdownItemMouseover.emit(t)}keyDownHandler(t){switch(t.keyCode){case c:case a:this.emitRequestedItem(),t.path&&"A"===t.path[0].nodeName&&t.click();break;case n:this.closeCalciteDropdown.emit();break;case l:case m:case p:case d:case h:this.calciteDropdownItemKeyEvent.emit({item:t})}t.preventDefault()}registerCalciteDropdownGroup(t){this.currentDropdownGroup=t.detail.groupId}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.dropdownItemId===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.dropdownItemId===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.currentDropdownGroup&&(this.active=!1);break;case"none":this.active=!1}}emitRequestedItem(){this.calciteDropdownItemSelected.emit({requestedDropdownItem:this.dropdownItemId,requestedDropdownGroup:this.currentDropdownGroup}),this.closeCalciteDropdown.emit()}getAttributes(){let t=["icon-start","icon-end","active","hasText","isLink","dir","id","theme"];return Array.from(this.el.attributes).filter(e=>e&&!t.includes(e.name)).reduce((t,{name:e,value:i})=>Object.assign(Object.assign({},t),{[e]:i}),{})}getItemPosition(){const t=this.el.closest("calcite-dropdown-group");return Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el)}get el(){return o(this)}};b.style='@charset "UTF-8";:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:"•";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:"•";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host(:hover),:host(:focus),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host-context([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-blue-1)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-blue-1)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([selection-mode=none]:not([islink])),:host([selection-mode=none][isLink]) a{padding-left:1rem}:host([dir=rtl][selection-mode=none]:not([islink])),:host([dir=rtl][selection-mode=none][isLink]) a{padding-right:1rem}:host .dropdown-item-check-icon{position:absolute;left:0.8571428571rem;opacity:0;-webkit-transform:scale(0.9);transform:scale(0.9);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host-context([dir=rtl]) .dropdown-item-check-icon{left:unset;right:0.8571428571rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-blue-1);opacity:1}:host .dropdown-item-icon-start{margin-right:1rem}:host .dropdown-item-icon-end{margin-left:auto;padding-left:1rem}:host-context([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}:host-context([dir=rtl]) .dropdown-item-icon-start{margin-left:1rem;margin-right:0}:host-context([dir=rtl]) .dropdown-item-icon-end{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}';export{g as calcite_dropdown,f as calcite_dropdown_group,b as calcite_dropdown_item}