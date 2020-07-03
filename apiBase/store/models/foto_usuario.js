module.exports = (sequelize, type) => {
    return sequelize.define(
        "foto_usuario",
        {
            foto_usuarioId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usuarioId: {
                type: type.INTEGER,
                references: {
                    model: "usuario",
                    key: "usuarioId",
                }
            },
            foto: {
                type: type.BLOB,
                allowNull: false
            },
            descripcion: {
                type: type.STRING(300)
            },
            usuario_crea: {
                type: type.INTEGER
            },
            fecha_crea: {
                type: type.DATEONLY,
                allowNull: false,
                defaultValue: type.NOW
            },
            usuario_ult_mod: {
                type: type.INTEGER
            },
            fecha_ult_mod: {
                type: type.DATE
            },
            estadoId: {
                type: type.INTEGER,
                allowNull: false,
                defaultValue: 1,
                references: {
                    model: "cat_estado",
                    key: "estadoId",
                }
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};
