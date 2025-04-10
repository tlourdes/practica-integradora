const data = require("../db/product")
const productosController ={
    products: function(req,res){
        res.render("products", {

            productos : data.productos,
        })
    },

    product: function(req,res){
        res.render("product", )
    },

    productAdd:  function(req, res){
        res.render("product-add",  )
    }
}

module.exports = productosController

