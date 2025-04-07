// register, log in
const express = require("express")
const router = express.Router()

router.get("/login", usuarioController.login)

router.get("/register", usuarioController.register)


module.exports= router;



