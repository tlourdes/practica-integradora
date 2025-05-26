const data = require("../database/models");
const op  = data.Sequelize.Op;
const Producto = data.Producto;
//const searchResultsController = require("./search-resultsController")
const productosController ={
    products: function(req,res){
       Producto.findAll({
        include: [
            { association: "usuario"},
            { association: "comentarios"}],
       })
       .then(function(resultados){
        //return res.send(resultados)
            return res.render("products", {productos: resultados})
       })
       .catch(function(error){
            return res.send(error);
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

