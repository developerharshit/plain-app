import{d as V,G as T,o as c,c as h,b as d,w as g,y as k,g as b,F as x,z as B,f as S,r as y,bJ as M,M as $,e as C,O as I,br as Z,ad as D,_ as F,Y as N,ac as z,T as E,x as A,u as P,t as R,a0 as H}from"./index-66bea2e9.js";import{_ as K}from"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";const O={class:"pagination"},j=["onClick"],G={key:0,class:"page-link"},J=["onClick"],L=["onClick"],_e=V({__name:"VPagination",props:{total:{type:Number,default:0},limit:{type:Number,default:50},rangeSize:{type:Number,default:2},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(n,{emit:a}){const e=n;function o(l){a("update:modelValue",l)}const t=T(()=>Math.ceil(e.total/e.limit)),i=T(()=>{const l=[],m=5+e.rangeSize*2;let s=t.value<=m?1:e.modelValue-e.rangeSize,r=t.value<=m?t.value:e.modelValue+e.rangeSize;if(r=r>t.value?t.value:r,s=s<1?1:s,t.value>m){const q=s-1<3,w=t.value-r<3;if(q){r=m-2;for(let u=1;u<s;u++)l.push(u)}else l.push(1),l.push(null);if(w){s=t.value-(m-3);for(let u=s;u<=t.value;u++)l.push(u)}else{for(let u=s;u<=r;u++)l.push(u);l.push(null),l.push(t.value)}}else for(let q=s;q<=r;q++)l.push(q);return l}),v=T(()=>e.modelValue>1),f=T(()=>e.modelValue<t.value);function p(){v.value&&a("update:modelValue",e.modelValue-1)}function _(){f.value&&a("update:modelValue",e.modelValue+1)}return(l,m)=>(c(),h("ul",O,[d("li",{class:k(["page-item",{disabled:!b(v)}])},[d("a",{class:"page-link",href:"#",onClick:g(p,["prevent"])},"«",8,j)],2),(c(!0),h(x,null,B(b(i),s=>(c(),h("li",{class:k(["page-item",{disabled:s===null,active:s===n.modelValue}])},[s===null?(c(),h("span",G,"···")):(c(),h("a",{key:1,class:"page-link",href:"#",onClick:g(r=>o(s),["prevent"])},S(s),9,J))],2))),256)),d("li",{class:k(["page-item",{disabled:!b(f)}])},[d("a",{class:"page-link",href:"#",onClick:g(_,["prevent"])},"»",8,L)],2)]))}}),Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=d("path",{fill:"currentColor",d:"M4 19q-.425 0-.713-.288T3 18q0-.425.288-.713T4 17h4q.425 0 .713.288T9 18q0 .425-.288.713T8 19H4ZM4 7q-.425 0-.713-.288T3 6q0-.425.288-.713T4 5h8q.425 0 .713.288T13 6q0 .425-.288.713T12 7H4Zm8 14q-.425 0-.713-.288T11 20v-4q0-.425.288-.713T12 15q.425 0 .713.288T13 16v1h7q.425 0 .713.288T21 18q0 .425-.288.713T20 19h-7v1q0 .425-.288.713T12 21Zm-4-6q-.425 0-.713-.288T7 14v-1H4q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h3v-1q0-.425.288-.713T8 9q.425 0 .713.288T9 10v4q0 .425-.288.713T8 15Zm4-2q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11h8q.425 0 .713.288T21 12q0 .425-.288.713T20 13h-8Zm4-4q-.425 0-.713-.288T15 8V4q0-.425.288-.713T16 3q.425 0 .713.288T17 4v1h3q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-3v1q0 .425-.288.713T16 9Z"},null,-1),U=[Y];function W(n,a){return c(),h("svg",Q,U)}const X={name:"material-symbols-tune-rounded",render:W},ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=d("path",{fill:"currentColor",d:"m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"},null,-1),se=[te];function ae(n,a){return c(),h("svg",ee,se)}const ne={name:"material-symbols-search-rounded",render:ae},le={class:"search-input"},oe=["value","placeholder"],ie={class:"dropdown-menu search-panel"},re=V({__name:"SearchInput",props:{modelValue:{type:String,default:""},search:{type:Function,required:!0}},emits:["update:modelValue"],setup(n,{emit:a}){const e=n,o=y(!1),t=y(null),i=y(!1),v=p=>{a("update:modelValue",p.target.value)};function f(){o.value=!0}return(p,_)=>{const l=ne,m=X,s=M("click-away");return $((c(),h("div",le,[C(l,{class:"bi bi-search"}),d("input",{ref_key:"inputRef",ref:t,type:"search","data-search-input":"true",value:n.modelValue,onInput:v,onFocus:f,onBlur:_[0]||(_[0]=r=>o.value=!1),onKeyup:_[1]||(_[1]=I((...r)=>e.search&&e.search(...r),["enter"])),placeholder:p.$t("search_hint")},null,40,oe),C(m,{class:"bi bi-tune",onClick:_[2]||(_[2]=g(()=>i.value=!i.value,["prevent"]))}),$(d("div",ie,[Z(p.$slots,"filters",{},void 0,!0)],512),[[D,i.value]])])),[[s,()=>i.value=!1]])}}});const me=F(re,[["__scopeId","data-v-76ff2b07"]]),ue=["disabled"],ce=V({__name:"DeleteItemsConfirm",props:{gql:{type:Object,required:!0},done:{type:Function,required:!0},variables:{type:Function,required:!0}},setup(n){const a=n,{mutate:e,loading:o,onDone:t}=N({document:a.gql,appApi:!0});function i(){e(a.variables())}return t(()=>{a.done(),z()}),(v,f)=>{const p=K;return c(),E(p,{class:"delete-modal",title:v.$t("confirm_to_delete")},{action:A(()=>[d("button",{type:"button",disabled:b(o),class:"btn",onClick:i},S(v.$t("delete")),9,ue)]),_:1},8,["title"])}}}),he=n=>{const a=y(!1);function e(){a.value?n.value.forEach(o=>{o.checked=!0}):n.value.forEach(o=>{o.checked=!1})}return{selectAll:a,toggleSelect:e}},ve=(n,a,e)=>{const{t:o}=P();return{deleteItems:()=>{const t=e.value.filter(i=>i.checked);if(t.length===0){R(o("select_first"),"error");return}H(ce,{gql:n,variables:()=>({ids:t.map(i=>i.id)}),done:a})}}};export{me as _,_e as a,ve as b,ce as c,he as u};
