import{_ as K}from"./TagFilter.vuevuetypescriptsetuptruelang-e2d9ed71.js";import{_ as P}from"./Dropdown.vuevuetypescriptsetuptruelang-3853d065.js";import{d as A,r as N,U as C,bk as j,Z as U,C as J,$ as X,o as x,Q as Y,v as g,b as a,f as m,J as S,N as Z,L as H,g as e,K as W,a0 as ee,u as te,p as G,n as I,i as se,t as D,bl as ae,X as L,bm as ne,bn as oe,bo as ie,bp as le,c as w,j as re,e as p,F as E,y as de,w as R,x as B,z as q,R as ce,bq as ue,q as pe}from"./index-3c761cf5.js";import{k as T,b as me,p as _e,d as fe}from"./search-2c6de17f.js";import{_ as ve}from"./EditValueModal.vuevuetypescriptsetuptruelang-7d8bcc18.js";import{c as be}from"./index-a6b2ba68.js";import{_ as he}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-c5faeb69.js";import{_ as $e}from"./VModal.vuevuetypescriptsetuptruelang-d5392689.js";import{u as ye,a as Fe}from"./vee-validate.esm-7f7a9a56.js";import{g as V,M as ke}from"./splitpanes.es-e062590b.js";import"./baseIndexOf-70b929c6.js";const xe={class:"mb-4"},ge=["placeholder"],Ce=["disabled"],we=A({__name:"FeedModal",props:{data:{type:Object}},setup(_){var b;const s=_,{handleSubmit:f}=ye(),l=N(),{mutate:r,loading:$,onDone:v}=C({document:j,appApi:!0}),{value:i,errorMessage:u}=Fe("inputValue",U().required());i.value=((b=s.data)==null?void 0:b.name)??"",(async()=>{var n;await J(),(n=l.value)==null||n.focus()})();const d=f(()=>{var n;r({id:(n=s.data)==null?void 0:n.id,name:i.value})});return v(()=>{X()}),(n,c)=>{const M=$e;return x(),Y(M,{title:n.$t("update_subscription")},{body:g(()=>{var h;return[a("div",xe,m((h=_.data)==null?void 0:h.url),1),a("div",null,[S(a("input",{ref_key:"input",ref:l,type:"text",placeholder:n.$t("name"),class:"form-control","onUpdate:modelValue":c[0]||(c[0]=y=>Z(i)?i.value=y:null),onKeyup:c[1]||(c[1]=H((...y)=>e(d)&&e(d)(...y),["enter"]))},null,40,ge),[[W,e(i)]]),S(a("div",{class:"invalid-feedback"},m(e(u)?n.$t(e(u)):""),513),[[ee,e(u)]])])]}),action:g(()=>[a("button",{type:"button",disabled:e($),class:"btn",onClick:c[2]||(c[2]=(...h)=>e(d)&&e(d)(...h))},m(n.$t("save")),9,Ce)]),_:1},8,["title"])}}}),Me={class:"nav-title mt-4"},Le={class:"nav"},Ne=["onClick","onContextmenu"],qe=A({__name:"FeedFilter",props:{selected:{type:String,required:!0}},setup(_){const{t:s}=te(),f=G(),l=N([]),r=N(),$=I(),v=[{text:s("add_subscription"),click:d},{text:s("import_opml_file"),click:h},{text:s("export_opml_file"),click:y}],{refetch:i}=se({handle:(t,o)=>{o?D(s(o),"error"):t&&(l.value=t.feeds)},document:ae,appApi:!0});function u(t){const o=t.target.files;if(!o)return;const F=new FileReader;F.addEventListener("load",()=>{c({content:F.result})},!1),F.readAsText(o[0])}function d(){L(ve,{title:s("add_subscription"),placeholder:s("rss_url"),mutation:()=>C({document:ne,options:{update:()=>{i()}},appApi:!0}),getVariables:t=>({url:t})})}const{mutate:b,onDone:n}=C({document:oe,appApi:!0});n(t=>{ie(t.data.exportFeeds,"application/xml","feeds.xml")});const{mutate:c,onDone:M}=C({document:le,appApi:!0});M(()=>{D(s("imported")),i()});function h(){r.value.value="",r.value.click()}function y(){b()}function O(t){const o=me([{name:"feed",op:"",value:T(t.name)}]);q(f,`/feeds?q=${ce(o)}`)}function z(t,o){t.preventDefault(),be({x:t.x,y:t.y,items:[{label:s("edit"),onClick:()=>{L(we,{data:o})}},{label:s("delete"),onClick:()=>{L(he,{id:o.id,name:o.name,gql:ue,appApi:!0,typeName:"Feed",done:()=>{q(f,"/feeds")}})}}]})}return(t,o)=>{const F=P;return x(),w(E,null,[a("h2",Me,[re(m(t.$t("subscriptions"))+" ",1),p(F,{class:"dropdown-sm",title:t.$t("add"),items:v},null,8,["title"])]),a("ul",Le,[(x(!0),w(E,null,de(l.value,k=>(x(),w("li",{onClick:R(Q=>O(k),["prevent"]),onContextmenu:Q=>z(Q,k),class:B({active:e($).params.feedId===k.id||_.selected&&e(T)(k.name)===_.selected})},m(k.name),43,Ne))),256))]),a("input",{ref_key:"fileInput",ref:r,style:{display:"none"},accept:".xml",type:"file",onChange:u},null,544)],64)}}}),Ae={class:"page-container container-fluid"},Qe={class:"sidebar"},Se={class:"nav-title"},De={class:"nav"},Ee=["onClick"],Te={class:"main"},Ve={name:"FeedsRoot",inheritAttrs:!1,customOptions:{}},Xe=A({...Ve,setup(_){const s=I(),f=G(),l=_e(s.query),r=fe(s.query);function $(){q(f,"/feeds")}return(v,i)=>{const u=qe,d=K,b=pe("router-view");return x(),w("div",Ae,[p(e(ke),null,{default:g(()=>[p(e(V),{size:"20"},{default:g(()=>[a("div",Qe,[a("h2",Se,m(v.$t("page_title.feeds")),1),a("ul",De,[a("li",{onClick:R($,["prevent"]),class:B({active:e(s).path==="/feeds"&&!e(l)&&!e(r)})},m(v.$t("all")),11,Ee)]),p(u,{selected:e(r)},null,8,["selected"]),p(d,{"tag-type":"FEED_ENTRY",selected:e(l)},null,8,["selected"])])]),_:1}),p(e(V),null,{default:g(()=>[a("div",Te,[p(b)])]),_:1})]),_:1})])}}});export{Xe as default};
