import{d as P,p as q,u as U,n as Y,r as c,s as j,a as J,i as W,t as X,E as $,aL as Z,Y as D,aM as ee,aG as te,aN as ae,K as se,L as ne,o as r,c as p,b as n,e as y,x as v,g as i,F as oe,z as ie,f as d,aO as k,k as V,T as le,R as N,aP as x,M as ce,N as re,O as z,w,ai as de,aQ as ue,_ as _e}from"./index-66bea2e9.js";import{g as B,M as pe}from"./splitpanes.es-57df8e4f.js";import{u as ve}from"./markdown-44c82647.js";const me={class:"page-container container"},he={class:"main"},fe={key:0,class:"date"},ye={class:"chat-title"},Ce={class:"name"},ge=["title"],Me={class:"menu-items"},ke=["onClick","disabled"],we={key:2,class:"chat-title"},Ae={class:"name"},Ie=["title"],be=["innerHTML"],Te={key:0,class:"chat-item replying"},Le={class:"chat-title"},$e={class:"name"},De=["innerHTML"],Ve=["placeholder","onKeydown"],Ne=["onClick"],xe=P({__name:"AIChatView",setup(ze){const H=q(),{t:Q}=U(),R=Y(),l=c(R.params.id),u=c(""),_=c([]),m=c(!1),h=c(""),C=c(""),{app:S}=j(J()),A=c(),{render:f}=ve(S);function g(){return l.value==="create"}function G(e,a){let s=!1;if(a==0)s=!0;else{const o=a>0?_.value[a-1]:null;o!=null&&k(o.createdAt)!==k(e.createdAt)&&(s=!0)}return s}g()||W({handle:async(e,a)=>{if(a)X(Q(a),"error");else{const s=[];s.push({...e.aiChat,md:await f(e.aiChat.content)});for(const o of e.aiChats)s.push({...o,md:await f(o.content)});_.value=s,await $(),T()}},document:Z,variables:()=>({id:l.value,query:`parent_id:${l.value} sort:created_at-asc`}),appApi:!0});const{mutate:I,onDone:K}=D({document:ee,appApi:!0});function b(){!u.value||m.value||I({id:g()?"":l.value,message:u.value,isMe:!0})}K(async e=>{var s;const a=e.data.createAIChat;if(a){for(const t of a)(s=_.value)==null||s.push({...t,md:await f(t.content)});g()&&(l.value=a[0].id,te(H,`/aichats/${l.value}`)),u.value="",m.value=!m.value,h.value="",C.value='<span class="blinking-cursor"></span>',await $(),T()}});function T(){const e=A.value;e&&(e.scrollTop=e.scrollHeight)}const M=c(""),{mutate:F,loading:E}=D({document:ae,options:{update:e=>{var s,o;e.evict({id:e.identify({__typename:"AIChat",id:M.value})});const a=(s=_.value)==null?void 0:s.findIndex(t=>t.id===M.value);a!==null&&((o=_.value)==null||o.splice(a,1))}},appApi:!0});function O(e){M.value=e,F({ids:[e]})}return se(()=>{ne.on("ai_chat_replied",async e=>{e.parentId===l.value&&(h.value+=e.content,C.value=await f(h.value+'<span class="blinking-cursor"></span>'),e.finishReason==="stop"&&I({id:l.value,message:h.value,isMe:!1}))})}),(e,a)=>{const s=de,o=ue;return r(),p("div",me,[n("div",he,[y(i(pe),{class:"chat-container",horizontal:""},{default:v(()=>[y(i(B),{size:"80"},{default:v(()=>[n("div",{class:"chat-items",ref_key:"scrollContainer",ref:A},[(r(!0),p(oe,null,ie(_.value,(t,L)=>(r(),p("div",{key:t.id,class:"chat-item"},[G(t,L)?(r(),p("div",fe,d(i(k)(t.createdAt)),1)):V("",!0),L>0?(r(),le(s,{key:1},{content:v(()=>[n("ul",Me,[n("li",{class:"dropdown-item",onClick:Be=>O(t.id),disabled:i(E)},d(e.$t("delete_message")),9,ke)])]),default:v(()=>[n("div",ye,[n("span",Ce,d(e.$t(t.isMe?"me":"ai")),1),n("span",{class:"time",title:i(N)(t.createdAt)},d(i(x)(t.createdAt)),9,ge)])]),_:2},1024)):(r(),p("div",we,[n("span",Ae,d(e.$t(t.isMe?"me":"ai")),1),n("span",{class:"time",title:i(N)(t.createdAt)},d(i(x)(t.createdAt)),9,Ie)])),n("div",{class:"chat-content md-container",innerHTML:t.md},null,8,be)]))),128)),m.value?(r(),p("div",Te,[n("div",Le,[n("span",$e,d(e.$t("ai")),1)]),n("div",{class:"chat-content md-container",innerHTML:C.value},null,8,De)])):V("",!0)],512)]),_:1}),y(i(B),{class:"chat-input",size:"10","min-size":"5"},{default:v(()=>[ce(n("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t),class:"form-control",autocomplete:"off",placeholder:e.$t("chat_input_hint"),onKeydown:[z(w(b,["exact","prevent"]),["enter"]),a[1]||(a[1]=z(w(t=>u.value+=`
`,["shift","exact","prevent"]),["enter"]))]},null,40,Ve),[[re,u.value]]),n("i",{class:"bi bi-btn",onClick:w(b,["stop"])},[y(o)],8,Ne)]),_:1})]),_:1})])])}}});const Se=_e(xe,[["__scopeId","data-v-7127c54f"]]);export{Se as default};