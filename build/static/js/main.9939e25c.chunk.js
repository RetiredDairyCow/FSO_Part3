(this.webpackJsonpphonebookapp=this.webpackJsonpphonebookapp||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(17),s=t.n(r),c=t(3),a=t(2),o=t(4),u=t.n(o),i="/api/persons",d={getAll:function(){return u.a.get(i).then((function(e){return e.data}))},create:function(e){return u.a.post(i,e).then((function(e){return e.data}))},deleteEntry:function(e){return u.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return u.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))}},l=t(0),b=function(e){return Object(l.jsxs)("li",{children:[e.firstAndLast," ",e.no," "," ",Object(l.jsx)("button",{onClick:function(n){window.confirm("Delete ".concat(e.firstAndLast,"?"))&&d.deleteEntry(e.entryID).then((function(n){e.setPersons(e.persons.filter((function(n){return n.id!==e.entryID})))})).catch((function(n){window.alert("The entry has already been deleted"),e.setPersons(e.persons.filter((function(n){return n.id!==e.entryID})))}))},children:"Delete Entry"})]})},f=function(e){return Object(l.jsxs)("div",{children:["Search Name: ",Object(l.jsx)("input",{value:e.searchTerm,onChange:function(n){e.setSearch(n.target.value)}})]})},j=t(8),m=function(e){return Object(l.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),!0===e.persons.some((function(n){return n.name===e.newName}))){if(window.confirm("".concat(e.newName," is already in the phonebook,\n          replace old number with a new one?"))){var t=e.persons.find((function(n){return n.name===e.newName})),r=Object(j.a)(Object(j.a)({},t),{},{number:e.newNumber});d.update(t.id,r).then((function(n){e.setPersons(e.persons.map((function(e){return e.id!==r.id?e:n})))})).catch((function(n){e.setAddedMessage("Information of ".concat(e.newName," has already\n                been deleted from the server")),setTimeout((function(){e.setAddedMessage(null)}),4e3),e.setPersons(e.persons.filter((function(n){return n.id!==e.entryID})))}))}}else{var s={name:e.newName,number:e.newNumber};d.create(s).then((function(n){e.setPersons(e.persons.concat(n)),e.setAddedMessage("Added ".concat(e.newName)),setTimeout((function(){e.setAddedMessage(null)}),4e3)}))}},children:[Object(l.jsxs)("div",{children:["Name: ",Object(l.jsx)("input",{value:e.newName,onChange:function(n){console.log(n.target.value),e.setNewName(n.target.value)}})]}),Object(l.jsxs)("div",{children:["Number: ",Object(l.jsx)("input",{value:e.newNumber,onChange:function(n){e.setNewNumber(n.target.value)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"Add"})})]})},h=function(e){var n=e.message;return null===n?null:Object(l.jsx)("div",{className:"error",children:n})},p=(t(41),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)("Enter Name"),o=Object(c.a)(s,2),u=o[0],i=o[1],j=Object(a.useState)("Enter New Number"),p=Object(c.a)(j,2),O=p[0],w=p[1],N=Object(a.useState)(""),g=Object(c.a)(N,2),v=g[0],x=g[1],y=Object(a.useState)(null),A=Object(c.a)(y,2),D=A[0],P=A[1];Object(a.useEffect)((function(){d.getAll().then((function(e){r(e)}))}),[]);var S=0===v.length?t:t.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(h,{message:D}),Object(l.jsx)(f,{searchTerm:v,setSearch:x}),Object(l.jsx)("h2",{children:"Add New Entry Please"}),Object(l.jsx)(m,{newName:u,newNumber:O,setNewName:i,setNewNumber:w,persons:t,setPersons:r,addedMessage:D,setAddedMessage:P,entryID:t.id}),Object(l.jsx)("h2",{children:"Numbers"}),S.map((function(e){return Object(l.jsx)(b,{firstAndLast:e.name,entryID:e.id,no:e.number,persons:t,setPersons:r},e.id)}))]})});s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9939e25c.chunk.js.map