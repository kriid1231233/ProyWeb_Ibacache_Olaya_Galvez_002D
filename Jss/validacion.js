$(document).ready(function () {
  $('#contactForm').submit(function (e) {
      e.preventDefault(); // Evitar que se envíe el formulario

      // Expresión regular para solo letras (sin caracteres especiales)
      var regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/;
      var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validar nombre
      var nombre = $('#nombre').val();
      if (nombre.trim() == '') {
          alert('Por favor ingresa tu nombre.');
          return;
      }
      if (!regex.test(nombre)) {
          alert('El nombre solo puede contener letras y espacios.');
          return;
      }

      // Validar apellido
      var apellido = $('#apellido').val();
      if (apellido.trim() == '') {
          alert('Por favor ingresa tu apellido.');
          return;
      }
      if (!regex.test(apellido)) {
          alert('El apellido solo puede contener letras y espacios.');
          return;
      }

      // Validar fecha de nacimiento
      var fecha_nacimiento = $('#fecha_nacimiento').val();
      if (fecha_nacimiento.trim() == '') {
          alert('Por favor ingresa tu fecha de nacimiento.');
          return;
      }

      // Validar que sea mayor de edad
      var fecha = new Date(fecha_nacimiento).getTime();
      var hoy = new Date().getTime();
      var edad = (hoy - fecha) / (1000 * 60 * 60 * 24 * 365);
      if (edad < 18) {
          alert('Debes ser mayor de edad para registrarte. Actualmente tienes ' + Math.floor(edad) + ' años.');
          return;
      }

      // Validar correo electrónico
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

      // Validar género
      var genero = $('#genero').val();
      if (genero == '') {
          alert('Por favor selecciona tu género.');
          return;
      }

      // Validar contraseña
      var contraseña = $('#contraseña').val();
      if (contraseña.trim() == '') {
          alert('Por favor ingresa tu contraseña.');
          return;
      }

      // Si todos los campos están completos, el formulario se enviará
      alert('Formulario enviado correctamente!');
      window.location.href = 'index.html';
  });
});