import{_ as R}from"./MonacoEditor.vuevuetypescriptsetuptruelang-5c83fd0a.js";import{_ as W}from"./Breadcrumb-731a6814.js";import{g as L,M as $}from"./splitpanes.es-57df8e4f.js";import{aB as B,aC as A,aD as G,d as F,p as Q,u as j,n as H,r as M,s as O,a as U,G as J,i as P,t as X,aE as Y,Y as q,aF as z,aG as K,o as Z,c as ee,b as V,e as k,x as w,j as te,f as D,g as h,J as ne,S as ae,_ as ie}from"./index-66bea2e9.js";import{u as oe}from"./markdown-44c82647.js";import{t as se}from"./truncate-2f04ae7b.js";import"./stringToArray-243d75d5.js";var re=function(){return B.Date.now()};const b=re;var ue="Expected a function",ce=Math.max,le=Math.min;function de(y,u,o){var l,s,i,a,t,c,v=0,T=!1,d=!1,_=!0;if(typeof y!="function")throw new TypeError(ue);u=A(u)||0,G(o)&&(T=!!o.leading,d="maxWait"in o,i=d?ce(A(o.maxWait)||0,u):i,_="trailing"in o?!!o.trailing:_);function x(e){var f=l,E=s;return l=s=void 0,v=e,a=y.apply(E,f),a}function N(e){return v=e,t=setTimeout(p,u),T?x(e):a}function S(e){var f=e-c,E=e-v,I=u-f;return d?le(I,i-E):I}function C(e){var f=e-c,E=e-v;return c===void 0||f>=u||f<0||d&&E>=i}function p(){var e=b();if(C(e))return n(e);t=setTimeout(p,S(e))}function n(e){return t=void 0,_&&l?x(e):(l=s=void 0,a)}function r(){t!==void 0&&clearTimeout(t),v=0,l=c=s=t=void 0}function g(){return t===void 0?a:n(b())}function m(){var e=b(),f=C(e);if(l=arguments,s=this,c=e,f){if(t===void 0)return N(c);if(d)return clearTimeout(t),t=setTimeout(p,u),x(c)}return t===void 0&&(t=setTimeout(p,u)),a}return m.cancel=r,m.flush=g,m}const me={class:"page-container container-fluid"},fe={class:"main"},ve={class:"time"},_e=["innerHTML"],pe=F({__name:"NoteEditView",setup(y){const u=Q(),{t:o}=j(),l=H(),s=M(l.params.id),i=M(),a=M(""),t=M(""),{app:c}=O(U()),v=J(()=>{var n;return(n=i.value)!=null&&n.deletedAt?["/notes","/notes/trash"]:["/notes"]}),{render:T}=oe(c);let d=!1;function _(){return s.value==="create"}const x=de(()=>{S({id:_()?"":s.value,input:{content:a.value,title:se(a.value,{length:100,omission:""})}})},500),N=()=>{ne(a,async n=>{t.value=await T(n),x()})};_()?N():P({handle:async(n,r)=>{if(r)X(o(r),"error");else{if(d)return;i.value=n.note,a.value=n.note.content,t.value=await T(a.value),d=!0,N()}},document:Y,variables:()=>({id:s.value}),appApi:!0});const{mutate:S,onDone:C}=q({document:z,appApi:!0});C(n=>{var g,m;i.value=n.data.saveNote,_()&&(s.value=(g=i.value)==null?void 0:g.id,K(u,`/notes/${(m=i.value)==null?void 0:m.id}`))});function p(){var r;const n=(r=i==null?void 0:i.value)==null?void 0:r.updatedAt;return n?`(${o("updated_at")}: ${ae(n)})`:""}return(n,r)=>{const g=W,m=R;return Z(),ee("div",me,[V("div",fe,[k(g,{paths:h(v)},{current:w(()=>[te(D(s.value==="create"?h(o)("create"):h(o)("edit")),1),V("span",ve,D(p()),1)]),_:1},8,["paths"]),k(h($),{class:"panel-container"},{default:w(()=>[k(h(L),null,{default:w(()=>[k(m,{language:"html",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e)},null,8,["modelValue"])]),_:1}),k(h(L),{class:"markdown-panel"},{default:w(()=>[V("div",{class:"md-container",innerHTML:t.value},null,8,_e)]),_:1})]),_:1})])])}}});const Ce=ie(pe,[["__scopeId","data-v-8eaa310c"]]);export{Ce as default};
