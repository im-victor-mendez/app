-- Insert Ingredients with Image Paths
DELETE FROM `ingredient`;
-- Fruits
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Piña", 2000, "Imagenes BD Burguer/Fruits/Pinia.jpg"),
    ("Aguacate", 200, "Imagenes BD Burguer/Fruits/Aguacate.jpg");
-- Vegetables
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Jitomate", 150, "Imagenes BD Burguer/Vegetables/Jitomate.jpg"),
    ("Lechuga", 500, "Imagenes BD Burguer/Vegetables/Lechuga.png"),
    ("Cebolla Blanca", 400, "Imagenes BD Burguer/Vegetables/Cebolla_blanca.jpg"),
    ("Cebolla morada", 400, "Imagenes BD Burguer/Vegetables/Cebolla_morada.jpg"),
    ("Pepinillos", 250, "Imagenes BD Burguer/Vegetables/Pepinillo.jpg"),
    ("Champiñones", 250, "Imagenes BD Burguer/Vegetables/Champinones.jpeg"),
    ("Pimientos", 250, "Imagenes BD Burguer/Vegetables/Pimiento.jpg"),
    ("Chiles en Vinagre", 1000, "Imagenes BD Burguer/Vegetables/Chiles_vinagre.jpg"),
    ("Papa", 40, "Imagenes BD Burguer/Vegetables/Papa.jpg");
-- Meats
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Salchicha", 70, "Imagenes BD Burguer/Meats/Salchicha.jpeg"),
    ("Jamón", 20, "Imagenes BD Burguer/Meats/Jamon.jpeg"),
    ("Tocino", 28, "Imagenes BD Burguer/Meats/Tocino.jpg"),
    ("Pavo", 150, "Imagenes BD Burguer/Meats/Pavo.jpg"),
    ("Chorizo", 150, "Imagenes BD Burguer/Meats/Chorizo.jpeg"),
    ("Carne de res", 150, "Imagenes BD Burguer/Meats/Carne_Res.jpg"),
    ("Carne de cerdo", 150, "Imagenes BD Burguer/Meats/Carne_Cerdo.jpeg"),
    ("Pechuga de pollo", 200, "Imagenes BD Burguer/Meats/Pechuga_de_pollo.jpg");
-- Dairy
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Queso Oaxaca", 18, "Imagenes BD Burguer/Dairy/Oaxaca.png"),
    ("Queso americano", 28, "Imagenes BD Burguer/Dairy/Americano.png"),
    ("Queso mozzarella", 28, "Imagenes BD Burguer/Dairy/Mozzarella.jpg"),
    ("Queso panela", 30, "Imagenes BD Burguer/Dairy/Panela.jpg"),
    ("Queso manchego", 40, "Imagenes BD Burguer/Dairy/Manchego.jpg"),
    ("Mantequilla", 10, "Imagenes BD Burguer/Dairy/Mantequilla.jpg");
-- Condiments
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Mostaza", 1000, "Imagenes BD Burguer/Condiments/Mostaza.jpg"),
    ("Catsup", 1000, "Imagenes BD Burguer/Condiments/Ketchup.jpg"),
    ("Mayonesa", 1000, "Imagenes BD Burguer/Condiments/mayonesa.jpg"),
    ("Salsa BBQ", 1000, "Imagenes BD Burguer/Condiments/BBQ.jpg"),
    ("Salsa picante", 1000, "Imagenes BD Burguer/Condiments/Picante.jpeg"),
    ("Salsa Chipotle", 1000, "Imagenes BD Burguer/Condiments/Chipotle.jpg");
    
-- Base
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Pan para hamburguesa", 100, "Imagenes BD Burguer/Base/Pan_hamburguesa.jpg"),
    ("Pan blanco", 250, "Imagenes BD Burguer/Base/Pan_blanco.jpeg"),
    ("Pan integral", 200, "Imagenes BD Burguer/Base/Pan_integral.jpg"),
    ("Pan sin gluten", 250, "Imagenes BD Burguer/Base/Pan_sin_gluten.jpeg");
-- Accompaniment
INSERT INTO `ingredient`(`name`, `unit_weight`, `image_path`)
VALUES ("Huevo", 60, "Imagenes BD Burguer/Accompaniment/Huevo.jpeg"),
    ("Papas a la francesa", 250, "Imagenes BD Burguer/Accompaniment/Papas_francesa.jpg"),
    ("Nachos", 250, "Imagenes BD Burguer/Accompaniment/Nachos.jpg"),
    ("Frijoles", 250, "Imagenes BD Burguer/Accompaniment/Frijoles.jpg"),
    ("Chips de tortilla", 250, "Imagenes BD Burguer/Accompaniment/Chips.jpg"),
    ("Salsa de queso", 250, "Imagenes BD Burguer/Accompaniment/Salsa_queso.jpg");
