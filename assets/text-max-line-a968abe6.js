import{h as b,bQ as u,r as g,j as c,L as a,T as f,x as t}from"./index-fc31389b.js";function d(e){return Math.round(parseFloat(e)*16)}function T(e){const o=b(),s=u(),p=o.breakpoints.up(s==="xl"?"lg":s),l=(e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6")&&o.typography[e][p]?o.typography[e][p]:o.typography[e],n=d(l.fontSize),h=Number(o.typography[e].lineHeight)*n,{fontWeight:y,letterSpacing:i}=o.typography[e];return{fontSize:n,lineHeight:h,fontWeight:y,letterSpacing:i}}const x=g.forwardRef(({asLink:e,variant:o="body1",line:s=2,persistent:p=!1,children:r,sx:l,...n},h)=>{const{lineHeight:y}=T(o),i={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:s,WebkitBoxOrient:"vertical",...p&&{height:y*s},...l};return e?c.jsx(a,{color:"inherit",ref:h,variant:o,sx:{...i},...n,children:r}):c.jsx(f,{ref:h,variant:o,sx:{...i},...n,children:r})});x.propTypes={asLink:t.bool,children:t.node,line:t.number,persistent:t.bool,sx:t.object,variant:t.oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"])};const k=x;export{k as T,T as u};
