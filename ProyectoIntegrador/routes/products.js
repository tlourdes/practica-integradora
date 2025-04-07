// index, product, add product
const express = require("express")
const router = express.Router()

router.get("/", productosController.products)

router.get("/detalle/:id", productosController.product)

router.get("/agregar", productosController.product-add)

router.get("/login", usuarioController.login)

router.get("/register", usuarioController.register)

module.exports= router;