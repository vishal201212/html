(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(0),s=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"title",children:e.title})})};s.propsDefault={title:""},t.default=s},170:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(21),r=a.n(c),i=(a(62),a(63),a(27)),o=a(4),l=a(0),d=a(11).default,j=function(e){return Object(l.jsxs)("div",{className:"boddy container",children:[Object(l.jsx)(d,{title:"Home"}),Object(l.jsx)("div",{className:"img-wrapper",children:Object(l.jsxs)("div",{className:"img-overlay",children:[Object(l.jsx)("button",{onClick:function(){e.history.push("./signup")},className:"but btn btn-primary",children:"Sign Up"}),Object(l.jsx)("button",{onClick:function(){e.history.push("./signin")},className:"but btn btn-success",children:"Sign In"})]})})]})},m=a(5),b="USER_SIGNUP_REQUEST",u="USER_SIGNUP_SUCCESS",h="USER_SIGNUP_FAIL",p="USER_SIGNIN_REQUEST",O="USER_SIGNIN_SUCCESS",x="USER_SIGNIN_FAIL",v="USER_GET_REQUEST",f="USER_GET_SUCCESS",g="USER_GET_FAIL",N="USER_CONFIRM_REQUEST",y="USER_CONFIRM_SUCCESS",E="USER_CONFIRM_FAIL",S=a(15),C=a.n(S),w=a(6),D=a(11).default,T=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),o=i[0],d=i[1];console.log(s),console.log(o);var j=Object(w.c)((function(e){return e.signin})),b=j.error,u=j.response,h=j.loading,v=Object(w.b)();Object(n.useEffect)((function(){u&&"success"===u.status?(sessionStorage.setItem("token",u.data.token),e.history.push("/dashboard")):u&&"error"===u.status?alert(u.error):b&&alert(b)}),[h,b,u]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"container fluid bgr",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsx)(D,{title:"Sign In"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{onChange:function(e){c(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"}),Object(l.jsx)("small",{className:"form-text text-muted"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{onChange:function(e){d(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(l.jsxs)("div",{className:"form-group form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(l.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(l.jsx)("button",{onClick:function(){v(function(e,t){return function(a){a({type:p});var n={email:e,password:t};C.a.post("http://18.225.37.150:2021/signin",n,{headers:{"Content-type":"application/json"}}).then((function(e){a({type:O,payload:e.data}),alert(e.data.status)})).catch((function(e){a({type:x,payload:e})}))}}(s,o))},type:"submit",className:"btn btn-primary",children:"Sign In"}),Object(l.jsxs)("div",{className:"float-end",children:["          ",Object(l.jsx)("button",{onClick:function(){e.history.push("/signup")},type:"submit",className:"btn btn-success float-end",children:"Sign Up"}),Object(l.jsx)("span",{className:"already",children:"     Have Account?? Click"})]})]})})})}),h&&Object(l.jsx)("div",{children:"waiting for response"})]})},I=a(7),k=a(22),L=a.n(k);function _(e,t,a){var n=document.getElementById(e),s=document.getElementById(t);return""!==n.value?(s.innerHTML="",!0):(s.innerHTML=a,!1)}function A(e,t,a){var n=document.getElementById(e),s=document.getElementById(t);return isNaN(n.value)?(s.innerHTML="",!0):(s.innerHTML=a,!1)}var U=a(11).default,M=function(e){var t,a=Object(n.useState)(""),s=Object(m.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),d=o[0],j=o[1],p=Object(n.useState)(""),O=Object(m.a)(p,2),x=O[0],v=O[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),N=g[0],y=g[1],E=Object(n.useState)(""),S=Object(m.a)(E,2),D=S[0],T=S[1],k=Object(n.useState)(""),M=Object(m.a)(k,2),P=M[0],R=M[1],B=Object(n.useState)(""),F=Object(m.a)(B,2),H=(F[0],F[1]),Y=Object(w.b)();return Object(l.jsx)("div",{className:"bgr",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(U,{title:"Sign Up"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"Names",children:"First Name"}),Object(l.jsx)("input",{id:"firstname",onChange:function(e){r(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your First Name"}),Object(l.jsx)("div",{id:"firstnameDiv",className:"errordiv"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Last Name"}),Object(l.jsx)("input",{id:"lastname",onChange:function(e){j(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your Last Name"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"lastnameDiv"},"className","errordiv"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Email address"}),Object(l.jsx)("input",{id:"email",onChange:function(e){v(e.target.value)},type:"email",className:"boxer form-control",placeholder:"Enter email"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"emailDiv"},"className","errordiv"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Phone"}),Object(l.jsx)("input",{id:"phone",onChange:function(e){y(e.target.value)},type:"phone",className:"boxer form-control",placeholder:"Enter Your Phone number with country code"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"phoneDiv"},"className","errordiv"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Address"}),Object(l.jsx)("input",{id:"address",onChange:function(e){T(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"addressDiv"},"className","errordiv"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Password"}),Object(l.jsx)("input",{id:"password",onChange:function(e){R(e.target.value)},type:"password",className:"boxer form-control",placeholder:"Password"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"passwordDiv"},"className","errordiv"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"Names",children:"Confirm Password"}),Object(l.jsx)("input",{id:"confirmpassword",onChange:function(e){H(e.target.value)},type:"password",className:"boxer form-control",placeholder:"Password"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"confirmpasswordDiv"},"className","errordiv")),Object(l.jsx)("div",{className:"errordiv",id:"passwordverify"})]}),Object(l.jsxs)("div",{className:"form-group form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(l.jsx)("label",(t={className:"Names"},Object(I.a)(t,"className","form-check-label"),Object(I.a)(t,"children","Check me out"),t))]}),Object(l.jsx)("button",{onClick:function(){if(_("firstname","firstnameDiv","First name is mandatory....")&&A("firstname","firstnameDiv","No person in world whos First name has numbers....")&&A("lastname","lastnameDiv","No person in world whos last name has numbers...!")&&_("lastname","lastnameDiv","Last naem is mandatory...!")&&_("email","emailDiv","Email is mandatory...!")&&_("phone","phoneDiv","Phone is manadatory")&&function(e,t,a){var n=document.getElementById(e),s=document.getElementById(t);return isNaN(n.value)?(s.innerHTML=a,!1):(s.innerHTML="",!0)}("phone","phoneDiv","Your phone will never ring with alphabets or specials..")&&function(e,t,a){var n=document.getElementById(t);return 10==e.length?(n.innerHTML="",!0):(n.innerHTML=a,!1)}(N,"phoneDiv","Only 10 Digit Numbers Allowd..")&&_("address","addressDiv","Address is required")&&_("password","passwordDiv","Enter password")&&_("confirmpassword","confirmpasswordDiv","Enter password")&&function(e,t,a,n){var s=document.getElementById(e),c=document.getElementById(t),r=document.getElementById(a);return s.value==c.value?(r.innerHTML="",!0):(r.innerHTML=n,!1)}("password","confirmpassword","passwordDiv","Password not Matching")&&function(e,t,a){var n=document.getElementById(t);return e.length>=6&&e.length<=15?(n.innerHTML="",!0):(n.innerHTML=a,!1)}(P,"passwordDiv","Password length should between 6 to 15")){var e=document.getElementById("emailDiv");if(!L.a.isEmail(x))return e.innerHTML="enter valid email",!0;Y(function(e,t,a,n,s,c){return function(r){r({type:b});var i={firstname:e,lastname:t,email:a,phone:n,addres:s,password:c};C.a.post("http://18.225.37.150:2021/signup",i,{header:{"content-type":"application/json"}}).then((function(e){r({type:u,payload:e});try{alert(1062===e.data.error.errno?"Already registerd login or verify your account":"")}catch(t){alert("login Successfull please cheak your email")}})).catch((function(e){r({type:h,payload:e})}))}}(c,d,x,N,D,P))}},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(l.jsx)("button",{onClick:function(){e.history.push("/signin")},className:"btn btn-success float-end",children:"Signin"}),Object(l.jsxs)("div",{className:"float-end",children:["  ",Object(l.jsx)("span",{className:"already",children:"      Already have account!!!?"})]})]})})})})})},P=a(27).Link,R=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(P,{to:"/home",className:"navbar-brand",children:"Cypher"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(P,{to:"/viewusers",className:"nav-link",children:"View user"})})})})]})})})},B=a(11),F=(a(169),function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.getusers})),a=t.error,s=t.response,c=t.loading;return Object(n.useEffect)((function(){var t,a,n,s,c,r,i,o;e((function(e){e({type:v});var l={id:t,firstname:a,lastname:n,email:s,phone:c,addres:r,password:i,status:o};C.a.get("http://18.225.37.150:2021/getuser",l,{headers:{"Content-type":"application/json"}}).then((function(t){e({type:f,payload:t})})).catch((function(t){e({type:g,payload:t})}))}))}),[]),Object(n.useEffect)((function(){}),[a,s,c]),Object(l.jsxs)("div",{className:"overflow-x:auto",children:[Object(l.jsx)(B.default,{title:"Home"}),Object(l.jsxs)("table",{className:"table table-stripped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"id"}),Object(l.jsx)("td",{children:"First Name"}),Object(l.jsx)("td",{children:"Last Name"}),Object(l.jsx)("td",{children:"Email"}),Object(l.jsx)("td",{children:"Phone"}),Object(l.jsx)("td",{children:"Address"}),Object(l.jsx)("td",{children:"Status"})]})}),Object(l.jsx)("tbody",{children:s&&s.data&&s.data.data&&s.data.data.length>0&&s.data.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.firstname}),Object(l.jsx)("td",{children:e.lastname}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.addres}),Object(l.jsx)("td",{children:0==e.status?"not verified":1==e.status?"Active":2==e.status?"Suspended":""})]})}))})]})]})}),H=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),s=a[0],c=a[1],r=Object(w.b)();return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsx)(B.default,{title:"Confirm Your Account"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{id:"email",onChange:function(e){c(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"emailDiv"},"className","form-text text-muted"))]}),Object(l.jsx)("button",{onClick:function(){(function(e,t,a){var n=document.getElementById(e),s=document.getElementById(t);return""!==n.value?(s.innerHTML="",!0):(s.innerHTML=a,!1)})("email","emailDiv","Email is mandatory...!")&&(r(function(e,t){return function(a){a({type:N});var n={email:e,status:t};C.a.patch("http://18.225.37.150:2021/confirm",n,{headers:{"Content-type":"application/json"}}).then((function(e){a({type:y,payload:e}),alert(1==e.data.data.changedRows?"Your Account Is activated You can Login Now":"Acpunt is already acivated")})).catch((function(e){a({type:E,payload:e})}))}}(s)),e.history.push("/signin"))},type:"submit",className:"btn btn-primary",children:"Confirm"})]})})})})},Y=a.p+"static/media/blog.4c258f08.png",G=a.p+"static/media/contact.8597be11.jpg",Q=a(11).default,q=function(e){var t=Object(w.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){t((function(e){sessionStorage.removeItem("token"),e({type:"USER_LOGOUT"}),document.location.href="/home"}))},className:"btn btn-primary float-end",children:"Logout"}),Object(l.jsx)(Q,{title:"Dashboard"}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:Y,onClick:function(){e.history.push("/blog")},className:"blog"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:G,onClick:function(){e.history.push("/contacts")},className:"blog"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"blog"})})]})},J=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(B.default,{title:"Blog"})})},V="ADD_CONTACT_REQUEST",W="ADD_CONTACT_SUCCESS",z="ADD_CONTACT_FAIL",K="GET_CONTACT_REQUEST",X="GET_CONTACT_SUCCESS",Z="GET_CONTACT_FAIL",$=a(11).default,ee=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),o=i[0],d=i[1],j=Object(n.useState)(""),b=Object(m.a)(j,2),u=b[0],h=b[1],p=Object(n.useState)(""),O=Object(m.a)(p,2),x=O[0],v=O[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),N=g[0],y=g[1],E=Object(n.useState)(""),S=Object(m.a)(E,2),D=S[0],T=S[1],k=Object(n.useState)(""),_=Object(m.a)(k,2),A=_[0],U=_[1],M=Object(w.b)();function P(e,t,a){var n=document.getElementById(e),s=document.getElementById(t);return""!==n.value?(s.innerHTML="",!0):(s.innerHTML=a,!1)}return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsx)($,{title:"Add contact"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"First Name"}),Object(l.jsx)("input",{id:"firstname",onChange:function(e){c(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Your First Name"}),Object(l.jsx)("div",{id:"firstnameDiv",className:"form-text text-muted"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Middle Name"}),Object(l.jsx)("input",{id:"mname",onChange:function(e){d(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Your First Name"}),Object(l.jsx)("div",{id:"mnameDiv",className:"form-text text-muted"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Last Name"}),Object(l.jsx)("input",{id:"lastname",onChange:function(e){h(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Your Last Name"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"lastnameDiv"},"className","form-text text-muted"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{id:"email",onChange:function(e){v(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"emailDiv"},"className","form-text text-muted"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Phone"}),Object(l.jsx)("input",{id:"phone",onChange:function(e){y(e.target.value)},type:"phone",className:"form-control",placeholder:"Enter Your Phone number with country code"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"phoneDiv"},"className","form-text text-muted"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Alternate Phone"}),Object(l.jsx)("input",{id:"phone",onChange:function(e){T(e.target.value)},type:"phone",className:"form-control",placeholder:"Enter Your Phone number with country code"}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"alternatephoneDiv"},"className","form-text text-muted"))]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Address"}),Object(l.jsx)("input",{id:"address",onChange:function(e){U(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(l.jsx)("div",Object(I.a)({className:"errordiv",id:"addressDiv"},"className","form-text text-muted"))]}),Object(l.jsxs)("div",{className:"form-group form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(l.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(l.jsx)("button",{onClick:function(){if(P("firstname","firstnameDiv","First name is mandatory....")&&P("mname","mnameDiv","middle name is mandatory....")&&P("lastname","lastnameDiv","Last naem is mandatory...!")&&P("email","emailDiv","Email is mandatory...!")&&P("phone","phoneDiv","Phone is manadatory")&&P("address","addressDiv","Address is required")){var t=document.getElementById("emailDiv"),a=document.getElementById("phone");return console.log(a),L.a.isEmail(x)?(t.innerHTML="",M(function(e,t,a,n,s,c,r){return function(i){i({type:V});var o={fname:e,mname:t,lname:a,email:n,phone:s,alterphone:c,address:r};C.a.post("http://18.225.37.150:2021/addcontact",o,{headers:{"content-type":"application/json"}}).then((function(e){i({type:W,payload:e});try{alert(1062===e.data.error.errno?"You Are already in Book..!!! Double entry not allowed":"")}catch(t){alert("Cheers!!!Contact Added Succesfully")}})).catch((function(e){i({type:z,payload:e})}))}}(s,o,u,x,N,D,A)),e.history.push("/contactbook"),!1):(t.innerHTML="enter valid email",!0)}},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(l.jsx)("button",{onClick:function(){e.history.push("/contctbook")},className:"btn btn-danger float-end",children:"Cancel"}),Object(l.jsx)("div",{className:"float-end"})]})})})})})},te=function(){var e=Object(w.b)();Object(n.useEffect)((function(){e((function(e){e({type:K}),C.a.get("http://18.225.37.150:2021/getcontact",{headers:{"content-type":"application/json"}}).then((function(t){e({type:X,payload:t})})).catch((function(t){e({type:Z,payload:t})}))}))}),[]);var t=Object(w.c)((function(e){return e.showcontacts})),a=t.error,s=t.response,c=t.loading;return Object(n.useEffect)((function(){}),[a,s,c]),Object(l.jsxs)("div",{children:[Object(l.jsx)(B.default,{title:"Contact list"}),Object(l.jsxs)("table",{className:"table table-stripped helpme",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"id"}),Object(l.jsx)("td",{children:"First name"}),Object(l.jsx)("td",{children:"Middle name"}),Object(l.jsx)("td",{children:"Last Name"}),Object(l.jsx)("td",{children:"Email"}),Object(l.jsx)("td",{children:"Phone"}),Object(l.jsx)("td",{children:"Alternative Phone"}),Object(l.jsx)("td",{children:"Address"})]})}),Object(l.jsx)("tbody",{children:s&&s.data&&s.data.data&&s.data.data.length>0&&s.data.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.fname}),Object(l.jsx)("td",{children:e.mname}),Object(l.jsx)("td",{children:e.lname}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.alterphone}),Object(l.jsx)("td",{children:e.address})]})}))})]})]})};var ae=function(){return Object(l.jsx)(i.BrowserRouter,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(R,{}),Object(l.jsx)("div",{className:"container-float",children:Object(l.jsxs)(o.g,{children:[Object(l.jsx)(o.d,{path:"/Home",component:j}),Object(l.jsx)(o.d,{path:"/Signin",component:T}),Object(l.jsx)(o.d,{path:"/signup",component:M}),Object(l.jsx)(o.d,{path:"/viewusers",component:F}),Object(l.jsx)(o.d,{path:"/confirm",component:H}),Object(l.jsx)(o.d,{path:"/dashboard",component:q}),Object(l.jsx)(o.d,{path:"/blog",component:J}),Object(l.jsx)(o.d,{path:"/addcontact",component:ee}),Object(l.jsx)(o.d,{path:"/contacts",component:te})]})})]})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},se=a(19),ce=a(55),re=a.n(ce),ie=a(56),oe=a(57),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case f:return{loading:!0,response:t.payload};case g:return{loading:!1,error:t.payload};default:return e}},de=Object(se.combineReducers)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0};case u:return{loading:!0,response:t.payload};case h:return{loading:!1,error:t.payload};default:return e}},getusers:le,confirmuser:le,signin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case O:return{loading:!1,response:t.payload};case x:return{loading:!1,error:t.payload};default:return e}},addcontact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case W:return{loading:!1,response:t.payload};case z:return{loading:!1,error:t.payload};default:return e}},showcontacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case X:return{loading:!0,response:t.payload};case Z:return{loading:!1,error:t.payload};default:return e}}}),je=Object(se.createStore)(de,Object(oe.composeWithDevTools)(Object(se.applyMiddleware)(re.a,ie.a)));r.a.render(Object(l.jsx)(w.a,{store:je,children:Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(ae,{})})}),document.getElementById("root")),ne()},62:function(e,t,a){},63:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.b39ce98b.chunk.js.map