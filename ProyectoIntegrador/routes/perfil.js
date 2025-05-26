// perfil
const express = require("express")
const router = express.Router()
const perfilController= require("../controllers/perfilController")

router.get("/:id", perfilController.perfil) //no se si :id ponerlo aca o en el app.js

module.exports= router;