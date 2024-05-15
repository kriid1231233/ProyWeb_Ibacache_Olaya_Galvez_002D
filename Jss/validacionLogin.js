$(document).ready(function(){
    $('#contactForm').submit(function(e){
      var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Validar nombre
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

      var contraseña = $('#contraseña').val();
      if(contraseña.trim() == ''){
        alert('Por favor ingresa tu contraseña.');
        e.preventDefault(); 
        return;
      }
    });
  });