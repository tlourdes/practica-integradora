const express = require("express")
const router = express.Router()
const usuarioController= require("../controllers/usuarioController")

router.get("/login", usuarioController.login)
router.post("/", usuarioController.processLogin)



module.exports= router;