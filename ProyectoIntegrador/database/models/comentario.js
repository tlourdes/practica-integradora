module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols= {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        usuario_id : {
            type : dataTypes.INTEGER
        },
        productos_id : {
            type : dataTypes.INTEGER
        },
        comentario:{
            type : dataTypes.STRING
        }
    };
    let config = {
        tableName : "comentarios",
        timestamps : true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "productos_id"
        });
    }
    return Comentario;
}