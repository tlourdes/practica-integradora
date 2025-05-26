const data = require("../database/models");
const op  = data.Sequelize.Op;
const Producto = data.Producto;
const Usuario = data.Usuario;

const perfilController ={
    perfil: function(req, res){
        Usuario.findByPk(req.params.id, {
            include: [
                {association: "productos", // te da los productos publicados por el usuario
                    include: [{ association: "comentarios" }] //para ver la cantidad de comentarios hechos en el producto
                } 
            ],
         })
        .then(function(resultados)  {

            //return res.send(resultados)
        return res.render("perfil", {perfil: resultados} )
    })
        .catch(function(error) {
        return res.send(error);
      });
    },
        
       
    }


module.exports = perfilController