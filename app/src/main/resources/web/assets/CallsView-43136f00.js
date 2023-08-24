import{b as rt,u as pt,_ as _t,a as mt}from"./list-99d4982b.js";import{_ as ht}from"./call-outline-rounded-ee12b22a.js";import{_ as ft}from"./FieldId-e37ba71f.js";import{l as bt,_ as gt}from"./Multiselect-346d4eab.js";import{_ as vt,a as yt}from"./label-outline-rounded-657ec04e.js";import{_ as kt}from"./delete-outline-rounded-182ee2de.js";import{_ as $t}from"./Breadcrumb-731a6814.js";import{d as Ct,p as Tt,s as Vt,a as wt,r as h,u as St,B as At,n as Dt,C as Lt,D as z,E as qt,W as Mt,G as Ut,H as Bt,t as It,X as Qt,J as Gt,K as Nt,L as Rt,Y as Ft,Z as Kt,o as a,c as d,b as e,e as r,g as l,F as k,w as p,k as S,x as Et,f as n,M as A,N as zt,O as jt,P as j,Q as xt,z as x,y as Ot,j as Pt,T as O,$ as Ht,R as Jt,S as Wt,A as $,U as C,a0 as Xt,a1 as Yt}from"./index-66bea2e9.js";import{n as Zt}from"./list-6498ebd9.js";import{_ as te}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-f7245844.js";import{u as ee,a as se,b as oe}from"./tags-4fd68896.js";import"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";import"./vee-validate.esm-18b68f3d.js";const ne={class:"v-toolbar"},le={class:"right-actions"},ae=["title"],ie=["title"],ce=["title"],ue={class:"row mb-3"},de={class:"col-md-3 col-form-label"},re={class:"col-md-9"},pe=["onKeyup"],_e={class:"row mb-3"},me={class:"col-md-3 col-form-label"},he={class:"col-md-9"},fe={class:"actions"},be=["onClick"],ge={class:"table"},ve=e("th",null,"ID",-1),ye={class:"actions one"},ke=["onClick"],$e=["onUpdate:modelValue"],Ce={key:0,class:"spinner spinner-sm"},Te={class:"nowrap"},Ve={class:"badge"},we=["title"],Se={class:"actions one"},Ae=["onClick"],De={key:0},Le={colspan:"10"},qe={class:"no-data-placeholder"},Oe=Ct({__name:"CallsView",setup(Me){var K,E;const f=Tt(),{app:P}=Vt(wt()),i=h([]),{t:D}=St(),c=At({text:"",tags:[]}),b="CALL",L=Dt(),q=L.query,g=h(parseInt(((K=q.page)==null?void 0:K.toString())??"1")),v=50,y=h(0),u=h(Lt(((E=q.q)==null?void 0:E.toString())??"")),M=h(""),{tags:T}=ee(b,u,c,async t=>{_&&t.push({name:"type",op:"",value:X[_].toString()}),M.value=z(t),await qt(),W()}),{addToTags:U}=se(b,i,T),{removeFromTags:B}=oe(b,i,T),{deleteItems:I}=rt(Mt,()=>{G()},i),H=Ut(()=>i.value.some(t=>t.checked)),{selectAll:V,toggleSelect:Q}=pt(i),{loading:J,load:W,refetch:G}=Bt({handle:(t,o)=>{o?It(D(o),"error"):t&&(i.value=t.calls.map(w=>({...w,checked:!1})),y.value=t.callCount)},document:Qt,variables:()=>({offset:(g.value-1)*v,limit:v,query:M.value}),appApi:!0}),_=L.params.type,X={incoming:1,outgoing:2,missed:3};Gt(g,t=>{_?$(f,`/calls/${_}?page=${t}&q=${C(u.value)}`):$(f,`/calls?page=${t}&q=${C(u.value)}`)});function N(){const t=[];for(const o of c.tags)t.push({name:"tag",op:"",value:bt.kebabCase(o.name)});c.text&&t.push({name:"text",op:"",value:c.text}),u.value=z(t),R()}function R(){_?$(f,`/calls/${_}?q=${C(u.value)}`):$(f,`/calls?q=${C(u.value)}`)}Nt(()=>{Rt.on("refetch_by_tag_type",t=>{t===b&&G()})});function Y(t){if(!t)return"";const o=[];return t.isp&&o.push(D("phone_isp_type."+t.isp)),t.city===t.province?o.push(t.city):o.push(`${t.province}${t.city}`),o.join(", ")}const F=h(""),{mutate:Z,loading:tt}=Ft({document:Kt,appApi:!0});function et(t){F.value=t.id,Z({number:t.number})}function st(t){Xt(te,{id:t.id,name:t.id,gql:Yt`
      mutation DeleteCall($id: ID!) {
        deleteCalls(ids: [$id])
      }
    `,appApi:!0,typeName:"Call"})}return(t,o)=>{const w=$t,ot=kt,nt=vt,lt=yt,at=gt,it=_t,ct=ft,ut=ht,dt=mt;return a(),d(k,null,[e("div",ne,[r(w,{current:()=>`${t.$t("page_title.calls")} (${y.value})`},null,8,["current"]),e("div",le,[l(H)?(a(),d(k,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:o[0]||(o[0]=p((...s)=>l(I)&&l(I)(...s),["stop"])),title:t.$t("delete")},[r(ot,{class:"bi"})],8,ae),e("button",{type:"button",class:"btn btn-action",onClick:o[1]||(o[1]=p((...s)=>l(U)&&l(U)(...s),["stop"])),title:t.$t("add_to_tags")},[r(nt,{class:"bi"})],8,ie),e("button",{type:"button",class:"btn btn-action",onClick:o[2]||(o[2]=p((...s)=>l(B)&&l(B)(...s),["stop"])),title:t.$t("remove_from_tags")},[r(lt,{class:"bi"})],8,ce)],64)):S("",!0),r(it,{modelValue:u.value,"onUpdate:modelValue":o[5]||(o[5]=s=>u.value=s),search:R},{filters:Et(()=>[e("div",ue,[e("label",de,n(t.$t("keywords")),1),e("div",re,[A(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>c.text=s),class:"form-control",onKeyup:jt(N,["enter"])},null,40,pe),[[zt,c.text]])])]),e("div",_e,[e("label",me,n(t.$t("tags")),1),e("div",he,[r(at,{modelValue:c.tags,"onUpdate:modelValue":o[4]||(o[4]=s=>c.tags=s),label:"name","track-by":"id",options:l(T)},null,8,["modelValue","options"])])]),e("div",fe,[e("button",{type:"button",class:"btn",onClick:p(N,["stop"])},n(t.$t("search")),9,be)])]),_:1},8,["modelValue"])])]),e("table",ge,[e("thead",null,[e("tr",null,[e("th",null,[A(e("input",{class:"form-check-input",type:"checkbox",onChange:o[6]||(o[6]=(...s)=>l(Q)&&l(Q)(...s)),"onUpdate:modelValue":o[7]||(o[7]=s=>xt(V)?V.value=s:null)},null,544),[[j,l(V)]])]),ve,e("th",null,n(t.$t("name")),1),e("th",null,n(t.$t("phone_number")),1),e("th",null,n(t.$t("phone_geo")),1),e("th",null,n(t.$t("duration")),1),e("th",null,n(t.$t("type")),1),e("th",null,n(t.$t("tags")),1),e("th",null,n(t.$t("started_at")),1),e("th",ye,n(t.$t("actions")),1)])]),e("tbody",null,[(a(!0),d(k,null,x(i.value,s=>(a(),d("tr",{key:s.id,class:Ot({checked:s.checked}),onClick:p(m=>s.checked=!s.checked,["stop"])},[e("td",null,[A(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":m=>s.checked=m},null,8,$e),[[j,s.checked]])]),e("td",null,[r(ct,{id:s.id,raw:s},null,8,["id","raw"])]),e("td",null,n(s.name),1),e("td",null,[Pt(n(s.number)+" ",1),l(tt)&&F.value===s.id?(a(),d("i",Ce)):(a(),O(ut,{key:1,class:"bi bi-btn",onClick:p(m=>et(s),["stop"])},null,8,["onClick"]))]),e("td",null,n(Y(s.geo)),1),e("td",null,n(l(Ht)(s.duration)),1),e("td",Te,n(t.$t("call_type."+s.type)),1),e("td",null,[(a(!0),d(k,null,x(s.tags,m=>(a(),d("span",Ve,n(m.name),1))),256))]),e("td",{class:"nowrap",title:l(Jt)(s.startedAt)},n(l(Wt)(s.startedAt)),9,we),e("td",Se,[e("a",{href:"#",class:"v-link",onClick:p(m=>st(s),["stop"])},n(t.$t("delete")),9,Ae)])],10,ke))),128))]),i.value.length?S("",!0):(a(),d("tfoot",De,[e("tr",null,[e("td",Le,[e("div",qe,n(t.$t(l(Zt)(l(J),l(P).permissions,"READ_CALL_LOG"))),1)])])]))]),y.value>v?(a(),O(dt,{key:0,modelValue:g.value,"onUpdate:modelValue":o[8]||(o[8]=s=>g.value=s),total:y.value,limit:v},null,8,["modelValue","total"])):S("",!0)],64)}}});export{Oe as default};
