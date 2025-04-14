const data = require("../db/product")
const searchResultsController = { 
    searchResults: function(req, res){
        res.render("search-results", {
            productos : data.productos,
         })
    }
}



module.exports = searchResultsController