// perfil
const express = require("express")
const router = express.Router()

router.get("/miPerfil", perfilController.perfil)

module.exports= router;