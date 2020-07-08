const { Usuario,bd } = require('../../../store/db');
const bcrypt = require('bcrypt');
const auth = require('../../../auth');
let response = {};
const { QueryTypes } = require('sequelize');
const { resolve } = require('path');



const login = async (req) => {
    const user = await Usuario.findOne({ where: { user_name: req.body.user_name } });

    if (!user) {
        response.code = -1;
        response.data = "Credenciales inválidas";
        return response;
    }
    let comparar=await  bcrypt.compareSync(req.body.password, user.password)
    
            if (comparar) {
                const { usuarioId } = user;

             let permisos=await bd.query(`select b.menuId as id,b.accesoId as action from rol_menu_acceso a 
                inner join menu_acceso b
                on a.menu_accesoId=b.menu_accesoId and a.estadoId=1 and b.estadoId=1
                inner join usuario_rol c
                on a.rolId=c.rolId and c.estadoId=1
                where c.usuarioId=${usuarioId};`, {
                    type: QueryTypes.SELECT
                  });

                  const data={
                    usuarioId,
                    actions:permisos
                };
                response.code = 0;
                response.data = auth.sign(data);
                console.log({response});

                return response;


                
            }
            else {
                response.code = -1;
                response.data = 'Usuario y contraseña incorrectos';
                return response;
            }
}

module.exports = {
    login
}