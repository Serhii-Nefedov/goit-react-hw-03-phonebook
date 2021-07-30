(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__3CFwS"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__3J71H",label:"ContactForm_label__3wl_f",input:"ContactForm_input__ijg00",btn:"ContactForm_btn__3AZjE"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(13),i=n(4),l=n(5),u=n(7),b=n(6),m=n(23),h=n(11),d=n.n(h),j=n(0);var f=function(t){var e=t.children;return Object(j.jsx)("div",{className:d.a.container,children:e})},p=n(12),v=n(2),C=n.n(v),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:C.a.label,children:["Name",Object(j.jsx)("input",{className:C.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:C.a.label,children:["Number",Object(j.jsx)("input",{className:C.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(9),x=n.n(_);var g=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})},y=n(3),N=n.n(y);var S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:N.a.item,children:[Object(j.jsxs)("p",{className:N.a.info,children:[a,": ",c]}),Object(j.jsx)("button",{className:N.a.btn,type:"button",onClick:function(){return n(e)},children:"delete"})]},e)}))})},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(j.jsx)(g,{value:e,onChange:this.changeFilter}),n.length>0?Object(j.jsx)(S,{contacts:a,onDeleteContact:this.deleteContact}):Object(j.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(a.Component);n(19),n(20);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2L_ff",item:"ContactList_item__azinq",btn:"ContactList_btn__2bF0P"}},9:function(t,e,n){t.exports={label:"Filter_label__ftiw9",input:"Filter_input__1H1w5"}}},[[21,1,2]]]);
//# sourceMappingURL=main.de3c1b69.chunk.js.map