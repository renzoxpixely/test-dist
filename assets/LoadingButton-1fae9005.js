import{s as v,B as b,ar as i,ak as d,ah as c,r as B,am as m,an as E,as as y,j as g,ap as C,at as R}from"./index-fc31389b.js";import{C as j}from"./CircularProgress-d1c25c6e.js";const W=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],z=n=>{const{loading:o,loadingPosition:a,classes:t}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(a)}`],endIcon:[o&&`endIconLoading${c(a)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(a)}`]},l=C(r,R,t);return d({},t,l)},M=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",_=v(b,{shouldForwardProp:n=>M(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),k=v("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.loadingIndicator,o[`loadingIndicator${c(a.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),F=B.forwardRef(function(o,a){const t=m({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:h,loading:e=!1,loadingIndicator:u,loadingPosition:x="center",variant:I="text"}=t,$=E(t,W),L=y(h),p=u??g.jsx(j,{"aria-labelledby":L,color:"inherit",size:16}),s=d({},t,{disabled:l,loading:e,loadingIndicator:p,loadingPosition:x,variant:I}),P=z(s),f=e?g.jsx(k,{className:P.loadingIndicator,ownerState:s,children:p}):null;return g.jsxs(_,d({disabled:l||e,id:L,ref:a},$,{variant:I,classes:P,ownerState:s,children:[s.loadingPosition==="end"?r:f,s.loadingPosition==="end"?f:r]}))}),T=F;export{T as L};
