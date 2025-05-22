const data = require("../database/models");
const { Op } = require("sequelize");
const Producto = data.Producto;

const searchResultsController = { 
    searchResults: function(req, res){
        Producto.findAll({
            where: {
                nombre_producto: {
                    [Op.like]: `%${req.query.search}%`
                }
            },
            
        })
        .then(function(resultados){
            return res.render("search-results", { productos: resultados });
        })
        .catch(function(error){
            return res.send(error);
        });
    }
};

module.exports = searchResultsController;
