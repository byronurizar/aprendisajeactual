module.exports = (sequelize, type) => {
    return sequelize.define(
        "cat_acceso",
        {
            accesoId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            descripcion: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
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
