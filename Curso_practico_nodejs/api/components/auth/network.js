const express=require('express');

const response=require('../../../network/response');
const Controller=require('./index');
const router=express.Router();

router.post('/login',(req,res)=>{
    Controller.login(req.body.username,req.body.password)
        .then((token)=>{
            response.success(req,res,token,200);
        })
        .catch(error=>{
            console.log(error);
            response.error(req,res,'Información inválida',400);
        })
});

module.exports=router;

