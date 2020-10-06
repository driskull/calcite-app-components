import{r as t,h as n,g as i}from"./p-268dca3f.js";import{g as h}from"./p-46044fd3.js";function a(t){return t<0?-1:1}function s(t,n,i){const h=n[0]-t[0];return h?(3*(n[1]-t[1])/h-i)/2:i}function r(t,n,i,h,a){const[s,r]=t,[e,o]=n,$=(e-s)/3;return`C ${a([s+$,r+$*i]).join(",")} ${a([e-$,o-$*h]).join(",")} ${a([e,o]).join(",")}`}const e=class{constructor(n){t(this,n),this.data=[],this.width=300,this.height=100,this.maskId="calcite-graph-mask-"+h()}render(){const{data:t,width:i,height:h,highlightMax:e,highlightMin:o}=this,$=this.maskId;if(!t||0===t.length)return n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${h}`,width:i,height:h});const{min:c,max:d}=function(t){const[n,i]=t[0];return t.reduce(({min:t,max:n},[i,h])=>({min:[Math.min(t[0],i),Math.min(t[1],h)],max:[Math.max(n[0],i),Math.max(n[1],h)]}),{min:[n,i],max:[n,i]})}(t),g=function({width:t,height:n,min:i,max:h}){const a=h[0]-i[0],s=h[1]-i[1];return i=>[i[0]/a*t,n-i[1]/s*n]}({min:c,max:d,width:i,height:h}),[p]=g([o,d[1]]),[l]=g([e,d[1]]),m=function({data:t,min:n,max:i,t:h}){if(0===t.length)return"";const[e,o]=h(t[0]),[$,c]=h(n),[d]=h(i);let g,p,l;const m=t.reduce((n,i,e)=>{if(p=t[e-2],l=t[e-1],e>1){const t=function(t,n,i){const h=n[0]-t[0],s=i[0]-n[0],r=(n[1]-t[1])/(h||s<0&&0),e=(i[1]-n[1])/(s||h<0&&0),o=(r*s+e*h)/(h+s);return(a(r)+a(e))*Math.min(Math.abs(r),Math.abs(e),.5*Math.abs(o))||0}(p,l,i),e=void 0===g?s(p,l,t):g,o=r(p,l,e,t,h);return g=t,`${n} ${o}`}return n},`M ${$},${c} L ${$},${o} L ${e},${o}`),u=t[t.length-1];return`${m} ${r(l,u,g,s(l,u,g),h)} L ${d},${c} Z`}({data:t,min:c,max:d,t:g});return n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${h}`,width:i,height:h},void 0!==o?n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${h}`,width:i,height:h},n("mask",{id:$+"1",x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n              M 0,0\n              L ${p-1},0\n              L ${p-1},${h}\n              L 0,${h}\n              Z\n            `})),n("mask",{id:$+"2",x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n              M ${p+1},0\n              L ${l-1},0\n              L ${l-1},${h}\n              L ${p+1}, ${h}\n              Z\n            `})),n("mask",{id:$+"3",x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n                  M ${l+1},0\n                  L ${i},0\n                  L ${i},${h}\n                  L ${l+1}, ${h}\n                  Z\n                `})),n("path",{d:m,class:"graph-path",mask:`url(#${$}1)`}),n("path",{d:m,class:"graph-path--highlight",mask:`url(#${$}2)`}),n("path",{d:m,class:"graph-path",mask:`url(#${$}3)`})):n("path",{d:m,class:"graph-path"}))}get el(){return i(this)}};e.style=":host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}";export{e as calcite_graph}