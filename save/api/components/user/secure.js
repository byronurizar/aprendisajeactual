const auth=require('../../../auth');

module.exports=checkAuth=function checkAuth(action){

    function middleware(req,res,next){
            switch(action){
                case 'update':
                    //Codigo
                    const owner=req.body.id;
                    console.log({owner});
                    auth.check.own(req,owner)
                    next(); //Seria la siguiente funcion a ejecutar
                        break;
                default:
                    next();
            }
    }
    return middleware;
}
