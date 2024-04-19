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
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `unit_weight` FLOAT,
    PRIMARY KEY `pk_id`(`id`)
);
-- Secondary
-- Providers
CREATE TABLE `provider` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `ingredient_id` INT,
    PRIMARY KEY `pk_id`(`id`),
    CONSTRAINT `fk_provider_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Orders
CREATE TABLE `order` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `date` DATE,
    `ingredient_id` INT,
    `quantity` FLOAT,
    PRIMARY KEY `pk_id`(`id`),
    CONSTRAINT `fk_order_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Inventory
CREATE TABLE `inventory` (
    `ingredient_id` INT,
    `quantity` INT,
    `total_weight` FLOAT,
    CONSTRAINT `fk_inventory_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
);
-- Recipe
CREATE TABLE `recipe` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `procedure` TEXT,
    PRIMARY KEY `pk_id`(`id`)
);
-- Relation Ingredient - Recipe
CREATE TABLE `ingredient_recipe` (
    `ingredient_weight` FLOAT,
    `ingredient_id` INT,
    CONSTRAINT `fk_ingredient_recipe_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
    `recipe_id` INT,
    CONSTRAINT `fk_ingredient_recipe_recipe` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
);