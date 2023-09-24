import{_ as z}from"./MonacoEditor.vuevuetypescriptsetuptruelang-169a0ae9.js";import{aK as J,aL as B,aM as Y,d as Z,a as q,u as ee,p as te,r as M,s as ae,c as ne,aA as se,i as F,a1 as ie,aN as oe,H as re,I as L,J as ue,K as le,e as S,f as $,x as b,y as A,F as ce,A as de,L as me,w as fe,j as G,h as w,aO as _e,G as pe,k as O,aP as ve,aQ as ge,aR as he,o as N,g as Te,t as K,M as ye,au as ke,av as be,U as xe,X as Me,Y as we,$ as Ne,Z as Ee,_ as Ce}from"./index-eee88ba0.js";import{_ as Ie}from"./Breadcrumb-7edea612.js";import{g as j,M as Le}from"./splitpanes.es-a3b08d9d.js";import{u as Se}from"./markdown-ae74c96b.js";var Ae=function(){return J.Date.now()};const Q=Ae;var Ve="Expected a function",$e=Math.max,De=Math.min;function Re(v,l,o){var f,r,a,i,s,c,g=0,E=!1,_=!1,y=!0;if(typeof v!="function")throw new TypeError(Ve);l=B(l)||0,Y(o)&&(E=!!o.leading,_="maxWait"in o,a=_?$e(B(o.maxWait)||0,l):a,y="trailing"in o?!!o.trailing:y);function d(t){var u=f,e=r;return f=r=void 0,g=t,i=v.apply(e,u),i}function D(t){return g=t,s=setTimeout(p,l),E?d(t):i}function C(t){var u=t-c,e=t-g,n=l-u;return _?De(n,a-e):n}function k(t){var u=t-c,e=t-g;return c===void 0||u>=l||u<0||_&&e>=a}function p(){var t=Q();if(k(t))return I(t);s=setTimeout(p,C(t))}function I(t){return s=void 0,y&&f?d(t):(f=r=void 0,i)}function R(){s!==void 0&&clearTimeout(s),g=0,f=c=r=s=void 0}function U(){return s===void 0?i:I(Q())}function x(){var t=Q(),u=k(t);if(f=arguments,r=this,c=t,u){if(s===void 0)return D(c);if(_)return clearTimeout(s),s=setTimeout(p,l),d(c)}return s===void 0&&(s=setTimeout(p,l)),i}return x.cancel=R,x.flush=U,x}const Ue=v=>(ke("data-v-b2f19121"),v=v(),be(),v),He={class:"page-container"},Qe={class:"main"},We={class:"v-toolbar"},Be=["onClick"],Fe=Ue(()=>$("md-ripple",null,null,-1)),Ge=["innerHTML"],V="NOTE",Oe=Z({__name:"NoteEditView",setup(v){const l=q(),{t:o}=ee(),f=te(),r=M(f.params.id),a=M(),i=M(""),s=M(""),{app:c,urlTokenKey:g}=ae(ne()),E=se(()=>{var e;return(e=a.value)!=null&&e.deletedAt?["/notes","/notes/trash"]:["/notes"]}),{render:_}=Se(c,g);let y=!1;function d(){return r.value==="create"}const D=Re(()=>{I({id:d()?"":r.value,input:{content:i.value,title:_e(i.value,{length:100,omission:""})}})},500),C=()=>{pe(i,async e=>{s.value=await _(e),D()})},k=M();F({handle:(e,n)=>{n?O(o(n),"error"):e&&(k.value=e.tags)},document:ve,variables:{type:V},appApi:!0});let p=()=>{};if(d())C();else{const{refetch:e}=F({handle:async(n,m)=>{if(m)O(o(m),"error");else{if(a.value=n.note,y)return;i.value=n.note.content,s.value=await _(i.value),y=!0,C()}},document:ge,variables:()=>({id:r.value}),appApi:!0});p=e}const{mutate:I,onDone:R}=ie({document:he,appApi:!0});R(e=>{var m,h;a.value=e.data.saveNote,d()&&((m=a.value)!=null&&m.id)&&(r.value=(h=a.value)==null?void 0:h.id,oe(l,`/notes/${r.value}`))});function U(){var n;const e=(n=a==null?void 0:a.value)==null?void 0:n.updatedAt;return e?`(${o("updated_at")}: ${xe(e)})`:""}function x(){var e,n;Me(we,{type:V,tags:k.value,item:{key:(e=a.value)==null?void 0:e.id,title:"",size:0},selected:(n=k.value)==null?void 0:n.filter(m=>{var h;return(h=a.value)==null?void 0:h.tags.some(H=>H.id===m.id)})})}const t=e=>{e.type===V&&p()},u=e=>{e.type===V&&p()};return re(()=>{L.on("item_tags_updated",u),L.on("items_tags_updated",t)}),ue(()=>{L.off("item_tags_updated",u),L.off("items_tags_updated",t)}),(e,n)=>{var W;const m=Ne,h=Ie,H=Ee,P=z,X=le("tooltip");return N(),S("div",He,[$("div",Qe,[$("div",We,[b(h,{paths:E.value},{current:A(()=>{var T;return[Te(K(d()?w(o)("create"):w(o)("edit"))+" ",1),(T=a.value)!=null&&T.updatedAt?(N(),ye(m,{key:0,class:"time",id:U(),raw:a.value},null,8,["id","raw"])):G("",!0)]}),_:1},8,["paths"]),(N(!0),S(ce,null,de((W=a.value)==null?void 0:W.tags,T=>(N(),S("span",{key:T.id,class:"badge"},K(T.name),1))),128)),d()?G("",!0):me((N(),S("button",{key:0,class:"icon-button",onClick:fe(x,["prevent"]),style:{"margin-inline-start":"8px"}},[Fe,b(H)],8,Be)),[[X,e.$t("add_to_tags")]])]),b(w(Le),{class:"panel-container"},{default:A(()=>[b(w(j),null,{default:A(()=>[b(P,{language:"html",modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=T=>i.value=T)},null,8,["modelValue"])]),_:1}),b(w(j),null,{default:A(()=>[$("div",{class:"md-container",innerHTML:s.value},null,8,Ge)]),_:1})]),_:1})])])}}});const Je=Ce(Oe,[["__scopeId","data-v-b2f19121"]]);export{Je as default};
