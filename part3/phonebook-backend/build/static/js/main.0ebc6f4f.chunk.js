(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),o=t(14),i=t(2),l=t(3),m=t.n(l),f="/api/people",d=function(){return m.a.get(f).then((function(e){return e.data}))},s=function(e){return m.a.post(f,e).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){m.a.delete("".concat(f,"/").concat(e.id))},E=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"notification"},n)},p=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},v=function(e){var n=e.name,t=e.id;return u.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n,"?"))&&h({id:t})}},"delete")},g=function(e){var n=e.onChange;return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{onChange:n}))},w=function(e){return u.a.createElement("form",{onSubmit:e.onSubmit},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.newName,onChange:e.onNameChange})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.onNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},O=function(e){return u.a.createElement("li",null,e.name,e.number,u.a.createElement(v,{name:e.name,id:e.id}))},j=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),m=l[0],f=l[1],h=Object(a.useState)(""),v=Object(i.a)(h,2),j=v[0],C=v[1],N=Object(a.useState)(t),S=Object(i.a)(N,2),k=S[0],y=S[1],T=Object(a.useState)(null),x=Object(i.a)(T,2),A=x[0],D=x[1],J=Object(a.useState)(null),L=Object(i.a)(J,2),B=L[0],I=L[1];Object(a.useEffect)((function(){d().then((function(e){r(e),y(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(E,{message:A}),u.a.createElement(p,{message:B}),u.a.createElement(g,{onChange:function(e){y(t.filter((function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())})))}}),u.a.createElement("h3",null,"Add a new"),u.a.createElement(w,{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===m}))){if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?")))!function(e){var n=t.find((function(n){return n.id===e})),a=Object(o.a)({},n,{number:j});b(e,a).then((function(a){r(t.map((function(n){return n.id!==e?n:a}))),D("Changed ".concat(n.name,"'s number")),setTimeout((function(){I(null)}),3e3)})).catch((function(a){I("the person '".concat(n.name,"' was already deleted from the server")),setTimeout((function(){I(null)}),3e3),r(t.filter((function(n){return n.id!==e})))})),f(""),C("")}(t.find((function(e){return e.name===m})).id)}else{var n={name:m,number:j};s(n).then((function(e){r(t.concat(n)),y(t),D("Added ".concat(m)),f(""),C(""),setTimeout((function(){D(null)}),3e3)}))}},newName:m,onNameChange:function(e){f(e.target.value)},newNumber:j,onNumberChange:function(e){C(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement("ul",null,k.map((function(e){return u.a.createElement(O,{key:e.name,name:e.name,number:e.number,id:e.id})}))))};t(37);c.a.render(u.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0ebc6f4f.chunk.js.map