(this.webpackJsonpapibase=this.webpackJsonpapibase||[]).push([[21],{376:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(10),i=a(13),u=a(71),s=a(21),m=a(261),d=a(286),f=a(427),p=a(89),b=a.n(p),E=a(22),h=a(90),I=a.n(h),v=a(14),g=a(15),O=a(9),j=a(428),x=a(26),y=a(11),w=a(29),C=a(23),N=a(18),k=function(e){var t=e.dataInicial,a=e.abrirModal,c=e.setAbrirModal,u=e.catMenu,m=e.GetCatMenu,d=Object(E.c)(),f=Object(n.useState)(!1),p=Object(i.a)(f,2),b=p[0],h=p[1],I=Object(C.a)(t),v=Object(i.a)(I,2),k=v[0],M=v[1],A=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("menu",{method:"POST",body:JSON.stringify(k)});case 2:e.sent&&(Object(O.b)("Menu registrado exitosamente"),m(),c(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("menu",{method:"PUT",body:JSON.stringify(k)});case 2:(t=e.sent)&&(Object(O.b)(t),d(Object(w.a)()),m()),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),h(!0),!(t.menuId>0)){e.next=7;break}return e.next=5,S();case 5:e.next=9;break;case 7:return e.next=9,A();case 9:h(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_="Campo obligatorio";return r.a.createElement(j.a,{show:a,onHide:function(){return c(!1)},size:"xl"},!0===b?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,{as:"h5"},t.menuId>0?"Actualizar Menu":"Nuevo Menu")),r.a.createElement(j.a.Body,null,r.a.createElement(y.ValidationForm,{onSubmit:T,onErrorSubmit:function(e,t,a){Object(O.c)("Por favor complete toda la informaci\xf3n solicitada por el formulario")}},r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"descripcion"},"Descripci\xf3n"),r.a.createElement(y.TextInput,{name:"descripcion",id:"descripcion",required:!0,value:k.descripcion,onChange:M,errorMessage:_,placeholder:"Descripci\xf3n",autoComplete:"off",style:{textTransform:"capitalize"},type:"text"})),r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"posicion"},"Posici\xf3n"),r.a.createElement(y.TextInput,{name:"posicion",id:"posicion",required:!0,value:k.posicion,onChange:M,errorMessage:_,placeholder:"Posici\xf3n",autoComplete:"off",type:"number"}))),r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"classes"},"Classes"),r.a.createElement(y.TextInput,{name:"classes",id:"classes",required:!0,value:k.classes,onChange:M,errorMessage:_,placeholder:"Classes",autoComplete:"off",type:"text"})),r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"type"},"Tipo"),r.a.createElement(y.TextInput,{name:"type",id:"type",required:!0,value:k.type,onChange:M,errorMessage:_,placeholder:"Tipo",autoComplete:"off",type:"text"}))),r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"href"},"Href"),r.a.createElement(y.TextInput,{name:"href",id:"href",value:k.href,onChange:M,errorMessage:_,placeholder:"Href",autoComplete:"off",style:{textTransform:"lowercase"},type:"text"})),r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"icono"},"Icono"),r.a.createElement(y.TextInput,{name:"icono",id:"icono",value:k.icono,onChange:M,errorMessage:_,placeholder:"Icono",autoComplete:"off",style:{textTransform:"lowercase"},type:"text"}))),r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"menu_padreId"},"Padre"),r.a.createElement(y.SelectGroup,{name:"menu_padreId",id:"menu_padreId",value:k.menu_padreId,errorMessage:_,onChange:M},r.a.createElement("option",{value:"0"},"Seleccione un menu"),u.map((function(e){var t=e.menuId,a=e.descripcion;return r.a.createElement("option",{value:t,key:t},a)})))),r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"visible"},"Visible"),r.a.createElement(y.SelectGroup,{name:"visible",id:"visible",value:k.visible,required:!0,errorMessage:_,onChange:M},r.a.createElement("option",{value:""},"Seleccione"),r.a.createElement("option",{value:"1"},"Si"),r.a.createElement("option",{value:"0"},"No")))),r.a.createElement(x.a.Row,null,t.menuId>0&&r.a.createElement(x.a.Group,{as:s.a,md:"6"},r.a.createElement(x.a.Label,{htmlFor:"estadoId"},"Estado"),r.a.createElement(y.SelectGroup,{name:"estadoId",id:"estadoId",value:k.estadoId,required:!0,errorMessage:_,onChange:M},r.a.createElement("option",{value:""},"Seleccione un estado"),r.a.createElement("option",{value:"1"},"Activo"),r.a.createElement("option",{value:"2"},"Inactivo")))),r.a.createElement(x.a.Row,null,r.a.createElement("div",{className:"col-sm-3"}),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"button",onClick:function(){c(!1)},className:"btn btn-warning"}," Cancelar")),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success"}," ",t.menuId>0?"Actualizar":"Registrar")))))))},M=a(81),A=function(e){var t=e.menuId,a=e.abrirModal,c=e.setAbrirModal,u=e.catAcceso,s=Object(E.d)((function(e){return e})),m=Object(E.c)(),d=Object(n.useState)(!0),p=Object(i.a)(d,2),b=p[0],h=p[1],I=Object(n.useState)([]),v=Object(i.a)(I,2),y=v[0],C=v[1],k=Object(n.useState)([]),A=Object(i.a)(k,2),S=A[0],T=A[1],_=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("menuacceso",{method:"POST",body:JSON.stringify(a)});case 2:e.sent&&(Object(O.b)("Acceso asignado exitosamente"),m(Object(w.a)()),G(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("menuacceso",{method:"PUT",body:JSON.stringify(a)});case 2:(n=e.sent)&&(Object(O.b)(n),m(Object(w.a)()),G(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(a,n,r){var c,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(!0),0!==a){e.next=7;break}return c={menuId:t,accesoId:n,estadoId:1},e.next=5,_(c);case 5:e.next=13;break;case 7:if(!(a>0)){e.next=13;break}return l=3,1===r?l=2:2===r&&(l=1),i={menu_accesoId:a,accesoId:n,estadoId:l},e.next=13,F(i);case 13:h(!1);case 14:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.find((function(e){return 19===e.menuId&&3===e.accesoId}))){e.next=6;break}return h(!0),e.next=4,Object(g.a)("menuacceso?menuId=".concat(t,"&estadoId=1;2"));case 4:(a=e.sent)&&T(a);case 6:h(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){if(null===s||void 0===s?void 0:s.accesos){var e=s.accesos.filter((function(e){return 19===e.menuId}));C(e)}h(!1)}()}),[]),Object(n.useEffect)((function(){G(t)}),[t,y]),r.a.createElement(j.a,{show:a,onHide:function(){return c(!1)},size:"lg"},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,{as:"h5"},"Acciones")),r.a.createElement(j.a.Body,null,!0===b?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,y.find((function(e){return 19===e.menuId&&3===e.accesoId}))?r.a.createElement(f.a,{striped:!0,hover:!0,responsive:!0,bordered:!0,id:"mytable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Codigo acceso"),r.a.createElement("th",null,"Acceso"),(y.find((function(e){return 19===e.menuId&&1===e.accesoId}))||y.find((function(e){return 19===e.menuId&&2===e.accesoId})))&&r.a.createElement("th",null,"Estado"))),r.a.createElement("tbody",null,u.map((function(e){var t=e.accesoId,a=e.descripcion,n=S.find((function(e){return e.accesoId===t})),c=!1,o=!!n&&n,l=o.menu_accesoId,i=void 0===l?0:l,u=o.estadoId,s=void 0===u?0:u;return 1===s&&(c=!0),(y.find((function(e){return 19===e.menuId&&1===e.accesoId}))||c||i>0)&&r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),1===s||2===s?r.a.createElement(r.a.Fragment,null,y.find((function(e){return 19===e.menuId&&2===e.accesoId}))?r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement(x.a.Group,null,r.a.createElement("div",{className:"switch switch-alternative d-inline m-r-10"},r.a.createElement(x.a.Control,{type:"checkbox",id:"accesoid_".concat(t),checked:c,onChange:function(){L(i,t,s)}}),r.a.createElement(x.a.Label,{htmlFor:"accesoid_".concat(t),className:"cr"})),r.a.createElement(x.a.Label,{htmlFor:"accesoid_".concat(t)},c?"Activo":"Inactivo"))):y.find((function(e){return 19===e.menuId&&1===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("label",{className:"text-danger"},"No Autorizado"))):r.a.createElement(r.a.Fragment,null,y.find((function(e){return 19===e.menuId&&1===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement(x.a.Group,null,r.a.createElement("div",{className:"switch switch-alternative d-inline m-r-10"},r.a.createElement(x.a.Control,{type:"checkbox",id:"accesoid_".concat(t),checked:c,onChange:function(){L(i,t,s)}}),r.a.createElement(x.a.Label,{htmlFor:"accesoid_".concat(t),className:"cr"})),r.a.createElement(x.a.Label,{htmlFor:"accesoid_".concat(t)},"Asignar acceso a menu")))))})))):r.a.createElement(M.a,null))))},S=a(91),T=function(){var e=Object(E.d)((function(e){return e})),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],p=a[1],h=Object(E.c)(),j=Object(n.useState)([]),x=Object(i.a)(j,2),y=x[0],C=x[1],T=Object(n.useState)(!1),_=Object(i.a)(T,2),F=_[0],L=_[1],G=Object(n.useState)(!1),z=Object(i.a)(G,2),P=z[0],D=z[1],H=Object(n.useState)([]),R=Object(i.a)(H,2),q=R[0],B=R[1],J=Object(n.useState)([]),U=Object(i.a)(J,2),V=U[0],W=U[1],X={menuId:"",posicion:"",descripcion:"",href:"",visible:"",classes:"",type:"",icono:"",menu_padreId:0,estadoId:1},K=Object(n.useState)(X),Q=Object(i.a)(K,2),Y=Q[0],Z=Q[1],$=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.find((function(e){return 21===e.menuId&&3===e.accesoId}))){e.next=7;break}return Object(S.b)("#mytable"),p(!0),e.next=5,Object(g.a)("menu?estadoId=1;2");case 5:(t=e.sent)&&B(t);case 7:p(!1),Object(S.a)("#mytable");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.find((function(e){return 1===e.menuId&&3===e.accesoId}))){e.next=5;break}return e.next=3,Object(g.a)("acceso?estadoId=1");case 3:(t=e.sent)&&W(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){if(null===e||void 0===e?void 0:e.accesos){var t=e.accesos.filter((function(e){return 21===e.menuId||1===e.menuId}));C(t)}p(!1)}()}),[]),Object(n.useEffect)((function(){$(),ee()}),[y]),r.a.createElement(v.a,null,r.a.createElement(u.a,{className:"btn-page"},r.a.createElement(s.a,{sm:12},r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,r.a.createElement(m.a.Title,{as:"h5"},"Menu")),r.a.createElement(m.a.Body,null,!0===c?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"align-items-center m-l-0"},r.a.createElement(s.a,null),r.a.createElement(s.a,{className:"text-right"},y.find((function(e){return 21===e.menuId&&1===e.accesoId}))&&r.a.createElement(d.a,{variant:"success",className:"btn-sm btn-round has-ripple",onClick:function(){L(!0),Z(X)}},r.a.createElement("i",{className:"feather icon-plus"})," Agregar Menu"))),y.find((function(e){return 21===e.menuId&&3===e.accesoId}))?r.a.createElement(f.a,{striped:!0,hover:!0,responsive:!0,bordered:!0,id:"mytable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"C\xf3digo"),r.a.createElement("th",null,"Descripci\xf3n"),r.a.createElement("th",null,"Posici\xf3n"),r.a.createElement("th",null,"Href"),r.a.createElement("th",null,"Icono"),r.a.createElement("th",null,"Menu Padre"),r.a.createElement("th",null,"Estado"),y.find((function(e){return 1===e.menuId&&3===e.accesoId}))&&r.a.createElement("th",null,"Acciones"),y.find((function(e){return 21===e.menuId&&2===e.accesoId||21===e.menuId&&4===e.accesoId}))&&r.a.createElement("th",null))),r.a.createElement("tbody",null,q.map((function(e){var t=e.menuId,a=e.descripcion,n=e.posicion,c=e.href,i=e.icono,u=(e.menu_padreId,e.MenuPadre),s=e.Estado.descripcion,m=(!!u&&u).descripcion,d=void 0===m?"":m;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,i),r.a.createElement("td",null,d),r.a.createElement("td",null,s),y.find((function(e){return 1===e.menuId&&3===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("button",{className:"btn-icon btn btn-info btn-sm",onClick:function(){!function(e){var t=q.find((function(t){return t.menuId===e})),a=t.menuId,n=t.posicion,r=t.descripcion,c=t.href,o=t.icono,l=t.menu_padreId,i=t.estadoId;Z({menuId:a,posicion:n,descripcion:r,href:c,icono:o,menu_padreId:l,estadoId:i}),D(!0)}(t)}},r.a.createElement("i",{className:"feather icon-zap"}))),y.find((function(e){return 21===e.menuId&&2===e.accesoId||21===e.menuId&&4===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},y.find((function(e){return 21===e.menuId&&2===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-info btn-sm",onClick:function(){!function(e){var t=q.find((function(t){return t.menuId===e})),a=t.menuId,n=t.posicion,r=t.descripcion,c=t.href,o=t.icono,l=t.menu_padreId,i=t.estadoId,u=t.visible,s=t.classes,m=t.type;Z({menuId:a,posicion:n,descripcion:r,href:c,icono:o,visible:u,classes:s,type:m,menu_padreId:l,estadoId:i}),L(!0)}(t)}},r.a.createElement("i",{className:"feather icon-edit"})),y.find((function(e){return 21===e.menuId&&4===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-danger btn-sm",onClick:function(){!function(e){I()(b.a).fire({title:"Alerta?",text:"Esta seguro que desea eliminar el elemento",type:"warning",showCloseButton:!0,showCancelButton:!0}).then(function(){var t=Object(l.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.value){t.next=8;break}return"DELETE",t.next=4,Object(g.a)("menu/".concat(e),{method:"DELETE"});case 4:(n=t.sent)&&(Object(O.b)(n),h(Object(w.a)()),r=q.filter((function(t){return t.menuId!==e})),B(r)),t.next=9;break;case 8:Object(O.c)("No se elimin\xf3 ning\xfan elemento");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(t)}},r.a.createElement("i",{className:"feather icon-trash-2"}))))})))):r.a.createElement(M.a,null)),!0===F&&r.a.createElement(k,{abrirModal:F,setAbrirModal:L,GetCatMenu:$,catMenu:q,dataInicial:Y}),!0===P&&r.a.createElement(A,{abrirModal:P,setAbrirModal:D,catAcceso:V,menuId:Y.menuId}))))))};t.default=function(){return r.a.createElement(T,null)}},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),c=a(71),o=a(21),l=a(426),i=a(14),u=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,{variant:"danger"},r.a.createElement(l.a.Heading,{as:"h4"},"Informaci\xf3n!"),r.a.createElement("p",null,"No esta autorizado para poder visualizar los elementos"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Comuniquese con el administrador para la asignaci\xf3n de permisos")))))}},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(95),r=a.n(n);r.a.DataTable=a(109),a(113);var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;r()(e).DataTable({searching:!0,bLengthChange:!1,bAutoWidth:!1,lengthMenu:[[10,25,50,-1],[10,25,50,"Todos"]],displayLength:t,language:{processing:"Cargando informaci\xf3n",search:"Filtrar por:",lengthMenu:"Mostrar _MENU_ filas",info:"Vizualizaci\xf3n  _END_ de _TOTAL_ filas",infoEmpty:"Vizualizaci\xf3n del elemento 0 a 0 de 0 filas",infoFiltered:"(Filtrado de _MAX_ filas en total)",infoPostFix:"",loadingRecords:"Cargando...",zeroRecords:"No se logr\xf3 encontrar ninguna coincidencia",emptyTable:"No existen registros",paginate:{first:"Primera",previous:"Anterior",next:"Siguiente",last:"Ultima"},aria:{sortAscending:": active para ordenar la columna en orden ascendente",sortDescending:": active para ordenar la columna en orden descendente"}}})},o=function(e){r()(e).DataTable().destroy()}}}]);
//# sourceMappingURL=21.7dc75424.chunk.js.map