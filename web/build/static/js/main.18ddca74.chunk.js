(this.webpackJsonpassignmentfrontend=this.webpackJsonpassignmentfrontend||[]).push([[0],{195:function(e,a,t){},196:function(e,a,t){},325:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(43),i=t.n(s),o=(t(195),t.p,t(196),t(18)),c=(t(197),t(62)),l=t(367),d=t(373),j=t(380),u=t(377),b=t(24),h=t(52),m=t.n(h),x="localhost"===window.location.hostname.split(":")[0]?"http://localhost:7000":"",p=t(13),O=t(45),g=function(e,a){switch(a.type){case"LOGIN":return a.payload.name&&a.payload.email&&a.payload.contact&&a.payload.website&&a.payload.address?Object(O.a)(Object(O.a)({},e),{},{user:a.payload}):(console.log("invalid data"),e);case"LOGOUT":return Object(O.a)(Object(O.a)({},e),{},{user:null});default:return e}},v=t(1),f=Object(r.createContext)("Initial Value"),w={user:{}};function y(e){var a=e.children,t=Object(r.useReducer)(g,w),n=Object(p.a)(t,2),s=n[0],i=n[1];return Object(v.jsx)(f.Provider,{value:{state:s,dispatch:i},children:a})}var C=b.a({email:b.b("Enter your email").email("Enter a valid email").required("Email is required"),password:b.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var S=function(){var e=Object(o.g)(),a=Object(r.useContext)(f).dispatch,t=Object(c.a)({validationSchema:C,initialValues:{email:"",password:""},onSubmit:function(t){console.log("values: ",t),m.a.post("".concat(x,"/api/v1/login"),{email:t.email,password:t.password}).then((function(t){console.log("res: ",t.data),"Authentication fail"!==t.data?(a({type:"LOGIN",payload:{name:t.data.name,email:t.data.email,contact:t.data.contact,website:t.data.website,address:t.data.address}}),alert("login successfull"),setTimeout((function(){e.push("/posts")}),1e3)):alert("invalid credential")}))}});return Object(v.jsxs)("div",{style:{padding:"1rem"},children:[Object(v.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Log In to your account"}),Object(v.jsx)("br",{}),Object(v.jsx)("form",{onSubmit:t.handleSubmit,children:Object(v.jsx)(u.a,{container:!0,spacing:2,children:Object(v.jsx)(u.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(l.a,{spacing:3,children:[Object(v.jsx)(d.a,{color:"primary",id:"outlined-basic",label:"Email",placeholder:"fsiddiqui107@gmail",variant:"outlined",name:"email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(v.jsx)(d.a,{color:"primary",id:"filled-basic",label:"Password",placeholder:"Enter correct password",variant:"outlined",type:"password",name:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password}),Object(v.jsx)(u.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Log in"}),"\xa0or",Object(v.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/signup")},children:"Sign"}),"to register"]})})]})})})})})]})},q=b.a({name:b.b("Enter your Name").required("Name is required"),email:b.b("Enter your email").email("Enter a valid email").required("Email is required"),password:b.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required"),contact:b.b("Enter your Contact").min(11,"invalid number").max(11,"invalid number").required("contact number is required"),address:b.b("Enter your address").required("Address is required"),website:b.b("Enter your profile/URL").url("please enter valid URL e.g: https://somewebsite.com").required("profile/URL is required")});var E=function(){var e=Object(o.g)(),a=Object(c.a)({validationSchema:q,initialValues:{name:"",email:"",password:"",contact:"",address:"",website:""},onSubmit:function(a){console.log("values: ",a),m.a.post("".concat(x,"/api/v1/signup"),{name:a.name,email:a.email,password:a.password,contact:a.contact,address:a.address,website:a.website}).then((function(a){console.log("res: ",a.data),"profile created"===a.data&&(alert("signup successfully"),setTimeout((function(){e.push("/login")}),1e3))}))}});return Object(v.jsxs)("div",{style:{padding:"1rem"},children:[Object(v.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Sign Up to Register Yourself"}),Object(v.jsx)("br",{}),Object(v.jsx)("form",{onSubmit:a.handleSubmit,children:Object(v.jsx)(u.a,{container:!0,spacing:2,children:Object(v.jsx)(u.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(l.a,{spacing:3,children:[Object(v.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"Full Name",placeholder:"Muhammad Fahad Siddiqui",variant:"outlined",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(v.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"Email",placeholder:"fsiddiqui107@gmail.com",variant:"outlined",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(v.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"Password",placeholder:"Enter a strong password",variant:"outlined",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(v.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"Contact #",placeholder:"03001234567",variant:"outlined",name:"contact",value:a.values.contact,onChange:a.handleChange,error:a.touched.contact&&Boolean(a.errors.contact),helperText:a.touched.contact&&a.errors.contact}),Object(v.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"Address",placeholder:"House # 0/0 , ABC-Street, XYZ-Town",variant:"outlined",name:"address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address}),Object(v.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"Github Profile Link",placeholder:"https://somewebsite.com",variant:"outlined",name:"website",value:a.values.website,onChange:a.handleChange,error:a.touched.website&&Boolean(a.errors.website),helperText:a.touched.website&&a.errors.website}),Object(v.jsx)(u.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Sign up"}),"\xa0or",Object(v.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/login")},children:"Login"}),"if you already have a account."]})})]})})})})})]})},L=(t(169),t.p+"static/media/download.84b4112d.jfif"),T=t(388),B=t(389),P=t(390),k=t(391),A=t(378),G=t(384),F=t(383),N=t(172),I=t.n(N),U=t(173),R=t.n(U),M=t(171),V=t.n(M),W=t(3),z=t(381),D=(t(382),t(170),t(386)),J=t(385),Y=t(387),H=t(95),X=t.n(H),Z=(Object(W.a)(z.a)((function(e){var a=e.theme;return{"& .MuiDialogContent-root":{padding:a.spacing(2)},"& .MuiDialogActions-root":{padding:a.spacing(1)}}})),b.a({post:b.b("add something ").required("required*")}));var K=function(){var e,a=r.useState(!1),t=Object(p.a)(a,2),n=(t[0],t[1],Object(o.g)()),s=Object(r.useContext)(f),i=s.state,b=s.dispatch,h=Object(c.a)({validationSchema:Z,initialValues:{post:"",createdby:""},onSubmit:function(e){var a;console.log("values: ",e),(null===i||void 0===i||null===(a=i.user)||void 0===a?void 0:a.name)&&m.a.post("".concat(x,"/api/v1/posts"),{post:e.post,createdby:i.user.name}).then((function(e){console.log(e.data),E(!q)}))}}),O=Object(r.useState)([]),g=Object(p.a)(O,2),w=g[0],y=g[1],C=Object(r.useState)(!1),S=Object(p.a)(C,2),q=S[0],E=S[1];return Object(r.useEffect)((function(){return m.a.get("".concat(x,"/api/v1/posts")).then((function(e){console.log(e.data),y(e.data)})),function(){console.log("post shown")}}),[q]),Object(v.jsxs)("div",{children:[Object(v.jsx)(J.a,{sx:{flexGrow:1},children:Object(v.jsx)(D.a,{position:"static",children:Object(v.jsxs)(Y.a,{children:[Object(v.jsx)(G.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(v.jsx)(X.a,{})}),Object(v.jsxs)(F.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:["Welcome ",i.user.name]}),Object(v.jsx)(j.a,{onClick:function(){n.push("/profile")},variant:"contained",color:"error",children:"Profile"}),Object(v.jsx)(j.a,{onClick:function(){n.push("/login"),b({type:"LOGOUT",payload:null})},variant:"contained",color:"error",children:"Logout"})]})})}),Object(v.jsxs)("div",{style:{padding:"1rem"},children:[Object(v.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"POSTS"}),Object(v.jsx)("br",{}),Object(v.jsx)("form",{onSubmit:h.handleSubmit,children:Object(v.jsx)("div",{children:Object(v.jsxs)(u.a,{container:!0,spacing:1,sx:{paddingLeft:"10%",paddingRight:"10%"},children:[Object(v.jsx)(u.a,{item:!0,xl:8,lg:8,xs:12,sm:12,md:12,children:Object(v.jsx)(u.a,{children:Object(v.jsx)(l.a,{spacing:3,children:Object(v.jsx)(d.a,{color:"primary",id:"outlined-basic",variant:"outlined",placeholder:"Whats in your mind",name:"post",value:h.values.post,onChange:h.handleChange,error:h.touched.post&&Boolean(h.errors.post),helperText:h.touched.post&&h.errors.post})})})}),Object(v.jsx)(u.a,{item:!0,xl:2,lg:2,xs:12,sm:4,md:4,children:Object(v.jsx)(u.a,{children:Object(v.jsx)(j.a,{sx:{height:"35px",width:"100%",fontSize:"12px"},variant:"contained",color:"info",type:"submit",children:"POST"})})})]})})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),(null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.name)&&w.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(T.a,{sx:{maxWidth:845,margin:"auto"},children:[Object(v.jsx)(B.a,{avatar:Object(v.jsx)(A.a,{sx:{backgroundColor:"transparent"},"aria-label":"profile",children:Object(v.jsx)("img",{style:{width:"50px"},src:L})}),action:Object(v.jsx)(G.a,{"aria-label":"settings",children:Object(v.jsx)(V.a,{})}),title:e.createdby}),Object(v.jsx)(P.a,{children:Object(v.jsx)(F.a,{variant:"body2",color:"text.secondary",children:e.post})}),Object(v.jsxs)(k.a,{disableSpacing:!0,children:[Object(v.jsx)(G.a,{"aria-label":"add to favorites",children:Object(v.jsx)(I.a,{})}),Object(v.jsx)(G.a,{"aria-label":"share",children:Object(v.jsx)(R.a,{})})]})]}),Object(v.jsx)("br",{})]})}))]})]})};var Q=function(){var e=Object(o.g)(),a=Object(r.useContext)(f),t=a.state,n=a.dispatch;return Object(v.jsxs)("div",{style:{padding:"1rem"},children:[Object(v.jsx)(J.a,{sx:{flexGrow:1},children:Object(v.jsx)(D.a,{position:"static",children:Object(v.jsxs)(Y.a,{children:[Object(v.jsx)(G.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(v.jsx)(X.a,{})}),Object(v.jsxs)(F.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:["Welcome ",t.user.name]}),Object(v.jsx)(j.a,{onClick:function(){e.push("/posts")},variant:"contained",color:"error",children:"Posts"}),Object(v.jsx)(j.a,{onClick:function(){e.push("/login"),n({type:"LOGOUT",payload:null})},variant:"contained",color:"error",children:"Logout"})]})})}),Object(v.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Profile Info"}),Object(v.jsx)("br",{}),Object(v.jsxs)(F.a,{gutterBottom:!0,children:["Name: ",t.user.name,Object(v.jsx)("br",{}),"Email: ",t.user.email,Object(v.jsx)("br",{}),"Contact: ",t.user.contact,Object(v.jsx)("br",{}),"website: ",t.user.website,Object(v.jsx)("br",{}),"Address: ",t.user.address]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})};var $=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/",children:Object(v.jsx)(E,{})}),Object(v.jsx)(o.b,{path:"/signup",children:Object(v.jsx)(E,{})}),Object(v.jsx)(o.b,{path:"/login",children:Object(v.jsx)(S,{})}),Object(v.jsx)(o.b,{path:"/posts",children:Object(v.jsx)(K,{})}),Object(v.jsx)(o.b,{path:"/profile",children:Object(v.jsx)(Q,{})}),Object(v.jsx)(o.b,{render:function(){return Object(v.jsx)(o.a,{to:{pathname:"/"}})}})]})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,393)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),s(e),i(e)}))},ee=t(49);i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(y,{children:Object(v.jsx)(ee.a,{children:Object(v.jsx)($,{})})})}),document.getElementById("root")),_()}},[[325,1,2]]]);
//# sourceMappingURL=main.18ddca74.chunk.js.map