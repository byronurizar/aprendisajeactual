module.exports = (sequelize, type) => {
    return sequelize.define(
        "cat_estado",
        {
            estadoId: {
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
            activo: {
                type: type.BOOLEAN,
                allowNull: false,
                defaultValue: true,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};
