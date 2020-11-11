module.exports = (sequelize, type) => {
    return sequelize.define(
        "inscripcion",
        {
            inscripcionId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            persona_alumnoId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "persona",
                    key: "personaId",
                }
            },
            persona_responsable: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "persona",
                    key: "personaId",
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
            ciclo_escolarId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_ciclo_escolar",
                    key: "ciclo_escolarId",
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
