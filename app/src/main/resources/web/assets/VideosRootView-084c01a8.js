import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-981b765b.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-86307234.js";import{d as w,p as y,a as C,az as V,v as z,e as B,x as s,y as a,h as e,o as $,f as o,t as d,w as b,z as D,n as E}from"./index-c29359c5.js";import{g as m,M as I}from"./splitpanes.es-0c18342a.js";import"./EditValueModal-5690bced.js";import"./vee-validate.esm-0bb59856.js";const M={class:"page-container"},N={class:"sidebar"},S={class:"nav-title"},x={class:"nav"},O=["onClick"],R={class:"main"},G=w({__name:"VideosRootView",setup(q){var r,_;const n=y(),u=C(),i=V(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){E(u,"/videos")}return(t,L)=>{const f=k,v=g,h=z("router-view");return $(),B("div",M,[s(e(I),null,{default:a(()=>[s(e(m),{size:"20","min-size":"10"},{default:a(()=>[o("div",N,[o("h2",S,d(t.$t("page_title.videos")),1),o("ul",x,[o("li",{onClick:b(p,["prevent"]),class:D({active:e(n).path==="/videos"&&!e(c)&&!e(l)})},d(t.$t("all")),11,O),s(f,{type:"VIDEO",selected:e(l)},null,8,["selected"])]),s(v,{type:"VIDEO",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(m),null,{default:a(()=>[o("div",R,[s(h)])]),_:1})]),_:1})])}}});export{G as default};
