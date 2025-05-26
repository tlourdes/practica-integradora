// perfil
const express = require("express")
const router = express.Router()
const perfilController= require("../controllers/perfilController")

router.get("/:id", perfilController.perfil) 

module.exports= router;