import{o as r,e as l,f as c,d as Q,u as V,a as w,r as A,i as B,k as L,aR as G,H,I as o,J as N,K as S,g as E,t as m,L as I,w as v,x as F,F as b,A as z,z as J,h as K,bA as T,Y as p,a2 as C,bB as P,N as R,n as U,bC as Y,Q as Z,aG as j,bD as O,bE as W,a9 as X}from"./index-c29359c5.js";import{E as q}from"./EditValueModal-5690bced.js";const ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=c("path",{fill:"currentColor",d:"M12 19q-.425 0-.713-.288T11 18v-5H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19Z"},null,-1),ae=[te];function ne(d,a){return r(),l("svg",ee,ae)}const se={name:"material-symbols-add-rounded",render:ne},oe={class:"nav-title"},ie=["onClick"],re=c("md-ripple",null,null,-1),le={class:"nav"},de=["onClick","onContextmenu"],me=Q({__name:"TagFilter",props:{type:{type:String,required:!0},selected:{type:String,required:!0}},setup(d){const a=d,{t:n}=V(),k=w(),_=A([]),{refetch:i}=B({handle:(e,t)=>{t?L(n(t),"error"):e&&(_.value=e.tags)},document:G,variables:{type:a.type},appApi:!0});function x(){p(q,{title:n("add_tag"),placeholder:n("name"),mutation:()=>C({document:P,options:{update:()=>{i()}},appApi:!0}),getVariables:e=>({type:a.type,name:e})})}function $(e){const t=R([{name:"tag",op:"",value:T(e.name)}]);U(k,`/${Y[a.type]}?q=${Z(t)}`)}function M(e,t){e.preventDefault(),j({x:e.x,y:e.y,items:[{label:n("rename"),onClick:()=>{p(q,{title:n("rename"),placeholder:n("name"),value:t.name,mutation:()=>C({document:O,appApi:!0}),getVariables:u=>({id:t.id,name:u}),done:()=>{i()}})}},{label:n("delete"),onClick:()=>{p(X,{id:t.id,name:t.name,gql:W,appApi:!0,typeName:"Tag"})}}]})}const f=e=>{e===a.type&&i()},h=e=>{e.type===a.type&&i()},g=e=>{e.item.tags.length&&e.type===a.type&&i()};return H(()=>{o.on("refetch_tags",f),o.on("media_items_deleted",h),o.on("media_item_deleted",g)}),N(()=>{o.off("refetch_tags",f),o.off("media_items_deleted",h),o.off("media_item_deleted",g)}),(e,t)=>{const u=se,D=S("tooltip");return r(),l(b,null,[c("h2",oe,[E(m(e.$t("tags"))+" ",1),I((r(),l("button",{class:"icon-button",onClick:v(x,["prevent"])},[re,F(u)],8,ie)),[[D,e.$t("add_tag")]])]),c("ul",le,[(r(!0),l(b,null,z(_.value,s=>(r(),l("li",{onClick:v(y=>$(s),["prevent"]),key:s.id,onContextmenu:y=>M(y,s),class:J({active:d.selected&&K(T)(s.name)===d.selected})},m(s.name)+" ("+m(s.count)+") ",43,de))),128))])],64)}}});export{me as _,se as a};