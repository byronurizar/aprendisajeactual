module.exports = (sequelize, type) => {
    return sequelize.define(
        "carrera_pensum",
        {
            carrera_pensumId: {
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
            pensumId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_pensum",
                    key: "pensumId",
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
