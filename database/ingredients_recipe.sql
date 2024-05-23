-- Insert relación ingrediente-receta
DELETE FROM `ingredient_recipe`;
INSERT INTO `ingredient_recipe`(
        `ingredient_weight`,
        `ingredient_name`,
        `recipe_name`
    )
VALUES (50, "Jitomate", "Hamburguesa Clásica"),
    (30, "Lechuga", "Hamburguesa Clásica"),
    (10, "Mayonesa", "Hamburguesa Clásica"),
    (40, "Carne de res", "Hamburguesa Clásica"),
    (50, "Jitomate", "Ensalada Mixta"),
    (30, "Lechuga", "Ensalada Mixta"),
    (20, "Cebolla Blanca", "Ensalada Mixta");