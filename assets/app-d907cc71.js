import{h as y,j as e,S as c,a9 as ae,e as p,x as r,k as ne,l as w,T as d,q as g,M as le,m as O,L as ce,ck as F,D as _,f as C,B as z,bY as H,N as M,d as de,b_ as $,O as A,F as U,r as L,aZ as pe,s as xe,y as he,C as me,G as u,c_ as ue,c$ as je,d0 as ge,d1 as be,d2 as fe,d3 as ye,d4 as we,W as ve}from"./index-fc31389b.js";import{d as v,b as J,c as S,f as Ce}from"./format-number-8ee044d8.js";import{u as G,C as D}from"./use-chart-6917a6f3.js";import{I as Te}from"./image-9d9e55ff.js";import{v as N}from"./fade-b19d01ee.js";import{u as Ie,c as Ae,a as Se,C as ke}from"./carousel-arrow-index-0dd78820.js";import{a as De,T as Re}from"./table-pagination-custom-fa4dd545.js";import{C as T}from"./CardHeader-a7b93930.js";import{T as We,a as Oe,b as Ne}from"./TableContainer-2a71c457.js";import{T as I}from"./TablePagination-d87dbc27.js";import{o as Pe}from"./orderBy-f223fbfc.js";import{R as Fe}from"./Rating-7c89f5ac.js";import"./empty-content-f8c8f2e9.js";import"./Checkbox-1984f828.js";import"./SwitchBase-8d5bb026.js";import"./FormControlLabel-f8d84e00.js";import"./Switch-eb36a74c.js";import"./FirstPage-356a7ad5.js";import"./Select-5f4f2f3f.js";import"./Menu-40ee519e.js";import"./_baseToString-fe72bdcf.js";import"./_baseIteratee-18574c25.js";import"./_baseEach-e1a0d60c.js";import"./visuallyHidden-14c3de6e.js";function P({title:t,total:s,icon:i,color:a="primary",chart:o,sx:n,...h}){const m=y(),{series:b,options:j}=o,l=G({chart:{sparkline:{enabled:!0}},legend:{show:!1},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:m.palette[a].light,opacity:1},{offset:100,color:m.palette[a].main,opacity:1}]}},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:m.palette.common.white,fontSize:m.typography.subtitle2.fontSize}}}},...j});return e.jsxs(c,{direction:"row",alignItems:"center",sx:{p:3,borderRadius:2,overflow:"hidden",position:"relative",color:"common.white",bgcolor:`${a}.dark`,...n},...h,children:[e.jsx(D,{dir:"ltr",type:"radialBar",series:[b],options:l,width:86,height:86}),e.jsx(ae,{sx:{ml:3},primary:v(s),secondary:t,primaryTypographyProps:{typography:"h4",component:"span"},secondaryTypographyProps:{color:"inherit",component:"span",sx:{opacity:.64},typography:"subtitle2"}}),e.jsx(p,{icon:i,sx:{width:112,right:-32,height:112,opacity:.08,position:"absolute"}})]})}P.propTypes={chart:r.object,color:r.string,icon:r.oneOfType([r.element,r.string]),sx:r.object,title:r.string,total:r.number};function Y({title:t,description:s,action:i,img:a,...o}){const n=y();return e.jsxs(c,{flexDirection:{xs:"column",md:"row"},sx:{...ne({direction:"135deg",startColor:w(n.palette.primary.light,.2),endColor:w(n.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...o,children:[e.jsxs(c,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:n.spacing(5,3,0,3),md:n.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(d,{variant:"h4",sx:{mb:2,whiteSpace:"pre-line"},children:t}),e.jsx(d,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:s}),i&&i]}),a&&e.jsx(c,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:a})]})}Y.propTypes={action:r.node,description:r.string,img:r.node,title:r.string};function V({list:t,...s}){const i=Ie({speed:800,autoplay:!0,...Ae({sx:{top:16,left:16,position:"absolute",color:"primary.light"}})});return e.jsxs(g,{...s,children:[e.jsx(Se,{ref:i.carouselRef,...i.carouselSettings,children:t.map((a,o)=>e.jsx(q,{item:a,active:o===i.currentIndex},a.id))}),e.jsx(ke,{onNext:i.onNext,onPrev:i.onPrev,sx:{top:8,right:8,position:"absolute",color:"common.white"}})]})}V.propTypes={list:r.array};function q({item:t,active:s}){const i=y(),{coverUrl:a,title:o,description:n}=t,h=e.jsx(Te,{alt:o,src:a,overlay:`linear-gradient(to bottom, ${w(i.palette.grey[900],0)} 0%, ${i.palette.grey[900]} 75%)`,sx:{width:1,height:{xs:280,xl:320}}});return e.jsxs(le,{action:!0,animate:s,sx:{position:"relative"},children:[e.jsxs(c,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(O.div,{variants:N().inRight,children:e.jsx(d,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"})}),e.jsx(O.div,{variants:N().inRight,children:e.jsx(ce,{color:"inherit",underline:"none",children:e.jsx(d,{variant:"h5",noWrap:!0,children:o})})}),e.jsx(O.div,{variants:N().inRight,children:e.jsx(d,{variant:"body2",noWrap:!0,children:n})})]}),h]})}q.propTypes={active:r.bool,item:r.object};function Z({title:t,subheader:s,tableData:i,tableLabels:a,...o}){return e.jsxs(g,{...o,children:[e.jsx(T,{title:t,subheader:s,sx:{mb:3}}),e.jsx(We,{sx:{overflow:"unset"},children:e.jsx(F,{children:e.jsxs(Oe,{sx:{minWidth:680},children:[e.jsx(De,{headLabel:a}),e.jsx(Ne,{children:i.map(n=>e.jsx(K,{row:n},n.id))})]})})}),e.jsx(_,{sx:{borderStyle:"dashed"}}),e.jsx(C,{sx:{p:2,textAlign:"right"},children:e.jsx(z,{size:"small",color:"inherit",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}Z.propTypes={subheader:r.string,tableData:r.array,tableLabels:r.array,title:r.string};function K({row:t}){const s=H(),i=()=>{s.onClose(),console.info("DOWNLOAD",t.id)},a=()=>{s.onClose(),console.info("PRINT",t.id)},o=()=>{s.onClose(),console.info("SHARE",t.id)},n=()=>{s.onClose(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(Re,{children:[e.jsx(I,{children:t.invoiceNumber}),e.jsx(I,{children:t.category}),e.jsx(I,{children:J(t.price)}),e.jsx(I,{children:e.jsx(M,{variant:"soft",color:t.status==="progress"&&"warning"||t.status==="out of date"&&"error"||"success",children:t.status})}),e.jsx(I,{align:"right",sx:{pr:1},children:e.jsx(de,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs($,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(A,{onClick:i,children:[e.jsx(p,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(A,{onClick:a,children:[e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(A,{onClick:o,children:[e.jsx(p,{icon:"solar:share-bold"}),"Share"]}),e.jsx(_,{sx:{borderStyle:"dashed"}}),e.jsxs(A,{onClick:n,sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}K.propTypes={row:r.object};function Q({title:t,subheader:s,list:i,...a}){return e.jsxs(g,{...a,children:[e.jsx(T,{title:t,subheader:s}),e.jsx(c,{spacing:3,sx:{p:3},children:Pe(i,["totalFavorites"],["desc"]).map((o,n)=>e.jsx(X,{author:o,index:n},o.id))})]})}Q.propTypes={list:r.array,subheader:r.string,title:r.string};function X({author:t,index:s}){return e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(U,{alt:t.name,src:t.avatarUrl}),e.jsxs(C,{sx:{flexGrow:1},children:[e.jsx(d,{variant:"subtitle2",children:t.name}),e.jsxs(d,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[e.jsx(p,{icon:"solar:heart-bold",width:14,sx:{mr:.5}}),S(t.totalFavorites)]})]}),e.jsx(p,{icon:"solar:cup-star-bold",sx:{p:1,width:40,height:40,borderRadius:"50%",color:"primary.main",bgcolor:i=>w(i.palette.primary.main,.08),...s===1&&{color:"info.main",bgcolor:i=>w(i.palette.info.main,.08)},...s===2&&{color:"error.main",bgcolor:i=>w(i.palette.error.main,.08)}}})]})}X.propTypes={author:r.object,index:r.number};function ee({title:t,subheader:s,list:i,...a}){return e.jsxs(g,{...a,children:[e.jsx(T,{title:t,subheader:s}),e.jsx(F,{children:e.jsx(c,{spacing:3,sx:{p:3,minWidth:360},children:i.map(o=>e.jsx(te,{app:o},o.id))})})]})}ee.propTypes={list:r.array,subheader:r.string,title:r.string};function te({app:t}){const{shortcut:s,system:i,price:a,ratingNumber:o,totalReviews:n,name:h}=t;return e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(U,{variant:"rounded",sx:{width:48,height:48,bgcolor:"background.neutral"},children:e.jsx(C,{component:"img",src:s,sx:{width:24,height:24}})}),e.jsxs(C,{sx:{flexGrow:1,minWidth:0},children:[e.jsx(d,{variant:"subtitle2",noWrap:!0,children:h}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[e.jsx(p,{width:14,icon:i==="Mac"?"mingcute:apple-fill":"mingcute:windows-fill"}),e.jsx(d,{variant:"caption",sx:{ml:.5,mr:1},children:i}),e.jsx(M,{color:a===0?"success":"error",children:a===0?"Free":J(a)})]})]}),e.jsxs(c,{alignItems:"flex-end",children:[e.jsx(Fe,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:o}),e.jsxs(d,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[S(n)," reviews"]})]})]})}te.propTypes={app:r.object};function re({title:t,subheader:s,chart:i,...a}){const o=y(),{colors:n=[[o.palette.primary.light,o.palette.primary.main],[o.palette.warning.light,o.palette.warning.main]],categories:h,series:m,options:b}=i,j=H(),[l,f]=L.useState("2019"),R=G({colors:n.map(x=>x[1]),fill:{type:"gradient",gradient:{colorStops:n.map(x=>[{offset:0,color:x[0],opacity:1},{offset:100,color:x[1],opacity:1}])}},xaxis:{categories:h},...b}),W=L.useCallback(x=>{j.onClose(),f(x)},[j]);return e.jsxs(e.Fragment,{children:[e.jsxs(g,{...a,children:[e.jsx(T,{title:t,subheader:s,action:e.jsxs(pe,{onClick:j.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[l,e.jsx(p,{width:16,icon:j.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),m.map(x=>e.jsx(C,{sx:{mt:3,mx:3},children:x.year===l&&e.jsx(D,{dir:"ltr",type:"line",series:x.data,options:R,width:"100%",height:364})},x.year))]}),e.jsx($,{open:j.open,onClose:j.onClose,sx:{width:140},children:m.map(x=>e.jsx(A,{selected:x.year===l,onClick:()=>W(x.year),children:x.year},x.year))})]})}re.propTypes={chart:r.object,subheader:r.string,title:r.string};function k({title:t,percent:s,total:i,chart:a,sx:o,...n}){const h=y(),{colors:m=[h.palette.primary.light,h.palette.primary.main],series:b,options:j}=a,l={colors:m.map(f=>f[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:m[0],opacity:1},{offset:100,color:m[1],opacity:1}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:f=>v(f),title:{formatter:()=>""}},marker:{show:!1}},...j};return e.jsxs(g,{sx:{display:"flex",alignItems:"center",p:3,...o},...n,children:[e.jsxs(C,{sx:{flexGrow:1},children:[e.jsx(d,{variant:"subtitle2",children:t}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(p,{width:24,icon:s<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...s<0&&{color:"error.main"}}}),e.jsxs(d,{component:"div",variant:"subtitle2",children:[s>0&&"+",Ce(s)]})]}),e.jsx(d,{variant:"h3",children:v(i)})]}),e.jsx(D,{dir:"ltr",type:"bar",series:[{data:b}],options:l,width:60,height:36})]})}k.propTypes={chart:r.object,percent:r.number,sx:r.object,title:r.string,total:r.number};const B=400,E=72,Ge=xe(D)(({theme:t})=>({height:B,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:E,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${B-E}px) !important`}}));function se({title:t,subheader:s,chart:i,...a}){const o=y(),{colors:n,series:h,options:m}=i,b=h.map(l=>l.value),j=G({chart:{sparkline:{enabled:!0}},colors:n,labels:h.map(l=>l.label),stroke:{colors:[o.palette.background.paper]},legend:{offsetY:0,floating:!0,position:"bottom",horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:l=>v(l),title:{formatter:l=>`${l}`}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:l=>v(l)},total:{formatter:l=>{const f=l.globals.seriesTotals.reduce((R,W)=>R+W,0);return v(f)}}}}}},...m});return e.jsxs(g,{...a,children:[e.jsx(T,{title:t,subheader:s,sx:{mb:5}}),e.jsx(Ge,{dir:"ltr",type:"donut",series:b,options:j,width:"100%",height:280})]})}se.propTypes={chart:r.object,subheader:r.string,title:r.string};function ie({title:t,subheader:s,list:i,...a}){return e.jsxs(g,{...a,children:[e.jsx(T,{title:t,subheader:s}),e.jsx(F,{children:e.jsx(c,{spacing:3,sx:{p:3},children:i.map(o=>e.jsx(oe,{country:o},o.id))})})]})}ie.propTypes={list:r.array,subheader:r.string,title:r.string};function oe({country:t}){return e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsxs(c,{direction:"row",alignItems:"center",flexGrow:1,sx:{minWidth:120},children:[e.jsx(p,{icon:t.flag,sx:{borderRadius:.65,width:28,mr:1}}),e.jsx(d,{variant:"subtitle2",noWrap:!0,children:t.name})]}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{minWidth:80},children:[e.jsx(p,{width:14,icon:"ant-design:android-filled",sx:{mr:.5,color:"text.disabled"}}),e.jsx(d,{variant:"body2",children:S(t.android)})]}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{minWidth:80},children:[e.jsx(p,{icon:"mingcute:windows-fill",width:14,sx:{mr:.5,color:"text.disabled"}}),e.jsx(d,{variant:"body2",children:S(t.windows)})]}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{minWidth:80},children:[e.jsx(p,{icon:"mingcute:apple-fill",width:14,sx:{mr:.5,color:"text.disabled"}}),e.jsx(d,{variant:"body2",children:S(t.windows)})]})]})}oe.propTypes={country:r.object};function Le(){const{user:t}=we(),s=y(),i=he();return e.jsx(me,{maxWidth:i.themeStretch?!1:"xl",children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{xs:12,md:8,children:e.jsx(Y,{title:`Welcome back 👋 
 ${t==null?void 0:t.displayName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(ue,{}),action:e.jsx(z,{variant:"contained",color:"primary",children:"Go Now"})})}),e.jsx(u,{xs:12,md:4,children:e.jsx(V,{list:je})}),e.jsx(u,{xs:12,md:4,children:e.jsx(k,{title:"Total Active Users",percent:2.6,total:18765,chart:{series:[5,18,12,51,68,11,39,37,27,20]}})}),e.jsx(u,{xs:12,md:4,children:e.jsx(k,{title:"Total Installed",percent:.2,total:4876,chart:{colors:[s.palette.info.light,s.palette.info.main],series:[20,41,63,33,28,35,50,46,11,26]}})}),e.jsx(u,{xs:12,md:4,children:e.jsx(k,{title:"Total Downloads",percent:-.1,total:678,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[8,9,31,8,16,37,8,33,46,31]}})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(se,{title:"Current Download",chart:{series:[{label:"Mac",value:12244},{label:"Window",value:53345},{label:"iOS",value:44313},{label:"Android",value:78343}]}})}),e.jsx(u,{xs:12,md:6,lg:8,children:e.jsx(re,{title:"Area Installed",subheader:"(+43%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[{year:"2019",data:[{name:"Asia",data:[10,41,35,51,49,62,69,91,148,35,51,49]},{name:"America",data:[10,34,13,56,77,88,99,77,45,13,56,77]}]},{year:"2020",data:[{name:"Asia",data:[51,35,41,10,91,69,62,148,91,69,62,49]},{name:"America",data:[56,13,34,10,77,99,88,45,77,99,88,77]}]}]}})}),e.jsx(u,{xs:12,lg:8,children:e.jsx(Z,{title:"New Invoice",tableData:ge,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(ee,{title:"Top Related Applications",list:be})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(ie,{title:"Top Installed Countries",list:fe})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(Q,{title:"Top Authors",list:ye})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsxs(c,{spacing:3,children:[e.jsx(P,{title:"Conversion",total:38566,icon:"solar:user-rounded-bold",chart:{series:48}}),e.jsx(P,{title:"Applications",total:55566,icon:"fluent:mail-24-filled",color:"info",chart:{series:75}})]})})]})})}function lt(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(Le,{})]})}export{lt as default};
