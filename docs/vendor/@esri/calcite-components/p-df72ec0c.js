const t=(t,n)=>{let r=new Map,s=t;const e=(t,n)=>{Array.isArray(t)?[...t].forEach(t=>{n[t]=s[t]}):n[t]=Object.assign({},s)},i=(t,n)=>(r.has(t)||(r.set(t,n),e(n,t)),()=>{r.has(t)&&r.delete(t)});return{Provider:({state:t},n)=>(s=t,r.forEach(e),n),Consumer:(t,r)=>n(i,r[0]),injectProps:(t,n)=>{const s=t.prototype,e=s.connectedCallback,o=s.disconnectedCallback;s.connectedCallback=function(){if(i(this,n),e)return e.call(this)},s.disconnectedCallback=function(){r.delete(this),o&&o.call(this)}}}};export{t as c};