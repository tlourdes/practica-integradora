const productosController ={
    index: function(req,res){
        res.render("index", )
    },

    product: function(req,res){
        res.render("producto", )
    },

    productAdd:  function(req, res){
        res.render("product-add",  )
    }
}

module.exports = productosController

