$(document).ready(function() {
  // Hacer una solicitud AJAX para obtener las imágenes
  $.ajax({
      url: 'RBD.php', // Archivo PHP que maneja la consulta a la base de datos
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          // Mostrar las imágenes en el contenedor
          data.forEach(function(imagen) {
              $('#imagenesContainer').append('<img src="' + imagen.imagen_path + '" alt="' + imagen.nombre_platillo + '" class="imagenRedimensionada" data-nombre="' + imagen.nombre_platillo + '" data-descripcion="' + imagen.descripcion_platillo + '" data-ingredientes="' + imagen.ingredientes + '">');
          });

          // Evento de clic para mostrar información del producto
          $('.imagenRedimensionada').click(function() {
              var nombre = $(this).data('nombre');
              
              var descripcion = $(this).data('descripcion');
              var ingredientes = $(this).data('ingredientes');

              $('#nombreProducto').text(nombre);
              $('#descripcionProducto').text(descripcion);
              $('#ingredientesProducto').text(ingredientes);

              $('#productoInfo').removeClass('hidden');
          });
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
});

