-- Database
CREATE DATABASE IF NOT EXISTS `inventory` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `inventory`;
-- Drop Tables if exists
-- Only FKs
DROP TABLE IF EXISTS `ingredient_recipe`;
-- Secondary Tables
DROP TABLE IF EXISTS `provider`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `inventory`;
DROP TABLE IF EXISTS `recipe`;
-- Principal Tables
DROP TABLE IF EXISTS `ingredient`;
-- Principal Tables
-- Ingredients
CREATE TABLE `ingredient` (
    `name` VARCHAR(255),
    -- Grams
    `unit_weight` FLOAT,
    PRIMARY KEY `pk_name`(`name`)
);
-- Secondary
-- Providers
CREATE TABLE `provider` (
    `name` VARCHAR(255),
    `ingredient_name` VARCHAR(255),
    PRIMARY KEY `pk_name`(`name`),
    CONSTRAINT `fk_provider_ingredient` FOREIGN KEY (`ingredient_name`) REFERENCES `ingredient` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Orders
CREATE TABLE `order` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATE,
    `ingredient_name` VARCHAR(255),
    `quantity` FLOAT,
    PRIMARY KEY `pk_id`(`id`),
    CONSTRAINT `fk_order_ingredient` FOREIGN KEY (`ingredient_name`) REFERENCES `ingredient` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Inventory
CREATE TABLE `inventory` (
    `ingredient_name` VARCHAR(255),
    `quantity` INT,
    -- Grams
    `total_weight` FLOAT,
    -- Grams
    `warning_quantity` INT,
    CONSTRAINT `fk_inventory_ingredient` FOREIGN KEY (`ingredient_name`) REFERENCES `ingredient` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Recipe
CREATE TABLE `recipe` (
    `name` VARCHAR(255),
    `procedure` TEXT,
    PRIMARY KEY `pk_name`(`name`)
);
-- Relation Ingredient - Recipe
CREATE TABLE `ingredient_recipe` (
    -- Grams
    `ingredient_weight` FLOAT,
    `ingredient_name` VARCHAR(255),
    CONSTRAINT `fk_ingredient_recipe_ingredient` FOREIGN KEY (`ingredient_name`) REFERENCES `ingredient` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE,
    `recipe_name` VARCHAR(255),
    CONSTRAINT `fk_ingredient_recipe_recipe` FOREIGN KEY (`recipe_name`) REFERENCES `recipe` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE
);