import{r as t,c as a,h as e,g as i}from"./p-cdf3f581.js";import"./p-fb698d64.js";import{g as c}from"./p-933b240c.js";import"./p-2152cae9.js";import"./p-fc8feabd.js";import{m as r,d as s,s as o,h as l,g as n,k as p,i as h,a as d,c as f,b,e as u,f as g,j as m,L as v}from"./p-5a0c9fc9.js";import{S as k}from"./p-14b00fa9.js";var x;!function(t){t.grip="grip"}(x||(x={}));const y=class{constructor(e){t(this,e),this.calciteListChange=a(this,"calciteListChange",7),this.calciteListOrderChange=a(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.textFilterPlaceholder="Filter results",this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.deselectSiblingItems=s.bind(this),this.selectSiblings=o.bind(this),this.handleFilter=l.bind(this),this.getItemData=n.bind(this),this.keyDownHandler=t=>{const a=t.composedPath().find(t=>{var a;return null===(a=t.dataset)||void 0===a?void 0:a.jsHandle}),e=t.composedPath().find(t=>{var a;return"calcite-value-list-item"===(null===(a=t.tagName)||void 0===a?void 0:a.toLowerCase())});if(!a||!e.handleActivated)return void p.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:i,items:r}=this,s="ArrowDown"===t.key?1:-1,o=r.indexOf(e),l=c(o+s,r.length);if(l===r.length-1)i.appendChild(e);else{const t=i.children[l];i.insertBefore(e,t===e.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame(()=>a.focus()),e.handleActivated=!0}}connectedCallback(){h.call(this),d.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){f.call(this),this.cleanUpDragAndDrop()}calciteListItemChangeHandler(t){b.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){u.call(this,t)}setUpItems(){g.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&(this.sortable=k.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map(t=>t.value);this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.dragEnabled&&this.sortable.destroy()}async getSelectedItems(){return this.selectedValues}async setFocus(){return m.call(this)}getIconType(){let t=null;return this.dragEnabled&&(t=x.grip),t}render(){return e(v,{props:this,onKeyDown:this.keyDownHandler})}get el(){return i(this)}};y.style=":host{box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{box-sizing:border-box}:host{align-items:stretch;background-color:var(--calcite-app-background-clear);display:flex;flex:0 0 auto;flex-flow:column;position:relative}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#00619b;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}calcite-value-list-item:last-of-type{box-shadow:none}header{background-color:var(--calcite-app-background);display:flex;justify-content:flex-end;align-items:center;margin-bottom:var(--calcite-app-cap-spacing-quarter);box-shadow:0 -1px 0 var(--calcite-app-border) inset}header.sticky{position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}calcite-scrim{display:flex;flex:0 0 auto;flex-flow:column;pointer-events:none}slot[name=menu-actions]::slotted(calcite-action){padding:0 var(--calcite-app-side-spacing-half)}";export{y as calcite_value_list}