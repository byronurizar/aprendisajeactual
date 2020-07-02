module.exports = (sequelize, type) => {
    return sequelize.define(
        "cat_municipio",
        {
            municipioId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            departamentoId: {
                type: type.INTEGER,
                references: {
                    model: "cat_departamento",
                    key: "departamentoId",
                }
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
