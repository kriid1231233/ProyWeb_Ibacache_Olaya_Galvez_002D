$(document).ready(function(){
    $('#contactForm').submit(function(e){    
        var regexNombre = /^[a-zA-Z\s]+$/;
        var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var nombre = $('#nombre').val();
        if(nombre.trim() == ''){
            alert('Por favor ingresa tu nombre.');
            e.preventDefault(); 
            return;
        }
        if (!regexNombre.test(nombre)) {
            alert('El nombre solo puede contener letras y espacios.');
            e.preventDefault();
            return;
        }

        var correo = $('#correo').val();
        if(correo.trim() == ''){
            alert('Por favor ingresa tu correo electrónico.');
            e.preventDefault(); 
            return;
        }
        if (!regexCorreo.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            e.preventDefault();
            return;
        }
        
        var asunto = $('#asunto').val();
        if(asunto.trim() == ''){
            alert('Por favor ingresa el asunto.');
            e.preventDefault(); 
            return;
        }
    
        var descripcion = $('#descripcion').val();
        if(descripcion.trim() == ''){
            alert('Por favor ingresa la descripción del asunto.');
            e.preventDefault(); 
            return;
        }

        var razonContacto = $('#razonContacto').val();
        if (razonContacto === '') {
            alert('Por favor selecciona una razón de contacto.');
            e.preventDefault(); 
            return;
        }
    });
});