// perfil
const express = require("express")
const router = express.Router()
const perfilController= require("../controllers/perfil")

router.get("/", perfilController.perfil)

module.exports= router;