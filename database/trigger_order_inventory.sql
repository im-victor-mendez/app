-- -- Trigger order - inventory
-- -- Crear el trigger para actualizar la tabla `inventory` al insertar en la tabla `order`
-- DELIMITER //
-- -- Creación del trigger para actualizar la cantidad en `inventory` después de insertar en `order`
-- CREATE TRIGGER update_inventory_after_order_insert
-- AFTER INSERT ON `order`
-- FOR EACH ROW
-- BEGIN
--     -- Actualizar la cantidad en `inventory`
--     UPDATE `inventory`
--     SET `quantity` = `quantity` + NEW.`quantity`,
--         `total_weight` = `total_weight` + (NEW.`quantity` * (SELECT `unit_weight` FROM `ingredient` WHERE `name` = NEW.`ingredient_name`))
--     WHERE `ingredient_name` = NEW.`ingredient_name`;
-- END//
-- DELIMITER ;