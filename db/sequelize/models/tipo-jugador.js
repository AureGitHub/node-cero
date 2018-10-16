module.exports = function(sequelize, DataTypes) {
    var tipo_jugador = sequelize.define('tipo_jugador', {
        descripcion: DataTypes.STRING        
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
      }
    );

    return tipo_jugador;
}