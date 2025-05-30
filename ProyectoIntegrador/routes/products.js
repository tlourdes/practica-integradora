// index, product, add product
const express = require("express")
const router = express.Router()
const productosController= require("../controllers/productosController")
const usuarioController= require("../controllers/usuarioController")


router.get("/", productosController.products)
router.get("/detalle/:id", productosController.product)
router.get("/agregar", productosController.productAdd)
router.post("/agregar", productosController.addNew )



module.exports= router;