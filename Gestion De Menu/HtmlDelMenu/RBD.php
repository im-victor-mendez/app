<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "menu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener las imágenes
$sql = "SELECT imagen_path, nombre_platillo, descripcion_platillo, ingredientes FROM platillos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $imagenes = array();
    while ($row = $result->fetch_assoc()) {
        $imagenes[] = $row;
    }
    echo json_encode($imagenes);
} else {
    echo "0 resultados";
}

$conn->close();
?>