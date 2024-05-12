$(document).ready(function(){
    $('#contactForm').submit(function(e){
      // Validar nombre
      var usuario = $('#usuario').val();
      if(usuario.trim() == ''){
        alert('Por favor ingresa tu nombre.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }

      var contraseña = $('#contraseña').val();
      if(contraseña.trim() == ''){
        alert('Por favor ingresa tu contraseña.');
        e.preventDefault(); 
        return;
      }
    });
  });
  