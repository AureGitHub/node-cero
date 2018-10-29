var enumProfile = require('../../../configuracion/enum').enumProfile;

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
        usuario: DataTypes.STRING,
        nombre: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        id_tipo_user: DataTypes.INTEGER,
        id_tipo_estado_user: DataTypes.INTEGER
    },
    {
        associate: function(models) {
            user.belongsTo(models.tipo_user,{foreignKey: 'id_tipo_user', targetKey: 'id'});
            user.belongsTo(models.tipo_estado_user,{foreignKey: 'id_tipo_estado_user', targetKey: 'id'});
            
        },
        permission : {
            GET : [enumProfile.all],
            POST : [enumProfile.Admin],
            PUT: [enumProfile.all],
            DELETE : [enumProfile.Admin,enumProfile.public]
        }

    }
    );

    return user;
}