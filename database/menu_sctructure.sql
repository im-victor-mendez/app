-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2024 a las 05:03:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Base de datos: `menu`
--
CREATE DATABASE IF NOT EXISTS `menu` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `menu`;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `platillos`
--
CREATE TABLE `platillos` (
    `id` int(11) NOT NULL,
    `nombre_platillo` varchar(255) NOT NULL,
    `descripcion_platillo` text DEFAULT NULL,
    `ingredientes` text DEFAULT NULL,
    `imagen_path` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Volcado de datos para la tabla `platillos`
--
INSERT INTO `platillos` (
        `id`,
        `nombre_platillo`,
        `descripcion_platillo`,
        `ingredientes`,
        `imagen_path`
    )
VALUES (
        14,
        'Ceviche',
        'Plato fresco de pescado marinado en jugo de limón con cilantro y cebolla',
        'Pescado blanco, jugo de limón, cilantro, cebolla morada, tomate, aguacate, chile',
        'uploads/52988.jpg'
    ),
    (
        18,
        'Goulash',
        'Estofado húngaro de carne de res cocida a fuego lento con pimentón y verduras.',
        'Carne de res, pimentón, cebolla, tomate, ajo, caldo de res, patatas, zanahorias.',
        'uploads/American-Goulash-Recipe.jpg'
    ),
    (
        17,
        'Pasta Carbonara',
        'Plato italiano de pasta con una salsa cremosa hecha de huevo, queso, panceta y pimienta',
        'Spaghetti, huevo, queso parmesano, panceta, pimienta negra, ajo',
        'uploads/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg'
    ),
    (
        15,
        'Paella',
        'Plato tradicional español de arroz con mariscos, pollo y verduras',
        'Arroz, camarones, mejillones, pollo, pimiento rojo, guisantes, azafrán, caldo de pollo',
        'uploads/goya-paella.jpg'
    ),
    (
        7,
        'Hamburguesa',
        'Delicioso sabor a carne de res, con pan ligeramente tostado, queso derretido sedoso, que cautiva cualquier paladar',
        'Pan, Lechuga, Carne, Queso Amarillo, Catsup',
        'uploads/images.jpg'
    ),
    (
        11,
        'Tacos al pastor',
        'Tacos de carne de cerdo adobada, cocida en trompo y servida con piña y cilantro.',
        'Tortillas de maíz, carne de cerdo adobada, piña, cilantro, cebolla, salsa roja, limón.',
        'uploads/los-tacos-son-la-base_0_22_500_311.jpg'
    ),
    (
        10,
        'Pizza',
        'Deliciosa Pizza de pepperoni, con queso mozzarella, recién echa',
        'Harina, Peperoni, Ajo en polvo, Salsa de tomate, Aceite de oliva',
        'uploads/pizza-a-domicilio-cerca-de-mi.png'
    ),
    (
        16,
        'Ratatouille',
        'Guiso de verduras francesas, cocinado a fuego lento con hierbas de Provenza.',
        'Berenjena, calabacín, tomate, pimiento, ajo, cebolla, aceite de oliva, hierbas de Provenza',
        'uploads/Ratatuil.png'
    ),
    (
        13,
        'Sushi',
        'Rollo japonés de arroz sazonado con vinagre y relleno de pescado y vegetales',
        'Arroz para sushi, vinagre de arroz, nori, pescado crudo (atún, salmón), aguacate, pepino, salsa de soja',
        'uploads/Vegetarian-Sushi-Rolls.jpg'
    );
--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT de las tablas volcadas
--
--
-- AUTO_INCREMENT de la tabla `platillos`
--
ALTER TABLE `platillos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 19;
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;