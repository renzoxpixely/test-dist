import{c as y,j as e,S as r,T as a,L as n,p as f,R as b,I as v,d as w,e as F,W as R}from"./index-fc31389b.js";import{c as S,a as i,u as q,F as P,R as s}from"./rhf-autocomplete-947a9911.js";import"./plan-premium-icon-3e282803.js";import{o as T}from"./yup-674d2aca.js";import{L as A}from"./LoadingButton-1fae9005.js";import"./upload-avatar-2f1e41c5.js";import"./format-number-8ee044d8.js";import"./fade-b19d01ee.js";import"./index-ec23ed6d.js";import"./image-9d9e55ff.js";import"./TextField-c5c5e45f.js";import"./FormControl-47574643.js";import"./FormLabel-a4ed3336.js";import"./Select-5f4f2f3f.js";import"./Menu-40ee519e.js";import"./Checkbox-1984f828.js";import"./SwitchBase-8d5bb026.js";import"./Chip-276a27ce.js";import"./FormControlLabel-f8d84e00.js";import"./FormGroup-32a713d2.js";import"./Switch-eb36a74c.js";import"./editor-a8953f53.js";import"./highlight-ad88e5bf.js";import"./Slider-7bd9077b.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-715ee6cf.js";import"./Radio-d0af1f14.js";import"./Autocomplete-79c5288c.js";import"./Close-2819fb88.js";import"./CircularProgress-d1c25c6e.js";function L(){const t=y(),l=S().shape({firstName:i().required("First name required"),lastName:i().required("Last name required"),email:i().required("Email is required").email("Email must be a valid email address"),password:i().required("Password is required")}),c={firstName:"",lastName:"",email:"",password:""},m=q({resolver:T(l),defaultValues:c}),{handleSubmit:d,formState:{isSubmitting:p}}=m,u=d(async j=>{try{await new Promise(o=>setTimeout(o,500)),console.info("DATA",j)}catch(o){console.error(o)}}),x=e.jsxs(r,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(a,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(r,{direction:"row",spacing:.5,children:[e.jsx(a,{variant:"body2",children:" Already have an account? "}),e.jsx(n,{href:f.authDemo.classic.login,component:b,variant:"subtitle2",children:"Sign in"})]})]}),h=e.jsxs(a,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",e.jsx(n,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(n,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),g=e.jsxs(r,{spacing:2.5,children:[e.jsxs(r,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(s,{name:"firstName",label:"First name"}),e.jsx(s,{name:"lastName",label:"Last name"})]}),e.jsx(s,{name:"email",label:"Email address"}),e.jsx(s,{name:"password",label:"Password",type:t.value?"text":"password",InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(w,{onClick:t.onToggle,edge:"end",children:e.jsx(F,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(A,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:p,children:"Create account"})]});return e.jsxs(P,{methods:m,onSubmit:u,children:[x,g,h]})}function ne(){return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx("title",{children:" Auth Classic: Register"})}),e.jsx(L,{})]})}export{ne as default};
