(this["webpackJsonphome-assistants-manager"]=this["webpackJsonphome-assistants-manager"]||[]).push([[0],{22:function(e,t,c){},43:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(27),i=c.n(a),r=c(25),l=c(30),o=c(5),j=c(14),u=c(6),b=c(12),d=c.n(b),h=c(18),O=c(13);c(36),c(40);function m(e,t){O.a.database().ref("".concat(e,"/")).update(t).catch((function(e){return console.log("".concat(e.code,"\n").concat(e.message))}))}function p(e,t){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(d.a.mark((function e(t,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.database().ref("".concat(t,"/").concat(c)).remove().catch((function(e){return console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,c){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(d.a.mark((function e(t,c,n){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.database().ref("".concat(t,"/")).orderByChild(c).limitToFirst(n).once("value");case 2:if(!(s=e.sent).code){e.next=7;break}throw new Error(s.code);case 7:return a=[],s.forEach((function(e){a.push(e.val())})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(h.a)(d.a.mark((function e(t,c){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.database().ref("".concat(t,"/")).orderByChild(c).once("value");case 2:if(!(n=e.sent).code){e.next=7;break}throw new Error(n.code);case 7:return s=[],n.forEach((function(e){s.push(e.val())})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.a.initializeApp({apiKey:"AIzaSyAgEkkojV0tUc9Uzo0uKTNhXf_pQ5Xia14",authDomain:"home-assistants-1fccc.firebaseapp.com",databaseURL:"https://home-assistants-1fccc-default-rtdb.europe-west1.firebasedatabase.app",projectId:"home-assistants-1fccc",storageBucket:"home-assistants-1fccc.appspot.com",messagingSenderId:"666388505376",appId:"1:666388505376:web:62347de6465923e5016d45"});var N={database:O.a.database,auth:O.a.auth},y=(c(22),c(1));function C(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),i=Object(o.a)(a,2),r=i[0],l=i[1];Object(n.useEffect)((function(){c||j("id",10)}));var j=function(e,t){f("user",e,t).then((function(e){s(e)})).catch((function(e){return console.log(e)}))},u=function(e){return e?e.map((function(e){return Object(y.jsx)(S,{data:e,users:c,setUsers:s},"".concat(e.firstName).concat(e.lastName))})):Object(y.jsx)("span",{className:"datarow"},"000")};return Object(y.jsxs)("div",{className:"dbview",children:[Object(y.jsx)("h1",{children:"Users:"}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"search",children:"Search:"}),Object(y.jsx)("input",{className:"inp",name:"search",type:"text",onChange:function(e){return function(e){var t=c.slice(),n=[];if(t.forEach((function(t){Object.values(t).includes(e)&&n.push(t)})),n.length>0)return l(n);l(void 0)}(e.target.value)}})]}),Object(y.jsx)(k,{users:c,setUsers:s}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("firstName",10)},children:"10"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("firstName",25)},children:"25"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("firstName",50)},children:"50"})]})]}),Object(y.jsxs)("div",{className:"list",children:[Object(y.jsxs)("span",{className:"columns",children:[Object(y.jsx)("p",{children:"email"}),Object(y.jsx)("p",{children:"firstName"}),Object(y.jsx)("p",{children:"lastName"}),Object(y.jsx)("p",{children:"role"}),Object(y.jsx)("p",{children:"Delete"})]}),u(r||c)]})]})}function k(e){var t=e.users,c=e.setUsers,s=Object(n.useState)(!1),a=Object(o.a)(s,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),v=f[0],g=f[1],N=Object(n.useState)(""),C=Object(o.a)(N,2),k=C[0],S=C[1];return Object(y.jsxs)("div",{children:[Object(y.jsxs)("form",{className:i?"form normalform":"closed",onSubmit:function(e){if(e.preventDefault(),e.target.reset(),u&&O&&v){var n={};n["".concat(u).concat(O)]={firstname:u,lastname:O,email:v,role:k},m("user",n);var s=t.slice(),a=!1;s.forEach((function(e){Object.values(e).includes(v)&&(s[s.indexOf(e)]=n["".concat(u).concat(O)],c(s),r(!1),a=!0)})),a||(s.push(n["".concat(u).concat(O)]),c(s),r(!1))}},children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"firstName",children:"\u0418\u043c\u0435:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){b(e.target.value)},name:"firstName",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"lastName",children:"\u0424\u0430\u043c\u0438\u043b\u043d\u043e \u0438\u043c\u0435:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){p(e.target.value)},name:"lastName",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"email",children:"\u0418\u043c\u0435\u0439\u043b:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){g(e.target.value)},name:"email",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"role",children:"\u0420\u043e\u043b\u044f:"}),Object(y.jsxs)("select",{className:"inp",onChange:function(e){S(e.target.value)},name:"category",children:[Object(y.jsx)("option",{value:"Administrator",children:"Administrator"}),Object(y.jsx)("option",{value:"Housekeeper",children:"Housekeeper"}),Object(y.jsx)("option",{value:"Client",children:"Client"})]}),Object(y.jsx)("button",{className:"btn formbtn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438"})]}),Object(y.jsx)("button",{className:"btn addedit",onClick:function(){r(!i)},children:i?"Close form":"Add/Edit user"})]})}function S(e){var t=e.data,c=e.users,n=e.setUsers,s="".concat(t.firstname).concat(t.lastname);return Object(y.jsxs)("span",{className:"datarow",children:[Object(y.jsx)("p",{children:t.email}),Object(y.jsx)("p",{children:t.firstname}),Object(y.jsx)("p",{children:t.lastname}),Object(y.jsx)("p",{children:t.role}),Object(y.jsx)("p",{className:"action",onClick:function(){p("user",s);var e=c.slice();e.splice(e.indexOf(t),1),n(e)},children:"Delete"})]})}function A(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),i=Object(o.a)(a,2),r=i[0],l=i[1];Object(n.useEffect)((function(){c||j("capacity",10)}));var j=function(e,t){f("task",e,t).then((function(e){s(e)})).catch((function(e){return console.log(e)}))},u=function(e){return e?e.map((function(e){return Object(y.jsx)(E,{data:e,tasks:c,setTasks:s},e.name)})):Object(y.jsx)("span",{className:"datarow"},"000")};return Object(y.jsxs)("div",{className:"dbview",children:[Object(y.jsx)("h1",{children:"Tasks:"}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"search",children:"Search:"}),Object(y.jsx)("input",{className:"inp",name:"search",type:"text",onChange:function(e){return function(e){var t=c.slice(),n=[];if(t.forEach((function(t){Object.values(t).includes(e)&&n.push(t)})),n.length>0)return l(n);l(void 0)}(e.target.value)}})]}),Object(y.jsx)(w,{tasks:c,setTasks:s}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("capacity",10)},children:"10"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("capacity",25)},children:"25"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("capacity",50)},children:"50"})]})]}),Object(y.jsxs)("div",{className:"list",children:[Object(y.jsxs)("span",{className:"columns",children:[Object(y.jsx)("p",{children:"name"}),Object(y.jsx)("p",{children:"description"}),Object(y.jsx)("p",{children:"location"}),Object(y.jsx)("p",{children:"dueDate"}),Object(y.jsx)("p",{children:"budget"}),Object(y.jsx)("p",{children:"category"}),Object(y.jsx)("p",{children:"status"}),Object(y.jsx)("p",{children:"Complete"}),Object(y.jsx)("p",{children:"Delete"})]}),u(r||c)]})]})}function w(e){var t=e.tasks,c=e.setTasks,s=Object(n.useState)(!1),a=Object(o.a)(s,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),v=f[0],N=f[1],C=Object(n.useState)(""),k=Object(o.a)(C,2),S=k[0],A=k[1],w=Object(n.useState)(""),E=Object(o.a)(w,2),F=E[0],D=E[1],H=Object(n.useState)(""),T=Object(o.a)(H,2),L=T[0],U=T[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),B=q[0],P=q[1];Object(n.useEffect)((function(){S||function(e,t){return g.apply(this,arguments)}("location","name").then((function(e){A(e)}))}));return Object(y.jsxs)("div",{children:[Object(y.jsxs)("form",{className:i?"form normalform":"closed",onSubmit:function(e){if(e.preventDefault(),e.target.reset(),u&&O&&v&&F&&L&&B){var n={};n[u]={name:u,description:O,location:v,dueDate:F,budget:L,category:B,status:"\u0447\u0430\u043a\u0430\u0449\u0430"},m("task",n);var s=t.slice(),a=!1;s.forEach((function(e){Object.values(e).includes(u)&&(s[s.indexOf(e)]=n[u],c(s),r(!1),a=!0)})),a||(s.push(n[u]),c(s),r(!1))}},children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"name",children:"\u0418\u043c\u0435:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){b(e.target.value)},name:"name",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){p(e.target.value)},name:"description",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"location",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f:"}),Object(y.jsxs)("select",{className:"inp",onChange:function(e){N(e.target.value)},name:"location",children:[Object(y.jsx)("option",{value:""}),Object.values(S).map((function(e){return Object(y.jsx)("option",{value:e.adress,children:e.adress})}))]}),Object(y.jsx)("label",{className:"lbl",htmlFor:"duedate",children:"\u0421\u0440\u043e\u043a:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){D(e.target.value)},name:"duedate",type:"date"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"budget",children:"\u0411\u044e\u0434\u0436\u0435\u0442:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){U(e.target.value)},name:"budget",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"category",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:"}),Object(y.jsxs)("select",{className:"inp",onChange:function(e){P(e.target.value)},name:"category",children:[Object(y.jsx)("option",{value:""}),Object(y.jsx)("option",{value:"\u043f\u043e\u0447\u0438\u0441\u0442\u0432\u0430\u043d\u0435 \u0438 \u0434\u0438\u0437\u0435\u043d\u0444\u0435\u043a\u0446\u0438\u044f",children:"\u043f\u043e\u0447\u0438\u0441\u0442\u0432\u0430\u043d\u0435 \u0438 \u0434\u0438\u0437\u0435\u043d\u0444\u0435\u043a\u0446\u0438\u044f"}),Object(y.jsx)("option",{value:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438 \u043b\u044e\u0431\u0438\u043c\u0446\u0438 \u0438 \u0440\u0430\u0441\u0442\u0435\u043d\u0438\u044f",children:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438 \u043b\u044e\u0431\u0438\u043c\u0446\u0438 \u0438 \u0440\u0430\u0441\u0442\u0435\u043d\u0438\u044f"}),Object(y.jsx)("option",{value:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0434\u0435\u0442\u0435",children:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0434\u0435\u0442\u0435"}),Object(y.jsx)("option",{value:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0432\u044a\u0437\u0440\u0430\u0441\u0442\u0435\u043d \u0447\u043e\u0432\u0435\u043a",children:"\u0433\u0440\u0438\u0436\u0430 \u0437\u0430 \u0432\u044a\u0437\u0440\u0430\u0441\u0442\u0435\u043d \u0447\u043e\u0432\u0435\u043a"})]}),Object(y.jsx)("button",{className:"btn formbtn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438"})]}),Object(y.jsx)("button",{className:"btn addedit",onClick:function(){r(!i)},children:i?"Close form":"Add/Edit client"})]})}function E(e){var t=e.data,c=e.tasks,n=e.setTasks;return Object(y.jsxs)("span",{className:"datarow",children:[Object(y.jsx)("p",{children:t.name}),Object(y.jsx)("p",{children:t.description}),Object(y.jsx)("p",{children:t.location}),Object(y.jsx)("p",{children:t.dueDate}),Object(y.jsx)("p",{children:t.budget}),Object(y.jsx)("p",{children:t.category}),Object(y.jsx)("p",{children:t.status}),"\u0418\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0430"!==t.status?Object(y.jsx)("p",{className:"action clickable",onClick:function(){t.status="\u0418\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0430";var e={};e[t.name]=t,m("task",e);var s=c.slice();s.splice(s.indexOf(t),1),s.push(t),n(s)},children:"Complete"}):Object(y.jsx)("p",{children:"-"}),Object(y.jsx)("p",{className:"action clickable",onClick:function(){p("task",t.name);var e=c.slice();e.splice(e.indexOf(t),1),n(e)},children:"Delete"})]})}function F(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),i=Object(o.a)(a,2),r=i[0],l=i[1];Object(n.useEffect)((function(){c||j("capacity",10)}));var j=function(e,t){f("location",e,t).then((function(e){s(e)})).catch((function(e){return console.log(e)}))},u=function(e){return e?e.map((function(e){return Object(y.jsx)(H,{data:e,locations:c,setLocations:s},e.id)})):Object(y.jsx)("span",{className:"datarow"},"000")};return Object(y.jsxs)("div",{className:"dbview",children:[Object(y.jsx)("h1",{children:"Locations:"}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"search",children:"Search:"}),Object(y.jsx)("input",{className:"inp",name:"search",type:"text",onChange:function(e){return function(e){var t=c.slice(),n=[];if(t.forEach((function(t){Object.values(t).includes(e)&&n.push(t)})),n.length>0)return l(n);l(void 0)}(e.target.value)}})]}),Object(y.jsx)(D,{locations:c,setLocations:s}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("adress",10)},children:"10"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("adress",25)},children:"25"}),Object(y.jsx)("button",{className:"btn count",type:"button",onClick:function(){j("adress",50)},children:"50"})]})]}),Object(y.jsxs)("div",{className:"list",children:[Object(y.jsxs)("span",{className:"columns",children:[Object(y.jsx)("p",{children:"name"}),Object(y.jsx)("p",{children:"adress"}),Object(y.jsx)("p",{children:"Delete"})]}),u(r||c)]})]})}function D(e){var t=e.locations,c=e.setLocations,s=Object(n.useState)(!1),a=Object(o.a)(s,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],p=h[1];return Object(y.jsxs)("div",{children:[Object(y.jsxs)("form",{className:i?"form normalform":"closed",onSubmit:function(e){if(e.preventDefault(),e.target.reset(),u&&O){var n={};n[u]={adress:u,name:O},m("location",n),console.log(t);var s=t.slice(),a=!1;s.forEach((function(e){Object.values(e).includes(u)&&(s[s.indexOf(e)]=n[u],c(s),r(!1),a=!0)})),a||(s.push(n[u]),c(s),r(!1))}},children:[Object(y.jsx)("label",{className:"lbl",htmlFor:"location",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){b(e.target.value)},name:"location",type:"text"}),Object(y.jsx)("label",{className:"lbl",htmlFor:"name",children:"\u0418\u043c\u0435:"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){p(e.target.value)},name:"name",type:"text"}),Object(y.jsx)("button",{className:"btn formbtn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438"})]}),Object(y.jsx)("button",{className:"btn addedit",onClick:function(){r(!i)},children:i?"Close form":"Add/Edit location"})]})}function H(e){var t=e.data,c=e.locations,n=e.setLocations;return Object(y.jsxs)("span",{className:"datarow",children:[Object(y.jsx)("p",{children:t.name}),Object(y.jsx)("p",{children:t.adress}),Object(y.jsx)("p",{className:"action clickable",onClick:function(){p("location",t.adress);var e=c.slice();e.splice(e.indexOf(t),1),n(e)},children:"Delete"})]})}function T(){return Object(y.jsx)("div",{children:"Error404"})}c(43);function L(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],l=i[1],j=Object(u.g)();return Object(y.jsx)("div",{className:"login",children:Object(y.jsxs)("form",{className:"loginform",onSubmit:function(e){e.preventDefault(),N.auth().signInWithEmailAndPassword(c,r).then((function(){N.auth().onAuthStateChanged((function(e){e&&j.replace("/Home-Assistants/")}))})).catch((function(e){console.log(e.code),console.log(e.message)}))},children:[Object(y.jsx)("h1",{children:"HOME ASSISTANTS"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"\u041c\u043e\u043b\u044f \u0432\u043b\u0435\u0437\u0442\u0435 \u0432\u044a\u0432 \u0432\u0430\u0448\u0438\u044f\u0442 \u0430\u043a\u0430\u0443\u043d\u0442"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return s(e.target.value)},required:!0,type:"email",placeholder:"examplemail@provider.com"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return l(e.target.value)},required:!0,type:"password",placeholder:"password"}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"\u0412\u0445\u043e\u0434"}),Object(y.jsx)("button",{onClick:function(){j.replace("/Home-Assistants/Register")},className:"btn",type:"submit",children:"\u041a\u044a\u043c \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})}c(48);function U(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],l=i[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),d=b[0],h=b[1],O=Object(n.useState)(""),p=Object(o.a)(O,2),x=p[0],f=p[1],v=Object(u.g)();return Object(y.jsx)("div",{className:"register",children:Object(y.jsxs)("form",{className:"registerform",onSubmit:function(e){e.preventDefault(),N.auth().createUserWithEmailAndPassword(d,x).then((function(e){var t={};t["".concat(c).concat(r)]={email:d,firstname:c,lastname:r,role:"Client"},m("user",t),e.user&&v.replace("/Home-Assistants/")})).catch((function(e){console.log(e.code),console.log(e.message)}))},children:[Object(y.jsx)("h1",{children:"HOME ASSISTANTS"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"\u041c\u043e\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u0435"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return s(e.target.value)},required:!0,type:"text",placeholder:"Jhon"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return l(e.target.value)},required:!0,type:"text",placeholder:"Wick"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return h(e.target.value)},required:!0,type:"email",placeholder:"examplemail@provider.com"}),Object(y.jsx)("input",{className:"inp",onChange:function(e){return f(e.target.value)},required:!0,type:"password",placeholder:"password"}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(y.jsx)("button",{onClick:function(){v.replace("/Home-Assistants/Login")},className:"btn",type:"button",children:"\u041a\u044a\u043c \u0412\u0445\u043e\u0434"})]})]})})}c(49);function I(){return Object(y.jsxs)("div",{className:"main",children:[Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(j.b,{to:"/Home-Assistants/User",children:"Users Database"})}),Object(y.jsx)("li",{children:Object(y.jsx)(j.b,{to:"/Home-Assistants/Location",children:"Locations Database"})}),Object(y.jsx)("li",{children:Object(y.jsx)(j.b,{to:"/Home-Assistants/Task",children:"Tasks Database"})})]}),Object(y.jsx)("button",{className:"btn",onClick:function(){N.auth().signOut()},type:"button",children:"Log Out"})]})}c(50),c(51);function q(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){N.auth().onAuthStateChanged((function(e){s(e||"anon")}))})),Object(y.jsx)(j.a,{children:Object(y.jsx)("div",{className:"routing",children:Object(y.jsxs)(u.d,{children:[Object(y.jsx)(u.b,{exact:!0,path:"/",children:Object(y.jsx)(u.a,{to:"/Home-Assistants/"})}),Object(y.jsx)(B,{user:c,exact:!0,path:"/Home-Assistants/",children:Object(y.jsx)(I,{})}),Object(y.jsx)(B,{user:c,path:"/Home-Assistants/User",children:Object(y.jsx)(C,{})}),Object(y.jsx)(B,{user:c,path:"/Home-Assistants/Location",children:Object(y.jsx)(F,{})}),Object(y.jsx)(B,{user:c,path:"/Home-Assistants/Task",children:Object(y.jsx)(A,{})}),Object(y.jsx)(u.b,{path:"/Home-Assistants/Login",children:Object(y.jsx)(L,{})}),Object(y.jsx)(u.b,{path:"/Home-Assistants/Register",children:Object(y.jsx)(U,{})}),Object(y.jsx)(u.b,{path:"*",children:Object(y.jsx)(T,{})})]})})})}function B(e){var t=e.user,c=e.children,n=Object(l.a)(e,["user","children"]);return t?Object(y.jsx)(u.b,Object(r.a)(Object(r.a)({},n),{},{children:"anon"!==t&&t?c:Object(y.jsx)(u.a,{to:"/Home-Assistants/Login"})})):null}var P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root")),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.cc811835.chunk.js.map