module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols= {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre_usuario : {
            type : dataTypes.STRING(100)
        },
        email:{
            type : dataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        contra:{
            type : dataTypes.STRING(30)
        },
        fecha:{
            type : dataTypes.DATE
        },
        dni:{
            type : dataTypes.INTEGER
        },
        foto_perfil : {
            type : dataTypes.STRING(400)
        }
        
    };
    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored: false
    };

    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        });
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        });
    }
    return Usuario;
}