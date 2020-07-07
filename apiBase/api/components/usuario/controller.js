const { Usuario } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const bcrypt = require('bcrypt')

const Modelo = Usuario;
const tabla = 'usuario';
let response = {};

const insert = async (req) => {
    const dataUsuario=req.body;
    const password=dataUsuario.password;
    dataUsuario.password= bcrypt.hashSync(password, 10);
    const result = await Modelo.create(dataUsuario);
    console.log({dataUsuario});
    response.code = 0;
    response.data = result;
    return response;
}

const list = async (req) => {
    if (!req.query.id && !req.query.estadoId) {
        response.code = 0;
        response.data = await Modelo.findAll();
        return response;
    }

    const { id, estadoId } = req.query;
    let query = {};
    if (estadoId) {
        let estados = estadoId.split(';');
        let arrayEstado = new Array();
        estados.map((item) => {
            arrayEstado.push(Number(item));
        });
        query.estadoId = arrayEstado;
    }

    if (!id) {
        response.code = 0;
        response.data = await Modelo.findAll({ where: query });
        return response;
    } else {
        if (Number(id) > 0) {
            query.usuarioId = Number(id);
            response.code = 0;
            response.data = await Modelo.findOne({ where: query });
            return response;
        } else {
            response.code = -1;
            response.data = "Debe de especificar un codigo";
            return response;
        }
    }
}

const update = async (req) => {
    const { usuarioId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { usuarioId }
    });


    if (dataAnterior) {
        const resultado = await Modelo.update(req.body, {
            where: {
                usuarioId
            }
        });
        if (resultado > 0) {
            await registrarBitacora(tabla, usuarioId, dataAnterior.dataValues, req.body);
            response.code = 0;
            response.data = "Información Actualizado exitosamente";
            return response;
        } else {
            response.code = -1;
            response.data = "No existen cambios para aplicar";
            return response;
        }
    } else {
        response.code = -1;
        response.data = "No existe información para actualizar con los parametros especificados";
        return response;
    }
};

module.exports = {
    list,
    insert,
    update
}