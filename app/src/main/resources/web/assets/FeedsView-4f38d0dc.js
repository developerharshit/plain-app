import{c as ke,u as ye,_ as be,a as $e,b as Ce}from"./list-45e6f26a.js";import{d as we,a as Te,r as _,u as Fe,B as Ae,D as Ee,p as Ve,C as qe,E as Se,i as De,G as Ie,H as Qe,I as f,J as Ue,a2 as Be,K as Le,e as d,f as t,x as h,h as l,F as I,L as C,w as m,j as Q,t as c,y as Me,A as x,M as Ne,cf as Re,k as M,cg as Ge,ad as ze,bA as ee,N as He,O as Ke,ch as Xe,n as te,Q as se,ci as Ye,o,R as je,z as Je,av as Oe,T as Pe,g as We,U as Ze,V as xe,Y as le,a8 as et,a9 as tt,Z as st,W as lt,X as nt,aX as at,aa as ot,$ as dt,a1 as it}from"./index-c29359c5.js";import{_ as ct}from"./Breadcrumb-052dbd56.js";import{a as ut}from"./tags-b449dcc7.js";import"./vee-validate.esm-0bb59856.js";const rt={class:"v-toolbar"},pt=t("md-ripple",null,null,-1),_t=t("md-ripple",null,null,-1),ft=["disabled","onClick"],ht={class:"filters"},mt=["label"],gt={class:"form-label"},vt=["label","selected","onClick"],kt={class:"buttons"},yt=["onClick"],bt={class:"table-responsive"},$t={class:"table"},Ct=["checked","indeterminate"],wt=t("th",null,null,-1),Tt=t("th",null,null,-1),Ft=["onClick"],At=["checked"],Et=["src"],Vt={style:{"min-width":"200px"}},qt=["href","onClick"],St={class:"nowrap"},Dt={class:"action-btns"},It=["onClick"],Qt=t("md-ripple",null,null,-1),Ut=["onClick"],Bt=t("md-ripple",null,null,-1),Lt={class:"nowrap"},Mt={class:"nowrap"},Nt={key:0},Rt={colspan:"7"},Gt={class:"no-data-placeholder"},E=50,Ot=we({__name:"FeedsView",setup(zt){var W,Z;const N=Te(),g=_([]),R=_(),{t:U}=Fe(),i=Ae({text:"",feeds:[],tags:[]}),r=Ee.FEED_ENTRY,G=Ve().query,V=_(parseInt(((W=G.page)==null?void 0:W.toString())??"1")),w=_([]),ne=_([]),v=_(qe(((Z=G.q)==null?void 0:Z.toString())??"")),q=_(""),{addToTags:ae}=ut(r,g,w),{deleteItems:oe}=ke(Re,()=>{D(),L(),g.value.some(e=>e.tags.length)&&f.emit("refetch_tags",r)},g),S=_(!1),{allChecked:z,realAllChecked:B,selectRealAll:de,allCheckedAlertVisible:ie,clearSelection:D,toggleAllChecked:H,toggleItemChecked:K,toggleRow:ce,total:k,checked:X}=ye(g),{loading:ue,load:re,refetch:L}=Se({handle:(e,n)=>{n?M(U(n),"error"):e&&(g.value=e.feedEntries.map(p=>({...p,checked:!1})),k.value=e.feedEntryCount)},document:Ge,variables:()=>({offset:(V.value-1)*E,limit:E,query:q.value}),appApi:!0});function pe(e){le(tt,{id:e.id,name:e.title,gql:et`
      mutation deleteFeedEntry($query: String!) {
        deleteFeedEntries(query: $query)
      }
    `,variables:()=>({query:`ids:${e.id}`}),appApi:!0,typeName:"FeedEntry",done:()=>{D(),k.value--,e.tags.length&&f.emit("refetch_tags",r)}})}De({handle:async(e,n)=>{if(n)M(U(n),"error");else if(e){w.value=e.tags,ne.value=e.feeds;const p=ze(v.value);i.tags=[];const y=[],b=[];p.forEach(a=>{if(a.name==="text")i.text=a.value;else if(a.name==="tag"){const u=e.tags.find(F=>ee(F.name)===a.value);u?(i.tags.push(u),y.push(u.id)):y.push("invalid")}else if(a.name==="feed"){const u=e.feeds.find(F=>ee(F.name)===a.value);u?(i.feeds.push(u),b.push(u.id)):b.push("invalid")}});const T=[...p].filter(a=>a.name!=="tag"&&a.name!=="feed");y.forEach(a=>{T.push({name:"tag_id",op:"",value:a})}),b.forEach(a=>{T.push({name:"feed_id",op:"",value:a})}),q.value=He(T),await Ke(),re()}},document:Xe,variables:{type:r},appApi:!0});function _e(e){le(st,{type:r,tags:w.value,item:{key:e.id,title:"",size:0},selected:w.value.filter(n=>e.tags.some(p=>p.id===n.id))})}Ie(V,e=>{te(N,`/feeds?page=${e}&q=${se(v.value)}`)});function fe(e){i.tags.includes(e)?lt(i.tags,n=>n.id===e.id):i.tags.push(e)}function he(){v.value=nt(i),Y(),R.value.dismiss()}function Y(){te(N,`/feeds?q=${se(v.value)}`)}const j=e=>{S.value=!1,M(e.error||U("feeds_synced"))},J=e=>{e.type===r&&(D(),L())},O=e=>{e.type===r&&L()};Qe(()=>{f.on("item_tags_updated",O),f.on("items_tags_updated",J),f.on("feeds_fetched",j)}),Ue(()=>{f.off("item_tags_updated",O),f.off("items_tags_updated",J),f.off("feeds_fetched",j)});function me(e){at.push(P(e))}function P(e){return`/feeds/${e.feedId}/entries/${e.id}`}const{mutate:ge}=Be({document:Ye,appApi:!0});function ve(){S.value=!0,ge({id:""})}return(e,n)=>{const p=ct,y=ot,b=dt,T=be,a=$e,u=it,F=Ce,A=Le("tooltip");return o(),d(I,null,[t("div",rt,[h(p,{current:()=>`${e.$t("page_title.feeds")} (${l(k)})`},null,8,["current"]),l(X)?(o(),d(I,{key:0},[C((o(),d("button",{class:"icon-button",onClick:n[0]||(n[0]=m(s=>l(oe)(l(B),q.value),["stop"]))},[pt,h(y)])),[[A,e.$t("delete")]]),C((o(),d("button",{class:"icon-button",onClick:n[1]||(n[1]=m(s=>l(ae)(l(B),q.value),["stop"]))},[_t,h(b)])),[[A,e.$t("add_to_tags")]])],64)):Q("",!0),t("md-outlined-button",{disabled:S.value,onClick:m(ve,["prevent"])},c(S.value?e.$t("syncing"):e.$t("sync_feeds")),9,ft),h(T,{ref_key:"searchInputRef",ref:R,modelValue:v.value,"onUpdate:modelValue":n[3]||(n[3]=s=>v.value=s),search:Y},{filters:Me(()=>[t("div",ht,[C(t("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":n[2]||(n[2]=s=>i.text=s),"keyup.enter":"applyAndDoSearch"},null,8,mt),[[je,i.text]]),t("label",gt,c(e.$t("tags")),1),t("md-chip-set",null,[(o(!0),d(I,null,x(w.value,s=>(o(),d("md-filter-chip",{key:s.id,label:s.name,selected:i.tags.includes(s),onClick:$=>fe(s)},null,8,vt))),128))]),t("div",kt,[t("md-filled-button",{onClick:m(he,["stop"])},c(e.$t("search")),9,yt)])])]),_:1},8,["modelValue"])]),h(a,{limit:E,total:l(k),"all-checked-alert-visible":l(ie),"real-all-checked":l(B),"select-real-all":l(de),"clear-selection":l(D)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),t("div",bt,[t("table",$t,[t("thead",null,[t("tr",null,[t("th",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[4]||(n[4]=(...s)=>l(H)&&l(H)(...s)),checked:l(z),indeterminate:!l(z)&&l(X)},null,40,Ct)]),wt,t("th",null,c(e.$t("title")),1),Tt,t("th",null,c(e.$t("source")),1),t("th",null,c(e.$t("tags")),1),t("th",null,c(e.$t("published_at")),1)])]),t("tbody",null,[(o(!0),d(I,null,x(g.value,s=>(o(),d("tr",{key:s.id,class:Je({selected:s.checked}),onClick:m($=>l(ce)(s),["stop"])},[t("td",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[5]||(n[5]=(...$)=>l(K)&&l(K)(...$)),checked:s.checked},null,40,At)]),t("td",null,[s.image?(o(),d("img",{key:0,src:l(Oe)(s.image)+"&w=300&h=300",width:"50",height:"50"},null,8,Et)):Q("",!0)]),t("td",Vt,[t("a",{href:P(s),onClick:m($=>me(s),["stop","prevent"])},c(s.title||e.$t("no_content")),9,qt)]),t("td",St,[t("div",Dt,[C((o(),d("button",{class:"icon-button",onClick:m($=>pe(s),["stop"])},[Qt,h(y)],8,It)),[[A,e.$t("delete")]]),C((o(),d("button",{class:"icon-button",onClick:m($=>_e(s),["stop"])},[Bt,h(b)],8,Ut)),[[A,e.$t("add_to_tags")]])])]),t("td",Lt,c(s.author),1),t("td",null,[h(u,{tags:s.tags,type:l(r)},null,8,["tags","type"])]),t("td",Mt,[C((o(),d("span",null,[We(c(l(Ze)(s.publishedAt)),1)])),[[A,l(Pe)(s.publishedAt)]])])],10,Ft))),128))]),g.value.length?Q("",!0):(o(),d("tfoot",Nt,[t("tr",null,[t("td",Rt,[t("div",Gt,c(e.$t(l(xe)(l(ue)))),1)])])]))])]),l(k)>E?(o(),Ne(F,{key:0,modelValue:V.value,"onUpdate:modelValue":n[6]||(n[6]=s=>V.value=s),total:l(k),limit:E},null,8,["modelValue","total"])):Q("",!0)],64)}}});export{Ot as default};
