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
    processLogin: function(req,res){ 
        Usuario.findOne({
            where: [{
                email: req.body.email
            }]
        })
        .then(function(resultado){
            if(resultado != null){
               
                let check = bcrypt.compareSync(req.body.contra, resultado.contra); 
                console.log(check)
                if(check){
                    
                    req.session.userLoggeado = resultado
                    if(req.body.recordame != undefined){
                        res.cookie("recordame", resultado, {maxAge: 1000 * 60 * 60})
                    }
                    console.log(req.session.userLoggeado)
                    return res.redirect("/");
                } else{return res.send("Contraseña incorrecta");}
            }  
            else{
                return res.send("Usuario no encontrado");
            }
            
        })
        .catch(function(error){
            return res.send(error);
        })
    
    },
    
    logout: function(req,res){
        req.session.destroy();
        res.clearCookie("recordame");
        return res.redirect("/");
        
    }

}
module.exports = usuarioController;
