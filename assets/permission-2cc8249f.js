import{y as d,r,j as e,C as u,p as m,eQ as x,f as h,q as c,T as p,W as g}from"./index-fc31389b.js";import{C as j}from"./custom-breadcrumbs-55e72b55.js";import{T as f,a as i}from"./ToggleButtonGroup-553dc77c.js";import{C}from"./CardHeader-a7b93930.js";function b(){const n=d(),[a,t]=r.useState("admin"),o=r.useCallback((l,s)=>{s!==null&&t(s)},[]);return e.jsxs(u,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(j,{heading:"Permission Denied",links:[{name:"Dashboard",href:m.dashboard.root},{name:"Permission Denied"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(f,{exclusive:!0,value:a,size:"small",onChange:o,sx:{mb:5},children:[e.jsx(i,{value:"admin","aria-label":"admin role",children:"isAdmin"}),e.jsx(i,{value:"user","aria-label":"user role",children:"isUser"})]}),e.jsx(x,{hasContent:!0,roles:[a],sx:{py:10},children:e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[...Array(8)].map((l,s)=>e.jsxs(c,{children:[e.jsx(C,{title:`Card ${s+1}`,subheader:"Proin viverra ligula"}),e.jsx(p,{variant:"body2",sx:{px:3,py:2,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},s))})})]})}function T(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx("title",{children:" Dashboard: Permission Denied"})}),e.jsx(b,{})]})}export{T as default};
