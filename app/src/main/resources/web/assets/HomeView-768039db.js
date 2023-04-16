import{_ as w}from"./Breadcrumb-55791723.js";import{d as b,u as S,s as B,a as V,r as c,i as N,t as T,h as j,o as r,c as l,b as e,e as F,f as o,g as u,w as a,j as d,F as $,k as v,l as k,m as H,_ as q}from"./index-3c761cf5.js";const z={class:"page-container container"},I={class:"main"},P={class:"row"},Q={class:"col-sm-6"},A={class:"card"},D={class:"card-body"},E={class:"card-title"},G={class:"card-text stats-items"},L={class:"col-sm-6"},M={class:"card"},R={class:"card-body"},J={class:"card-title"},K={key:0,style:{"font-size":"0.875rem","font-weight":"normal","margin-left":"8px"}},O={class:"card-text stats-items"},U={class:"col-sm-6 mt-4"},W={class:"card"},X={class:"card-body"},Y={class:"card-title"},Z={class:"card-text stats-items"},x={class:"col-sm-6 mt-4"},ee={class:"card"},se={class:"card-body"},te={class:"card-title"},oe={class:"card-text stats-items"},ne=b({__name:"HomeView",setup(ae){const{t:y}=S(),{app:g}=B(V()),p=c(-1),m=c(-1),f=c(-1),_=c(-1),h=c(-1);N({handle:(t,s)=>{s?T(y(s),"error"):t&&(p.value=t.messageCount,m.value=t.contactCount,f.value=t.callCount,_.value=t.storageStats.totalBytes,h.value=t.storageStats.freeBytes)},document:j,variables:null,appApi:!0});function n(t){H.push(t)}return(t,s)=>{const C=w;return r(),l("div",z,[e("div",I,[F(C,{current:()=>t.$t("page_title.home")},null,8,["current"]),e("div",P,[e("div",Q,[e("div",A,[e("div",D,[e("h5",E,o(t.$t("social")),1),e("p",G,[u(g).allowSensitivePermissions?(r(),l("a",{key:0,href:"#",onClick:s[0]||(s[0]=a(i=>n("/messages"),["prevent"]))},[d(o(t.$t("messages")),1),p.value>=0?(r(),l($,{key:0},[d("("+o(p.value)+")",1)],64)):v("",!0)])):v("",!0),e("a",{href:"#",onClick:s[1]||(s[1]=a(i=>n("/contacts"),["prevent"]))},[d(o(t.$t("contacts")),1),m.value>=0?(r(),l($,{key:0},[d("("+o(m.value)+")",1)],64)):v("",!0)]),u(g).allowSensitivePermissions?(r(),l("a",{key:1,href:"#",onClick:s[2]||(s[2]=a(i=>n("/calls"),["prevent"]))},[d(o(t.$t("calls")),1),f.value>=0?(r(),l($,{key:0},[d("("+o(f.value)+")",1)],64)):v("",!0)])):v("",!0)])])])]),e("div",L,[e("div",M,[e("div",R,[e("h5",J,[d(o(t.$t("storage")),1),_.value>=0?(r(),l("span",K,o(t.$t("storage_free_total",{free:u(k)(h.value),total:u(k)(_.value)})),1)):v("",!0)]),e("p",O,[e("a",{href:"#",onClick:s[3]||(s[3]=a(i=>n("/files"),["prevent"]))},o(t.$t("files")),1),e("a",{href:"#",onClick:s[4]||(s[4]=a(i=>n("/images"),["prevent"]))},o(t.$t("images")),1),e("a",{href:"#",onClick:s[5]||(s[5]=a(i=>n("/audios"),["prevent"]))},o(t.$t("audios")),1),e("a",{href:"#",onClick:s[6]||(s[6]=a(i=>n("/videos"),["prevent"]))},o(t.$t("videos")),1)])])])]),e("div",U,[e("div",W,[e("div",X,[e("h5",Y,o(t.$t("tools")),1),e("p",Z,[e("a",{href:"#",onClick:s[7]||(s[7]=a(i=>n("/json-viewer"),["prevent"]))},o(t.$t("json_viewer")),1),e("a",{href:"#",onClick:s[8]||(s[8]=a(i=>n("/qrcode-generator"),["prevent"]))},o(t.$t("qrcode_generator")),1)])])])]),e("div",x,[e("div",ee,[e("div",se,[e("h5",te,o(t.$t("work")),1),e("p",oe,[e("a",{href:"#",onClick:s[9]||(s[9]=a(i=>n("/notes"),["prevent"]))},o(t.$t("page_title.notes")),1),e("a",{style:{display:"none"},href:"#",onClick:s[10]||(s[10]=a(i=>n("/books"),["prevent"]))},o(t.$t("page_title.books")),1),e("a",{href:"#",onClick:s[11]||(s[11]=a(i=>n("/feeds"),["prevent"]))},o(t.$t("page_title.feeds")),1),e("a",{href:"#",onClick:s[12]||(s[12]=a(i=>n("/aichats"),["prevent"]))},o(t.$t("page_title.aichats")),1)])])])])])])])}}});const le=q(ne,[["__scopeId","data-v-9cf7615e"]]);export{le as default};
