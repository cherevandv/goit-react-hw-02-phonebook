(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3gwbO",label:"ContactForm_label__2dIaQ",button:"ContactForm_button__2kf-i"}},,,,,,,function(t,e,n){t.exports={container:"App_container__1QpaY"}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=(n(17),n(11)),u=n(3),l=n(4),b=n(6),m=n(5),h=n(9),d=n.n(h),f=n(22),j=n(10),p=n(2),O=n.n(p),C=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:O.a.label,htmlFor:"",children:["Name",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name..",value:this.state.name,onChange:this.handleInputChange})]}),Object(a.jsxs)("label",{className:O.a.label,htmlFor:"",children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number..",value:this.state.number,onChange:this.handleInputChange})]}),Object(a.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),v=(n(18),function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",placeholder:"...",value:e,onChange:n})]})}),x=(n(19),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})}),g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.createContact=function(e){var n=e.name,a=e.number;if(!n||!a)return alert("Some field is empty.");if(t.findSameName(n))return alert("".concat(n," is already in contacts."));var c={id:Object(f.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[c])}}))},t.findSameName=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getVisiblesContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisiblesContacts();return Object(a.jsxs)("div",{className:d.a.container,children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(C,{onSubmit:this.createContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(v,{value:t,onChange:this.changeFilter}),Object(a.jsx)(x,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f2b2375f.chunk.js.map