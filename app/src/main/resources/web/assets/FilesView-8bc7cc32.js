import{o as i,e as c,f as a,d as ut,u as dt,r as $,p as _t,C as pt,ac as mt,a as ht,s as ve,c as ft,b6 as bt,b7 as vt,b8 as kt,b9 as yt,ba as gt,bb as Tt,aa as ke,a1 as Ct,aA as qt,G as Dt,H as wt,I as A,J as $t,K as St,x as f,F as k,L as S,w as I,j as p,g,t as m,h as n,y as M,ag as It,bc as Mt,ap as Vt,A as j,z as ye,M as J,bd as ge,be as Te,at as Et,U as xt,m as y,au as Ft,av as Bt,bf as At,bg as Zt,X as Z,bh as Ce,aE as qe,a9 as Ht,ah as Lt,bi as Pt,bj as zt,bk as Nt,_ as Ut}from"./index-eee88ba0.js";import{_ as Wt}from"./Breadcrumb-7edea612.js";import{g as De,M as Rt}from"./splitpanes.es-a3b08d9d.js";import{n as Gt}from"./list-6498ebd9.js";import{E as we}from"./EditValueModal-3ea9467f.js";import"./vee-validate.esm-47465a3b.js";const Kt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ot=a("path",{fill:"currentColor",d:"M8 18H4q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h4q.425 0 .713.288T9 17q0 .425-.288.713T8 18ZM20 8H4q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8Zm-6 5H4q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h10q.425 0 .713.288T15 12q0 .425-.288.713T14 13Z"},null,-1),jt=[Ot];function Jt(b,o){return i(),c("svg",Kt,jt)}const Qt={name:"material-symbols-sort-rounded",render:Jt},Xt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Yt=a("path",{fill:"currentColor",d:"M19.6 21.6L12 14l-2.35 2.35q.2.375.275.8T10 18q0 1.65-1.175 2.825T6 22q-1.65 0-2.825-1.175T2 18q0-1.65 1.175-2.825T6 14q.425 0 .85.075t.8.275L10 12L7.65 9.65q-.375.2-.8.275T6 10q-1.65 0-2.825-1.175T2 6q0-1.65 1.175-2.825T6 2q1.65 0 2.825 1.175T10 6q0 .425-.075.85t-.275.8L21.6 19.6q.425.425.425 1t-.425 1q-.425.425-1 .425t-1-.425ZM15 11l-2-2l6.6-6.6q.425-.425 1-.425t1 .425q.425.425.425 1t-.425 1L15 11ZM6 8q.825 0 1.413-.588T8 6q0-.825-.588-1.413T6 4q-.825 0-1.413.588T4 6q0 .825.588 1.413T6 8Zm6 4.5q.225 0 .363-.138T12.5 12q0-.225-.138-.363T12 11.5q-.225 0-.363.138T11.5 12q0 .225.138.363T12 12.5ZM6 20q.825 0 1.413-.588T8 18q0-.825-.588-1.413T6 16q-.825 0-1.413.588T4 18q0 .825.588 1.413T6 20Z"},null,-1),es=[Yt];function ts(b,o){return i(),c("svg",Xt,es)}const ss={name:"material-symbols-content-cut-rounded",render:ts},os={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ns=a("path",{fill:"currentColor",d:"M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5ZM9 4v12V4Z"},null,-1),ls=[ns];function as(b,o){return i(),c("svg",os,ls)}const is={name:"material-symbols-content-copy-outline-rounded",render:as},V=b=>(Ft("data-v-8b6ffb58"),b=b(),Bt(),b),cs={class:"v-toolbar"},rs={class:"right-actions"},us=V(()=>a("md-ripple",null,null,-1)),ds=V(()=>a("md-ripple",null,null,-1)),_s=["onClick"],ps=V(()=>a("md-ripple",null,null,-1)),ms=["onClick"],hs=V(()=>a("md-ripple",null,null,-1)),fs={class:"form-check"},bs={class:"form-check-label"},vs=["checked"],ks={class:"form-check"},ys={class:"form-check-label"},gs=["checked"],Ts={class:"icon-button btn-sort"},Cs=V(()=>a("md-ripple",null,null,-1)),qs={class:"menu-items"},Ds=["onClick","headline"],ws={class:"file-items"},$s=["onClick","onDblclick","onContextmenu"],Ss=["checked"],Is=["src"],Ms={class:"title"},Vs={style:{"font-size":"0.75rem"}},Es=["onContextmenu"],xs={key:0,class:"no-files"},Fs={key:0,class:"file-item-info"},Bs=ut({__name:"FilesView",setup(b){var me,he,fe,be;const{t:o}=dt(),$e=$([]),Q=_t(),Se=Q.query,d=Q.params.type,X=$(pt(((me=Se.q)==null?void 0:me.toString())??"")),H=mt(X.value),v=$(((he=H.find(e=>e.name==="path"))==null?void 0:he.value)??"");let E=((fe=H.find(e=>e.name==="dir"))==null?void 0:fe.value)??"";E||(((be=H.find(t=>t.name==="isDir"))==null?void 0:be.value)==="1"?E=v.value:E=v.value.substring(0,v.value.lastIndexOf("/")));const Ie=$(E),Me=[{label:"sort_by.date_asc",value:"DATE_ASC"},{label:"sort_by.date_desc",value:"DATE_DESC"},{label:"sort_by.size_asc",value:"SIZE_ASC"},{label:"sort_by.size_desc",value:"SIZE_DESC"},{label:"sort_by.name_asc",value:"NAME_ASC"},{label:"sort_by.name_desc",value:"NAME_DESC"}],T=$(!1),Y=ht(),{fileShowHidden:C,fileSortBy:L}=ve(Y),ee=ft(),{app:q,urlTokenKey:P,selectedFiles:Ve}=ve(ee);let x=q.value.internalStoragePath;d&&(d==="sdcard"?x=q.value.sdcardPath:d.startsWith("usb")?x=q.value.usbDiskPaths[parseInt(d.substring(3))-1]:d==="app"&&(x=q.value.externalFilesDir));const{loading:Ee,panels:_,currentDir:z,refetch:te}=bt(P,x,Ie.value,L),{createPath:xe,createVariables:Fe,createMutation:Be}=vt(P,_),{renameValue:Ae,renamePath:Ze,renameDone:He,renameMutation:Le,renameVariables:Pe}=kt(_),{internal:se,sdcard:oe,usb:ze,refetch:N}=yt(),{onDeleted:U}=At(_,z,N),{downloadFile:ne,downloadDir:Ne,downloadFiles:Ue}=It(P),{view:W}=zt($e,(e,t)=>{ee.lightbox={sources:e,index:t,visible:!0}}),{selectedItem:F,select:We}=gt(z,d,X,Y),{canPaste:le,copy:R,cut:ae,paste:G}=Tt(Ve,te,N),{input:Re,upload:ie,uploadChanged:ce}=ke(),{input:Ge,upload:re,uploadChanged:ue}=ke(),{mutate:Ke,onDone:Oe}=Ct({document:Mt,appApi:!0});Oe(e=>{Ue(e.data.setTempValue.key),_.value.forEach(t=>{t.items.forEach(s=>{s.checked=!1})})});const D=()=>{const e=[];return _.value.forEach(t=>{t.items.forEach(s=>{s.checked&&(s.panel=t,e.push(s))})}),e};function je(e){T.value=e.target.checked}function Je(e){C.value=e.target.checked}const Qe=()=>{Ke({key:Zt(),value:JSON.stringify(D().map(e=>({path:e.path})))})},Xe=qt(()=>D().length>0),Ye=()=>{Z(Ce,{files:D(),onDone:U})};v.value&&Dt(()=>_.value.length,()=>{if(_.value.length>0&&v.value){const t=_.value[_.value.length-1].items.find(s=>s.path===v.value);t&&(F.value=t,v.value="")}});function et(){var e,t,s,r;if(d){if(d==="sdcard")return`${o("sdcard")} (${o("storage_free_total",{free:y(((e=oe.value)==null?void 0:e.freeBytes)??0),total:y(((t=oe.value)==null?void 0:t.totalBytes)??0)})})`;if(d==="app")return o("app_name");if(d.startsWith("usb")){const B=parseInt(d.substring(3)),h=ze.value[B-1];return`${o("usb_storage")} ${B} (${o("storage_free_total",{free:y((h==null?void 0:h.freeBytes)??0),total:y((h==null?void 0:h.totalBytes)??0)})})`}}return`${o("page_title.files")} (${o("storage_free_total",{free:y(((s=se.value)==null?void 0:s.freeBytes)??0),total:y(((r=se.value)==null?void 0:r.totalBytes)??0)})})`}function tt(e,t){if(T.value){t.checked=!t.checked;return}We(e,t)}function de(e){return ge(e.name)||Te(e.name)||Nt(e.name)}function st(e,t){L.value=t,e.close()}function ot(e,t){t.isDir||(de(t)?W(C?e.items:e.items.filter(s=>!s.name.startsWith(".")),t):ne(t.path))}function nt(e,t){e.preventDefault();const s=[{label:o("create_folder"),onClick:()=>{xe.value=t,Z(we,{title:o("name"),placeholder:o("name"),mutation:Be,getVariables:Fe})}},{label:o("upload_files"),onClick:()=>{ie(t)}},{label:o("upload_folder"),onClick:()=>{re(t)}}];le()&&s.push({label:o("paste"),onClick:()=>{G(t)}}),qe({x:e.x,y:e.y,items:s})}function lt(e,t,s){e.preventDefault();let r;s.isDir?r=[{label:o("upload_files"),onClick:()=>{ie(s.path)}},{label:o("upload_folder"),onClick:()=>{re(s.path)}},{label:o("download"),onClick:()=>{Ne(s.path)}}]:(r=[],de(s)&&r.push({label:o("open"),onClick:()=>{W(t.items,s)}}),r.push({label:o("download"),onClick:()=>{ne(s.path)}})),r.push({label:o("duplicate"),onClick:()=>{R([s]),G(t.dir)}}),r.push({label:o("cut"),onClick:()=>{s.panel=t,ae([s])}}),r.push({label:o("copy"),onClick:()=>{R([s])}}),s.isDir&&le()&&r.push({label:o("paste"),onClick:()=>{G(s.path)}}),r=[...r,{label:o("rename"),onClick:()=>{Ae.value=s.name,Ze.value=s.path,Z(we,{title:o("rename"),placeholder:o("name"),value:s.name,mutation:Le,getVariables:Pe,done:He})}},{label:o("delete"),onClick:()=>{Z(Ce,{files:[s],onDone:U})}}],qe({x:e.x,y:e.y,items:r})}const _e=e=>{e.status==="done"&&setTimeout(()=>{te(e.dir),N()},1e3)},pe=e=>{U([e.item])};return wt(()=>{A.on("upload_task_done",_e),A.on("file_deleted",pe)}),$t(()=>{A.off("upload_task_done",_e),A.off("file_deleted",pe)}),(e,t)=>{const s=Wt,r=is,B=ss,h=Ht,at=Lt,it=Qt,ct=Vt,rt=Pt,w=St("tooltip");return i(),c(k,null,[a("div",cs,[f(s,{current:et}),a("div",rs,[T.value&&Xe.value?(i(),c(k,{key:0},[S((i(),c("button",{class:"icon-button",onClick:t[0]||(t[0]=I(()=>n(R)(D()),["stop"]))},[us,f(r)])),[[w,e.$t("copy")]]),S((i(),c("button",{class:"icon-button",onClick:t[1]||(t[1]=I(()=>n(ae)(D()),["stop"]))},[ds,f(B)])),[[w,e.$t("cut")]]),S((i(),c("button",{class:"icon-button",onClick:I(Ye,["stop"])},[ps,f(h)],8,_s)),[[w,e.$t("delete")]]),S((i(),c("button",{class:"icon-button",onClick:I(Qe,["stop"])},[hs,f(at)],8,ms)),[[w,e.$t("download")]])],64)):p("",!0),a("div",fs,[a("label",bs,[a("md-checkbox",{"touch-target":"wrapper",onChange:je,checked:T.value},null,40,vs),g(" "+m(e.$t("select_mode")),1)])]),a("div",ks,[a("label",ys,[a("md-checkbox",{"touch-target":"wrapper",onChange:Je,checked:n(C)},null,40,gs),g(m(e.$t("show_hidden")),1)])]),f(ct,null,{content:M(u=>[a("div",qs,[(i(),c(k,null,j(Me,l=>a("md-menu-item",{onClick:K=>st(u,l.value),headline:e.$t(l.label),class:ye({selected:l.value===n(L)})},null,10,Ds)),64))])]),default:M(()=>[S((i(),c("button",Ts,[Cs,f(it)])),[[w,e.$t("sort")]])]),_:1})])]),f(n(Rt),{class:"panel-container"},{default:M(()=>[(i(!0),c(k,null,j(n(_),u=>(i(),J(n(De),{key:u.dir},{default:M(()=>[a("div",ws,[(i(!0),c(k,null,j(u.items,l=>{var K;return i(),c(k,{key:l.path},[!l.name.startsWith(".")||n(C)?(i(),c("div",{key:0,class:ye(["file-item",{active:(n(z)+"/").startsWith(l.path+"/")||((K=n(F))==null?void 0:K.path)===l.path}]),onClick:O=>tt(u,l),onDblclick:I(O=>ot(u,l),["prevent"]),onContextmenu:O=>lt(O,u,l)},[T.value?(i(),c("md-checkbox",{key:0,"touch-target":"wrapper",checked:l.checked},null,8,Ss)):p("",!0),l.isDir?(i(),J(rt,{key:1})):p("",!0),n(ge)(l.name)||n(Te)(l.name)?(i(),c("img",{key:2,src:n(Et)(l.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Is)):p("",!0),a("div",Ms,[g(m(l.name)+" ",1),a("div",Vs,[g(m(n(xt)(l.updatedAt)),1),l.isDir?p("",!0):(i(),c(k,{key:0},[g(", "+m(n(y)(l.size)),1)],64))])])],42,$s)):p("",!0)],64)}),128)),a("div",{class:"empty",onContextmenu:l=>nt(l,u.dir)},[u.items.filter(l=>!l.name.startsWith(".")||n(C)).length===0?(i(),c("div",xs,m(e.$t("no_files")),1)):p("",!0)],40,Es)])]),_:2},1024))),128)),n(_).length===0?(i(),J(n(De),{key:0,class:"no-data-placeholder"},{default:M(()=>[g(m(e.$t(n(Gt)(n(Ee),n(q).permissions,"WRITE_EXTERNAL_STORAGE"))),1)]),_:1})):p("",!0)]),_:1}),n(F)?(i(),c("div",Fs,m(e.$t("path"))+": "+m(n(F).path),1)):p("",!0),a("input",{ref_key:"fileInput",ref:Re,style:{display:"none"},type:"file",multiple:"",onChange:t[2]||(t[2]=(...u)=>n(ce)&&n(ce)(...u))},null,544),a("input",{ref_key:"dirFileInput",ref:Ge,style:{display:"none"},type:"file",multiple:"",webkitdirectory:"",mozdirectory:"",directory:"",onChange:t[3]||(t[3]=(...u)=>n(ue)&&n(ue)(...u))},null,544)],64)}}});const Ns=Ut(Bs,[["__scopeId","data-v-8b6ffb58"]]);export{Ns as default};
