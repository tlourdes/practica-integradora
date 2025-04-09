const dato = require("../db/product")

const perfilController ={
    perfil: function(req, res){
        res.render("perfil" , {
            usuario : data.usuario,
            productos : data.productos,
        })
    }
}

module.exports = perfilController