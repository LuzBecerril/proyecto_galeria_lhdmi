USE lhdmidb;

SELECT * FROM lhdmidb.usuario; -- insert usuarios

INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Akary Larios', 'akary.larios@gmail.com', 'Akary_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1hI2ROV7aQFNq19UA4adFVwy_bHnN3yIi/view?usp=sharing', 'Colima, colima, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Dánae Valencia', 'danae.valen96@gmail.com', 'Danae_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1hI2ROV7aQFNq19UA4adFVwy_bHnN3yIi/view?usp=sharing', 'Jalisco,Zapopan , col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Alicia Perez', 'aliciapbarreda@gmail.com', 'Alicia_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1Kue9SJNLh0bAIKDQZA7R4Zj0r0StoP3N/view?usp=sharing', 'CDMX, Verónica Anzures, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Zuri Santos', 'zurisadaisantospadilla@gmail.com', 'Sant0s_8', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1FsWh_8WtostXlrE86oDbov9zGz_6inHP/view?usp=sharing', 'Estado de México, Ecatepec, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Berez Vélez', 'ab.jvelez@gmail.com', 'BerezVelez_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1keCnB3JHwmPO9e3tp1B0Ti_53R__hu17/view?usp=sharing', 'CDMX, MiguelHidalgo, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Fernanda Aldana', 'ma.fe.al.ll.00@gmail.com', 'Fernanda_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1jBH8It2p5XZBoN3cEqSQtofKS77tmKIi/view?usp=sharing', 'Jalisco, Zapotlán el Grande, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Luz Becerril', 'luzbecerril055@gmail.com', 'Luzbp_01', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/1Wc9ypkeKY7Vd2zjlr6pfAY3q5JJif2Pb/view?usp=sharing', 'Jalisco, colima, col. frutería, calle moras #10 , c.p 28100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Cynthia Avila', 'qfbcynthiaavi@gmail.com', 'C&n2023 ', '2023-11-23', 'usuario_mortal', 'https://drive.google.com/file/d/15pmUF6hQc0D4dZ_uDSjnIvvJm4SdH1wo/view?usp=sharing', 'Jalisco, Tala, col. El Refugio, calle México #100 , c.p 20100');
INSERT INTO lhdmidb.usuario (nombre, correo, contrasena, registrof, tipo, foto, direccion) 
	VALUES ('Galeria Hijas Izquierdo', 'hijasmariaizquierdogaleria@gmail.com', 'MariaDerecho_01', '2023-11-23', 'administrador', 'https://drive.google.com/file/d/1ksZTMC5cwfzN5fL1Zj08i9sGGNSAEAYi/view?usp=sharing', 'CDMX, MiguelHidalgo, col. Polanco, Enrique Ibsen 32-A , c.p 11560');
-- fin de insert usuarios

SELECT* FROM lhdmidb.secciones;-- insert de secciones 

INSERT INTO lhdmidb.secciones (nombre, descripcion, cantidadobras)
	VALUES ('Temporada ','lote de obras únicas de temporada que serán expuestas por 3 meses.','10');
INSERT INTO lhdmidb.secciones (nombre, descripcion, cantidadobras)
	VALUES ('Stock ','lote de obras aún disponibles después de temporada.', '10');
INSERT INTO lhdmidb.secciones (nombre, descripcion, cantidadobras)
	VALUES ('Personalizables','Obras de referencia para personalización de acuerdo al cliente', '10');
INSERT INTO lhdmidb.secciones (nombre, descripcion, cantidadobras)
	VALUES ('Descontinuadas','obras ya no disponibles para su elaboración', '2');
INSERT INTO lhdmidb.secciones (nombre, descripcion, cantidadobras)
	VALUES ('Próximamente','Obras en proceso para su venta', '3');
 -- fin de script de Secciones 
 
 SELECT* FROM lhdmidb.autoras;-- script autoras 
 
INSERT INTO lhdmidb.autoras (nombre, correo, descripcion, redsocial, telefono) 
	VALUES ('Andrea Villalón', 'andreavilllalon@gmail.com', 'Residente de la CDMX, creadora de pinturas al óleo basadas principalmente en su sentir y la naturaleza.', '@andreavilllalon', '5521142030');
INSERT INTO lhdmidb.autoras (nombre, correo, descripcion, redsocial, telefono) 
	VALUES ('María Fragoso', 'mariafragosoj@gmail.com', 'Residente de la CDMX, creadora de pinturas basadas principalmente en desnudos renacentistas y surrealismos Mexicanos', '@mariafragosoj', '5521892030');
INSERT INTO lhdmidb.autoras (nombre, correo, descripcion, redsocial, telefono) 
	VALUES ('Pía Camil', 'piacamil@gmail.com', 'Trabaja desde el Edo. México y CDMX, creadora de pinturas basadas principalmente en los contextos rural/urbano con un diálogo formal y que enfatizan la importancia de la colectividad.', '@piacamil', '5552830030');
