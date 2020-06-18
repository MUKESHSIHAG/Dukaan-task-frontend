(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),u=n.n(c),o=n(18),l=n(5),i=n(8),s=n(9),m=n(11),p=n(10),f=n(3),b=n(4);function h(){var e=Object(f.a)([""]);return h=function(){return e},e}function d(){var e=Object(f.a)([""]);return d=function(){return e},e}function v(){var e=Object(f.a)([""]);return v=function(){return e},e}var g=b.a.div.attrs({className:"collpase navbar-collapse"})(v()),O=b.a.div.attrs({className:"navbar-nav mr-auto"})(d()),j=b.a.div.attrs({className:"collpase navbar-collapse"})(h()),E=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Dukaan full stack task"),r.a.createElement(g,null,r.a.createElement(O,{style:{marginLeft:"20%"}},r.a.createElement(j,null,r.a.createElement(o.b,{to:"/contacts/list",className:"nav-link text-light"},"List all Contacts")),"&nbsp&nbsp",r.a.createElement(j,null,r.a.createElement(o.b,{to:"/contacts/create",className:"nav-link text-light"},"Create Contact")))))}}]),n}(a.Component),C=n(39),x=n.n(C);function k(){var e=Object(f.a)([""]);return k=function(){return e},e}var y=b.a.a.attrs({className:"navbar-brand"})(k()),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(y,{href:"https://sambarros.com"},r.a.createElement("img",{src:x.a,width:"50",height:"50",alt:"sambarros.com"}))}}]),n}(a.Component);function w(){var e=Object(f.a)(["\n    margin-bottom: 20 px;\n"]);return w=function(){return e},e}function _(){var e=Object(f.a)(["\n    height: 150px;\n"]);return _=function(){return e},e}var I=b.a.div.attrs({className:"container"})(_()),S=b.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-dark"})(w()),U=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement(S,null,r.a.createElement(N,null),r.a.createElement(E,null)))}}]),n}(a.Component),D=n(7),H=n.n(D),P=n(16),B=n(41),A=n(40),L=n.n(A).a.create({baseURL:"https://dukaan-backend.herokuapp.com/api"}),G={insertContact:function(e){return L.post("/contact",e)},getAllContacts:function(){return L.get("/contacts")},updateContactById:function(e,t){return L.put("/contact/".concat(e),t)},deleteContactById:function(e){return L.delete("/contact/".concat(e))},getContactById:function(e){return L.get("/contact/".concat(e))}};n(69);function M(){var e=Object(f.a)(["\n    color: #ff0000;\n    cursor: pointer;\n"]);return M=function(){return e},e}function z(){var e=Object(f.a)(["\n    color: #ef9b0f;\n    cursor: pointer;\n"]);return z=function(){return e},e}function J(){var e=Object(f.a)(["\n    padding: 0 40px 40px 40px;\n"]);return J=function(){return e},e}var K=b.a.div(J()),R=b.a.div(z()),T=b.a.div(M()),F=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).updateUser=function(t){t.preventDefault(),window.location.href="/contacts/update/".concat(e.props.id)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{onClick:this.updateUser},"Update")}}]),n}(a.Component),q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).deleteUser=function(t){t.preventDefault(),G.deleteContactById(e.props.id),setTimeout((function(){window.location.reload()}),1e3)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(T,{onClick:this.deleteUser},"Delete")}}]),n}(a.Component),Q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(P.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,G.getAllContacts().then((function(e){a.setState({contacts:e.data.data,isLoading:!1})}));case 3:case"end":return e.stop()}}),e)}))),a.state={contacts:[],columns:[],isLoading:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.isLoading,a=[{Header:"ID",accessor:"_id",filterable:!0},{Header:"Name",accessor:"name",filterable:!0},{Header:"Phone Number",accessor:"phone_number",filterable:!0},{Header:"",accessor:"",Cell:function(e){return r.a.createElement("span",null,r.a.createElement(q,{id:e.original._id}))}},{Header:"",accessor:"",Cell:function(e){return r.a.createElement("span",null,r.a.createElement(F,{id:e.original._id}))}}],c=!0;return t.length||(c=!1),c?r.a.createElement(K,null,c&&r.a.createElement(B.a,{data:t,columns:a,loading:n,defaultPageSize:10,showPageSizeOptions:!0,minRows:1})):r.a.createElement(K,null,r.a.createElement("center",null,r.a.createElement("h4",{style:{marginTop:"15%"}},"No Contact to show")))}}]),n}(a.Component);function V(){var e=Object(f.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return V=function(){return e},e}function W(){var e=Object(f.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return W=function(){return e},e}function X(){var e=Object(f.a)(["\n    margin: 5px;\n"]);return X=function(){return e},e}function Y(){var e=Object(f.a)(["\n    margin: 5px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(f.a)(["\n    margin: 0 30px;\n"]);return Z=function(){return e},e}function $(){var e=Object(f.a)([""]);return $=function(){return e},e}var ee=b.a.h1.attrs({className:"h1"})($()),te=b.a.div.attrs({className:"form-group"})(Z()),ne=b.a.label(Y()),ae=b.a.input.attrs({className:"form-control"})(X()),re=b.a.button.attrs({className:"btn btn-primary"})(W()),ce=b.a.a.attrs({className:"btn btn-danger"})(V()),ue=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChangeInputName=function(){var e=Object(P.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({name:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChangeInputPhoneNumber=function(){var e=Object(P.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.validity.valid?t.target.value:a.state.phone_number,a.setState({phone_number:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleIncludeContact=Object(P.a)(H.a.mark((function e(){var t,n,r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.name,r=t.phone_number,c={name:n,phone_number:r},e.next=4,G.insertContact(c).then((function(e){window.alert("Contact inserted successfully"),a.setState({name:"",phone_number:""})}));case 4:case"end":return e.stop()}}),e)}))),a.state={name:"",phone_number:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone_number;return r.a.createElement(te,null,r.a.createElement(ee,null,"Create Contact"),r.a.createElement(ne,null,"Name: "),r.a.createElement(ae,{type:"text",value:t,onChange:this.handleChangeInputName}),r.a.createElement(ne,null,"Phone Number: "),r.a.createElement(ae,{type:"number",step:"0.1",lang:"en-US",min:"0",max:"10000000000",value:n,onChange:this.handleChangeInputPhoneNumber}),r.a.createElement(re,{onClick:this.handleIncludeContact},"Add Contact"),r.a.createElement(ce,{href:"/contacts/list"},"Cancel"))}}]),n}(a.Component);function oe(){var e=Object(f.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return oe=function(){return e},e}function le(){var e=Object(f.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return le=function(){return e},e}function ie(){var e=Object(f.a)(["\n    margin: 5px;\n"]);return ie=function(){return e},e}function se(){var e=Object(f.a)(["\n    margin: 5px;\n"]);return se=function(){return e},e}function me(){var e=Object(f.a)(["\n    margin: 0 30px;\n"]);return me=function(){return e},e}function pe(){var e=Object(f.a)([""]);return pe=function(){return e},e}var fe=b.a.h1.attrs({className:"h1"})(pe()),be=b.a.div.attrs({className:"form-group"})(me()),he=b.a.label(se()),de=b.a.input.attrs({className:"form-control"})(ie()),ve=b.a.button.attrs({className:"btn btn-primary"})(le()),ge=b.a.a.attrs({className:"btn btn-danger"})(oe()),Oe=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChangeInputName=function(){var e=Object(P.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({name:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChangeInputPhoneNumber=function(){var e=Object(P.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.validity.valid?t.target.value:a.state.phone_number,a.setState({phone_number:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleUpdateContact=Object(P.a)(H.a.mark((function e(){var t,n,r,c,u;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.id,r=t.name,c=t.phone_number,u={name:r,phone_number:c},e.next=4,G.updateContactById(n,u).then((function(e){window.alert("Contact updated successfully"),a.setState({name:"",phone_number:""}),window.location.href="/contacts/list"}));case 4:case"end":return e.stop()}}),e)}))),a.componentDidMount=Object(P.a)(H.a.mark((function e(){var t,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.id,e.next=3,G.getContactById(t);case 3:n=e.sent,a.setState({name:n.data.data.name,phone_number:n.data.data.phone_number});case 5:case"end":return e.stop()}}),e)}))),a.state={id:a.props.match.params.id,name:"",phone_number:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone_number;return r.a.createElement(be,null,r.a.createElement(fe,null,"Update Contact"),r.a.createElement(he,null,"Name: "),r.a.createElement(de,{type:"text",value:t,onChange:this.handleChangeInputName}),r.a.createElement(he,null,"Phone Number: "),r.a.createElement(de,{type:"number",step:"0.1",lang:"en-US",min:"0",max:"10000000000",value:n,onChange:this.handleChangeInputPhoneNumber}),r.a.createElement(ve,{onClick:this.handleUpdateContact},"Update Contact"),r.a.createElement(ge,{href:"/contacts/list"},"Cancel"))}}]),n}(a.Component);n(70);var je=function(){return r.a.createElement(o.a,null,r.a.createElement(U,null),r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{className:"text-primary",href:"https://github.com/MUKESHSIHAG/Dukaan-task-frontend",target:"_blank"},"Github link of frontend")),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/MUKESHSIHAG/Dukaan-task-backend",target:"_blank"},"Github link of Backend")))),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/contacts/list",exact:!0,component:Q}),r.a.createElement(l.a,{path:"/contacts/create",exact:!0,component:ue}),r.a.createElement(l.a,{path:"/contacts/update/:id",exact:!0,component:Oe})))};u.a.render(r.a.createElement(je,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e52b1253.chunk.js.map