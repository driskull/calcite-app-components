import{r as e,c as t,h as i,H as s,g as r}from"./p-b0b0104a.js";import{g as o,a as n}from"./p-13cfbb21.js";const a={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",space:" "},c=class{constructor(i){e(this,i),this.scale="m",this.hiddenInput=(()=>{const e=document.createElement("input");return e.type="hidden",this.el.appendChild(e),e})(),this.calciteRadioGroupChange=t(this,"calciteRadioGroupChange",7)}handleNameChange(e){this.hiddenInput.name=e}handleSelectedItemChange(e,t){if(e===t)return;const i=this.getItems(),s=Array.from(i).filter(t=>t===e).pop();s?(this.selectItem(s),this.calciteRadioGroupChange.emit()):i[0]&&(i[0].tabIndex=0)}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale="m");const e=this.getItems();let t=Array.from(e).filter(e=>e.checked).pop();t?this.selectItem(t):e[0]&&(e[0].tabIndex=0);const{hiddenInput:i,name:s}=this;s&&(i.name=s),t&&(i.value=t.value)}componentDidLoad(){this.hasLoaded=!0}render(){return i(s,{role:"radiogroup"},i("slot",null))}handleClick(e){"calcite-radio-group-item"===e.target.localName&&this.selectItem(e.target)}handleSelected(e){this.hasLoaded&&(e.stopPropagation(),e.preventDefault(),this.selectItem(e.target))}handleKeyDown(e){const{key:t}=e;if(-1===Object.values(a).indexOf(t))return;e.preventDefault();const{el:i,selectedItem:s}=this,r=o(i),n=("rtl"===r?t===a.right:t===a.left)||t===a.up,c=this.getItems();let h=-1;if(c.forEach((e,t)=>{e===s&&(h=t)}),n){const e=c.item(-1===h||0===h?c.length-1:h-1);this.selectItem(e)}else if(("rtl"===r?t===a.left:t===a.right)||t===a.down){const e=-1===h?c.item(1):c.item(h+1)||c.item(0);this.selectItem(e)}else t!==a.space||this.selectItem(e.target)}async setFocus(){var e;null===(e=this.selectedItem||this.getItems()[0])||void 0===e||e.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(e){if(e===this.selectedItem)return;const t=this.getItems();let i=null;t.forEach(t=>{const s=t.value===e.value;(s&&!t.checked||!s&&t.checked)&&(t.checked=s),t.tabIndex=s?0:-1,s&&(i=t)}),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}syncWithInputProxy(e){this.hiddenInput.value=e?e.value:""}get el(){return r(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};c.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";const h=class{constructor(i){e(this,i),this.checked=!1,this.mutationObserver=this.getMutationObserver(),this.calciteRadioGroupItemChange=t(this,"calciteRadioGroupItemChange",7)}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){let e=this.el.querySelector('input[slot="input"]');e&&(this.value=e.value,this.checked=e.checked,this.mutationObserver.observe(e,{attributes:!0})),this.inputProxy=e}disconnectedCallback(){this.mutationObserver.disconnect()}componentDidLoad(){const e=this.el.querySelector("label");this.useFallback=!e||""===e.textContent}render(){const{checked:e,useFallback:t,value:r}=this,o=n(this.el,"scale","m");return i(s,{role:"radio","aria-checked":e.toString(),scale:o},i("label",null,i("slot",null,t?r:""),i("slot",{name:"input"})))}getMutationObserver(){return new MutationObserver(()=>this.syncFromExternalInput())}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked","true"):this.inputProxy.removeAttribute("checked"))}get el(){return r(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};h.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);cursor:pointer;line-height:1.25;margin:0.25rem -1px 0 0px;border:1px solid var(--calcite-ui-border-1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;cursor:pointer}:host([scale=s]){font-size:0.8125rem;line-height:1.5;padding:0.25rem 0.75rem}:host([scale=m]){font-size:0.9375rem;line-height:1.5;padding:0.4rem 1rem}:host([scale=l]){font-size:1rem;line-height:1.5;padding:0.5rem 1.5rem}:host(:hover){background-color:var(--calcite-ui-foreground-2)}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host([checked]){background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-background);cursor:default}label{pointer-events:none}::slotted(input){display:none}";export{c as calcite_radio_group,h as calcite_radio_group_item}