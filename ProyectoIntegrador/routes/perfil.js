// perfil
const express = require("express")
const router = express.Router()

router.get("/", perfilController.perfil)

module.exports= router;