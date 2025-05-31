const data = require("../database/models");


const Producto = data.Producto;
const Usuario = data.Usuario;
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
                Usuario.findByPk(req.session.userLoggeado.id)
                    .then(function(usuario) {
                        return res.render("product-add", {
                            userLoggeado: req.session.userLoggeado,
                            perfil: usuario
                        });
                    });
            } else {
                return res.render("product-add");
            }
        },

      addNew: function(req , res){
        if (!req.session.userLoggeado){
          return res.redirect("/login");
        }
    data.Producto.create ({
      usuario_id : req.session.userLoggeado.id, 
      nombre_archivo_imagen : req.body.imagen, 
      nombre_producto : req.body.nombre,
      descripcion : req.body.descripcion, 

    })
      
  .then (function(){
    res.redirect("/");


  })
  .catch ( function(error){
    console.log("No se pudo guardar el producto, vuelve a intearlo, muchas grcias", error );
    res.send("No se pudo guardar el producto, vuelve a intearlo, muchas grcias" )


  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }

    
        
    }


module.exports = productosController

