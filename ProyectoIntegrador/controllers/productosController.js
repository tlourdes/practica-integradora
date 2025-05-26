const data = require("../database/models");
const db = require("../db/product")
const Op = require("sequelize");
const Producto = data.Producto;
//const searchResultsController = require("./search-resultsController")
const productosController ={
    products: function(req,res){
        res.render("products", {

            productos : db.productos,
        })
    },

    product: function(req,res){
       Producto.findByPk(req.params.id, {
        include: [
            { association: "usuario"},
            { association: "comentarios",
                include: [{ association: "usuario" }] // el usuario que hizo el comentario
            }
        ],

    })
    .then(function(resultados)  {
        console.log(resultados.id);
        

        //return res.send(resultados)
        return res.render("product", {producto: resultados} )
    })
    .catch(function(error) {
        return res.send(error);
      });
    },

    productAdd:  function(req, res){
        res.render("product-add",  )

    }
}

module.exports = productosController

