import{d as k,n as g,p as w,v as $,o as r,c as p,e as o,x as n,g as t,b as e,f as i,w as _,y as u,F as B,z,A as d}from"./index-66bea2e9.js";import{g as m,M}from"./splitpanes.es-57df8e4f.js";const S={class:"page-container container-fluid"},V={class:"sidebar"},b={class:"nav-title"},A={class:"nav"},F=["onClick"],N=["onClick"],R={class:"main"},T=k({__name:"AppsRootView",setup(x){const c=g(),l=w(),f=c.params.type;function v(s){d(l,`/apps/${s}`)}const h=["user","system"];function y(){d(l,"/apps")}return(s,D)=>{const C=$("router-view");return r(),p("div",S,[o(t(M),null,{default:n(()=>[o(t(m),{size:"20"},{default:n(()=>[e("div",V,[e("h2",b,i(s.$t("page_title.apps")),1),e("ul",A,[e("li",{onClick:_(y,["prevent"]),class:u({active:t(c).path==="/apps"})},i(s.$t("all")),11,F),(r(),p(B,null,z(h,a=>e("li",{key:a,onClick:_(E=>v(a),["prevent"]),class:u({active:a===t(f)})},i(s.$t(`app_type.${a}`)),11,N)),64))])])]),_:1}),o(t(m),null,{default:n(()=>[e("div",R,[o(C)])]),_:1})]),_:1})])}}});export{T as default};
