import{j as e,S as d,l as a,f as g,T as i,x as t}from"./index-fc31389b.js";function m({title:n,imgUrl:p,action:r,filled:x,description:o,sx:c,...l}){return e.jsxs(d,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...x&&{borderRadius:2,bgcolor:s=>a(s.palette.grey[500],.04),border:s=>`dashed 1px ${a(s.palette.grey[500],.08)}`},...c},...l,children:[e.jsx(g,{component:"img",alt:"empty content",src:p||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),n&&e.jsx(i,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:n}),o&&e.jsx(i,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:o}),r&&r]})}m.propTypes={action:t.node,description:t.string,filled:t.bool,imgUrl:t.string,sx:t.object,title:t.string};export{m as E};
