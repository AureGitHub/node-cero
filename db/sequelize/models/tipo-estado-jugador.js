module.exports = function(sequelize, DataTypes) {
    var tipo_estado_jugador = sequelize.define('tipo_estado_jugador', {
        descripcion: DataTypes.STRING        
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
      }
    );

    return tipo_estado_jugador;
}