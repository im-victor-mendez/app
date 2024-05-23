-- Insert Recetas
DELETE FROM `recipe`;
INSERT INTO `recipe`(`name`, `procedure`)
VALUES (
        "Hamburguesa Clásica",
        "1. Tostar el pan. 2. Cocinar la carne. 3. Colocar carne, jitomate, lechuga y mayonesa en el pan."
    ),
    (
        "Ensalada Mixta",
        "1. Lavar y cortar la lechuga. 2. Cortar jitomate y cebolla. 3. Mezclar todos los ingredientes."
    );