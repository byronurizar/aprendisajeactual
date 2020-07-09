const express=require('express');
const bodyParser=require('body-parser');
require("../store/db");
const config=require('../config');
const errors=require('../network/errors');



const Estado=require('./components/estado/network');
const Municipio=require('./components/municipio/network');
const Pais=require('./components/pais/network');
const Departamento=require('./components/departamento/network');
const Genero=require('./components/genero/network');
const EstadoCivil=require('./components/estadocivil/network');
const TipoDocumento=require('./components/tipodocumento/network');
const TipoSangre=require('./components/tiposangre/network');
const TipoTelefono=require('./components/tipotelefono/network');
const Rol=require('./components/rol/network');
const Persona=require('./components/persona/network');
const DatoExtraPersona=require('./components/datoextrapersona/network');
const DireccionPersona=require('./components/direccionpersona/network');
const IdentificacionPersona=require('./components/identificacionpersona/network');
const TelefonoPersona=require('./components/telefonopersona/network');
const UsuarioRol=require('./components/usuariorol/network');
const Usuario=require('./components/usuario/network');
const Auth=require('./components/auth/network');
const passport = require('passport');

//Estratgia de json web token
require('../auth/strategies/jwt');


//Midelware para validar permisos
const validacionPermisos=require('../auth/middleware/permisos');
const app=express();
app.use(bodyParser.json());

app.use('/api/estado',passport.authenticate('jwt',{session:false}),Estado);
app.use('/api/municipio',passport.authenticate('jwt',{session:false}),Municipio);
app.use('/api/pais',Pais);
app.use('/api/departamento',Departamento);
app.use('/api/estadocivil',EstadoCivil);
app.use('/api/tipodocumento',TipoDocumento);
app.use('/api/tiposangre',TipoSangre);
app.use('/api/tipotelefono',TipoTelefono);
app.use('/api/genero',passport.authenticate('jwt',{session:false}),Genero);
app.use('/api/rol',passport.authenticate('jwt',{session:false}),Rol);
app.use('/api/persona',Persona);
app.use('/api/persona/datoextra',DatoExtraPersona);
app.use('/api/persona/direccion',DireccionPersona);
app.use('/api/persona/identificacion',IdentificacionPersona);
app.use('/api/persona/telefono',TelefonoPersona);
app.use('/api/usuario',passport.authenticate('jwt',{session:false}),Usuario);
app.use('/api/usuario/rol',UsuarioRol);
app.use('/api/auth',Auth);


//Es muy importante que sea el ultimo middelware
app.use(errors);

app.listen(config.api.port,()=>{
    console.log('Api escuchando en el puerto ',config.api.port);
});


/*
let response = {};
response.code = 0; "0 registro exitoso"|"-1 Alerta"|"-2 Error"
response.message ="";
*/