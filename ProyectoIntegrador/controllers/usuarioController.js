let db = require("../database/models")
let Usuario = db.Usuario
const bcrypt = require("bcryptjs");

const usuarioController={
    register: function(req, res){
        if(req.session.userLoggeado != undefined){
            return res.redirect("/")
        }else{
            return res.render("register", {title: "Registro"}) //no se si hace falta lo de title registro
        }
    },
    create: function(req, res){
        if (req.body.contra.length < 3){
            return res.send("La contraseña es muy corta");
        }   
    
        Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(resultado) {
            if (resultado) {
                return res.send("El usuario ya existe");
            }
    
            let passEncriptada = bcrypt.hashSync(req.body.contra, 10);
    
            Usuario.create({
                nombre_usuario: req.body.usuario,
                email: req.body.email,
                contra: passEncriptada,
                dni: req.body.dni,
                fecha: req.body.nacimiento,
                foto_perfil: req.body.foto
            })
            .then(function(){
                return res.redirect("/login");
            })
            .catch(function(error){
                return res.send(error);
            });
        })
        .catch(function(error){
            return res.send(error);
        });
        
    },
  
  
  
    login: function(req, res){
        if(req.session.userLoggeado != undefined){
            return res.redirect("/");
        }else{
            return res.render("login", {title: "Login"})
        }
    },
    processLogin: function(req,res){ // erminar la parte del login
        Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
    }

}
module.exports = usuarioController;


