(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(22),r=a.n(s),i=(a(62),a(63),a(16)),o=a(5),l=a(4),d=a.p+"static/media/cyphert.0ba59b03.jpg",j=a(0),b=function(e){return Object(j.jsxs)("div",{style:{backgroundImage:'url("'.concat(d,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:[Object(j.jsx)(l.default,{title:"Home"}),Object(j.jsxs)("div",{className:"homediv",children:[Object(j.jsx)("button",{onClick:function(){e.history.push("./signup")},className:"but  btn btn-primary",children:"Sign Up"}),Object(j.jsx)("button",{onClick:function(){e.history.push("./signin")},className:"but  btn-success",children:"Sign In"})]})]})},u=a(6),m="USER_SIGNUP_REQUEST",h="USER_SIGNUP_SUCCESS",p="USER_SIGNUP_FAIL",O="USER_SIGNIN_REQUEST",v="USER_SIGNIN_SUCCESS",x="USER_SIGNIN_FAIL",f="USER_GET_REQUEST",g="USER_GET_SUCCESS",N="USER_GET_FAIL",y="USER_CONFIRM_REQUEST",w="USER_CONFIRM_SUCCESS",E="USER_CONFIRM_FAIL",C=a(15),S=a.n(C),L=a(7),D=function(e){var t=Object(o.k)(),a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),b=Object(u.a)(i,2),m=b[0],h=b[1],p=Object(L.c)((function(e){return e.signin})),f=p.error,g=p.response,N=p.loading,y=Object(L.b)();return Object(n.useEffect)((function(){g&&"success"===g.status?(sessionStorage.setItem("token",g.data.token),t.push("/dashboard")):g&&"error"===g.status?alert(g.error):f&&alert(f)}),[N,f,g]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(d,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l.default,{title:"Sign In"}),Object(j.jsxs)("div",{className:"Names",children:[Object(j.jsx)("label",{children:"Email address"}),Object(j.jsx)("input",{onChange:function(e){r(e.target.value)},type:"email",className:"boxer boxer form-control",placeholder:"Enter email"}),Object(j.jsx)("small",{className:"form-text text-muted"})]}),Object(j.jsxs)("div",{className:"Names",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{onChange:function(e){h(e.target.value)},type:"password",className:"boxer boxer form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(j.jsxs)("div",{className:"Names form-check",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(j.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(j.jsx)("button",{onClick:function(){y(function(e,t,a){return function(n){n({type:O});var c={email:e,password:t,status:a};S.a.post("http://18.225.37.150:2021/signin",c,{headers:{"Content-type":"application/json"}}).then((function(e){n({type:v,payload:e.data}),alert(e.data.status)})).catch((function(e){n({type:x,payload:e})}))}}(s,m))},type:"submit",className:"btn btn-primary",children:"Sign In"}),Object(j.jsxs)("div",{className:"float-end",children:["          ",Object(j.jsx)("button",{onClick:function(){t.push("/signup")},type:"submit",className:"btn btn-success float-end",children:"Sign Up"}),Object(j.jsx)("span",{className:"already",children:"     Have Account?? Click"})]})]})})})}),N&&Object(j.jsx)("div",{children:"waiting for response"})]})},T=a(8),A=a(23),k=a.n(A);function F(e,t,a){var n=document.getElementById(e),c=document.getElementById(t);return""!==n.value?(c.innerHTML="",!0):(c.innerHTML=a,!1)}function U(e,t,a){var n=document.getElementById(e),c=document.getElementById(t);return isNaN(n.value)?(c.innerHTML="",!0):(c.innerHTML=a,!1)}function B(e,t,a){var n=document.getElementById(e),c=document.getElementById(t);return isNaN(n.value)?(c.innerHTML=a,!1):(c.innerHTML="",!0)}function I(e,t,a){var n=document.getElementById(t);return 10==e.length?(n.innerHTML="",!0):(n.innerHTML=a,!1)}var R=a(4).default,P=function(e){var t,a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),b=l[0],O=l[1],v=Object(n.useState)(""),x=Object(u.a)(v,2),f=x[0],g=x[1],N=Object(n.useState)(""),y=Object(u.a)(N,2),w=y[0],E=y[1],C=Object(n.useState)(""),D=Object(u.a)(C,2),A=D[0],P=D[1],H=Object(n.useState)(""),X=Object(u.a)(H,2),M=X[0],Q=X[1],Y=Object(n.useState)(""),z=Object(u.a)(Y,2),G=(z[0],z[1]),K=Object(L.b)(),Z=Object(L.c)((function(e){return e.signup})),J=Z.error,W=Z.response,V=Z.loading;Object(n.useEffect)((function(){W&&"success"===W.data.status?(sessionStorage.setItem("token",W.data.token),e.history.push("/signin")):W&&"error"===W.status?alert(W.error):J&&alert(J)}),[V,J,W]);var q=Object(o.k)();return Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(d,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{title:"Sign Up"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"Names",children:"First Name"}),Object(j.jsx)("input",{id:"firstname",onChange:function(e){r(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your First Name"}),Object(j.jsx)("div",{id:"firstnameDiv",className:"errordiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Last Name"}),Object(j.jsx)("input",{id:"lastname",onChange:function(e){O(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your Last Name"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"lastnameDiv"},"className","errordiv"))]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Email address"}),Object(j.jsx)("input",{id:"email",onChange:function(e){g(e.target.value)},type:"email",className:"boxer form-control",placeholder:"Enter email"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"emailDiv"},"className","errordiv"))]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Phone"}),Object(j.jsx)("input",{id:"phone",onChange:function(e){E(e.target.value)},type:"phone",className:"boxer form-control",placeholder:"Enter Your Phone number with country code"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"phoneDiv"},"className","errordiv"))]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Address"}),Object(j.jsx)("input",{id:"address",onChange:function(e){P(e.target.value)},type:"text",className:"boxer form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"addressDiv"},"className","errordiv"))]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Password"}),Object(j.jsx)("input",{id:"password",onChange:function(e){Q(e.target.value)},type:"password",className:"boxer form-control",placeholder:"Password"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"passwordDiv"},"className","errordiv"))]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Confirm Password"}),Object(j.jsx)("input",{id:"confirmpassword",onChange:function(e){G(e.target.value)},type:"password",className:"boxer form-control",placeholder:"Password"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"confirmpasswordDiv"},"className","errordiv")),Object(j.jsx)("div",{className:"errordiv",id:"passwordverify"})]}),Object(j.jsxs)("div",{className:"form-group form-check",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(j.jsx)("label",(t={className:"Names"},Object(T.a)(t,"className","form-check-label"),Object(T.a)(t,"children","Check me out"),t))]}),Object(j.jsx)("button",{onClick:function(){if(F("firstname","firstnameDiv","First name is mandatory....")&&U("firstname","firstnameDiv","No person in world whos First name has numbers....")&&U("lastname","lastnameDiv","No person in world whos last name has numbers...!")&&F("lastname","lastnameDiv","Last naem is mandatory...!")&&F("email","emailDiv","Email is mandatory...!")&&F("phone","phoneDiv","Phone is manadatory")&&B("phone","phoneDiv","Your phone will never ring with alphabets or specials..")&&I(w,"phoneDiv","Only 10 Digit Numbers Allowd..")&&F("address","addressDiv","Address is required")&&F("password","passwordDiv","Enter password")&&F("confirmpassword","confirmpasswordDiv","Enter password")&&function(e,t,a,n){var c=document.getElementById(e),s=document.getElementById(t),r=document.getElementById(a);return c.value==s.value?(r.innerHTML="",!0):(r.innerHTML=n,!1)}("password","confirmpassword","passwordDiv","Password not Matching")&&function(e,t,a){var n=document.getElementById(t);return e.length>=6&&e.length<=15?(n.innerHTML="",!0):(n.innerHTML=a,!1)}(M,"passwordDiv","Password length should between 6 to 15")){var e=document.getElementById("emailDiv");if(!k.a.isEmail(f))return e.innerHTML="enter valid email",!0;K(function(e,t,a,n,c,s){return function(r){r({type:m});var i={firstname:e,lastname:t,email:a,phone:n,addres:c,password:s};S.a.post("http://18.225.37.150:2021/signup",i,{header:{"content-type":"application/json"}}).then((function(e){r({type:h,payload:e});try{alert(1062===e.data.error.errno?"Already registerd login or verify your account":"")}catch(t){alert("login Successfull please cheak your email")}})).catch((function(e){r({type:p,payload:e})}))}}(s,b,f,w,A,M))}},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(j.jsx)("button",{onClick:function(){q.push("/signin")},className:"btn btn-success float-end",children:"Signin"}),Object(j.jsxs)("div",{className:"float-end",children:["  ",Object(j.jsx)("span",{className:"already",children:"      Already have account!!!?"})]})]})})})})})},H=a.p+"static/media/navimg.4351aa77.jpg",X=a(16).Link,M=function(e){var t;return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",(t={style:{backgroundImage:'url("'.concat(H,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg"},Object(T.a)(t,"className","container-fluid"),Object(T.a)(t,"children",[Object(j.jsxs)(X,{to:"/home",className:"navbar-brand",children:[Object(j.jsx)("img",{src:"data:image/jpeg;base64,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",style:{height:"30px",width:"30px"}}),"Cypher"]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(X,{to:"/home",className:"nav-link",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(X,{to:"/about",className:"nav-link",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(X,{to:"/contactus",className:"nav-link",children:"Contact Us"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(X,{to:"/careers",className:"nav-link",children:"Careers"})})]})})]),t))})})},Q=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e.getusers})),a=t.error,c=t.response,s=t.loading;return Object(n.useEffect)((function(){var t,a,n,c,s,r,i,o;e((function(e){e({type:f});var l={id:t,firstname:a,lastname:n,email:c,phone:s,addres:r,password:i,status:o};S.a.get("http://18.225.37.150:2021/getuser",l,{headers:{"Content-type":"application/json"}}).then((function(t){e({type:g,payload:t})})).catch((function(t){e({type:N,payload:t})}))}))}),[]),Object(n.useEffect)((function(){}),[a,c,s]),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.default,{title:"Home"}),Object(j.jsxs)("table",{className:"table table-stripped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"id"}),Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Contact details"}),Object(j.jsx)("td",{children:"Status"})]})}),Object(j.jsx)("tbody",{children:c&&c.data&&c.data.data&&c.data.data.length>0&&c.data.data.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsxs)("td",{children:[e.firstname+" ",e.lastname]}),Object(j.jsxs)("td",{children:[e.addres," ",Object(j.jsxs)("td",{children:[e.email,Object(j.jsx)("td",{children:e.phone})]})]}),Object(j.jsx)("td",{children:0==e.status?"not verified":1==e.status?"Active":2==e.status?"Suspended":""})]})}))})]})]})},Y=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(L.b)();return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(j.jsxs)("div",{className:"login-form",children:[Object(j.jsx)(l.default,{title:"Confirm Your Account"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Email address"}),Object(j.jsx)("input",{id:"email",onChange:function(e){s(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"}),Object(j.jsx)("div",Object(T.a)({className:"errordiv",id:"emailDiv"},"className","form-text text-muted"))]}),Object(j.jsx)("button",{onClick:function(){(function(e,t,a){var n=document.getElementById(e),c=document.getElementById(t);return""!==n.value?(c.innerHTML="",!0):(c.innerHTML=a,!1)})("email","emailDiv","Email is mandatory...!")&&(r(function(e,t){return function(a){a({type:y});var n={email:e,status:t};S.a.patch("http://18.225.37.150:2021/confirm",n,{headers:{"Content-type":"application/json"}}).then((function(e){a({type:w,payload:e}),alert(1==e.data.data.changedRows?"Your Account Is activated You can Login Now":"Acpunt is already acivated")})).catch((function(e){a({type:E,payload:e})}))}}(c)),e.history.push("/signin"))},type:"submit",className:"btn btn-primary",children:"Confirm"})]})})})})},z=a.p+"static/media/blog.4c258f08.png",G=a.p+"static/media/contact.8597be11.jpg",K=function(e){var t=Object(L.b)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){t((function(e){sessionStorage.removeItem("token"),e({type:"USER_LOGOUT"}),document.location.href="/home"}))},className:"btn btn-primary float-end",children:"Logout"}),Object(j.jsx)(l.default,{title:"Dashboard"}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:z,onClick:function(){e.history.push("/blog")},className:"blog"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:G,onClick:function(){e.history.push("/contacts")},className:"blog"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"blog"})})]})},Z=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(l.default,{title:"Blog"})})},J="ADD_CONTACT_REQUEST",W="ADD_CONTACT_SUCCESS",V="ADD_CONTACT_FAIL",q="GET_CONTACT_REQUEST",_="GET_CONTACT_SUCCESS",$="GET_CONTACT_FAIL",ee=a.p+"static/media/contactbg.a38b47e3.jpg",te=a(4).default,ae=function(e){var t=Object(o.k)(),a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),d=l[0],b=l[1],m=Object(n.useState)(""),h=Object(u.a)(m,2),p=h[0],O=h[1],v=Object(n.useState)(""),x=Object(u.a)(v,2),f=x[0],g=x[1],N=Object(n.useState)(""),y=Object(u.a)(N,2),w=y[0],E=y[1],C=Object(n.useState)(""),D=Object(u.a)(C,2),T=D[0],A=D[1],F=Object(n.useState)(""),R=Object(u.a)(F,2),P=R[0],H=R[1],X=Object(L.b)();function M(e,t,a){var n=document.getElementById(e),c=document.getElementById(t);return""!==n.value?(c.innerHTML="",!0):(c.innerHTML=a,!1)}return Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(ee,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(j.jsx)("div",{className:"boxforcontacts-contact",children:Object(j.jsxs)("div",{className:"login-form",children:[Object(j.jsx)(te,{title:"Add contact"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"First Name"}),Object(j.jsx)("input",{id:"firstname",onChange:function(e){r(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your First Name"}),Object(j.jsx)("div",{id:"firstnameDiv",className:"errordiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Middle Name"}),Object(j.jsx)("input",{id:"mname",onChange:function(e){b(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your First Name"}),Object(j.jsx)("div",{id:"mnameDiv",className:"errordiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Last Name"}),Object(j.jsx)("input",{id:"lastname",onChange:function(e){O(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Last Name"}),Object(j.jsx)("div",{className:"errordiv",id:"lastnameDiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Email address"}),Object(j.jsx)("input",{id:"email",onChange:function(e){g(e.target.value)},type:"email",className:"boxforcontacts form-control",placeholder:"Enter email"}),Object(j.jsx)("div",{className:"errordiv",id:"emailDiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Phone"}),Object(j.jsx)("input",{id:"phone",onChange:function(e){E(e.target.value)},type:"phone",className:"boxforcontacts form-control",placeholder:"Enter Your Phone number with country code"}),Object(j.jsx)("div",{className:"errordiv",id:"phoneDiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Alternate Phone"}),Object(j.jsx)("input",{id:"phone",onChange:function(e){A(e.target.value)},type:"phone",className:"boxforcontacts form-control",placeholder:"Enter Your Phone number with country code"}),Object(j.jsx)("div",{className:"errordiv",id:"alternatephoneDiv"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"Names",children:"Address"}),Object(j.jsx)("input",{id:"address",onChange:function(e){H(e.target.value)},type:"text",className:"boxforcontacts form-control",placeholder:"Enter Your Address : city/town, tal, dist, state, country "}),Object(j.jsx)("div",{className:"errordiv",id:"addressDiv"})]}),Object(j.jsxs)("div",{className:"form-group form-check",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(j.jsx)("label",{className:"form-check-label",children:"Check me out"})]}),Object(j.jsx)("button",{onClick:function(){if(M("firstname","firstnameDiv","First name is mandatory....")&&U("firstname","firstnameDiv","No person in world whos First name has numbers....")&&U("lastname","lastnameDiv","No person in world whos last name has numbers...!")&&M("lastname","lastnameDiv","Last naem is mandatory...!")&&M("email","emailDiv","Email is mandatory...!")&&M("phone","phoneDiv","Phone is manadatory")&&B("phone","phoneDiv","Your phone will never ring with alphabets or specials..")&&I(w,"phoneDiv","Only 10 Digit Numbers Allowd..")&&M("address","addressDiv","Address is required")){var e=document.getElementById("emailDiv");if(!k.a.isEmail(f))return e.innerHTML="enter valid email",!0;X(function(e,t,a,n,c,s,r){return function(i){i({type:J});var o={fname:e,mname:t,lname:a,email:n,phone:c,alterphone:s,address:r};S.a.post("http://18.225.37.150:2021/addcontact",o,{headers:{"content-type":"application/json"}}).then((function(e){i({type:W,payload:e});try{alert(1062===e.data.error.errno?"You Are already in Book..!!! Double entry not allowed":"")}catch(t){alert("Cheers!!!Contact Added Succesfully")}})).catch((function(e){i({type:V,payload:e})}))}}(s,d,p,f,w,T,P))}},type:"submit",className:"btn btn-primary",children:"Submit"}),Object(j.jsx)("button",{onClick:function(){t.push("/contacts")},className:"btn btn-danger float-end",children:"Cancel"}),Object(j.jsx)("div",{className:"float-end"})]})})})})})})},ne=function(){var e=Object(L.b)();Object(n.useEffect)((function(){e((function(e){e({type:q}),S.a.get("http://18.225.37.150:2021/getcontact",{headers:{"content-type":"application/json"}}).then((function(t){e({type:_,payload:t})})).catch((function(t){e({type:$,payload:t})}))}))}),[]);var t=Object(L.c)((function(e){return e.showcontacts})),a=t.error,c=t.response,s=t.loading;Object(n.useEffect)((function(){}),[a,c,s]);var r=Object(o.k)();return Object(j.jsxs)("div",{className:"contactlist",children:[Object(j.jsx)(l.default,{title:"Contacts"}),Object(j.jsxs)("table",{className:"table table-stripped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"table-primary",children:"id"}),Object(j.jsx)("td",{className:"table-secondary",children:"Name"}),Object(j.jsx)("td",{class:"table-success",children:"Contact Info"})]})}),Object(j.jsx)("tbody",{children:c&&c.data&&c.data.data&&c.data.data.length>0&&c.data.data.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.fname+" "+e.mname+" "+e.lname}),Object(j.jsxs)("td",{children:["Address:- ",e.address,Object(j.jsxs)("td",{children:[e.email,Object(j.jsxs)("td",{children:["Number: ",e.phone,Object(j.jsxs)("td",{children:["Alternate number: ",e.alterphone]})]})]})]})]})}))})]}),Object(j.jsx)("button",{className:"boxer btn btn-info",onClick:function(){r.push("/addcontact")},children:"Add Contact"})]})},ce=a.p+"static/media/contactusbgr.e3ea67ad.gif",se=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(ce,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsxs)("div",{className:"aboutusdiv",children:[Object(j.jsx)(l.default,{title:"About Us",className:"aboutusbutton"}),Object(j.jsx)("button",{className:"aboutusbutton",children:"This world is growing Faster with Technology. And technology Means Cypher. Cypher is world Class Secured Application within multi application system Where All at one place. Yes!!! Cypher provides you social app,Contact books,Blogs,News,Storage and More At one Place.. "})]})})})},re=a.p+"static/media/about.a7ac99e7.gif",ie=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(re,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsxs)("div",{className:"careersdiv",children:[Object(j.jsx)(l.default,{title:"Careers"}),Object(j.jsxs)("button",{className:"careersbutton",children:[Object(j.jsx)("h3",{children:"Cypher Always Welcomes Talent.."}),"Attach your resume/cv on ",Object(j.jsx)("h3",{children:"official.cyphertext@gmail.com"})]})]})})})},oe=a.p+"static/media/contactbgs.1b74b98b.jpg",le=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(oe,'")'),backgroundRepeat:" no-repeat center center fixed; "},className:"respimgbg",children:Object(j.jsxs)("div",{className:"Contactusdiv",children:[Object(j.jsx)(l.default,{title:"Contact Us",className:"Contactusbutton"}),Object(j.jsxs)("button",{className:"contactusbutton",children:[Object(j.jsx)("h4",{children:"        Please Feel Free to Contact us!!"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("td",{children:"Office:"}),Object(j.jsxs)("td",{children:["  At post Jakhale",Object(j.jsxs)("td",{children:["Tal Panhala Dist Kolhapur",Object(j.jsxs)("td",{children:["Maharashtra,416113",Object(j.jsxs)("td",{children:["India",Object(j.jsx)("td",{children:"Phone :7276732012/8484964515"})]})]})]})]})]})]})]})})})};var de=function(){return Object(j.jsx)(i.BrowserRouter,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(M,{}),Object(j.jsx)("div",{className:"container-float",children:Object(j.jsxs)(o.g,{children:[Object(j.jsx)(o.d,{path:"/Home",component:b}),Object(j.jsx)(o.d,{path:"/Signin",component:D}),Object(j.jsx)(o.d,{path:"/signup",component:P}),Object(j.jsx)(o.d,{path:"/viewusers",component:Q}),Object(j.jsx)(o.d,{path:"/confirm",component:Y}),Object(j.jsx)(o.d,{path:"/dashboard",component:K}),Object(j.jsx)(o.d,{path:"/blog",component:Z}),Object(j.jsx)(o.d,{path:"/addcontact",component:ae}),Object(j.jsx)(o.d,{path:"/contacts",component:ne}),Object(j.jsx)(o.d,{path:"/about",component:se}),Object(j.jsx)(o.d,{path:"/careers",component:ie}),Object(j.jsx)(o.d,{path:"/contactus",component:le})]})})]})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,170)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},be=a(20),ue=a(55),me=a.n(ue),he=a(56),pe=a(57),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case g:return{loading:!0,response:t.payload};case N:return{loading:!1,error:t.payload};default:return e}},ve=Object(be.combineReducers)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case h:return{loading:!0,response:t.payload};case p:return{loading:!1,error:t.payload};default:return e}},getusers:Oe,confirmuser:Oe,signin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case v:return{loading:!1,response:t.payload};case x:return{loading:!1,error:t.payload};default:return e}},addcontact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return{loading:!0};case W:return{loading:!1,response:t.payload};case V:return{loading:!1,error:t.payload};default:return e}},showcontacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case _:return{loading:!0,response:t.payload};case $:return{loading:!1,error:t.payload};default:return e}}}),xe=Object(be.createStore)(ve,Object(pe.composeWithDevTools)(Object(be.applyMiddleware)(me.a,he.a)));r.a.render(Object(j.jsx)(L.a,{store:xe,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(de,{})})}),document.getElementById("root")),je()},4:function(e,t,a){"use strict";a.r(t);var n=a(0),c=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"title",children:e.title})})};c.propsDefault={title:""},t.default=c},62:function(e,t,a){},63:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.1c0c4f34.chunk.js.map