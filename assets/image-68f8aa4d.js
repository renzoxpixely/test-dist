import{j as r,f as s,C as a,p as d,S as t,q as i,T as x,J as m,W as c}from"./index-fc31389b.js";import{I as o}from"./image-9d9e55ff.js";import{C as j}from"./custom-breadcrumbs-55e72b55.js";import{C as n}from"./CardHeader-a7b93930.js";const h=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],l=h.map((e,p)=>({ratio:e,url:m.image.cover(p+1)}));function g(){return r.jsxs(r.Fragment,{children:[r.jsx(s,{sx:{py:5,bgcolor:e=>e.palette.mode==="light"?"grey.200":"grey.800"},children:r.jsx(a,{children:r.jsx(j,{heading:"Image",links:[{name:"Components",href:d.components},{name:"Image"}]})})}),r.jsx(a,{sx:{my:10},children:r.jsxs(t,{spacing:5,children:[r.jsxs(i,{children:[r.jsx(n,{title:"List"}),r.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:l.map(e=>r.jsx(o,{alt:e.ratio,src:e.url,sx:{borderRadius:2}},e.ratio))})]}),r.jsxs(i,{children:[r.jsx(n,{title:"Aspect Ratio"}),r.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:l.map(e=>r.jsxs(t,{spacing:1,children:[r.jsx(x,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),r.jsx(o,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})]})]})})]})}function I(){return r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsx("title",{children:" Components: Image"})}),r.jsx(g,{})]})}export{I as default};
