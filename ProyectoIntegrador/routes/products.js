// index, product, add product
const express = require("express")
const router = express.Router()
const productosController= require("../controllers/productosController")
const usuarioController= require("../controllers/usuarioController")



router.get("/detalle/:id", productosController.product)
router.post("/comentario/:id", productosController.comentario)
router.get("/agregar", productosController.productAdd)
router.post("/agregar", productosController.addNew )



module.exports= router;

