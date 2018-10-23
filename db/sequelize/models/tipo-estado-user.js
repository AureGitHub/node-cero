module.exports = function(sequelize, DataTypes) {
    var tipo_estado_user = sequelize.define('tipo_estado_user', {
        descripcion: DataTypes.STRING        
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
      }
    );

    return tipo_estado_user;
}