INSERT INTO lhdmidb.autoras (nombre, correo, descripcion, redsocial, telefono) 
	VALUES ('Karen Reyes', 'karen_reyes@gmail.com', 'Trabaja desde San Pedro Garza García, Nuevo León. Su trabajo se basa en pinturas, fotografía y collages, siempre desde lo humano y las relaciones sociales de su entorno.', '@karenreyesssss', '5587624489');
INSERT INTO lhdmidb.autoras (nombre, correo, descripcion, redsocial, telefono) 
	VALUES ('Michelle Galavíz', 'dmich_elle@gmail.com', 'Residente en el Edo de Durango, su trabajo de pinturas al óleo aboca al realismo y la vida cotidiana que hay en su contexto.', '@dmich.elle', '4278662189');
 -- fin de autoras script

 SELECT* FROM lhdmidb.productos; -- productos script 
 
 INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora) 
	VALUES ('¿Qué es naturaleza', 'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Óleo sobre lienzo. 45x45cm. 2023.', './src/img/Obras/Andrea Villalón 2.jpg', 2000.00, 1, "Andrea Villalón");
 INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Ladrón de miel', 'El ladrón de miel tiene 28 manzanas de edad. Representa la relación de amor-odio entre la naturaleza y la civilización. Óleo sobre lienzo. 45x45cm. 2023.','./src/img/Obras/Andrea Villalón 1.1.1.jpg', 2400.00, 1, "Andrea Villalón");
 INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Dónde guardo las cosas','Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Óleo sobre lienzo. 45x45cm. 2023.','./src/img/Obras/Andrea Villalón 1.1.jpg', 3000.00, 1, "Andrea Villalón");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora) 
 VALUES ('Cuerpos compartidos I', 'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.', './src/img/Obras/248406969_858335791495785_7920988310028209038_n.jpg', 3000.00, 2, "María Fragoso");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Cuerpos compartidos II', 'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.', './src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg', 3000.00, 2, "María Fragoso");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Cuerpos compartidos III', 'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.', './src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg', 2500.00, 2, "María Fragoso");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora) 
	VALUES ('Multi Orgasmic', 'Jeans de segunda mano, deslavados y teñidos, colgado mediante cuerdas y accesorios de acero a la losa del museo. Dimensiones variables. 2022.', './src/img/Obras/Pía Camil 3.jpg', 5000.00, 2, "Pía Camil");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora) 
	VALUES ('Nidos y nudos', 'Acero, hormigón, pulpa de periódico reciclada, pigmentos, fotografías de periódico insertadas y base de madera contrachapada. 69x53x36 pulgadas. 2021.', './src/img/Obras/Pía Camil 2.jpg', 5000.00, 2, "Pía Camil");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Bragueta', 'Acero, hormigón, pulpa de periódico reciclada, pigmentos, fotografías de periódico insertadas y base de madera contrachapada. 69x53x36 pulgadas. 2021.', './src/img/Obras/Pía Camil 1.jpg', 3000.00, 2, "Pía Camil");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Magia en Kuwait','Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.', './src/img/Obras/Karen Reyes 2.jpg', 3000.00, 3, "Karen Reyes");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('Retrato doméstico','Un retrato intimo de la vida cotidiana. Obra partícipe del premio nacional de pintura fermin revueltas. Pintura de acrílico y óleo sobre tela 120x130cm, 2014.', './src/img/Obras/1. Michelle Galavíz.jpg', 4500.00, 3, "Michelle Galavíz");
INSERT INTO lhdmidb.productos (titulo, descripcion, imagen, precio,seccion,autora)  
	VALUES ('El huésped','¿Por qué de pronto nos sentimos impelidos a infligirnos pequeños suplicios sin razón aparente? ¿Qué nos mueve a arrojarnos de bruces a lo que odiamos?.', './src/img/Obras/Michelle Galavíz 2.jpg', 3000.00, 3, "Michelle Galavíz");
 -- fin productos
 
  SELECT* FROM lhdmidb.ventas; -- ventas script
  
  INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (2000.00, '2023-11-20', 1.0, 'proceso de envío', 'tarjeta de crédito','00ABC4501');
  INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio) 
	VALUES (7000.00, '2023-10-18', 3.0, 'enviado', 'paypal','00ABC4502');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (5000.00, '2023-01-26', 2.0, 'devuelto', 'oxxo','00ABC4503');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (3000.00, '2023-11-02', 1.0, 'enviado', 'tarjeta débito','00ABC4504');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio) 
	VALUES (6000.00, '2023-05-03', 2.0, 'entregado', 'tarjeta de crédito','00ABC4505');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (2500.00, '2023-07-20', 1.0, 'enviado', 'débito','00ABC4506');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (4000.00, '2023-11-08', 2.0, 'procesodeenvio', 'paypal','00ABC4507');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (1000.00, '2023-02-14', 1.0, 'enviado', 'tarjeta de crédito','00ABC4508');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio) 
	VALUES (1500.00, '2023-09-12', 2.0, 'enviado', 'oxxo','00ABC4509');
INSERT INTO lhdmidb.ventas (preciototal, fechacompra, cantidad, status, metodopago, folio)
	VALUES (7000.00, '2023-09-07', 1.0, 'entregado', 'tarjeta de crédito','00ABC4510');
 -- fin script ventas
 
 