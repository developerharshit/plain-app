import{u as ye,_ as $e,a as be,b as we}from"./list-45e6f26a.js";import{d as Ce,ab as Ae,a as Se,r as k,u as De,s as Ve,c as Ie,B as Te,ac as Ue,D as qe,p as Be,C as Qe,ad as Fe,N as J,i as Le,G as ze,a2 as Me,E as Pe,H as Re,I as O,J as Ge,K as Ne,e as i,f as e,x as r,h as l,L as p,w as f,j as T,g as U,t as n,y as Ke,F as W,A as xe,M as Ee,k as je,ae as He,af as Je,n as A,Q as S,ag as Oe,ah as We,o,R as Xe,z as Ye,m as Ze,T as X,U as Y,V as et,ai as tt,aj as st,a0 as lt,aa as at}from"./index-c29359c5.js";import{_ as nt}from"./Breadcrumb-052dbd56.js";function ot(D,V){const v=D.findIndex(y=>y.id===V);v!==-1&&D.splice(v,1)}const it={class:"v-toolbar"},ct=e("md-ripple",null,null,-1),dt=["onClick"],ut=e("md-ripple",null,null,-1),rt={class:"filters"},pt={class:"form-row"},_t=["label"],ht={class:"buttons"},ft=["onClick"],mt={class:"table-responsive"},kt={class:"table"},gt=["checked","indeterminate"],vt=e("th",null,null,-1),yt=e("th",null,null,-1),$t=["onClick"],bt=["checked"],wt=["src"],Ct={class:"v-center"},At={class:"nowrap"},St={class:"action-btns"},Dt={key:0,indeterminate:"",class:"spinner-sm"},Vt=["onClick"],It=e("md-ripple",null,null,-1),Tt=["onClick"],Ut=e("md-ripple",null,null,-1),qt={class:"nowrap"},Bt={class:"nowrap"},Qt={class:"nowrap"},Ft={class:"nowrap"},Lt={key:0},zt={colspan:"8"},Mt={class:"no-data-placeholder"},g=50,Nt=Ce({__name:"AppsView",setup(D){var E,j;const{input:V,upload:v,uploadChanged:y}=Ae(),$=Se(),c=k([]),q=k(),{t:Z}=De(),{app:ee,urlTokenKey:I}=Ve(Ie()),b=Te({text:"",tags:[]}),{allChecked:B,realAllChecked:Q,selectRealAll:te,allCheckedAlertVisible:se,clearSelection:F,toggleAllChecked:L,toggleItemChecked:z,toggleRow:le,total:m,checked:M}=ye(c),{downloadItems:ae}=Ue(I,qe.PACKAGE,c,F,"apps.zip"),{downloadFile:ne}=tt(I),P=Be(),R=P.query,w=k(parseInt(((E=R.page)==null?void 0:E.toString())??"1")),d=k(Qe(((j=R.q)==null?void 0:j.toString())??"")),G=Fe(d.value),_=P.params.type;_&&G.push({name:"type",op:"",value:_});const N=k(J(G)),oe=()=>{v(ee.value.downloadsDir)},{loading:ie}=Le({handle:(t,a)=>{a?je(Z(a),"error"):t&&(c.value=t.packages.map(u=>({...u,checked:!1,icon:He(I.value,"pkgicon://"+u.id)})),m.value=t.packageCount)},document:Je,variables:()=>({offset:(w.value-1)*g,limit:g,query:N.value}),appApi:!0});ze(w,t=>{_?A($,`/apps/${_}?page=${t}&q=${S(d.value)}`):A($,`/apps?page=${t}&q=${S(d.value)}`)});function ce(){const t=[];b.text&&t.push({name:"text",op:"",value:b.text}),d.value=J(t),K(),q.value.dismiss()}function K(){_?A($,`/apps/${_}?q=${S(d.value)}`):A($,`/apps?q=${S(d.value)}`)}const{mutate:de,onDone:ue}=Me({document:Oe,appApi:!0});function re(t){ue(()=>{t.isUninstalling=!0}),de({id:t.id})}const{loading:pe,load:_e,refetch:he}=Pe({handle:(t,a)=>{if(t)for(const u of t.packageStatuses)u.exist||ot(c.value,u.id)},document:We,variables:()=>({ids:c.value.filter(t=>t.isUninstalling).map(t=>t.id)}),appApi:!0}),x=t=>{t.status};return Re(()=>{O.on("upload_task_done",x);let t=!0;setInterval(()=>{c.value.some(a=>a.isUninstalling)&&!pe.value&&(t?(_e(),t=!1):he())},1e3)}),Ge(()=>{O.off("upload_task_done",x)}),(t,a)=>{const u=nt,H=st,fe=$e,me=be,ke=lt,ge=at,ve=we,h=Ne("tooltip");return o(),i(W,null,[e("div",it,[r(u,{current:()=>`${t.$t("page_title.apps")} (${l(m)})`},null,8,["current"]),l(M)?p((o(),i("button",{key:0,class:"icon-button",onClick:a[0]||(a[0]=f(s=>l(ae)(l(Q),N.value),["stop"]))},[ct,r(H)])),[[h,t.$t("download")]]):T("",!0),e("button",{class:"icon-button",onClick:f(oe,["stop"]),style:{display:"none"}},[ut,U(" "+n(t.$t("install")),1)],8,dt),r(fe,{ref_key:"searchInputRef",ref:q,modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=s=>d.value=s),search:K},{filters:Ke(()=>[e("div",rt,[e("div",pt,[p(e("md-outlined-text-field",{label:t.$t("keywords"),"onUpdate:modelValue":a[1]||(a[1]=s=>b.text=s),"keyup.enter":"applyAndDoSearch"},null,8,_t),[[Xe,b.text]])]),e("div",ht,[e("md-filled-button",{onClick:f(ce,["stop"])},n(t.$t("search")),9,ft)])])]),_:1},8,["modelValue"])]),r(me,{limit:g,total:l(m),"all-checked-alert-visible":l(se),"real-all-checked":l(Q),"select-real-all":l(te),"clear-selection":l(F)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),e("div",mt,[e("table",kt,[e("thead",null,[e("tr",null,[e("th",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:a[3]||(a[3]=(...s)=>l(L)&&l(L)(...s)),checked:l(B),indeterminate:!l(B)&&l(M)},null,40,gt)]),vt,e("th",null,n(t.$t("name")),1),yt,e("th",null,n(t.$t("size")),1),e("th",null,n(t.$t("type")),1),e("th",null,n(t.$t("installed_at")),1),e("th",null,n(t.$t("updated_at")),1)])]),e("tbody",null,[(o(!0),i(W,null,xe(c.value,s=>(o(),i("tr",{key:s.id,class:Ye({selected:s.checked}),onClick:f(C=>l(le)(s),["stop"])},[e("td",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:a[4]||(a[4]=(...C)=>l(z)&&l(z)(...C)),checked:s.checked},null,40,bt)]),e("td",null,[e("img",{width:"50",height:"50",src:s.icon},null,8,wt)]),e("td",null,[e("strong",Ct,n(s.name)+" ("+n(s.version)+")",1),r(ke,{id:s.id,raw:s},null,8,["id","raw"])]),e("td",At,[e("div",St,[s.isUninstalling?p((o(),i("md-circular-progress",Dt,null,512)),[[h,t.$t("uninstalling")]]):p((o(),i("button",{key:1,class:"icon-button",onClick:f(C=>re(s),["stop"])},[It,r(ge)],8,Vt)),[[h,t.$t("uninstall")]]),p((o(),i("button",{class:"icon-button",onClick:f(C=>l(ne)(s.path,`${s.name.replace(" ","")}-${s.id}.apk`),["stop"])},[Ut,r(H)],8,Tt)),[[h,t.$t("download")]])])]),e("td",qt,n(l(Ze)(s.size)),1),e("td",Bt,n(t.$t("app_type."+s.type)),1),e("td",Qt,[p((o(),i("span",null,[U(n(l(Y)(s.installedAt)),1)])),[[h,l(X)(s.installedAt)]])]),e("td",Ft,[p((o(),i("span",null,[U(n(l(Y)(s.updatedAt)),1)])),[[h,l(X)(s.updatedAt)]])])],10,$t))),128))]),c.value.length?T("",!0):(o(),i("tfoot",Lt,[e("tr",null,[e("td",zt,[e("div",Mt,n(t.$t(l(et)(l(ie)))),1)])])]))])]),l(m)>g?(o(),Ee(ve,{key:0,modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=s=>w.value=s),total:l(m),limit:g},null,8,["modelValue","total"])):T("",!0),e("input",{ref_key:"fileInput",ref:V,style:{display:"none"},type:"file",accept:".apk",multiple:"",onChange:a[6]||(a[6]=(...s)=>l(y)&&l(y)(...s))},null,544)],64)}}});export{Nt as default};