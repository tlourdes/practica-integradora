const data = require("../db/product")
const searchResultsController = require("./search-results")
const productosController ={
    products: function(req,res){
        res.render("products", {

            productos : data.productos,
        })
    },

    product: function(req,res){
        res.render("product", {

            productos : data.productos,
        })
    },

    productAdd:  function(req, res){
        res.render("product-add",  )

    }
}

module.exports = productosController

