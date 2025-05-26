const data = require("../database/models");
const op  = data.Sequelize.Op;
const Producto = data.Producto;
//const searchResultsController = require("./search-resultsController")
const productosController ={
        products: function (req, res) {
          data.Producto.findAll({
            include: [
              { association: "usuario" },
              { association: "comentarios" }
            ]
          })
          .then(function (productos) {
            if (req.session.userLoggeado) {
              data.Usuario.findByPk(req.session.userLoggeado.id)
                .then(function (usuario) {
                  return res.render("products", {
                    productos: productos,
                    userLoggeado: req.session.userLoggeado,
                    perfil: usuario 
                  });
                });
            } else {
              return res.render("products", {
                productos: productos
              });
            }
          })
          .catch(function (error) {
            return res.send(error);
          });
        },
      

        product: function(req,res){
            Producto.findByPk(req.params.id, {
                 include: [
                     { association: "usuario" },
                     { association: "comentarios",
                       include: [{ association: "usuario" }]
                     }
                 ]
             })
             .then(function(producto)  {
                 if (req.session.userLoggeado) {
                     data.Usuario.findByPk(req.session.userLoggeado.id)
                         .then(function(usuario) {
                             return res.render("product", {
                                 producto: producto,
                                 userLoggeado: req.session.userLoggeado,
                                 perfil: usuario 
                             });
                         });
                 } else {
                     return res.render("product", {
                         producto: producto
                     });
                 }
             })
             .catch(function(error) {
                 return res.send(error);
             });
         },
    productAdd:  function(req, res){
            if (req.session.userLoggeado) {
                data.Usuario.findByPk(req.session.userLoggeado.id)
                    .then(function(usuario) {
                        return res.render("product-add", {
                            userLoggeado: req.session.userLoggeado,
                            perfil: usuario
                        });
                    });
            } else {
                return res.render("product-add");
            }
        }

    }


module.exports = productosController

