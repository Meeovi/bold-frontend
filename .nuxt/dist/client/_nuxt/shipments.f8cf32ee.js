import{u as f}from"./composables.4170a9fa.js";import{Y as p,o as c,I as r,P as l,O as n,s as o,R as x,U as v,V as b,u as y,J as t,W as a}from"./entry.cc9b0cdc.js";import{u as k}from"./asyncData.5720f676.js";const w=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Page ID "),t("th",{class:"text-left"}," Page Name "),t("th",{class:"text-left"}," URL "),t("th",{class:"text-left"}," Meta Title "),t("th",{class:"text-left"}," Created "),t("th",{class:"text-left"}," Edit ")])],-1),C=["href"],N={components:{}},g=Object.assign(N,{__name:"shipments",async setup(V){let s,_;f({title:"Shipments"});const{data:i}=([s,_]=p(()=>k(()=>$fetch("/api/pages"),"$QXHQ0rFxk4")),s=await s,_(),s);return(B,D)=>{const u=o("v-toolbar-title"),d=o("v-col"),m=o("v-toolbar"),h=o("v-table");return c(),r("div",null,[l(m,null,{default:n(()=>[l(d,{cols:"9"},{default:n(()=>[l(u,null,{default:n(()=>[x("Shipments")]),_:1})]),_:1}),l(d,{cols:"2"})]),_:1}),l(h,{"fixed-header":"",height:"300px",width:"100%"},{default:n(()=>[w,(c(!0),r(v,null,b(y(i),e=>(c(),r("tbody",{key:e.id},[t("tr",null,[t("td",null,a(e.id),1),t("td",null,a(e.title),1),t("td",null,a(e.url_key),1),t("td",null,a(e.meta_title),1),t("td",null,a(e.created_at),1),t("td",null,[t("a",{href:`/admin/database/${e.id}`},null,8,C)])])]))),128))]),_:1})])}}});export{g as default};
