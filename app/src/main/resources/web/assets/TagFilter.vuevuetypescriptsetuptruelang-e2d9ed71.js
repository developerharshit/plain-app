import{d as k,u as A,p as x,r as E,i as L,t as M,br as S,o as r,c as i,b as l,j as $,f as c,w as g,F as f,y as N,x as Q,g as q,X as u,U as b,bs as D,z as G,R as I,bt as V,bu as B}from"./index-3c761cf5.js";import{c as F}from"./index-a6b2ba68.js";import{k as _,b as O}from"./search-2c6de17f.js";import{_ as y}from"./EditValueModal.vuevuetypescriptsetuptruelang-7d8bcc18.js";import{_ as w}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-c5faeb69.js";const z={class:"nav-title mt-4"},R=["onClick"],U={class:"nav"},j=["onClick","onContextmenu"],K=k({__name:"TagFilter",props:{tagType:{type:String,required:!0},selected:{type:String,required:!0}},setup(s){const o=s,{t:a}=A(),C=x(),p=E([]),{refetch:m}=L({handle:(e,t)=>{t?M(a(t),"error"):e&&(p.value=e.tags)},document:S,variables:{type:o.tagType},appApi:!0});function T(){u(y,{title:a("add_tag"),placeholder:a("name"),mutation:()=>b({document:D,options:{update:()=>{m()}},appApi:!0}),getVariables:e=>({type:o.tagType,name:e})})}function v(e){const t=O([{name:"tag",op:"",value:_(e.name)}]);G(C,`/${{NOTE:"notes",AUDIO:"audios",IMAGE:"images",VIDEO:"videos",FEED_ENTRY:"feeds",SMS:"messages",CALL:"calls",CONTACT:"contacts",AI_CHAT:"aichats"}[o.tagType]}?q=${I(t)}`)}function h(e,t){e.preventDefault(),F({x:e.x,y:e.y,items:[{label:a("rename"),onClick:()=>{u(y,{title:a("rename"),placeholder:a("name"),value:t.name,mutation:()=>b({document:V,appApi:!0}),getVariables:n=>({id:t.id,name:n}),done:()=>{m()}})}},{label:a("delete"),onClick:()=>{u(w,{id:t.id,name:t.name,gql:B,appApi:!0,typeName:"Tag"})}}]})}return(e,t)=>(r(),i(f,null,[l("h2",z,[$(c(e.$t("tags"))+" ",1),l("button",{class:"btn btn-sm",type:"button",onClick:g(T,["prevent"])},c(e.$t("add")),9,R)]),l("ul",U,[(r(!0),i(f,null,N(p.value,n=>(r(),i("li",{onClick:g(d=>v(n),["prevent"]),onContextmenu:d=>h(d,n),class:Q({active:s.selected&&q(_)(n.name)===s.selected})},c(n.name),43,j))),256))])],64))}});export{K as _};
