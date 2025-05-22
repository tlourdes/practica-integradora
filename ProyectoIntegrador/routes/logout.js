const express = require("express")
const router = express.Router()
const usuarioController= require("../controllers/usuarioController")

router.post('/', usuarioController.logout); 

module.exports= router;