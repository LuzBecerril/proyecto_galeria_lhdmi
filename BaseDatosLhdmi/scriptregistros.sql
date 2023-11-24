USE lhdmidb;
SELECT * FROM lhdmidb.usuarios; -- insert usuarios

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Akary Larios', 'akary.larios@gmail.com', 'Akary_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1hI2ROV7aQFNq19UA4adFVwy_bHnN3yIi/view?usp=sharing', 'Colima, colima, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Dánae Valencia', 'danae.valen96@gmail.com', 'Danae_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1hI2ROV7aQFNq19UA4adFVwy_bHnN3yIi/view?usp=sharing', 'Jalisco,Zapopan , col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Alicia Perez', 'aliciapbarreda@gmail.com', 'Alicia_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1Kue9SJNLh0bAIKDQZA7R4Zj0r0StoP3N/view?usp=sharing', 'CDMX, Verónica Anzures, col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Zuri Santos', 'zurisadaisantospadilla@gmail.com', 'Sant0s_8', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1FsWh_8WtostXlrE86oDbov9zGz_6inHP/view?usp=sharing', 'Estado de México, Ecatepec, col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Berez Vélez', 'ab.jvelez@gmail.com', 'BerezVelez_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1keCnB3JHwmPO9e3tp1B0Ti_53R__hu17/view?usp=sharing', 'CDMX, MiguelHidalgo, col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Fernanda Aldana', 'ma.fe.al.ll.00@gmail.com', 'Fernanda_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1jBH8It2p5XZBoN3cEqSQtofKS77tmKIi/view?usp=sharing', 'Jalisco, Zapotlán el Grande, col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Luz Becerril', 'luzbecerril055@gmail.com', 'Luzbp_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1Wc9ypkeKY7Vd2zjlr6pfAY3q5JJif2Pb/view?usp=sharing', 'Jalisco, colima, col. frutería, calle moras #10 , c.p 28100');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Galeria Hijas Izquierdo', 'hijasmariaizquierdogaleria@gmail.com', 'MariaDerecho_01', '2023-11-23', 'administrador', 'https://drive.google.com/file/d/1ksZTMC5cwfzN5fL1Zj08i9sGGNSAEAYi/view?usp=sharing', 'CDMX, MiguelHidalgo, col. Polanco, Enrique Ibsen 32-A , c.p 11560');

