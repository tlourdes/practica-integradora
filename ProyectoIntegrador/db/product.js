const data = {


    usuario: {
        
        email : "lpeiranozavaglia@udesa.com",
        nombre_perfil: "Luciano Peirano", 
        contrasena : "Integrador10" , 
        fecha_de_nacimiento :"2000-02-01" , 
        numero_de_documento : "45074993",  
        foto_de_perfil : "https://plus.unsplash.com/premium_photo-1730105510326-7e23c2c441f7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tYnJlJTIwbWVkaWElMjBjYXJhfGVufDB8fDB8fHww", 
        
        },
    productos: [

     {
        id : 1, 
        imagen : "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a366elgfaro/gallery/ar-galaxy-a36-5g-sm-a366-sm-a366elgfaro-545676706?$684_547_PNG$" , 
        nombre_producto : " Samsung Galaxy A36 5G 256GB Lime " , 
        descripcion : "El Galaxy A36 5G presenta un diseño de cámara lineal, limpio y agrupado con una parte posterior de cristal de primera calidad. " , 
        comentarios : [
           {
               usuario : " Martina López"  ,
               texto : "No entendí bien el modelo, pero se ve interesante." , 
               imagen : "https://media.istockphoto.com/id/1344963248/es/foto/foto-de-estudio-de-una-atractiva-joven-posando-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=DdBQQamVbdUFuw9UJjg30u6EYIy0Y3PaTRoT9ORaTPY=" , 
           }
        ]
      },
      {
        id : 2, 
        imagen : "https://images.fravega.com/f300/823ceb9b4f6c3a17d145267cea1406cf.jpg.webp" , 
        nombre_producto : "Celular Nubia Focus 5G 6GB 256GB Negro " , 
        descripcion : "El Nubia Focus 5G 256 GB combina la potencia de su procesador A76 / A55 con la memoria RAM de 6GB para obtener un rendimiento más rápido y eficiente" , 
        comentarios: [
           {
               usuario : "Tomás Rivas"  ,
               texto :"Tremendo celular, gracias por mostrar!"  , 
               imagen : "https://media.istockphoto.com/id/1442556244/es/foto/retrato-de-una-mujer-joven-y-hermosa-con-una-piel-lisa-perfecta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=My4mRtYfgT3EIvb2byYX4w7Vs0Vo8kusov0YBD9I-MY=" , 
           }
        ]
      },
      {
        id : 3, 
        imagen : "https://images.fravega.com/f300/b22af979a93a0a641fffa75b9a0a1ef7.jpg.webp" , 
        nombre_producto : "Celular Oppo A40 256GB  " , 
        descripcion : "Los intensos marrones profundos celular Oppo A40 Café, se realzan con texturas brillantes, que recuerdan a las sorprendentes nubes de polvo y gas que vemos en el espacio, desde las supernovas y donde nacen las nuevas estrellas. " , 
        comentarios : [
           {
               usuario : "Leandro Méndez"  ,
               texto : "¡Esto me cebó una banda, bro!" , 
               imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsljEYdIiJcbrbzwnxzEJAY0wBpETtXanUw&s" , 
           }
        ]
      },
      {
        id : 4, 
        imagen :  "https://images.fravega.com/f300/305d30e0dfca2514a7e9d8d3227caf98.jpg.webp", 
        nombre_producto : "Celular TCL 505s 4GB 256GB" , 
        descripcion : " El celular TCL tiene una potente batería de 5010 mas"

 , 
        comentarios : [
           {
               usuario : "Camila Ferraro"  ,
               texto : "No me terminó de convencer, esperaba otra cosa" , 
               imagen : "https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D" , 
           }
        ]
      },
      {
        id : 5, 
        imagen : "https://images.fravega.com/f300/3ec75134369dafae329ddcc948a4cf12.jpg.webp" , 
        nombre_producto : "Celular Motorola G75 5G 128GB  " , 
        descripcion : "Disfrutá de un diseño que cumple con los estándares militares de durabilidad, cuenta con protección IP68 contra el agua y Corning® Gorilla® Glass 5 resistente ante daños " , 
        comentarios : [
           {
               usuario : "Sofía Quintana"  ,
               texto : "Muy básico, le falta mejorar los detalles" , 
               imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclWLAdilrP5qCh9DT_p3nXfipW2fQuC6fS38vpnKQgm994W_-3v-mDaodpX4GTrtYois&usqp=CAU" , 
           }
        ]
      },
      {
        id : 6, 
        imagen :"https://images.fravega.com/f300/f41edae815f7c1e1727d5cf62ee6b81c.jpg.webp"  , 
        nombre_producto : " Celular Xiaomi Redmi 13C 4GB 128GB " , 
        descripcion : " Viene equipado con un procesador Octa-Core de 2,0 GHz, el cuál proporciona un rendimiento fluido y rápido, permitiendo ejecutar aplicaciones y juegos sin problemas" , 
        comentarios : [
           {
               usuario : "Ezequiel Torres"  ,
               texto : "Top, directo al punto." , 
               imagen :" https://media.istockphoto.com/id/155068180/es/foto/guy-real.jpg?s=612x612&w=0&k=20&c=VDSua2eTduOoccz7LZZWxNhGMur6hl6jZKIqAiY3w68=" , 
           }
        ]
      },
      {
        id : 7, 
        imagen :  "https://images.fravega.com/f300/eb854d24490bd3253f423151124f4cc6.jpg.webp", 
        nombre_producto : "Celular Samsung Galaxy A15 4GB 128GB " , 
        descripcion : "Cuenta con un procesador Octa Core, una memoria RAM de 4 GB y un espacio de almacenamiento de 128 GB. " , 
        comentarios : [
           {
               usuario : "Valentina Russo"  ,
               texto : "¿Podés mostrar más specs de esto?" , 
               imagen : "https://media.istockphoto.com/id/1036189988/es/foto/hombre-afroamericano-joven-mirando-de-cerca.jpg?s=612x612&w=0&k=20&c=0nAMVlvkB4b8ixGrRlXU8WrgZnpOlQMUKKq5wduhiQM=" , 
           }
        ]
      },
      {
        id : 8, 
        imagen :"https://images.fravega.com/f300/a7fb128a8bd0e17661e77a6416a4f166.jpg.webp"  , 
        nombre_producto : " Celular TCL 501 64GB" , 
        descripcion : "Captura la belleza en los detalles y colores vibrantes con la cámara del TCL 501 " , 
        comentarios : [
           {
               usuario : "Gonzalo Paredes"  ,
               texto : "Buenísima opción, me lo voy a comprar." , 
               imagen : "https://media.istockphoto.com/id/1042419562/es/foto/retrato-de-hombre-africano-maduro-serio-en-busca.jpg?s=612x612&w=0&k=20&c=m2KeBp-QRHUXPKfachxyqwZaL2ZzKnzMOkVwlbtwDlA=" , 
           }
        ]
      },
      {
        id : 9, 
        imagen : "https://images.fravega.com/f300/f0d0cbd0e047b9800475fe2eec2289c5.jpg.webp" , 
        nombre_producto : " Celular Motorola Edge 50 Fusion 256GB" , 
        descripcion : "Gracias a la batería de 5000 mAh, con el Moto Edge 50 Fusion 256 GB Marshmallow Blue contás con la potencia necesaria para todo lo que quieras hacer. " , 
        comentarios : [
           {
               usuario : "Luciana Cabrera"  ,
               texto : "No sé si vale lo que cuesta, ojo" , 
               imagen : "https://st.depositphotos.com/1715570/2349/i/450/depositphotos_23493623-stock-photo-handsome-young-man.jpg" , 
           }
        ]
      },
      {
        id : 10, 
        imagen : "https://images.fravega.com/f300/a5633faa33a7920e7b09981a5473644f.jpg.webp" , 
        nombre_producto : "Celular Nubia Music 4GB 128GB " , 
        descripcion : "Posee una batería de 5000 mAh para que disfrutes de tu Nubia Music 128 GB durante todo el día.La caja incluye auriculares, funda siliconada y cargador. " , 
        comentarios : [
           {
               usuario : "Ramiro Ayala"  ,
               texto : "La rompiste. Justo lo que buscaba." , 
               imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb_0CFfc0-Ypb5h13U4AutGQF7DavLCwZFDBYwMgcmn--KOnBJ-UX1OprKZFO39hAQYc&usqp=CAU" , 
           }
        ]
      },
      


]
}

module.exports = data









