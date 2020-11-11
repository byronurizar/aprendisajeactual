module.exports = (sequelize, type) => {
    return sequelize.define(
        "inscripcion_detalle",
        {
            inscripcion_detalleId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            inscripcionId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "inscripcion",
                    key: "inscripcionId",
                }
            },
            cursoId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_curso",
                    key: "cursoId",
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
