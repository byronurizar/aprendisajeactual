module.exports = (sequelize, type) => {
    return sequelize.define(
        "pensum_curso",
        {
            pensum_cursoId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            pensumId: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cat_pensum",
                    key: "pensumId",
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
