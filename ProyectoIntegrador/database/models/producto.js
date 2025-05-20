module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    let cols= {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        usuario_id : {
            type : dataTypes.INTEGER
        },
        nombre_archivo_imagen : {
            type : dataTypes.STRING(400)
        },
        nombre_producto : {
            type : dataTypes.STRING(100)
        },
        descripcion:{
            type : dataTypes.STRING
        }
    };
    let config = {
        tableName : "productos",
        timestamps : true,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "productos_id"
        });
    }
    return Producto;
}