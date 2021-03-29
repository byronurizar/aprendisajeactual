module.exports = (sequelize, type) => {
    return sequelize.define(
        "bitacora_peticion",
        {
            bitacora_peticionId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            baseUrl: {
                type: type.STRING(200)
            },
            method: {
                type: type.STRING(20)
            },
            request: {
                type: type.STRING(4000)
            },
            response: {
                type: type.STRING(4000)
            },
            status: {
                type: type.INTEGER
            },
            error: {
                type: type.BOOLEAN
            },
            usuario_crea: {
                type: type.INTEGER
            },
            fecha_crea: {
                type: type.DATE,
                allowNull: false,
                defaultValue: type.NOW
            },
            ip_origen: {
                type: type.STRING(50)
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};
