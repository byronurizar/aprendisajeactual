const { Estado, bd,BitacoraCambios } = require('../../../store/db');
const { QueryTypes } = require('sequelize');
const {registrarBitacora}=require('../../../utils/bitacora_cambios');

const get = async () => {
    const estados = await bd.query("SELECT * from cat_estado", {
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

    let a= await registrarBitacora('cat_estado',estadoId,infoAnterior.dataValues,req.body);

        // let dataActual=infoAnterior.dataValues;
        // // let options=dataActual.cat_estado._options;
        // // console.log({options});
        // console.log({dataActual:infoAnterior});
        // let dataNueva=req.body;
        // let keys=Object.keys(dataActual);
        // // let keys2=Object.keys(dataNueva);
        // let tabla='cat_estado';
        // let modificadoId=estadoId;
        // for(let campo of keys){
        //     let valor_anterior=dataActual[campo];
        //     let valor_nuevo=dataNueva[campo];
        //     if(valor_anterior!=valor_nuevo){
        //         console.log({dato:valor_anterior});
        //         let tipoDato=typeof(valor_anterior);
        //         console.log({tipoDato});
        //         let data={
        //             tabla,
        //             campo,
        //             modificadoId,
        //             valor_anterior,
        //             valor_nuevo
        //         }
        //         const estado = await BitacoraCambios.create(data);
        //         // console.log({estado});
        //         console.log('La información cambio');
        //     }
        // }
        return a;
        return 'Estado Actualizado exitosamente';
    }
   // return estado;
};
module.exports = {
    get,
    insert,
    update
}