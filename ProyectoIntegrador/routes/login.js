const express = require("express")
const router = express.Router()
const usuarioController= require("../controllers/usuarioController")

router.get("/", usuarioController.login)
router.post("/", usuarioController.processLogin)

module.exports= router;