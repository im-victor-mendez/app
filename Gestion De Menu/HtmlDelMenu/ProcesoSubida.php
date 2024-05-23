<?php
// Verificar si se ha enviado algún archivo
if(isset($_FILES['imagen'])){
    $nombreArchivo = $_FILES['imagen']['name']; // Nombre del archivo
    $rutaImagen = "uploads/" . $nombreArchivo; // Ruta donde se guardará la imagen
    $nombrePlatillo = $_POST['nombrePlatillo']; // Nombre del platillo
    $descripcionPlatillo = $_POST['descripcion']; // Descripción del platillo
    $ingredientes = $_POST['ingredientes']; // Ingredientes del platillo

    // Mover el archivo subido al directorio de destino
    if(move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaImagen)){
        // Conectar a la base de datos (ajusta los valores de conexión según tu configuración)
        $conexion = new mysqli("localhost", "root", "", "menu");

        // Verificar la conexión
        if($conexion->connect_error){
            die("Error de conexión: " . $conexion->connect_error);
        }

        // Preparar la consulta SQL para insertar la información del platillo y la imagen
        $sql = "INSERT INTO platillos (nombre_platillo, descripcion_platillo, ingredientes, imagen_path) VALUES (?, ?, ?, ?)";

        // Preparar la declaración
        $stmt = $conexion->prepare($sql);

        // Vincular los parámetros
        $stmt->bind_param("ssss", $nombrePlatillo, $descripcionPlatillo, $ingredientes, $rutaImagen);

        // Ejecutar la consulta
        if($stmt->execute()){
            echo "Platillo subido exitosamente.";
        }else{
            echo "Error al subir el platillo: " . $stmt->error;
        }

        // Cerrar la conexión y liberar los recursos
        $stmt->close();
        $conexion->close();
    }else{
        echo "Error al subir la imagen.";
    }
}
?>
