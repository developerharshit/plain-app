import{d as _,e as l,o as s,c as r,F as d,J as p,a,t as o,j as f,bS as h,l as m,h as b,bP as g,C as y,_ as v}from"./index-698aff45.js";const k={class:"breadcrumb"},B=["onClick"],S={class:"active"},C=_({__name:"Breadcrumb",props:{current:{type:[String,Function]},paths:{type:Array,default:()=>[]}},setup(e){const c=e,u=l();function i(t){y(u,t)}return(t,$)=>(s(),r("ol",k,[(s(!0),r(d,null,p(c.paths,n=>(s(),r("li",{key:n},[a("a",{href:"#",onClick:m(x=>i(n),["prevent"])},o(t.$t(`page_title.${f(h)(n)}`)),9,B)]))),128)),a("li",S,[b(o(typeof e.current=="function"?e.current():e.current),1),g(t.$slots,"current",{},void 0,!0)])]))}});const N=v(C,[["__scopeId","data-v-d292b348"]]);export{N as _};