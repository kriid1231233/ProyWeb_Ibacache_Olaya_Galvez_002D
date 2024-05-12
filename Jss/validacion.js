$(document).ready(function(){
    $('#contactForm').submit(function(e){
      // Validar nombre
      var Nombre = $('#Nombre').val();
      if(Nombre.trim() == ''){
        alert('Por favor ingresa tu nombre.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }
  
      // Validar apellido
      var apellido = $('#apellido').val();
      if(apellido.trim() == ''){
        alert('Por favor ingresa tu apellido.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }
  
      // Validar fecha de nacimiento
      var fecha_nacimiento = $('#fecha_nacimiento').val();
      if(fecha_nacimiento.trim() == ''){
        alert('Por favor ingresa tu fecha de nacimiento.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }
  
      // Validar correo electrónico
      var correo = $('#correo').val();
      if(correo.trim() == ''){
        alert('Por favor ingresa tu correo electrónico.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }
  
      // Validar contraseña
      var contraseña = $('#contraseña').val();
      if(contraseña.trim() == ''){
        alert('Por favor ingresa tu contraseña.');
        e.preventDefault(); // Evitar que se envíe el formulario
        return;
      }
  
      // Si todos los campos están completos, el formulario se enviará
    });
  });
  