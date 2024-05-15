$(document).ready(function(){
    $('#contactForm').submit(function(e){    
        // Resto de la validación...

        // Validar si se ha seleccionado un archivo (opcional)
        var archivoAdjunto = $('#archivoAdjunto')[0].files[0];
        if (archivoAdjunto) {
            alert('Archivo adjunto seleccionado: ' + archivoAdjunto.name);
        } else {
            alert('No se ha seleccionado ningún archivo adjunto.');
        }
    });

    // Manejador de eventos para el botón "Subir Archivo"
    $('#subirArchivo').click(function() {
        $('#archivoAdjunto').click();
    });
});