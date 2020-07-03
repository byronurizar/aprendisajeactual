const { BitacoraCambios } = require('../store/db');
const config = require('../config');
const registrarBitacora = async (tabla, modificadoId, dataAnterior, dataNueva) => {
    if (config.api.bitacora_cambios) {
        try {
            let keys = Object.keys(dataNueva);
            keys.map(async(campo)=>{
                let valor_anterior = dataAnterior[campo];
                let valor_nuevo = dataNueva[campo];
               
                if (valor_anterior != valor_nuevo) {
                    let tipo_dato = typeof (valor_anterior);
                    let data = {
                        tabla,
                        campo,
                        modificadoId,
                        tipo_dato,
                        valor_anterior,
                        valor_nuevo
                    }
                    resultado = await BitacoraCambios.create(data);
                }
            });
           
        } catch (error) {
            console.log("Ocurrio un error al registrar la bitacora", error);
        }
    }
}

module.exports = {
    registrarBitacora
}