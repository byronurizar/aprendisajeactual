module.exports = (sequelize, type) => {
    return sequelize.define(
        "grado_seccion",
        {
            grado_seccionId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            carreraId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_carrera",
                    key: "carreraId",
                }
            },
            gradoId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_grado",
                    key: "gradoId",
                }
            },
            seccionId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_seccion",
                    key: "seccionId",
                }
            },
            usuario_crea: {
                type: type.INTEGER
            },
            fecha_crea: {
                type: type.DATE,
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
