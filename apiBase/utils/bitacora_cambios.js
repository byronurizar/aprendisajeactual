const { BitacoraCambios } = require('../store/db');

const registrarBitacora = async (tabla, modificadoId, dataAnterior, dataNueva) => {
    try {
        let keys = Object.keys(dataAnterior);
        for (let campo of keys) {
            let valor_anterior = dataAnterior[campo];
            let valor_nuevo = dataNueva[campo];
            if (valor_anterior != valor_nuevo) {
                let tipo_dato=typeof(valor_anterior);
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
        }
    } catch (error) {
        console.log("Ocurrio un error al registrar la bitacora", error);
    }
}

module.exports = {
    registrarBitacora
}