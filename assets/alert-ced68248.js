import{j as i,f as l,C as o,p as a,B as t,l as c,W as d}from"./index-fc31389b.js";import{C as h}from"./custom-breadcrumbs-55e72b55.js";import{C as n}from"./component-block-d79a0ebf.js";import{M as x}from"./Masonry-d7123e5a.js";import{A as s}from"./Alert-31e34607.js";import{A as m}from"./AlertTitle-8394f8da.js";import"./CardHeader-a7b93930.js";import"./clsx-1229b3e0.js";import"./Close-2819fb88.js";const r=["info","success","warning","error"];function j(){return i.jsxs(i.Fragment,{children:[i.jsx(l,{sx:{py:5,bgcolor:e=>e.palette.mode==="light"?"grey.200":"grey.800"},children:i.jsx(o,{children:i.jsx(h,{heading:"Alert",links:[{name:"Components",href:a.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})})}),i.jsx(o,{sx:{my:10},children:i.jsxs(x,{columns:{xs:1,sm:2},spacing:3,children:[i.jsx(n,{title:"Standard",children:r.map(e=>i.jsxs(s,{severity:e,onClose:()=>{},sx:{width:1},children:["This is an ",e," alert — check it out!"]},e))}),i.jsx(n,{title:"Filled",children:r.map(e=>i.jsxs(s,{severity:e,variant:"filled",onClose:()=>{},sx:{width:1},children:["This is an ",e," alert — check it out!"]},e))}),i.jsx(n,{title:"Outlined",children:r.map(e=>i.jsxs(s,{severity:e,variant:"outlined",onClose:()=>{},sx:{width:1},children:["This is an ",e," alert — check it out!"]},e))}),i.jsx(n,{title:"Description",children:r.map(e=>i.jsxs(s,{severity:e,onClose:()=>{},sx:{width:1},children:[i.jsxs(m,{sx:{textTransform:"capitalize"},children:[" ",e," "]}),"This is an ",e," alert — ",i.jsx("strong",{children:"check it out!"})]},e))}),i.jsxs(n,{title:"Actions",children:[i.jsx(s,{severity:"info",sx:{width:1},action:i.jsx(t,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),i.jsx(s,{severity:"info",variant:"filled",sx:{width:1},action:i.jsxs(i.Fragment,{children:[i.jsx(t,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:e=>`1px solid ${c(e.palette.common.white,.48)}`},children:"Undo"}),i.jsx(t,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),i.jsx(s,{severity:"info",variant:"outlined",sx:{width:1},action:i.jsxs(i.Fragment,{children:[i.jsx(t,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),i.jsx(t,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})]})})]})}function w(){return i.jsxs(i.Fragment,{children:[i.jsx(d,{children:i.jsx("title",{children:" MUI: Alert"})}),i.jsx(j,{})]})}export{w as default};
