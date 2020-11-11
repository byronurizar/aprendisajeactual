module.exports = (sequelize, type) => {
    return sequelize.define(
        "configuracion_curso",
        {
            configuracion_cursoId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            persona_catedraticoId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "persona",
                    key: "personaId",
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
            pensumId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_pensum",
                    key: "pensumId",
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
            cursoId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_curso",
                    key: "cursoId",
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
            salonId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_salon",
                    key: "salonId",
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
            horarioId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_horario",
                    key: "horarioId",
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