INSERT INTO lhdmidb.usuarios (usuario, correo, contraseña, registrof, tipo, foto, direccion) 
VALUES ('Cynthia Avila', 'qfbcynthiaavi@gmail.com', 'C&n2023 ', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/15pmUF6hQc0D4dZ_uDSjnIvvJm4SdH1wo/view?usp=sharing', 'Jalisco, Tala, col. El Refugio, calle México #100 , c.p 20100');

-- fin de insert usuarios

-- insert de secciones 
SELECT* FROM lhdmidb.secciones;

INSERT INTO lhdmidb.secciones (nombre, cantidadobras,descripcion)
 VALUES ('Temporada ', '10','lote de obras únicas de temporada que serán expuestas por 3 meses.');

INSERT INTO lhdmidb.secciones (nombre, cantidadobras,descripcion)
 VALUES ('Stock ', '10','lote de obras aún disponibles después de temporada.');
 
INSERT INTO lhdmidb.secciones (nombre, cantidadobras,descripcion)
 VALUES ('Personalizables', '10','Obras de referencia para personalización de acuerdo al cliente');

INSERT INTO lhdmidb.secciones (nombre, cantidadobras,descripcion)
 VALUES ('Descontinuadas', '2','obras ya no disponibles para su elaboración');

INSERT INTO lhdmidb.secciones (nombre, cantidadobras,descripcion)
 VALUES ('Próximamente', '3','Obras en proceso para su venta');
 -- fin de script de Secciones 
 
 -- script autoras 
 SELECT* FROM lhdmidb.autoras;
 INSERT INTO lhdmidb.autoras (secciones_idsecciones, nombre, correo, descripcion, redsocial, telefono) 
VALUES (1, 'Andrea Villalón', 'andreavilllalon@gmail.com', 'Residente de la CDMX, creadora de pinturas al óleo basadas principalmente en su sentir y la naturaleza.', '@andreavilllalon', '5521142030');

INSERT INTO lhdmidb.autoras (secciones_idsecciones, nombre, correo, descripcion, redsocial, telefono) 
VALUES (4, 'María Fragoso', 'mariafragosoj@gmail.com', 'Residente de la CDMX, creadora de pinturas basadas principalmente en desnudos renacentistas y surrealismos Mexicanos', '@mariafragosoj', '5521892030');

INSERT INTO lhdmidb.autoras (secciones_idsecciones, nombre, correo, descripcion, redsocial, telefono) 
VALUES (5, 'Pía Camil', 'piacamil@gmail.com', 'Trabaja desde el Edo. México y CDMX, creadora de pinturas basadas principalmente en los contextos rural/urbano con un diálogo formal y que enfatizan la importancia de la colectividad.', '@piacamil', '5552830030');

INSERT INTO lhdmidb.autoras (secciones_idsecciones, nombre, correo, descripcion, redsocial, telefono) 
VALUES (1, 'Karen Reyes', 'karen_reyes@gmail.com', 'Trabaja desde San Pedro Garza García, Nuevo León. Su trabajo se basa en pinturas, fotografía y collages, siempre desde lo humano y las relaciones sociales de su entorno.', '@karenreyesssss', '5587624489');

INSERT INTO lhdmidb.autoras (secciones_idsecciones, nombre, correo, descripcion, redsocial, telefono) 
VALUES (4, 'Michelle Galavíz', 'dmich_elle@gmail.com', 'Residente en el Edo de Durango, su trabajo de pinturas al óleo aboca al realismo y la vida cotidiana que hay en su contexto.', '@dmich.elle', '4278662189');

 -- fin de autoras script
 
 -- productos script 
 SELECT* FROM lhdmidb.productos;
 INSERT INTO lhdmidb.productos (secciones_idsecciones, autoras_idautoras, autoras_secciones_idsecciones, titulo, descripcion, imagen, precio, dimesiones) 
 VALUES (1,2,3,'What is Nature?', 'Oleo sobre 
medidas 45x45cm año 2023 Oil on canvas. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).', './src/img/Obras/Andrea Villalón 2.jpg', '2000', '45 x 45 cm ');

INSERT INTO lhdmidb.productos (secciones_idsecciones, autoras_idautoras, autoras_secciones_idsecciones, titulo, descripcion, imagen, precio, dimesiones)
 VALUES (1,3,2,'Cuerpos compartidos I', 'Lápiz de color sobre papel, 2022.', './src/img/Obras/248406969_858335791495785_7920988310028209038_n.jpg', '3000', '17.7 cm x 25.4 cm');



INSERT INTO lhdmidb.productos (secciones_idsecciones, autoras_idautoras, autoras_secciones_idsecciones, titulo, descripcion, imagen, precio, dimesiones) 
VALUES (1,3,4,'Donde se guardan las cosas', 'Oil on canvas. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).', './src/img/Obras/Andrea Villalón 1.1.1.jpg', '3000', '120 x 60 cm');


INSERT INTO lhdmidb.productos (secciones_idsecciones, autoras_idautoras, autoras_secciones_idsecciones, titulo, descripcion, imagen, precio, dimesiones) 
VALUES (2,3,5,'Cuerpos compartidos II', 'Lápiz de color sobre papel, 2022.', './src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg', '2000', '17.7 cm x 25.4 cm');


INSERT INTO lhdmidb.productos (secciones_idsecciones, autoras_idautoras, autoras_secciones_idsecciones, titulo, descripcion, imagen, precio, dimesiones) 
VALUES (2,5,1,'Magia en Kuwait', 'Lápiz de color sobre papel, 2022.', './src/img/Obras/284532496_596135271564941_5147985414872795668_n.jpg', '3000', '17.7 cm x 25.4 cm');

 -- fin productos
 -- ventas script
  SELECT* FROM lhdmidb.ventas;
  INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
  VALUES (2, 2000, '2023-11-20', 1.0, 'proceso de envío', 'tarjeta de crédito');
  
  INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago) 
  VALUES (4, 7000, '2023-10-18', 3.0, 'enviado', 'paypal');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (3, 5000, '2023-01-26', 2.0, 'devuelto', 'oxxo');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (1, 3000, '2023-11-02', 1.0, 'enviado', 'tarjeta débito');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago) 
VALUES (3, 6000, '2023-05-03', 2.0, 'entregado', 'tarjeta de crédito');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (5, 2500, '2023-07-20', 1.0, 'enviado', 'débito');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (4, 4000, '2023-11-08', 2.0, 'procesodeenvio', 'paypal');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (2, 1000, '2023-02-14', 1.0, 'enviado', 'tarjeta de crédito');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago) 
VALUES (1, 1500, '2023-09-12', 2.0, 'enviado', 'oxxo');

INSERT INTO lhdmidb.ventas (usuarios_idusuarios, preciototal, fechacompra, cantidad, status, metodopago)
 VALUES (3, 7000, '2023-09-07', 1.0, 'entregado', 'tarjeta de crédito');


 -- fin script ventas
 
 