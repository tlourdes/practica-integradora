const productosController ={
    products: function(req,res){
        res.render("products", )
    },

    product: function(req,res){
        res.render("product", )
    },

    productAdd:  function(req, res){
        res.render("product-add",  )
    }
}

module.exports = productosController

