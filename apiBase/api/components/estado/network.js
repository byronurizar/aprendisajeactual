const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');
const router = express.Router();

const prueba = (req, res) => {
    try {
        response.success(req, res, 'Prueba', 200);
    } catch (err) {
        response.error(req, res, 'Prueba', 500);
    }
};

const post = (req, res, next) => {
    controller.insert(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

const put = (req, res, next) => {
    controller.update(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}
const get=(req,res,next)=>{
    controller.get()
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(next);
}


router.get('/', prueba);
router.get('/demo', get);
router.post('/',post);
router.put('/',put);

module.exports = router;