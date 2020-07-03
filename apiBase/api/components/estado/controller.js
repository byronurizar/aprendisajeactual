const { Estado, bd,BitacoraCambios } = require('../../../store/db');
const { QueryTypes } = require('sequelize');
const {registrarBitacora}=require('../../../utils/bitacora_cambios');

const get = async () => {
    const estados = await bd.query("SELECT a.descripcion as Genero,b.descripcion as Estado from cat_genero a inner join cat_estado b on a.estadoId=b.estadoId", {
        type: QueryTypes.SELECT
    });
    return estados;
}
const insert = async (req) => {
    const estado = await Estado.create(req.body);
    return estado;
}

const update = async (req) => {
    const { estadoId } = req.body;
    const infoAnterior = await Estado.findOne({
        where: { estadoId }
    });

    const resultado = await Estado.update(req.body, {
        where: {
            estadoId
        }
    });
    if(resultado>0){
        await registrarBitacora('cat_estado',estadoId,infoAnterior.dataValues,req.body);
        return 'Estado Actualizado exitosamente';
    }else{
        return 'No existen cambios para aplicar';
    }
   
};
module.exports = {
    get,
    insert,
    update
}