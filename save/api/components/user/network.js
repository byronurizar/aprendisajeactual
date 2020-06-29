const express=require('express');

const secure=require('./secure');
const response=require('../../../network/response');
const Controller=require('./index');
const router=express.Router();

//Routes
router.get('/',list);
router.post('/follow/:id',secure('follow'),follow);
router.get('/:id',get);
router.post('/',upsert);
router.put('/',secure('update'),upsert);
router.get('/following/:id',following);

function list(req, res,next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
        //Lo quitamos porque utilizaremos el middelware
        // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
    
}

function get(req, res,next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
        // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
    
}

function upsert(req, res,next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
        // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
    
}

function follow(req,res,next){
    //Asta este momenot ya tenemos en el request la información descifrada el token, esto se hizo en la parte de secure
    Controller.follow(req.user.data.id,req.params.id)
        .then((data)=>{
            response.success(req,res,data,201);
        })
        .catch(next);
}

function following(req,res,next){
    Controller.follwoing(req.params.id)
        .then((data)=>{
            response.success(req,res,data,201);
        })
        .catch(next);
}


module.exports=router;
