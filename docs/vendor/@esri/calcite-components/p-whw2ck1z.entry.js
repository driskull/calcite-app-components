import{r as s,c as t,h as i,H as h,g as a}from"./p-5069360b.js";import{g as e,a as l}from"./p-d60a3994.js";import{U as r,R as n,D as c,L as o,P as u,a as d,H as _,b as m}from"./p-031cbc0f.js";import{g as b}from"./p-c526d604.js";const p=class{constructor(i){s(this,i),this.theme="light",this.disabled=!1,this.min=0,this.max=100,this.value=null,this.snap=!0,this.step=1,this.guid=`calcite-loader-${b()}`,this.isRange=!1,this.tickValues=[],this.activeProp="value",this.calciteSliderUpdate=t(this,"calciteSliderUpdate",7)}componentWillLoad(){this.isRange=!(!this.maxValue&&0!==this.maxValue),this.tickValues=this.generateTickValues(),this.value=this.bound(this.value),this.snap&&(this.value=this.getClosestStep(this.value)),this.calciteSliderUpdate.emit()}render(){const s=this.el.id||this.guid,t=e(this.el),a=l(this.el),r=this.minValue||this.min,n=this.maxValue||this.value,c=this.isRange?"maxValue":"value";return i(h,{dir:t,theme:a,id:s,"is-range":this.isRange,style:{"--calcite-slider-range-max":`${100-100*this.getUnitInterval(n)}%`,"--calcite-slider-range-min":`${100*this.getUnitInterval(r)}%`}},i("div",{class:"slider__track"},i("div",{class:"slider__track__range"}),i("div",{class:"slider__ticks"},this.tickValues.map(s=>i("span",{class:{slider__tick:!0,"slider__tick--active":s>=r&&s<=n},style:{"--calcite-slider-tick-offset":`${100*this.getUnitInterval(s)}%`}},this.labelTicks?i("span",{class:{slider__tick__label:!0,"slider__tick__label--min":s===this.min,"slider__tick__label--max":s===this.max}},s):"")))),this.isRange?i("button",{ref:s=>this.minHandle=s,onFocus:()=>this.activeProp="minValue",onBlur:()=>this.activeProp=null,onMouseDown:()=>this.dragStart("minValue"),onTouchStart:s=>this.dragStart("minValue",s),role:"slider","aria-orientation":"horizontal","aria-label":this.minLabel,"aria-valuenow":this.minValue,"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,class:{slider__thumb:!0,"slider__thumb--min":!0,"slider__thumb--active":"minValue"===this.dragProp,"slider__thumb--precise":this.precise}},i("span",{class:"slider__handle"}),this.labelHandles?i("span",{class:"slider__handle__label","aria-hidden":"true"},this.minValue):""):"",i("button",{ref:s=>this.maxHandle=s,onFocus:()=>this.activeProp=c,onBlur:()=>this.activeProp=null,onMouseDown:()=>this.dragStart(c),onTouchStart:s=>this.dragStart(c,s),role:"slider","aria-orientation":"horizontal","aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-valuenow":this[c],"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,class:{slider__thumb:!0,"slider__thumb--max":!0,"slider__thumb--active":this.dragProp===c,"slider__thumb--precise":this.precise}},i("span",{class:"slider__handle"}),this.labelHandles?i("span",{class:"slider__handle__label","aria-hidden":"true"},this[c]):""))}keyDownHandler(s){const t=this[this.activeProp];switch(s.keyCode){case r:case n:s.preventDefault(),this[this.activeProp]=this.bound(t+this.step,this.activeProp),this.calciteSliderUpdate.emit();break;case c:case o:s.preventDefault(),this[this.activeProp]=this.bound(t-this.step,this.activeProp),this.calciteSliderUpdate.emit();break;case u:this.pageStep&&(s.preventDefault(),this[this.activeProp]=this.bound(t+this.pageStep,this.activeProp),this.calciteSliderUpdate.emit());break;case d:this.pageStep&&(s.preventDefault(),this[this.activeProp]=this.bound(t-this.pageStep,this.activeProp),this.calciteSliderUpdate.emit());break;case _:s.preventDefault(),this[this.activeProp]=this.bound(this.min,this.activeProp),this.calciteSliderUpdate.emit();break;case m:s.preventDefault(),this[this.activeProp]=this.bound(this.max,this.activeProp),this.calciteSliderUpdate.emit()}}clickHandler(s){const t=this.translate(s.clientX||s.pageX);let i="value";this.isRange&&(i=Math.abs(this.maxValue-t)<Math.abs(this.minValue-t)?"maxValue":"minValue"),this[i]=this.bound(t,i),this.calciteSliderUpdate.emit(),("minValue"===i?this.minHandle:this.maxHandle).focus()}generateTickValues(){const s=[];let t=this.min;for(;this.ticks&&t<this.max+this.ticks;)s.push(t),t+=this.ticks;return s}dragStart(s,t){t&&t.preventDefault(),this.dragListener&&this.dragEnd(),this.dragProp=s,this.activeProp=s,this.dragListener=this.dragListener||this.dragUpdate.bind(this),document.addEventListener("mousemove",this.dragListener),document.addEventListener("touchmove",this.dragListener,{capture:!1}),document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),!1),document.addEventListener("touchcancel",this.dragEnd.bind(this))}dragUpdate(s){if(s.preventDefault(),s.stopPropagation(),this.dragProp){const t=this.translate(s.clientX||s.pageX);this[this.dragProp]=this.bound(t,this.dragProp),this.calciteSliderUpdate.emit()}}dragEnd(){this.dragProp=null,document.removeEventListener("mousemove",this.dragListener),document.removeEventListener("touchmove",this.dragListener)}bound(s,t){return s=Math.min(s,this.max),s=Math.max(s,this.min),"maxValue"===t&&(s=Math.max(s,this.minValue)),"minValue"===t&&(s=Math.min(s,this.maxValue)),s}translate(s){const t=this.max-this.min,{left:i,width:h}=this.el.getBoundingClientRect();let a=this.bound(this.min+t*((s-i)/h));return this.snap&&this.step&&(a=this.getClosestStep(a)),a}getClosestStep(s){if(s=this.bound(s),this.step){const t=Math.round(s/this.step)*this.step;s=this.bound(t)}return s}getUnitInterval(s){return((s=this.bound(s))-this.min)/(this.max-this.min)}get el(){return a(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-pressed:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-pressed:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-pressed:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-pressed:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-pressed:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-pressed:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-pressed:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-pressed:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-pressed:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-pressed:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-slider-tick:#959595;--calcite-slider-label:#6a6a6a;--calcite-slider-track:#d4d4d4;--calcite-slider-handle:#fff;--calcite-slider-handle-border:#6a6a6a;display:block;padding:7px 0;margin:7px 0;position:relative}:host([theme=dark]){--calcite-slider-tick:#6a6a6a;--calcite-slider-label:#9f9f9f;--calcite-slider-track:#4a4a4a;--calcite-slider-handle:#2b2b2b;--calcite-slider-handle-border:#9f9f9f}:host([disabled]){opacity:.5;pointer-events:none}:host([label-handles]),:host([precise]){margin-top:21px}:host([label-ticks]),:host([precise][is-range]){margin-bottom:21px}:host([precise][label-handles]){margin-top:35px}:host([precise][label-handles][is-range]){margin-bottom:35px}.slider__thumb{position:absolute;right:var(--calcite-slider-range-max);height:28px;width:28px;margin:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:3}.slider__thumb--min{right:auto;left:var(--calcite-slider-range-min)}.slider__handle{position:absolute;top:0;left:0;height:14px;width:14px;margin:7px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-slider-handle);border:2px solid var(--calcite-slider-handle-border);-webkit-transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease,-webkit-box-shadow .25s ease}.slider__handle__label{position:absolute;left:0;bottom:28px;width:28px;height:.75em;font-size:.8125rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-slider-label);text-align:center}.slider__thumb:hover .slider__handle{border-width:3px;border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.1);box-shadow:0 0 16px 0 rgba(0,0,0,.1)}.slider__thumb--active,.slider__thumb:focus{outline:none;z-index:4}.slider__thumb--active .slider__handle,.slider__thumb:focus .slider__handle{background-color:var(--calcite-ui-blue);border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.2);box-shadow:0 0 16px 0 rgba(0,0,0,.2)}.slider__thumb--precise{margin-top:-28px}.slider__thumb--precise:after{content:\"\";display:block;position:absolute;top:14px;left:50%;width:2px;height:7px;background-color:var(--calcite-slider-handle-border);margin-left:-1px;margin-top:7px;z-index:2}.slider__thumb--active.slider__thumb--precise:after,.slider__thumb:focus.slider__thumb--precise:after,.slider__thumb:hover.slider__thumb--precise:after{background-color:var(--calcite-ui-blue)}.slider__thumb--precise.slider__thumb--min{margin-top:-2px}.slider__thumb--precise.slider__thumb--min .slider__handle__label{bottom:unset;top:28px}.slider__thumb--precise.slider__thumb--min:after{top:0;margin-top:0}.slider__track{height:2px;border-radius:0;z-index:2;background-color:var(--calcite-slider-track);-webkit-transition:all .25s ease-in;transition:all .25s ease-in;position:relative}.slider__track__range{position:absolute;top:0;right:var(--calcite-slider-range-max);left:var(--calcite-slider-range-min);height:2px;background-color:var(--calcite-ui-blue)}.slider__tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-slider-tick-offset);margin-left:-3px;border:1px solid var(--calcite-slider-handle);border-right-width:2px;border-left-width:2px;background-color:var(--calcite-slider-tick)}.slider__tick--active{background-color:var(--calcite-ui-blue)}.slider__tick__label{position:absolute;font-size:.8125rem;line-height:1.5;font-weight:500;color:var(--calcite-slider-label);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.slider__tick__label--min{left:0;margin:14px -3px;text-align:left}.slider__tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right}"}};export{p as calcite_slider};