const express=require('express');
const bodyParser=require('body-parser');
require("../store/db");
const config=require('../config');
const errors=require('../network/errors');



const Estado=require('./components/estado/network');
const Municipio=require('./components/Municipio/network');
const Departamento=require('./components/Departamento/network');
const Genero=require('./components/Genero/network');
const Rol=require('./components/rol/network');
const Usuario=require('./components/usuario/network');
const Auth=require('./components/auth/network');
const passport = require('passport');

//Estratgia de json web token
require('../auth/strategies/jwt');


//Midelware para validar permisos
const validacionPermisos=require('../auth/middleware/permisos');
const app=express();
app.use(bodyParser.json());

app.use('/api/estado',Estado);
app.use('/api/municipio',Municipio);
app.use('/api/departamento',Departamento);
app.use('/api/genero',passport.authenticate('jwt',{session:false}),Genero);
app.use('/api/rol',passport.authenticate('jwt',{session:false}),Rol);
// app.use('/api/usuario',Usuario);
app.use('/api/usuario',passport.authenticate('jwt',{session:false}),Usuario);
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