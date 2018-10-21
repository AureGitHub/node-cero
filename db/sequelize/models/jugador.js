module.exports = function (sequelize, DataTypes) {
    var jugador = sequelize.define('jugador', {
        usuario: DataTypes.STRING,
        nombre: DataTypes.STRING,
        correo_externo: DataTypes.STRING,
        password: DataTypes.STRING,
        id_tipo_jugador: DataTypes.INTEGER,
        id_tipo_estado_jugador: DataTypes.INTEGER
    },
    {
        associate: function(models) {
            jugador.belongsTo(models.tipo_jugador,{foreignKey: 'id_tipo_jugador', targetKey: 'id'});
            jugador.belongsTo(models.tipo_estado_jugador,{foreignKey: 'id_tipo_estado_jugador', targetKey: 'id'});
            
        }

    }
    );

    return jugador;
}