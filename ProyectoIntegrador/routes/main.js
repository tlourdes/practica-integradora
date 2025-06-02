const express = require("express")
const router = express.Router()
const searchResultsController= require("../controllers/search-resultsController")
const usuarioController= require("../controllers/usuarioController")
const perfilController= require("../controllers/perfilController")
const productosController= require("../controllers/productosController")

router.get("/resultados", searchResultsController.searchResults)

router.get("/register", usuarioController.register)
router.post("/register", usuarioController.create);


router.get("/", productosController.products)


router.get("/perfil/:id", perfilController.perfil) 



router.post('/logout', usuarioController.logout); 


router.get("/login", usuarioController.login)
router.post("/login", usuarioController.processLogin)



module.exports= router;