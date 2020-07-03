const { Rol } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const { Op, json, JSON } = require("sequelize");

const Modelo = Rol;
const tabla = 'cat_rol';

const insert = async (req) => {
    const result = await Modelo.create(req.body);
    return result;
}

const get = async (req) => {
    let result;
    
    let parametro = req.params.query;
    parametro=parametro.replace("[","").replace("]","");
    parametro=parametro.replace("[","").replace("]","");
    let de=parametro.indexOf('||');
    if(de>0){
        console.log({de});
        let pam=parametro.substring(0,de);
        console.log(pam);
        let operador=pam.indexOf('=');
        console.log(pam.substring(operador,operador+1));
        let equ=new Array();
        
        console.log({obj});
        let nuevoQuery={
            [Op.or]:[]
        }
    
    }
    
    console.log({parametro});
    const query = { [Op.or]: [{ rolId: { [Op.gt]: 0 } }, { estadoId: 1 }] };
    if (req.params.query) {
        //let id=req.params.id;
        result = await Modelo.findAll({ where: query });
    } else {
        result = await Modelo.findAll();
    }
    return result;
}

const update = async (req) => {
    const { rolId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { rolId }
    });

    const resultado = await Modelo.update(req.body, {
        where: {
            rolId
        }
    });
    if (resultado > 0) {
        await registrarBitacora(tabla, rolId, dataAnterior.dataValues, req.body);
        return 'Información Actualizado exitosamente';
    } else {
        return 'No existen cambios para aplicar';
    }

};
module.exports = {
    get,
    insert,
    update
}