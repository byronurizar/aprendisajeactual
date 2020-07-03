const express=require('express');
const bodyParser=require('body-parser');
require("../store/db");
const config=require('../config');
const errors=require('../network/errors');


const Estado=require('./components/estado/network');
const Rol=require('./components/rol/network');


const app=express();
app.use(bodyParser.json());

app.use('/api/estado',Estado);
app.use('/api/rol',Rol);

//Es muy importante que sea el ultimo middelware
app.use(errors);

app.listen(config.api.port,()=>{
    console.log('Api escuchando en el puerto ',config.api.port);
})


/*
let response = {};
response.code = 0; "0 registro exitoso"|"-1 Alerta"|"-2 Error"
response.message ="";
*/