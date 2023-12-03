import{_ as x}from"./MonacoEditor.vuevuetypescriptsetuptruelang-28b95a06.js";import{_ as y}from"./EditToolbar.vuevuetypescriptsetuptruelang-77de909b.js";import{_ as N}from"./Breadcrumb-052dbd56.js";import{d as $,u as b,r as s,i as C,k as r,a8 as p,bw as d,a2 as h,e as U,f as B,x as i,h as F,L as c,aU as g,o as S}from"./index-c29359c5.js";const q={class:"page-container"},D={class:"main"},Q=$({__name:"NetworkView",setup(A){const{t:u}=b(),o=s(0),n=s(""),a=s("");C({handle:(l,e)=>{e?r(u(e),"error"):(n.value=l.networkConfig.netplan,a.value=l.networkConfig.netmix)},document:p`
    query {
      networkConfig {
        ...NetworkConfigFragment
      }
    }
    ${d}
  `});const{mutate:_,loading:f,onDone:v}=h({document:p`
    mutation applyNetplanAndNetmix($netplan: String!, $netmix: String!) {
      applyNetplan(config: $netplan) {
        __typename
      }
      applyNetmix(config: $netmix) {
        ...NetworkConfigFragment
      }
    }
    ${d}
  `});v(()=>{r(u("saved"))});function w(){!n.value||!a.value||_({netplan:n.value,netmix:a.value})}return(l,e)=>{const V=N,k=y,m=x;return S(),U("div",q,[B("div",D,[i(V,{current:()=>l.$t("page_title.network")},null,8,["current"]),i(k,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),save:w,loading:F(f),tabs:["/etc/netplan/config.yaml","/etc/plainbox/netmix.yaml"]},null,8,["modelValue","loading","tabs"]),c(i(m,{language:"yaml",height:"700",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t)},null,8,["modelValue"]),[[g,o.value===0]]),c(i(m,{language:"yaml",height:"700",modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t)},null,8,["modelValue"]),[[g,o.value===1]])])])}}});export{Q as default};
