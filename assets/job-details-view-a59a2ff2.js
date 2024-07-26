import{bY as X,j as e,q as _,d as R,e as p,S as o,F as Z,a9 as Q,L as Ee,R as H,p as D,aa as U,D as pe,f as O,T as u,b_ as J,O as W,x as l,a as ee,r as y,B as G,ch as Oe,I as xe,ci as Pe,cj as Re,K as ne,a2 as Ie,ck as Le,cg as q,E as se,g as De,cb as Be,e6 as ae,G as P,eb as Fe,ec as _e,ed as ze,ee as Ne,cT as le,aZ as We,ef as Ae,y as he,eg as me,C as je,l as L,v as He,eh as $e,w as qe,N as Ge,ei as Me}from"./index-fc31389b.js";import{b as ue}from"./format-number-8ee044d8.js";import{P as Ve,p as Ue}from"./Pagination-6c92d77f.js";import{A as K}from"./Autocomplete-79c5288c.js";import{T as Y}from"./TextField-c5c5e45f.js";import{F as $}from"./FormControlLabel-f8d84e00.js";import{C as ie}from"./Checkbox-1984f828.js";import{R as Ke}from"./Radio-d0af1f14.js";import{C as E}from"./Chip-276a27ce.js";import{C as Ye}from"./custom-breadcrumbs-55e72b55.js";import{c as oe,a as z,f as N,v as Xe,h as Ze,i as Qe,u as Je,m as te,r as es,l as A,C as re,R as ce,n as ss,F as ns,o as as}from"./rhf-autocomplete-947a9911.js";import{o as ls}from"./yup-674d2aca.js";import{C as de}from"./CardHeader-a7b93930.js";import{D as is}from"./DatePicker-8c2b151f.js";import{S as os}from"./Switch-eb36a74c.js";import{L as be}from"./LoadingButton-1fae9005.js";import{M as ts}from"./markdown-5ca73b49.js";function ye({job:s,onView:r,onEdit:n,onDelete:i}){const c=X(),{id:x,title:C,company:m,createdAt:j,candidates:g,experience:f,employmentTypes:d,salary:v,role:b}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(R,{onClick:c.onOpen,sx:{position:"absolute",top:8,right:8},children:e.jsx(p,{icon:"eva:more-vertical-fill"})}),e.jsxs(o,{sx:{p:3,pb:2},children:[e.jsx(Z,{alt:m.name,src:m.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),e.jsx(Q,{sx:{mb:1},primary:e.jsx(Ee,{component:H,href:D.dashboard.job.details(x),color:"inherit",children:C}),secondary:`Posted date: ${U(j)}`,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(o,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[e.jsx(p,{width:16,icon:"solar:users-group-rounded-bold"}),g.length," Candidates"]})]}),e.jsx(pe,{sx:{borderStyle:"dashed"}}),e.jsx(O,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:f,icon:e.jsx(p,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:d.join(", "),icon:e.jsx(p,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:v.negotiable?"Negotiable":ue(v.price),icon:e.jsx(p,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:b,icon:e.jsx(p,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(B=>e.jsxs(o,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[B.icon,e.jsx(u,{variant:"caption",noWrap:!0,children:B.label})]},B.label))})]}),e.jsxs(J,{open:c.open,onClose:c.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(W,{onClick:()=>{c.onClose(),r()},children:[e.jsx(p,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(W,{onClick:()=>{c.onClose(),n()},children:[e.jsx(p,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(W,{onClick:()=>{c.onClose(),i()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}ye.propTypes={job:l.object,onDelete:l.func,onEdit:l.func,onView:l.func};function rs({jobs:s}){const r=ee(),n=y.useCallback(x=>{r.push(D.dashboard.job.details(x))},[r]),i=y.useCallback(x=>{r.push(D.dashboard.job.edit(x))},[r]),c=y.useCallback(x=>{console.info("DELETE",x)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(x=>e.jsx(ye,{job:x,onView:()=>n(x.id),onEdit:()=>i(x.id),onDelete:()=>c(x.id)},x.id))}),s.length>8&&e.jsx(Ve,{count:8,sx:{mt:8,[`& .${Ue.ul}`]:{justifyContent:"center"}}})]})}rs.propTypes={jobs:l.array};function cs({sort:s,onSort:r,sortOptions:n}){const i=X();return e.jsxs(e.Fragment,{children:[e.jsxs(G,{disableRipple:!0,color:"inherit",onClick:i.onOpen,endIcon:e.jsx(p,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(O,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(J,{open:i.open,onClose:i.onClose,sx:{width:140},children:n.map(c=>e.jsx(W,{selected:c.value===s,onClick:()=>{i.onClose(),r(c.value)},children:c.label},c.value))})]})}cs.propTypes={onSort:l.func,sort:l.string,sortOptions:l.array};function ds({query:s,results:r,onSearch:n,hrefItem:i}){const c=ee(),x=m=>{c.push(i(m))},C=m=>{if(s&&m.key==="Enter"){const j=r.filter(g=>g.title===s)[0];x(j.id)}};return e.jsx(K,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:r,onInputChange:(m,j)=>n(j),getOptionLabel:m=>m.title,noOptionsText:e.jsx(Oe,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(m,j)=>m.id===j.id,renderInput:m=>e.jsx(Y,{...m,placeholder:"Search...",onKeyUp:C,InputProps:{...m.InputProps,startAdornment:e.jsx(xe,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(m,j,{inputValue:g})=>{const f=Pe(j.title,g),d=Re(j.title,f);return y.createElement(O,{component:"li",...m,onClick:()=>x(j.id),key:j.id},e.jsx("div",{children:d.map((v,b)=>e.jsx(u,{component:"span",color:v.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:v.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:v.text},b))}))}})}ds.propTypes={hrefItem:l.func,onSearch:l.func,query:l.string,results:l.array};function ps({open:s,onOpen:r,onClose:n,filters:i,onFilters:c,canReset:x,onResetFilters:C,roleOptions:m,locationOptions:j,benefitOptions:g,experienceOptions:f,employmentTypeOptions:d}){const v=y.useCallback(a=>{const k=i.employmentTypes.includes(a)?i.employmentTypes.filter(S=>S!==a):[...i.employmentTypes,a];c("employmentTypes",k)},[i.employmentTypes,c]),b=y.useCallback(a=>{c("experience",a)},[c]),B=y.useCallback(a=>{c("roles",a)},[c]),t=y.useCallback(a=>{c("locations",a)},[c]),h=y.useCallback(a=>{const k=i.benefits.includes(a)?i.benefits.filter(S=>S!==a):[...i.benefits,a];c("benefits",k)},[i.benefits,c]),T=e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(u,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(q,{title:"Reset",children:e.jsx(R,{onClick:C,children:e.jsx(ne,{color:"error",variant:"dot",invisible:!x,children:e.jsx(p,{icon:"solar:restart-bold"})})})}),e.jsx(R,{onClick:n,children:e.jsx(p,{icon:"mingcute:close-line"})})]}),w=e.jsxs(o,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),d.map(a=>e.jsx($,{control:e.jsx(ie,{checked:i.employmentTypes.includes(a),onClick:()=>v(a)}),label:a},a))]}),M=e.jsxs(o,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),f.map(a=>e.jsx($,{control:e.jsx(Ke,{checked:a===i.experience,onClick:()=>b(a)}),label:a,sx:{...a==="all"&&{textTransform:"capitalize"}}},a))]}),V=e.jsxs(o,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),e.jsx(K,{multiple:!0,disableCloseOnSelect:!0,options:m.map(a=>a),getOptionLabel:a=>a,value:i.roles,onChange:(a,k)=>B(k),renderInput:a=>e.jsx(Y,{placeholder:"Select Roles",...a}),renderOption:(a,k)=>y.createElement("li",{...a,key:k},k),renderTags:(a,k)=>a.map((S,I)=>y.createElement(E,{...k({index:I}),key:S,label:S,size:"small",variant:"soft"}))})]}),ke=e.jsxs(o,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),e.jsx(K,{multiple:!0,disableCloseOnSelect:!0,options:j.map(a=>a.label),getOptionLabel:a=>a,value:i.locations,onChange:(a,k)=>t(k),renderInput:a=>e.jsx(Y,{placeholder:"Select Locations",...a}),renderOption:(a,k)=>{const{code:S,label:I,phone:we}=j.filter(Se=>Se.label===k)[0];return I?y.createElement("li",{...a,key:I},e.jsx(p,{icon:`circle-flags:${S.toLowerCase()}`,width:28,sx:{mr:1}},I),I," (",S,") +",we):null},renderTags:(a,k)=>a.map((S,I)=>y.createElement(E,{...k({index:I}),key:S,label:S,size:"small",variant:"soft"}))})]}),Te=e.jsxs(o,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),g.map(a=>e.jsx($,{control:e.jsx(ie,{checked:i.benefits.includes(a),onClick:()=>h(a)}),label:a},a))]});return e.jsxs(e.Fragment,{children:[e.jsx(G,{disableRipple:!0,color:"inherit",endIcon:e.jsx(ne,{color:"error",variant:"dot",invisible:!x,children:e.jsx(p,{icon:"ic:round-filter-list"})}),onClick:r,children:"Filters"}),e.jsxs(Ie,{anchor:"right",open:s,onClose:n,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[T,e.jsx(pe,{}),e.jsx(Le,{sx:{px:2.5,py:3},children:e.jsxs(o,{spacing:3,children:[w,M,V,ke,Te]})})]})]})}ps.propTypes={benefitOptions:l.array,canReset:l.bool,employmentTypeOptions:l.array,experienceOptions:l.array,filters:l.object,locationOptions:l.array,onClose:l.func,onFilters:l.func,onOpen:l.func,onResetFilters:l.func,open:l.bool,roleOptions:l.array};function xs({filters:s,onFilters:r,canReset:n,onResetFilters:i,results:c,...x}){const C=d=>{const v=s.employmentTypes.filter(b=>b!==d);r("employmentTypes",v)},m=()=>{r("experience","all")},j=d=>{const v=s.roles.filter(b=>b!==d);r("role",v)},g=d=>{const v=s.locations.filter(b=>b!==d);r("locations",v)},f=d=>{const v=s.benefits.filter(b=>b!==d);r("benefits",v)};return e.jsxs(o,{spacing:1.5,...x,children:[e.jsxs(O,{sx:{typography:"body2"},children:[e.jsx("strong",{children:c}),e.jsx(O,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(o,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.employmentTypes.length&&e.jsx(F,{label:"Employment Types:",children:s.employmentTypes.map(d=>e.jsx(E,{label:d,size:"small",onDelete:()=>C(d)},d))}),s.experience!=="all"&&e.jsx(F,{label:"Experience:",children:e.jsx(E,{size:"small",label:s.experience,onDelete:m})}),!!s.roles.length&&e.jsx(F,{label:"Roles:",children:s.roles.map(d=>e.jsx(E,{label:d,size:"small",onDelete:()=>j(d)},d))}),!!s.locations.length&&e.jsx(F,{label:"Locations:",children:s.locations.map(d=>e.jsx(E,{label:d,size:"small",onDelete:()=>g(d)},d))}),!!s.benefits.length&&e.jsx(F,{label:"Benefits:",children:s.benefits.map(d=>e.jsx(E,{label:d,size:"small",onDelete:()=>f(d)},d))}),n&&e.jsx(G,{color:"error",onClick:i,startIcon:e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}xs.propTypes={canReset:l.bool,filters:l.object,onFilters:l.func,onResetFilters:l.func,results:l.number};function F({label:s,children:r,sx:n,...i}){return e.jsxs(o,{component:se,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...i,children:[e.jsx(O,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(o,{spacing:1,direction:"row",flexWrap:"wrap",children:r})]})}F.propTypes={children:l.node,label:l.string,sx:l.object};function ge({currentJob:s}){const r=ee(),n=De("up","md"),{enqueueSnackbar:i}=Be(),c=oe().shape({title:z().required("Title is required"),content:z().required("Content is required"),employmentTypes:N().min(1,"Choose at least one option"),role:z().required("Role is required"),skills:N().min(1,"Choose at least one option"),workingSchedule:N().min(1,"Choose at least one option"),benefits:N().min(1,"Choose at least one option"),locations:N().min(1,"Choose at least one option"),expiredDate:Xe().nullable().required("Expired date is required"),salary:oe().shape({type:z(),price:Ze().min(1,"Price is required"),negotiable:Qe()}),experience:z()}),x=y.useMemo(()=>({title:(s==null?void 0:s.title)||"",content:(s==null?void 0:s.content)||"",employmentTypes:(s==null?void 0:s.employmentTypes)||[],experience:(s==null?void 0:s.experience)||"1 year exp",role:(s==null?void 0:s.role)||ae[1],skills:(s==null?void 0:s.skills)||[],workingSchedule:(s==null?void 0:s.workingSchedule)||[],locations:(s==null?void 0:s.locations)||[],benefits:(s==null?void 0:s.benefits)||[],expiredDate:(s==null?void 0:s.expiredDate)||null,salary:(s==null?void 0:s.salary)||{type:"Hourly",price:0,negotiable:!1}}),[s]),C=Je({resolver:ls(c),defaultValues:x}),{reset:m,control:j,handleSubmit:g,formState:{isSubmitting:f}}=C;y.useEffect(()=>{s&&m(x)},[s,x,m]);const d=g(async t=>{try{await new Promise(h=>setTimeout(h,500)),m(),i(s?"Update success!":"Create success!"),r.push(D.dashboard.job.root),console.info("DATA",t)}catch(h){console.error(h)}}),v=e.jsxs(e.Fragment,{children:[n&&e.jsxs(P,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(P,{xs:12,md:8,children:e.jsxs(_,{children:[!n&&e.jsx(de,{title:"Details"}),e.jsxs(o,{spacing:3,sx:{p:3},children:[e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Title"}),e.jsx(ce,{name:"title",placeholder:"Ex: Software Engineer..."})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Content"}),e.jsx(as,{simple:!0,name:"content"})]})]})]})})]}),b=e.jsxs(e.Fragment,{children:[n&&e.jsxs(P,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(P,{xs:12,md:8,children:e.jsxs(_,{children:[!n&&e.jsx(de,{title:"Properties"}),e.jsxs(o,{spacing:3,sx:{p:3},children:[e.jsxs(o,{spacing:1,children:[e.jsx(u,{variant:"subtitle2",children:"Employment type"}),e.jsx(te,{row:!0,spacing:4,name:"employmentTypes",options:Fe})]}),e.jsxs(o,{spacing:1,children:[e.jsx(u,{variant:"subtitle2",children:"Experience"}),e.jsx(es,{row:!0,spacing:4,name:"experience",options:_e})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Role"}),e.jsx(A,{name:"role",autoHighlight:!0,options:ae.map(t=>t),getOptionLabel:t=>t,renderOption:(t,h)=>y.createElement("li",{...t,key:h},h)})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Skills"}),e.jsx(A,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:ze.map(t=>t),getOptionLabel:t=>t,renderOption:(t,h)=>y.createElement("li",{...t,key:h},h),renderTags:(t,h)=>t.map((T,w)=>y.createElement(E,{...h({index:w}),key:T,label:T,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Working schedule"}),e.jsx(A,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:Ne.map(t=>t),getOptionLabel:t=>t,renderOption:(t,h)=>y.createElement("li",{...t,key:h},h),renderTags:(t,h)=>t.map((T,w)=>y.createElement(E,{...h({index:w}),key:T,label:T,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Locations"}),e.jsx(A,{name:"locations",placeholder:"+ Locations",multiple:!0,disableCloseOnSelect:!0,options:le.map(t=>t.label),getOptionLabel:t=>t,renderOption:(t,h)=>{const{code:T,label:w,phone:M}=le.filter(V=>V.label===h)[0];return w?y.createElement("li",{...t,key:w},e.jsx(p,{icon:`circle-flags:${T.toLowerCase()}`,width:28,sx:{mr:1}},w),w," (",T,") +",M):null},renderTags:(t,h)=>t.map((T,w)=>y.createElement(E,{...h({index:w}),key:T,label:T,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Expired"}),e.jsx(re,{name:"expiredDate",control:j,render:({field:t,fieldState:{error:h}})=>e.jsx(is,{...t,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!h,helperText:h==null?void 0:h.message}}})})]}),e.jsxs(o,{spacing:2,children:[e.jsx(u,{variant:"subtitle2",children:"Salary"}),e.jsx(re,{name:"salary.type",control:j,render:({field:t})=>e.jsx(O,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:e.jsx(p,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:e.jsx(p,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map(h=>e.jsxs(se,{component:We,variant:"outlined",onClick:()=>t.onChange(h.label),sx:{p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column",...h.label===t.value&&{borderWidth:2,borderColor:"text.primary"}},children:[h.icon,h.label]},h.label))})}),e.jsx(ce,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:e.jsx(xe,{position:"start",children:e.jsx(O,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),e.jsx(ss,{name:"salary.negotiable",label:"Salary is negotiable"})]}),e.jsxs(o,{spacing:1,children:[e.jsx(u,{variant:"subtitle2",children:"Benefits"}),e.jsx(te,{name:"benefits",options:Ae,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]})})]}),B=e.jsxs(e.Fragment,{children:[n&&e.jsx(P,{md:4}),e.jsxs(P,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx($,{control:e.jsx(os,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(be,{type:"submit",variant:"contained",size:"large",loading:f,sx:{ml:2},children:s?"Save Changes":"Create Job"})]})]});return e.jsx(ns,{methods:C,onSubmit:d,children:e.jsxs(P,{container:!0,spacing:3,children:[v,b,B]})})}ge.propTypes={currentJob:l.object};function hs({id:s}){const r=he(),n=me.find(i=>i.id===s);return e.jsxs(je,{maxWidth:r.themeStretch?!1:"lg",children:[e.jsx(Ye,{heading:"Edit",links:[{name:"Dashboard",href:D.dashboard.root},{name:"Job",href:D.dashboard.job.root},{name:n==null?void 0:n.title}],sx:{mb:{xs:3,md:5}}}),e.jsx(ge,{currentJob:n})]})}hs.propTypes={id:l.string};function fe({publish:s,backLink:r,editLink:n,liveLink:i,publishOptions:c,onChangePublish:x,sx:C,...m}){const j=X();return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...C},...m,children:[e.jsx(G,{component:H,href:r,startIcon:e.jsx(p,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(O,{sx:{flexGrow:1}}),s==="published"&&e.jsx(q,{title:"Go Live",children:e.jsx(R,{component:H,href:i,children:e.jsx(p,{icon:"eva:external-link-fill"})})}),e.jsx(q,{title:"Edit",children:e.jsx(R,{component:H,href:n,children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsx(be,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(p,{icon:"eva:arrow-ios-downward-fill"}),onClick:j.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(J,{open:j.open,onClose:j.onClose,arrow:"top-right",sx:{width:140},children:c.map(g=>e.jsxs(W,{selected:g.value===s,onClick:()=>{j.onClose(),x(g.value)},children:[g.value==="published"&&e.jsx(p,{icon:"eva:cloud-upload-fill"}),g.value==="draft"&&e.jsx(p,{icon:"solar:file-text-bold"}),g.label]},g.value))})]})}fe.propTypes={backLink:l.string,editLink:l.string,liveLink:l.string,onChangePublish:l.func,publish:l.string,publishOptions:l.array,sx:l.object};function ve({job:s}){const{title:r,skills:n,salary:i,content:c,benefits:x,createdAt:C,experience:m,expiredDate:j,employmentTypes:g}=s,f=e.jsxs(o,{component:_,spacing:3,sx:{p:3},children:[e.jsx(u,{variant:"h4",children:r}),e.jsx(ts,{children:c}),e.jsxs(o,{spacing:2,children:[e.jsx(u,{variant:"h6",children:"Skills"}),e.jsx(o,{direction:"row",alignItems:"center",spacing:1,children:n.map(b=>e.jsx(E,{label:b,variant:"soft"},b))})]}),e.jsxs(o,{spacing:2,children:[e.jsx(u,{variant:"h6",children:"Benefits"}),e.jsx(o,{direction:"row",alignItems:"center",spacing:1,children:x.map(b=>e.jsx(E,{label:b,variant:"soft"},b))})]})]}),d=e.jsx(o,{component:_,spacing:2,sx:{p:3},children:[{label:"Date Posted",value:U(C),icon:e.jsx(p,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:U(j),icon:e.jsx(p,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:g,icon:e.jsx(p,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:i.negotiable?"Negotiable":ue(i.price),icon:e.jsx(p,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:m,icon:e.jsx(p,{icon:"carbon:skill-level-basic"})}].map(b=>e.jsxs(o,{spacing:1.5,direction:"row",children:[b.icon,e.jsx(Q,{primary:b.label,secondary:b.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},b.label))}),v=e.jsxs(o,{component:se,variant:"outlined",spacing:2,direction:"row",sx:{p:3,borderRadius:2,mt:3},children:[e.jsx(Z,{alt:s.company.name,src:s.company.logo,variant:"rounded",sx:{width:64,height:64}}),e.jsxs(o,{spacing:1,children:[e.jsx(u,{variant:"subtitle1",children:s.company.name}),e.jsx(u,{variant:"body2",children:s.company.fullAddress}),e.jsx(u,{variant:"body2",children:s.company.phoneNumber})]})]});return e.jsxs(P,{container:!0,spacing:3,children:[e.jsx(P,{xs:12,md:8,children:f}),e.jsxs(P,{xs:12,md:4,children:[d,v]})]})}ve.propTypes={job:l.object};function Ce({candidates:s}){return e.jsx(O,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:s.map(r=>e.jsxs(o,{component:_,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(R,{sx:{position:"absolute",top:8,right:8},children:e.jsx(p,{icon:"eva:more-vertical-fill"})}),e.jsx(Z,{alt:r.name,src:r.avatarUrl,sx:{width:48,height:48}}),e.jsxs(o,{spacing:2,children:[e.jsx(Q,{primary:r.name,secondary:r.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(o,{spacing:1,direction:"row",children:[e.jsx(R,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:n=>L(n.palette.error.main,.08),"&:hover":{bgcolor:n=>L(n.palette.error.main,.16)}},children:e.jsx(p,{width:18,icon:"solar:phone-bold"})}),e.jsx(R,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:n=>L(n.palette.info.main,.08),"&:hover":{bgcolor:n=>L(n.palette.info.main,.16)}},children:e.jsx(p,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(R,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:n=>L(n.palette.primary.main,.08),"&:hover":{bgcolor:n=>L(n.palette.primary.main,.16)}},children:e.jsx(p,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(q,{title:"Download CV",children:e.jsx(R,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:n=>L(n.palette.secondary.main,.08),"&:hover":{bgcolor:n=>L(n.palette.secondary.main,.16)}},children:e.jsx(p,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},r.id))})}Ce.propTypes={candidates:l.array};function ms({id:s}){const r=he(),n=me.filter(f=>f.id===s)[0],[i,c]=y.useState(n==null?void 0:n.publish),[x,C]=y.useState("content"),m=y.useCallback((f,d)=>{C(d)},[]),j=y.useCallback(f=>{c(f)},[]),g=e.jsx(He,{value:x,onChange:m,sx:{mb:{xs:3,md:5}},children:$e.map(f=>e.jsx(qe,{iconPosition:"end",value:f.value,label:f.label,icon:f.value==="candidates"?e.jsx(Ge,{variant:"filled",children:n==null?void 0:n.candidates.length}):""},f.value))});return e.jsxs(je,{maxWidth:r.themeStretch?!1:"lg",children:[e.jsx(fe,{backLink:D.dashboard.job.root,editLink:D.dashboard.job.edit(`${n==null?void 0:n.id}`),liveLink:"#",publish:i||"",onChangePublish:j,publishOptions:Me}),g,x==="content"&&e.jsx(ve,{job:n}),x==="candidates"&&e.jsx(Ce,{candidates:n==null?void 0:n.candidates})]})}ms.propTypes={id:l.string};export{ms as J,ds as a,ps as b,cs as c,xs as d,rs as e,ge as f,hs as g};
