(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(23),r=a.n(s),i=(a(62),a(63),a(12)),o=a(7),l=a(6),d=a.p+"static/media/cyphert.0ba59b03.jpg",j=a(4),b="USER_SIGNUP_REQUEST",m="USER_SIGNUP_SUCCESS",u="USER_SIGNUP_FAIL",h="USER_SIGNIN_REQUEST",O="USER_SIGNIN_SUCCESS",p="USER_SIGNIN_FAIL",x="USER_GET_REQUEST",f="USER_GET_SUCCESS",v="USER_GET_FAIL",g="USER_CONFIRM_REQUEST",N="USER_CONFIRM_SUCCESS",y="USER_CONFIRM_FAIL",E=a(9),S=a.n(E),C=a(3),k=a.p+"static/media/loading.914fdf57.gif",w=a(0),D=function(){return Object(w.jsx)("div",{className:"container ctr",children:Object(w.jsx)("img",{className:"loading container",src:k})})},T=function(e){var t=Object(o.k)(),a=Object(c.useState)(""),n=Object(j.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),d=Object(j.a)(i,2),b=d[0],m=d[1],u=Object(C.c)((function(e){return e.signin})),x=u.error,f=u.response,v=u.loading,g=sessionStorage.getItem("token"),N=Object(C.b)();return Object(c.useEffect)((function(){f&&"success"===f.status?(sessionStorage.setItem("token",f.data.token),t.push("/dashboard")):f&&"error"===f.status?t.push("/unauthorisedAccess"):x&&alert(x)}),[v,x,f]),Object(w.jsxs)("div",{children:[null==g?Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsxs)("div",{children:[Object(w.jsx)(l.default,{title:"Sign In"}),Object(w.jsxs)("div",{className:"Names",children:[Object(w.jsx)("label",{children:"Email address"}),Object(w.jsx)("input",{onChange:function(e){r(e.target.value)},type:"email",className:"boxforcontacts boxforcontacts form-control",placeholder:"Enter email"}),Object(w.jsx)("small",{className:"form-text text-muted"})]}),Object(w.jsxs)("div",{className:"Names",children:[Object(w.jsx)("label",{children:"Password"}),Object(w.jsx)("input",{onChange:function(e){m(e.target.value)},type:"password",className:"boxforcontacts boxforcontacts form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(w.jsxs)("div",{className:"Names form-check",children:[Object(w.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(w.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(w.jsx)("button",{onClick:function(){N(function(e,t,a){return function(c){c({type:h});var n={email:e,password:t,status:a};S.a.post("http://18.225.37.150:2021/signin",n,{headers:{"Content-type":"application/json"}}).then((function(e){c({type:O,payload:e.data}),alert(e.data.status)})).catch((function(e){c({type:p,payload:e})}))}}(s,b))},type:"submit",className:"btr btn btn-primary",children:"Sign In"}),Object(w.jsxs)("div",{className:"float-end",children:["          ",Object(w.jsx)("button",{onClick:function(){t.push("/signup")},type:"submit",className:"btr btn btn-success float-end",children:"Sign Up"}),Object(w.jsx)("span",{className:"already",children:"     Have Account?? Click"})]})]})})})}):t.push("/dashboard"),v&&Object(w.jsx)("div",{children:Object(w.jsx)(D,{})})]})},A=function(e){return Object(w.jsxs)("div",{style:{backgroundImage:'url("'.concat(d,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:[Object(w.jsx)(l.default,{title:"Wlcome to the World of Cypher Tech"}),Object(w.jsx)("div",{className:"windows",children:" "}),Object(w.jsxs)("div",{className:"homediv",children:[Object(w.jsx)("button",{onClick:function(){e.history.push("./signup")},className:"but  btn btn-primary",children:"Sign Up"}),Object(w.jsx)("button",{onClick:function(){e.history.push("./signin")},className:"but  btn-success",children:"Sign In"}),Object(w.jsx)("div",{children:" "})]})]})},I=a(16),_=a(18),L=a.n(_);function B(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return""!==c.value?(n.innerHTML="",!0):(n.innerHTML=a,!1)}function U(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return isNaN(c.value)?(n.innerHTML="",!0):(n.innerHTML=a,!1)}function F(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return isNaN(c.value)?(n.innerHTML=a,!1):(n.innerHTML="",!0)}function M(e,t,a){var c=document.getElementById(t);return 10==e.length?(c.innerHTML="",!0):(c.innerHTML=a,!1)}var R=a(6).default,H=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),l=i[0],d=i[1],h=Object(c.useState)(""),O=Object(j.a)(h,2),p=O[0],x=O[1],f=Object(c.useState)(""),v=Object(j.a)(f,2),g=v[0],N=v[1],y=Object(c.useState)(""),E=Object(j.a)(y,2),k=E[0],T=E[1],A=Object(c.useState)(""),_=Object(j.a)(A,2),H=_[0],P=_[1],G=Object(c.useState)(""),Y=Object(j.a)(G,2),Q=(Y[0],Y[1]),W=Object(C.b)(),K=Object(C.c)((function(e){return e.signup})),J=K.error,q=K.response,z=K.loading;Object(c.useEffect)((function(){q&&"success"===q.data.status?(sessionStorage.setItem("token",q.data.token),e.history.push("/signin")):q&&"error"===q.status?alert(q.error):J&&alert(J)}),[z,J,q]);var V=Object(o.k)();return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsxs)("div",{children:[Object(w.jsx)(R,{title:"Sign Up"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{className:"Names",children:"First Name"}),Object(w.jsx)("input",{id:"firstname",onChange:function(e){s(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your First Name"}),Object(w.jsx)("div",{id:"firstnameDiv",className:"errordiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Last Name"}),Object(w.jsx)("input",{id:"lastname",onChange:function(e){d(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Last Name"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"lastnameDiv"},"className","errordiv"))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Email address"}),Object(w.jsx)("input",{id:"email",onChange:function(e){x(e.target.value)},type:"email",className:"boxforcontacts form-control",placeholder:"Enter email"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"emailDiv"},"className","errordiv"))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Phone"}),Object(w.jsx)("input",{id:"phone",onChange:function(e){N(e.target.value)},type:"phone",className:"boxforcontacts form-control",placeholder:"Enter Your Phone number with country code"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"phoneDiv"},"className","errordiv"))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Address"}),Object(w.jsx)("input",{id:"address",onChange:function(e){T(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"addressDiv"},"className","errordiv"))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Password"}),Object(w.jsx)("input",{id:"password",onChange:function(e){P(e.target.value)},type:"password",className:"boxforcontacts form-control",placeholder:"Password"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"passwordDiv"},"className","errordiv"))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Confirm Password"}),Object(w.jsx)("input",{id:"confirmpassword",onChange:function(e){Q(e.target.value)},type:"password",className:"boxforcontacts form-control",placeholder:"Password"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"confirmpasswordDiv"},"className","errordiv")),Object(w.jsx)("div",{className:"errordiv",id:"passwordverify"})]}),Object(w.jsx)("button",{onClick:function(){if(B("firstname","firstnameDiv","First name is mandatory....")&&U("firstname","firstnameDiv","No person in world whos First name has numbers....")&&U("lastname","lastnameDiv","No person in world whos last name has numbers...!")&&B("lastname","lastnameDiv","Last naem is mandatory...!")&&B("email","emailDiv","Email is mandatory...!")&&B("phone","phoneDiv","Phone is manadatory")&&F("phone","phoneDiv","Your phone will never ring with alphabets or specials..")&&M(g,"phoneDiv","Only 10 Digit Numbers Allowd..")&&B("address","addressDiv","Address is required")&&B("password","passwordDiv","Enter password")&&B("confirmpassword","confirmpasswordDiv","Enter password")&&function(e,t,a,c){var n=document.getElementById(e),s=document.getElementById(t),r=document.getElementById(a);return n.value==s.value?(r.innerHTML="",!0):(r.innerHTML=c,!1)}("password","confirmpassword","passwordDiv","Password not Matching")&&function(e,t,a){var c=document.getElementById(t);return e.length>=6&&e.length<=15?(c.innerHTML="",!0):(c.innerHTML=a,!1)}(H,"passwordDiv","Password length should between 6 to 15")){var e=document.getElementById("emailDiv");if(!L.a.isEmail(p))return e.innerHTML="enter valid email",!0;W(function(e,t,a,c,n,s){return function(r){r({type:b});var i={firstname:e,lastname:t,email:a,phone:c,addres:n,password:s};S.a.post("http://18.225.37.150:2021/signup",i,{header:{"content-type":"application/json"}}).then((function(e){r({type:m,payload:e});try{alert(1062===e.data.error.errno?"Already registerd login or verify your account":"")}catch(t){alert("Signup Successfull please cheak your email")}})).catch((function(e){r({type:u,payload:e})}))}}(n,l,p,g,k,H))}},type:"submit",className:"btn btn-primary",style:{margin:"10%"},children:"Submit"}),Object(w.jsx)("button",{onClick:function(){V.push("/signin")},className:"btn btn-success float-end",style:{margin:"10%"},children:"Signin"}),Object(w.jsxs)("div",{className:"float-end",children:["  ",Object(w.jsx)("span",{className:"already",children:"      Already have account!!!?"})]})]})})})}),z&&Object(w.jsx)("div",{children:Object(w.jsx)(D,{})})]})},P=a.p+"static/media/cypherlogo.6db36bf4.gif",G=a(12).Link,Y=function(e){var t=Object(C.b)(),a=sessionStorage.getItem("token");Object(C.c)((function(e){return e.signin}));return Object(w.jsx)("div",{children:Object(w.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsxs)(G,{to:"/home",className:"navbar-brand",children:["     ",Object(w.jsx)("img",{src:P,className:"logo"})]}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(w.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(G,{to:"/home",className:"nav-link",children:"Home"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(G,{to:"/about",className:"nav-link",children:"About"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(G,{to:"/contactus",className:"nav-link",children:"Contact Us"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(G,{to:"/careers",className:"nav-link",children:"Careers"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(G,{to:"/addfeedback",className:"nav-link",children:"Feedback"})}),Object(w.jsx)("li",{children:null!=a&&Object(w.jsx)(G,{className:"nav-link logout",onClick:function(){t((function(e){sessionStorage.removeItem("token"),e({type:"USER_LOGOUT"}),document.location.href="/home"}))},children:"Logout"})})]})})]})})})},Q=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.getusers})),a=t.error,n=t.response,s=t.loading;return Object(c.useEffect)((function(){var t,a,c,n,s,r,i,o;e((function(e){e({type:x});var l={id:t,firstname:a,lastname:c,email:n,phone:s,addres:r,password:i,status:o};S.a.get("http://18.225.37.150:2021/getuser",l,{headers:{"Content-type":"application/json"}}).then((function(t){e({type:f,payload:t})})).catch((function(t){e({type:v,payload:t})}))}))}),[]),Object(c.useEffect)((function(){}),[a,n,s]),Object(w.jsxs)("div",{children:[Object(w.jsx)(l.default,{title:"Home"}),Object(w.jsxs)("table",{className:"table table-stripped",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"id"}),Object(w.jsx)("td",{children:"Name"}),Object(w.jsx)("td",{children:"Contact details"}),Object(w.jsx)("td",{children:"Status"})]})}),Object(w.jsx)("tbody",{children:n&&n.data&&n.data.data&&n.data.data.length>0&&n.data.data.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.id}),Object(w.jsxs)("td",{children:[e.firstname+" ",e.lastname]}),Object(w.jsxs)("td",{children:[e.addres," ",Object(w.jsxs)("td",{children:[e.email,Object(w.jsx)("td",{children:e.phone})]})]}),Object(w.jsx)("td",{children:0==e.status?"not verified":1==e.status?"Active":2==e.status?"Suspended":""})]})}))})]})]})},W=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(C.b)();return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsxs)("div",{className:"login-form",children:[Object(w.jsx)(l.default,{title:"Confirm Your Account"}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Email address"}),Object(w.jsx)("input",{id:"email",onChange:function(e){s(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"}),Object(w.jsx)("div",Object(I.a)({className:"errordiv",id:"emailDiv"},"className","form-text text-muted"))]}),Object(w.jsx)("button",{onClick:function(){(function(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return""!==c.value?(n.innerHTML="",!0):(n.innerHTML=a,!1)})("email","emailDiv","Email is mandatory...!")&&(r(function(e,t){return function(a){a({type:g});var c={email:e,status:t};S.a.patch("http://18.225.37.150:2021/confirm",c,{headers:{"Content-type":"application/json"}}).then((function(e){a({type:N,payload:e}),alert(1==e.data.data.changedRows?"Your Account Is activated You can Login Now":"Acpunt is already acivated")})).catch((function(e){a({type:y,payload:e})}))}}(n)),e.history.push("/signin"))},type:"submit",className:"btn btn-primary",children:"Confirm"})]})})})})},K=a.p+"static/media/blog.8d180053.jpg",J=a.p+"static/media/contact.02008556.jpg",q=function(e){var t=Object(o.k)(),a=(Object(C.b)(),sessionStorage.getItem("token"));Object(C.c)((function(e){return e.signin}));console.log(a);return Object(w.jsx)("div",{children:null!=a?Object(w.jsxs)("div",{children:[Object(w.jsx)(l.default,{title:"Dashboard"}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:K,onClick:function(){e.history.push("/blog")},className:"blog"})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:J,onClick:function(){e.history.push("/contacts")},className:"blog"})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:"blog"})})]}):t.push("/unauthorisedAccess")})};var z="ADD_BLOG_REQUEST",V="ADD_BLOG_SUCCESS",X="ADD_BLOG_FAIL",Z="GET_BLOG_REQUEST",$="GET_BLOG_SUCCESS",ee="GET_BLOG_FAIL",te=(a(169),a(12).Link),ae=function(){return Object(w.jsxs)("div",{className:"unauthorised",children:[Object(w.jsx)("h1",{children:" ahemm ahemm!!  it Seems Like You are not authorised To access this page.Please login With valid credentials. "}),Object(w.jsxs)("div",{className:"unauthorsedaccesreturn",children:[Object(w.jsx)(te,{to:"/signin",children:"Sign In   "}),"You can Read ",Object(w.jsx)(te,{children:"Blogs"}),"           or go back to",Object(w.jsx)(te,{to:"/home",children:"Home"})," "]})]})},ce=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=n.a.useState(e),a=Object(j.a)(t,2),c=a[0],s=a[1],r=n.a.useCallback((function(){s((function(e){return!e}))}),[]);return[c,r]}(),a=Object(j.a)(t,2),s=a[0],r=a[1],i=Object(C.b)(),d=(Object(o.k)(),Object(c.useState)("")),b=Object(j.a)(d,2),m=b[0],u=b[1],h=Object(c.useState)(""),O=Object(j.a)(h,2),p=O[0],x=O[1],f=Object(c.useState)(""),v=Object(j.a)(f,2),g=v[0],N=v[1],y=Object(c.useState)(""),E=Object(j.a)(y,2),k=(E[0],E[1],sessionStorage.getItem("token")),D=Object(C.c)((function(e){return e.getblog})),T=D.error,A=D.response,I=D.loading;Object(c.useEffect)((function(){i((function(e){e({type:Z}),S.a.get("http://18.225.37.150:2021/getblog",{headers:{"content-type":"application/json"}}).then((function(t){e({type:$,payload:t})})).catch((function(t){e({type:ee,payload:t})}))}))}),[]),Object(c.useEffect)((function(){A&&"success"===A.data.status||T&&alert(T)}),[T,A,I]);return Object(w.jsx)("div",{children:Object(w.jsx)("div",{class:"container-fluid",children:Object(w.jsxs)("div",{class:"row flex-nowrap",children:[Object(w.jsx)("div",{class:"col-auto bg-dark",children:Object(w.jsx)("div",{class:"d-flex ",children:Object(w.jsxs)("ul",{class:"nav nav-pills flex-column ",id:"menu",children:[Object(w.jsx)("li",{class:"nav-item",children:Object(w.jsxs)("button",{onClick:r,href:"#",class:"nav-link align-middle px-0",children:[Object(w.jsx)("i",{class:"fs-4 bi-house"})," ",Object(w.jsx)("span",{class:"ms-1 d-none d-sm-inline",children:"New Blog"})]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link px-0 align-middle",children:[Object(w.jsx)("i",{class:"fs-4 bi-speedometer2"})," ",Object(w.jsx)("span",{class:"ms-1 d-none d-sm-inline",children:"Dashboard"})," "]})})]})})}),Object(w.jsx)("div",{class:"col py-3",children:Object(w.jsxs)("div",{children:[s&&Object(w.jsx)("div",{children:null!=k?Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsx)("div",{className:"boxforcontacts-contact",children:Object(w.jsxs)("div",{className:"login-form",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)(l.default,{title:"Add your Blog"}),Object(w.jsx)("label",{className:"Names",children:"Blog Title"}),Object(w.jsx)("input",{id:"title",onChange:function(e){u(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your full name Name"}),Object(w.jsx)("div",{id:"blogtitleDiv",className:"errordiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Your Email"}),Object(w.jsx)("input",{id:"email",onChange:function(e){x(e.target.value)},type:"email",className:"boxforcontacts form-control",placeholder:"Enter email"}),Object(w.jsx)("div",{className:"errordiv",id:"emailDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Your Blog"}),Object(w.jsx)("textarea",{id:"blog",onChange:function(e){N(e.target.value)},type:"text",className:"boxforcontacts blogbox scrollbox form-control",placeholder:"Enter your Message/ Queries "}),Object(w.jsx)("div",{className:"errordiv",id:"blogkDiv"})]}),Object(w.jsx)("button",{onClick:function(){i(function(e,t,a){return function(c){c({type:z});var n={email:e,blog:t,title:a};S.a.post("http://18.225.37.150/:2021/addblog",n,{headers:{"content-type":"application/json"}}).then((function(e){c({type:V,payload:e})})).catch((function(e){c({type:X,payload:e})}))}}(p,g,m)),r()},type:"submit",className:"blogbutton btn btn-primary",children:"Submit"}),Object(w.jsx)("button",{onClick:r,className:"btn btn-danger float-end",children:"Cancel"}),Object(w.jsx)("div",{className:"float-end"})]})})})}):Object(w.jsx)("div",{children:Object(w.jsx)(ae,{})})}),Object(w.jsx)("div",{children:A&&A.data&&A.data.data&&A.data.data.length>0&&A.data.data.map((function(e){return Object(w.jsxs)("div",{className:" blogdivbg container",children:[Object(w.jsxs)("h4",{className:"title",children:[" ",e.title," "]}),Object(w.jsxs)("p",{className:"blboxbody",children:[" ",e.blog," "]}),Object(w.jsxs)("p",{className:"blboxfoot float-centre",children:["Blog by:- ",e.email]})]})}))})]})})]})})})},ne="ADD_CONTACT_REQUEST",se="ADD_CONTACT_SUCCESS",re="ADD_CONTACT_FAIL",ie="GET_CONTACT_REQUEST",oe="GET_CONTACT_SUCCESS",le="GET_CONTACT_FAIL",de=(a.p,a(6).default),je=function(e){var t=Object(o.k)(),a=Object(c.useState)(""),n=Object(j.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(j.a)(i,2),d=l[0],b=l[1],m=Object(c.useState)(""),u=Object(j.a)(m,2),h=u[0],O=u[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(""),N=Object(j.a)(g,2),y=N[0],E=N[1],k=Object(c.useState)(""),D=Object(j.a)(k,2),T=D[0],A=D[1],I=Object(c.useState)(""),_=Object(j.a)(I,2),B=_[0],R=_[1],H=Object(C.b)();function P(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return""!==c.value?(n.innerHTML="",!0):(n.innerHTML=a,!1)}var G=sessionStorage.getItem("token");return Object(w.jsx)("div",{children:null!=G?Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsx)("div",{className:"boxforcontacts-contact",children:Object(w.jsxs)("div",{className:"login-form",children:[Object(w.jsx)(de,{title:"Add contact"}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"First Name"}),Object(w.jsx)("input",{id:"firstname",onChange:function(e){r(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your First Name"}),Object(w.jsx)("div",{id:"firstnameDiv",className:"errordiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Middle Name"}),Object(w.jsx)("input",{id:"mname",onChange:function(e){b(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your First Name"}),Object(w.jsx)("div",{id:"mnameDiv",className:"errordiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Last Name"}),Object(w.jsx)("input",{id:"lastname",onChange:function(e){O(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Last Name"}),Object(w.jsx)("div",{className:"errordiv",id:"lastnameDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Email address"}),Object(w.jsx)("input",{id:"email",onChange:function(e){v(e.target.value)},type:"email",className:"boxforcontacts form-control",placeholder:"Enter email"}),Object(w.jsx)("div",{className:"errordiv",id:"emailDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Phone"}),Object(w.jsx)("input",{id:"phone",onChange:function(e){E(e.target.value)},type:"phone",className:"boxforcontacts form-control",placeholder:"Enter Your Phone number with country code"}),Object(w.jsx)("div",{className:"errordiv",id:"phoneDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Alternate Phone"}),Object(w.jsx)("input",{id:"phone",onChange:function(e){A(e.target.value)},type:"phone",className:"boxforcontacts form-control",placeholder:"Enter Your Phone number with country code"}),Object(w.jsx)("div",{className:"errordiv",id:"alternatephoneDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Address"}),Object(w.jsx)("input",{id:"address",onChange:function(e){R(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(w.jsx)("div",{className:"errordiv",id:"addressDiv"})]}),Object(w.jsxs)("div",{className:"form-group form-check",children:[Object(w.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(w.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(w.jsx)("button",{onClick:function(){if(P("firstname","firstnameDiv","First name is mandatory....")&&U("firstname","firstnameDiv","No person in world whos First name has numbers....")&&U("lastname","lastnameDiv","No person in world whos last name has numbers...!")&&P("lastname","lastnameDiv","Last naem is mandatory...!")&&P("email","emailDiv","Email is mandatory...!")&&P("phone","phoneDiv","Phone is manadatory")&&F("phone","phoneDiv","Your phone will never ring with alphabets or specials..")&&M(y,"phoneDiv","Only 10 Digit Numbers Allowd..")&&P("address","addressDiv","Address is required")){var e=document.getElementById("emailDiv");if(!L.a.isEmail(f))return e.innerHTML="enter valid email",!0;H(function(e,t,a,c,n,s,r){return function(i){i({type:ne});var o={fname:e,mname:t,lname:a,email:c,phone:n,alterphone:s,address:r};S.a.post("http://18.225.37.150:2021/addcontact",o,{headers:{"content-type":"application/json"}}).then((function(e){i({type:se,payload:e});try{alert(1062===e.data.error.errno?"You Are already in Book..!!! Double entry not allowed":"")}catch(t){alert("Cheers!!!Contact Added Succesfully")}})).catch((function(e){i({type:re,payload:e})}))}}(s,d,h,f,y,T,B))}},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(w.jsx)("button",{onClick:function(){t.push("/contacts")},className:"btn btn-danger float-end",children:"Cancel"}),Object(w.jsx)("div",{className:"float-end"})]})})})})}):Object(w.jsx)(ae,{})})},be=function(){var e=Object(C.b)();Object(c.useEffect)((function(){e((function(e){e({type:ie}),S.a.get("http://18.225.37.150:2021/getcontact",{headers:{"content-type":"application/json"}}).then((function(t){e({type:oe,payload:t})})).catch((function(t){e({type:le,payload:t})}))}))}),[]);var t=Object(C.c)((function(e){return e.showcontacts})),a=t.error,n=t.response,s=t.loading;Object(c.useEffect)((function(){}),[a,n,s]);var r=Object(o.k)(),i=sessionStorage.getItem("token");return Object(w.jsx)("div",{children:null!=i?Object(w.jsxs)("div",{children:[Object(w.jsx)(l.default,{title:"Contacts"}),Object(w.jsxs)("table",{className:"table table-stripped",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"table-primary",children:"id"}),Object(w.jsx)("td",{className:"table-secondary",children:"Name"}),Object(w.jsx)("td",{class:"table-success",children:"Contact Info"})]})}),Object(w.jsx)("tbody",{children:n&&n.data&&n.data.data&&n.data.data.length>0&&n.data.data.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.id}),Object(w.jsx)("td",{children:e.fname+" "+e.mname+" "+e.lname}),Object(w.jsxs)("td",{children:["Address:- ",e.address,Object(w.jsxs)("td",{children:[e.email,Object(w.jsxs)("td",{children:["Number: ",e.phone,Object(w.jsxs)("td",{children:["Alternate number: ",e.alterphone]})]})]})]})]})}))})]}),Object(w.jsx)("button",{className:"boxforcontacts btn btn-info",onClick:function(){r.push("/addcontact")},children:"Add Contact"})]}):Object(w.jsx)(ae,{})})},me=function(){return Object(w.jsx)("div",{className:"title",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"       About us"}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h3",{}),"World is growing Faster with Technology. And technology Means Cypher. Cypher is world Class Secured Application within multi application system Where All at one place. Yes!!! Cypher provides you social app,Contact books,Blogs,News,Storage and More At one Place.."]})})]})})},ue=(a.p,function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"title",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"       Cypher Always Welcomes Talent.."}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h3",{}),"Attach your resume/cv on ",Object(w.jsx)("h5",{children:"official.cyphertext@gmail.com"})]})})]})})})}),he=(a.p,function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"title",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"        Please Feel Free to Contact us!!"}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)("div",{className:"card-body",children:["Office: ",Object(w.jsx)("br",{}),"At post Jakhale ",Object(w.jsx)("br",{}),"Tal Panhala Dist Kolhapur",Object(w.jsx)("br",{}),"Phone:7276732012/8484964515",Object(w.jsx)("br",{}),"Maharashtra,416113",Object(w.jsx)("br",{}),"India"]})})]})})})}),Oe="ADD_FEEDBACK_REQUEST",pe="ADD_FEEDBACK_SUCCESS",xe="ADD_FEEDBACK_FAIL",fe="GET_FEEDBACK_REQUEST",ve="GET_FEEDBACK_SUCCESS",ge="GET_FEEDBACK_FAIL",Ne=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),d=i[0],b=i[1],m=Object(c.useState)(""),u=Object(j.a)(m,2),h=u[0],O=u[1],p=Object(C.b)(),x=Object(C.c)((function(e){return e.addfeedback})),f=x.error,v=x.response,g=(x.loading,Object(o.k)());Object(c.useEffect)((function(){v&&"success"===v.data.status?(sessionStorage.setItem("token",v.data.token),g.push("/successfeedback")):v&&"error"===v.data.status?alert(v.error):f&&alert(f)}));return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(w.jsx)("div",{className:"boxforcontacts-contact",children:Object(w.jsxs)("div",{className:"login-form",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)(l.default,{title:"we are here to assist you in anyway possible !"}),Object(w.jsx)("label",{className:"Names",children:"Enter Your Name"}),Object(w.jsx)("input",{id:"name",onChange:function(e){s(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your full name Name"}),Object(w.jsx)("div",{id:"nameDiv",className:"errordiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Email address"}),Object(w.jsx)("input",{id:"email",onChange:function(e){b(e.target.value)},type:"email",className:"boxforcontacts form-control",placeholder:"Enter email"}),Object(w.jsx)("div",{className:"errordiv",id:"emailDiv"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"Names",children:"Message"}),Object(w.jsx)("input",{id:"feedback",onChange:function(e){O(e.target.value)},type:"text",className:"boxforcontacts addressbox form-control",placeholder:"Enter your Message/ Queries "}),Object(w.jsx)("div",{className:"errordiv",id:"feedbackDiv"})]}),Object(w.jsx)("button",{onClick:function(){B("name","nameDiv","This field is mandatory..")&&U("name","nameDiv","Plese enter valid name")&&B("email","emailDiv","Please enter your Email")&&B("feedback","feedbackDiv","This field should not be Empty")&&function(e,t,a){var c=document.getElementById(t);return e.length>=4&&e.length<=500?(c.innerHTML="",!0):(c.innerHTML=a,!1)}("feedback","feedbackDiv","Enter your feedback in between 4 to 500 words")&&function(e,t,a){var c=document.getElementById(e),n=document.getElementById(t);return L.a.isEmail(c.value)?(n.innerHTML="",!0):(n.innerHTML=a,!1)}("email","emailDiv","Please Enter a valid Email")&&(console.log("i m here"),p(function(e,t,a){return function(c){c({type:Oe});var n={name:e,email:t,feedback:a};S.a.post("http://18.225.37.150:2021/addfeedback",n,{headers:{"content-type":"application/json"}}).then((function(e){c({type:pe,payload:e})})).catch((function(e){c({type:xe,payload:e})}))}}(n,d,h)))},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(w.jsx)("button",{onClick:function(){g.push("/home")},className:"btn btn-danger float-end",children:"Cancel"}),Object(w.jsx)("div",{className:"float-end"})]})})})})})})},ye=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.getfeedback})),a=t.error,n=t.response,s=t.loading;return Object(c.useEffect)((function(){e((function(e){e({type:fe}),S.a.get("http://18.225.37.150:2021/getfeedback",{headers:{"content-type":"application/json"}}).then((function(t){e({type:ve,payload:t})})).catch((function(t){e({type:ge,payload:t})}))}))}),[]),Object(c.useEffect)((function(){}),[a,n,s]),Object(w.jsxs)("div",{children:[Object(w.jsx)(l.default,{title:"Home"}),Object(w.jsxs)("table",{className:"table table-dark table-hover",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"id"}),Object(w.jsx)("td",{children:"Name"}),Object(w.jsx)("td",{children:"Email"}),Object(w.jsx)("td",{children:"Message"}),Object(w.jsx)("td",{children:"Date"})]})}),Object(w.jsx)("tbody",{children:n&&n.data&&n.data.data&&n.data.data.length>0&&n.data.data.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.id}),Object(w.jsx)("td",{children:e.fname}),Object(w.jsxs)("td",{children:[e.email," "]}),Object(w.jsx)("td",{children:e.feedback}),Object(w.jsx)("td",{children:e.date})]})}))})]})]})},Ee=function(){return Object(w.jsx)("div",{className:"container fluid",children:Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:Object(w.jsxs)("div",{children:["Your Feedback has been recoreded in our system. We will get back to you soon. ",Object(w.jsx)(i.Link,{to:"/home",children:"Click here"})," to Go back to Home."]})})})})};var Se=function(){return Object(w.jsx)(i.BrowserRouter,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(Y,{}),Object(w.jsxs)(o.g,{children:[Object(w.jsx)(o.d,{path:"/Home",component:A}),Object(w.jsx)(o.d,{path:"/Signin",component:T}),Object(w.jsx)(o.d,{path:"/signup",component:H}),Object(w.jsx)(o.d,{path:"/viewusers",component:Q}),Object(w.jsx)(o.d,{path:"/confirm",component:W}),Object(w.jsx)(o.d,{path:"/dashboard",component:q}),Object(w.jsx)(o.d,{path:"/blog",component:ce}),Object(w.jsx)(o.d,{path:"/addcontact",component:je}),Object(w.jsx)(o.d,{path:"/contacts",component:be}),Object(w.jsx)(o.d,{path:"/about",component:me}),Object(w.jsx)(o.d,{path:"/careers",component:ue}),Object(w.jsx)(o.d,{path:"/contactus",component:he}),Object(w.jsx)(o.d,{path:"/addfeedback",component:Ne}),Object(w.jsx)(o.d,{path:"/getfeedback",component:ye}),Object(w.jsx)(o.d,{path:"/successfeedback",component:Ee}),Object(w.jsx)(o.d,{path:"/unauthorisedAccess",component:ae}),Object(w.jsx)(o.d,{path:"/",children:Object(w.jsx)(o.c,{to:"/Home"})})]})]})})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},ke=a(21),we=a(55),De=a.n(we),Te=a(56),Ae=a(57),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!0,response:t.payload};case v:return{loading:!1,error:t.payload};default:return e}},_e=Object(ke.combineReducers)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0};case m:return{loading:!0,response:t.payload};case u:return{loading:!1,error:t.payload};default:return e}},getusers:Ie,confirmuser:Ie,signin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case O:return{loading:!1,response:t.payload};case p:return{loading:!1,error:t.payload};default:return e}},addcontact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return{loading:!0};case se:return{loading:!1,response:t.payload};case re:return{loading:!1,error:t.payload};default:return e}},showcontacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return{loading:!0};case oe:return{loading:!0,response:t.payload};case le:return{loading:!1,error:t.payload};default:return e}},addfeedback:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return{loading:!0};case pe:return{loading:!1,response:t.payload};case xe:return{loading:!1,error:t.payload};default:return e}},getfeedback:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return{loading:!0};case ve:return{loading:!0,response:t.payload};case ge:return{loading:!1,error:t.payload};default:return e}},addblog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case V:return{loading:!1,response:t.payload};case X:return{loading:!1,error:t.payload};default:return e}},getblog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{loading:!0};case $:return{loading:!0,response:t.payload};case ee:return{loading:!1,error:t.payload};default:return e}}}),Le=Object(ke.createStore)(_e,Object(Ae.composeWithDevTools)(Object(ke.applyMiddleware)(De.a,Te.a)));r.a.render(Object(w.jsx)(C.a,{store:Le,children:Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(Se,{})})}),document.getElementById("root")),Ce()},6:function(e,t,a){"use strict";a.r(t);var c=a(0),n=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"title",children:e.title})})};n.propsDefault={title:""},t.default=n},62:function(e,t,a){},63:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.4c0eaf19.chunk.js.map