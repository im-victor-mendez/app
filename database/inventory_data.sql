-- Insertar inventario
INSERT INTO `inventory` (
        `ingredient_name`,
        `quantity`,
        `total_weight`,
        `warning_quantity`
    )
SELECT `name`,
    IF(
        `name` IN (
            'Aguacate',
            'Carne para hamburguesa',
            'Cebolla',
            'Jitomate',
            'Papa'
        ),
        FLOOR(RAND() * 50) + 1,
        IF(
            `name` IN ('Mayonesa', 'Mostaza'),
            FLOOR(RAND() * 2) + 1,
            FLOOR(RAND() * 100) + 51
        )
    ),
    FLOOR(RAND() * 5000) + 1,
    IF(
        `name` IN (
            'Aguacate',
            'Carne para hamburguesa',
            'Cebolla',
            'Jitomate',
            'Papa'
        ),
        FLOOR(RAND() * 50) + 1,
        IF(
            `name` IN ('Mayonesa', 'Mostaza'),
            FLOOR(RAND() * 2) + 1,
            FLOOR(RAND() * 100) + 51
        )
    )
FROM `ingredient`;