(this.webpackJsonpapibase=this.webpackJsonpapibase||[]).push([[28],{383:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(10),l=a(13),s=a(71),u=a(21),m=a(261),d=a(286),p=a(427),f=a(89),b=a.n(f),E=a(90),g=a.n(E),v=a(22),h=a(14),O=a(15),I=a(9),j=a(428),x=a(26),y=a(11),N=a(23),S=a(18),w=function(e){var t=e.dataInicial,a=e.abrirModal,c=e.setAbrirModal,s=e.GetTipoSangre,m=Object(N.a)(t),d=Object(l.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),g=E[0],v=E[1],h=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("tiposangre",{method:"POST",body:JSON.stringify(p)});case 2:e.sent&&(Object(I.b)("Tipo de Sangre registrado exitosamente"),s(),c(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("tiposangre",{method:"PUT",body:JSON.stringify(p)});case 2:(t=e.sent)&&(Object(I.b)(t),s()),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),v(!0),!(t.tipo_sangreId>0)){e.next=7;break}return e.next=5,w();case 5:e.next=9;break;case 7:return e.next=9,h();case 9:v(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{show:a,onHide:function(){return c(!1)}},!0===g?r.a.createElement(S.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,{as:"h5"},t.tipo_sangreId>0?"Actualizar Tipo de Sangre":"Nuevo Tipo de Sangre")),r.a.createElement(j.a.Body,null,r.a.createElement(y.ValidationForm,{onSubmit:k,onErrorSubmit:function(e,t,a){Object(I.c)("Por favor complete toda la informaci\xf3n solicitada por el formulario")}},r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"descripcion"},"Descripci\xf3n"),r.a.createElement(y.TextInput,{name:"descripcion",id:"descripcion",required:!0,value:p.descripcion,onChange:f,errorMessage:"Campo obligatorio",placeholder:"Descripci\xf3n",autoComplete:"off",style:{textTransform:"capitalize"},type:"text"})),t.tipo_sangreId>0&&r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"estadoId"},"Estado"),r.a.createElement(y.SelectGroup,{name:"estadoId",id:"estadoId",value:p.estadoId,required:!0,errorMessage:"Campo obligatorio",onChange:f},r.a.createElement("option",{value:""},"Seleccione un estado"),r.a.createElement("option",{value:"1"},"Activo"),r.a.createElement("option",{value:"2"},"Inactivo"))),r.a.createElement("div",{className:"col-sm-3"}),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"button",onClick:function(){c(!1)},className:"btn btn-warning"}," Cancelar")),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success"}," ",t.tipo_sangreId>0?"Actualizar":"Registrar")))))))},k=a(81),C=function(){var e=Object(v.d)((function(e){return e})),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],f=a[1],E=Object(n.useState)(!0),j=Object(l.a)(E,2),x=j[0],y=j[1],N=Object(n.useState)(!1),C=Object(l.a)(N,2),T=C[0],_=C[1],A=Object(n.useState)([]),M=Object(l.a)(A,2),z=M[0],B=M[1],D={tipo_sangreId:"",descripcion:"",estadoId:1},F=Object(n.useState)(D),G=Object(l.a)(F,2),q=G[0],H=G[1],J=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.find((function(e){return 3===e.accesoId}))){e.next=6;break}return y(!0),e.next=4,Object(O.a)("tiposangre?estadoId=1;2");case 4:(t=e.sent)&&B(t);case 6:y(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){if(null===e||void 0===e?void 0:e.accesos){var t=e.accesos.filter((function(e){return 6===e.menuId}));f(t)}y(!1)}()}),[]),Object(n.useEffect)((function(){J()}),[c]),r.a.createElement(h.a,null,r.a.createElement(s.a,{className:"btn-page"},r.a.createElement(u.a,{sm:12},r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,r.a.createElement(m.a.Title,{as:"h5"},"Tipos de Sangre")),r.a.createElement(m.a.Body,null,!0===x?r.a.createElement(S.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"align-items-center m-l-0"},r.a.createElement(u.a,null),r.a.createElement(u.a,{className:"text-right"},c.find((function(e){return 1===e.accesoId}))&&r.a.createElement(d.a,{variant:"success",className:"btn-sm btn-round has-ripple",onClick:function(){_(!0),H(D)}},r.a.createElement("i",{className:"feather icon-plus"})," Agregar Tipo de Sangre"))),c.find((function(e){return 3===e.accesoId}))?r.a.createElement(p.a,{striped:!0,hover:!0,responsive:!0,bordered:!0,id:"mytable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"C\xf3digo"),r.a.createElement("th",null,"Descripci\xf3n"),r.a.createElement("th",null,"Estado"),c.find((function(e){return 2===e.accesoId||4===e.accesoId}))&&r.a.createElement("th",null))),r.a.createElement("tbody",null,z.map((function(e){var t=e.tipo_sangreId,a=e.descripcion,n=e.Estado.descripcion;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),c.find((function(e){return 2===e.accesoId||4===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},c.find((function(e){return 2===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-info btn-sm",onClick:function(){!function(e){var t=z.find((function(t){return t.tipo_sangreId===e})),a=t.tipo_sangreId,n=t.descripcion,r=t.estadoId;H({tipo_sangreId:a,descripcion:n,estadoId:r}),_(!0)}(t)}},r.a.createElement("i",{className:"feather icon-edit"})),c.find((function(e){return 4===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-danger btn-sm",onClick:function(){var e;e=t,g()(b.a).fire({title:"Alerta?",text:"Esta seguro que desea eliminar el elemento",type:"warning",showCloseButton:!0,showCancelButton:!0}).then(function(){var t=Object(i.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.value){t.next=8;break}return t.next=4,Object(O.a)("tiposangre/".concat(e),{method:"DELETE"});case 4:(n=t.sent)&&(Object(I.b)(n),r=z.filter((function(t){return t.tipo_sangreId!==e})),B(r)),t.next=9;break;case 8:Object(I.c)("No se elimin\xf3 ning\xfan elemento");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},r.a.createElement("i",{className:"feather icon-trash-2"}))))})))):r.a.createElement(k.a,null)),!0===T&&r.a.createElement(w,{abrirModal:T,setAbrirModal:_,GetTipoSangre:J,dataInicial:q}))))))};t.default=function(){return r.a.createElement(C,null)}},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),c=a(71),o=a(21),i=a(426),l=a(14),s=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"danger"},r.a.createElement(i.a.Heading,{as:"h4"},"Informaci\xf3n!"),r.a.createElement("p",null,"No esta autorizado para poder visualizar los elementos"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Comuniquese con el administrador para la asignaci\xf3n de permisos")))))}}}]);
//# sourceMappingURL=28.e5d862a3.chunk.js.map