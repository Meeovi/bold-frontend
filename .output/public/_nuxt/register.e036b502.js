import{u as _}from"./composables.4170a9fa.js";import{o as V,c as f,O as r,s as a,P as e,R as b}from"./entry.cc9b0cdc.js";const g={data:()=>({first:null,last:null,email:null,password:null,terms:!1})},k=Object.assign(g,{__name:"register",setup(w){return _({title:"Register"}),(o,l)=>{const t=a("v-text-field"),s=a("v-checkbox"),d=a("v-container"),i=a("v-divider"),m=a("v-spacer"),u=a("v-icon"),p=a("v-btn"),c=a("v-card-actions"),v=a("v-card");return V(),f(v,{class:"mx-auto","max-width":"344",title:"User Registration"},{default:r(()=>[e(d,null,{default:r(()=>[e(t,{modelValue:o.first,"onUpdate:modelValue":l[0]||(l[0]=n=>o.first=n),color:"primary",label:"First name",variant:"underlined"},null,8,["modelValue"]),e(t,{modelValue:o.last,"onUpdate:modelValue":l[1]||(l[1]=n=>o.last=n),color:"primary",label:"Last name",variant:"underlined"},null,8,["modelValue"]),e(t,{modelValue:o.email,"onUpdate:modelValue":l[2]||(l[2]=n=>o.email=n),color:"primary",label:"Email",variant:"underlined"},null,8,["modelValue"]),e(t,{modelValue:o.password,"onUpdate:modelValue":l[3]||(l[3]=n=>o.password=n),color:"primary",label:"Password",placeholder:"Enter your password",variant:"underlined"},null,8,["modelValue"]),e(s,{modelValue:o.terms,"onUpdate:modelValue":l[4]||(l[4]=n=>o.terms=n),color:"secondary",label:"I agree to site terms and conditions"},null,8,["modelValue"])]),_:1}),e(i),e(c,null,{default:r(()=>[e(m),e(p,{color:"success"},{default:r(()=>[b(" Complete Registration "),e(u,{icon:"mdi-chevron-right",end:""})]),_:1})]),_:1})]),_:1})}}});export{k as default};
