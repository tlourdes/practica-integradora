const data = require("../database/models");
const op  = data.Sequelize.Op;
const Producto = data.Producto;

const searchResultsController = {
  searchResults: function(req, res) {
    Producto.findAll({
      where: {
        nombre_producto: {
          [op.like]: `%${req.query.search}%`
        }
      },
      include: [
        { association: "usuario"},
        { association: "comentarios"}],
      
    })
    .then(function(resultados) {
      console.log(resultados);
      
      return res.render("search-results", { productos: resultados });
    })
    .catch(function(error) {
      return res.send("hola");
    });
  }
};

module.exports = searchResultsController;
