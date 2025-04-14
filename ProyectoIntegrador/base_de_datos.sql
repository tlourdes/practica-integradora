CREATE SCHEMA baseDatos;
USE baseDatos;
CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_usuario VARCHAR(100) NOT NULL UNIQUE,
email VARCHAR(100) NOT NULL UNIQUE,
contra VARCHAR(30) NOT NULL,
fecha DATE NOT NULL,
dni BIGINT NOT NULL UNIQUE,
foto_perfil VARCHAR(400) NOT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 

);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED, 
nombre_archivo_imagen VARCHAR(400) NOT NULL,
nombre_producto VARCHAR(100) NOT NULL,
descripcion TEXT NOT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id)

);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED, 
productos_id INT UNSIGNED,  
comentario TEXT NOT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (productos_id) REFERENCES productos(id)
);

INSERT INTO usuarios(nombre_usuario, email, contra, fecha, dni, foto_perfil)
VALUES ('Luciano Peirano', 'lpeiranozavaglia@udesa.com', 'Integrador10', '2000-02-01', 45074993, 'https://media.istockphoto.com/id/647830296/es/foto/hombre-con-una-expresi%C3%B3n-seria.jpg?s=612x612&w=0&k=20&c=8m3NP6BdlxBHDGWJccRkHA2mtbp9gOHzZeDcVyBVKFk='),
('ana123', 'ana@gmail.com', 'abcd', '1992-03-15', 23456789, 'ana.png'),
('maria.fer','maria@hotmail.com', 'pass123', '1995-06-22', 34567890, 'maria.jpg'),
('lucas10','lucas@gmail.com', 'lucas2023', '1988-10-10', 45678901, 'lucas.png'),
('sofiii','sofia@hotmail.com', 'sofiasofia', '2000-12-05', 56789012, 'sofia.jpg');

INSERT INTO productos(usuario_id, nombre_archivo_imagen, nombre_producto, descripcion)
VALUES (1, 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a366elgfaro/gallery/ar-galaxy-a36-5g-sm-a366-sm-a366elgfaro-545676706?$684_547_PNG$', 'Samsung Galaxy A36 5G 256GB Lime', 'El Galaxy A36 5G presenta un diseño de cámara lineal, limpio y agrupado con una parte posterior de cristal de primera calidad.'),
(1, 'https://images.fravega.com/f300/823ceb9b4f6c3a17d145267cea1406cf.jpg.webp', 'Celular Nubia Focus 5G 6GB 256GB Negro', 'El Nubia Focus 5G 256 GB combina la potencia de su procesador A76 / A55 con la memoria RAM de 6GB para obtener un rendimiento más rápido y eficiente'),
(2, 'https://images.fravega.com/f300/b22af979a93a0a641fffa75b9a0a1ef7.jpg.webp', 'Celular Oppo A40 256GB', 'Los intensos marrones profundos celular Oppo A40 Café, se realzan con texturas brillantes, que recuerdan a las sorprendentes nubes de polvo y gas que vemos en el espacio, desde las supernovas y donde nacen las nuevas estrellas.'),
(2, 'https://images.fravega.com/f300/305d30e0dfca2514a7e9d8d3227caf98.jpg.webp', 'Celular TCL 505s 4GB 256GB', 'El celular TCL tiene una potente batería de 5010 mas'),
(3, 'https://images.fravega.com/f300/3ec75134369dafae329ddcc948a4cf12.jpg.webp', 'Celular Motorola G75 5G 128GB', 'Disfrutá de un diseño que cumple con los estándares militares de durabilidad, cuenta con protección IP68 contra el agua y Corning® Gorilla® Glass 5 resistente ante daños'),
(3, 'https://images.fravega.com/f300/f41edae815f7c1e1727d5cf62ee6b81c.jpg.webp', 'Celular Xiaomi Redmi 13C 4GB 128GB', 'Viene equipado con un procesador Octa-Core de 2,0 GHz, el cuál proporciona un rendimiento fluido y rápido, permitiendo ejecutar aplicaciones y juegos sin problemas'),
(4, 'https://images.fravega.com/f300/eb854d24490bd3253f423151124f4cc6.jpg.webp', 'Celular Samsung Galaxy A15 4GB 128GB', 'Cuenta con un procesador Octa Core, una memoria RAM de 4 GB y un espacio de almacenamiento de 128 GB. '),
(4, 'https://images.fravega.com/f300/a7fb128a8bd0e17661e77a6416a4f166.jpg.webp', 'Celular TCL 501 64GB', 'Captura la belleza en los detalles y colores vibrantes con la cámara del TCL 501'),
(5, 'https://images.fravega.com/f300/f0d0cbd0e047b9800475fe2eec2289c5.jpg.webp', 'Celular Motorola Edge 50 Fusion 256GB', 'Gracias a la batería de 5000 mAh, con el Moto Edge 50 Fusion 256 GB Marshmallow Blue contás con la potencia necesaria para todo lo que quieras hacer.'),
(5, 'https://images.fravega.com/f300/a5633faa33a7920e7b09981a5473644f.jpg.webp', 'Celular Nubia Music 4GB 128GB', 'Posee una batería de 5000 mAh para que disfrutes de tu Nubia Music 128 GB durante todo el día.La caja incluye auriculares, funda siliconada y cargador.');

INSERT INTO comentarios (productos_id, usuario_id, comentario)
VALUES (1, 2, '¡Muy bueno!'), (1, 3, 'Me encantó.'), (1, 4, 'Excelente producto.'),
(2, 3, 'No me convenció.'), (2, 5, 'Lo recomiendo.'), (2, 1, 'Está bien.'),
(3, 4, 'Lo compraría otra vez.'), (3, 1, 'Buen precio.'), (3, 2, 'Podría ser mejor.'),
(4, 5, 'Me funcionó perfecto.'), (4, 3, 'No era lo que esperaba.'), (4, 1, 'Correcto.'),
(5, 1, 'Me gustó mucho.'), (5, 2, 'Funciona bien.'), (5, 4, 'Aceptable.'),
(6, 2, 'Mal empaquetado.'), (6, 3, 'Rápido envío.'), (6, 5, 'Todo ok.'),
(7, 3, 'Muy recomendable.'), (7, 1, 'Me sirvió.'), (7, 2, 'Gracias.'),
(8, 4, 'Volveré a comprar.'), (8, 2, 'Buen soporte.'), (8, 5, 'Todo correcto.'),
(9, 3, 'Una joya.'), (9, 4, 'Perfecto.'), (9, 1, 'Simplemente genial.'),
(10, 5, 'Increíble.'), (10, 2, 'Vale la pena.'), (10, 3, 'Muy útil.');


