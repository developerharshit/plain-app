import{_ as $}from"./TagFilter.vuevuetypescriptsetuptruelang-2cc23cc3.js";import{d as w,n as B,p as N,q as z,v as L,o as _,c as m,e as a,x as i,g as e,b as t,f as l,w as d,y as u,F as M,z as S,A as f}from"./index-66bea2e9.js";import{g as v,M as T}from"./splitpanes.es-57df8e4f.js";import"./index-64929f64.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-8fdf5735.js";import"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";import"./vee-validate.esm-18b68f3d.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-f7245844.js";const V={class:"page-container container-fluid"},b={class:"sidebar"},q={class:"nav-title"},A={class:"nav"},F=["onClick"],R=["onClick"],x={class:"main"},U=w({__name:"CallsRootView",setup(D){const n=B(),c=N(),r=n.params.type,p=r?"":z(n.query);function g(s){f(c,`/calls/${s}`)}const h=["incoming","outgoing","missed"];function y(){f(c,"/calls")}return(s,E)=>{const C=$,k=L("router-view");return _(),m("div",V,[a(e(T),null,{default:i(()=>[a(e(v),{size:"20"},{default:i(()=>[t("div",b,[t("h2",q,l(s.$t("page_title.calls")),1),t("ul",A,[t("li",{onClick:d(y,["prevent"]),class:u({active:e(n).path==="/calls"&&!e(p)})},l(s.$t("all")),11,F),(_(),m(M,null,S(h,o=>t("li",{key:o,onClick:d(P=>g(o),["prevent"]),class:u({active:o===e(r)})},l(s.$t(`call_type.${o}`)),11,R)),64))]),a(C,{"tag-type":"CALL",selected:e(p)},null,8,["selected"])])]),_:1}),a(e(v),null,{default:i(()=>[t("div",x,[a(k)])]),_:1})]),_:1})])}}});export{U as default};
