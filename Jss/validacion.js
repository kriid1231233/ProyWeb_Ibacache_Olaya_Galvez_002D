$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault(); // Evitar que se envíe el formulario

    // Validar nombre
    var Nombre = $('#nombre').val();
    if (Nombre.trim() == '') {
      alert('Por favor ingresa tu nombre.');
      return;
    }

    // Validar apellido
    var apellido = $('#apellido').val();
    if (apellido.trim() == '') {
      alert('Por favor ingresa tu apellido.');
      return;
    }

    // Validar fecha de nacimiento
    var fecha_nacimiento = $('#fecha_nacimiento').val();
    console.log(fecha_nacimiento);
    if (fecha_nacimiento.trim() == '') {
      alert('Por favor ingresa tu fecha de nacimiento.');
      return;
    }

    // validar que sea mayor de edad
    var fecha = new Date(fecha_nacimiento).getTime();
    var hoy = new Date().getTime();
    var edad = (hoy - fecha) / (1000 * 60 * 60 * 24 * 365);
    if (edad < 18) {
      alert('Debes ser mayor de edad para registrarte. Actualmente tienes ' + Math.floor(edad) + ' años.');
      return;
    }

    // Validar correo electrónico
    var correo = $('#correo').val();
    if (correo.trim() == '') {
      alert('Por favor ingresa tu correo electrónico.');
      return;
    }

    // Validar contraseña
    var contraseña = $('#contraseña').val();
    if (contraseña.trim() == '') {
      alert('Por favor ingresa tu contraseña.');
      return;
    }

    // Si todos los campos están completos, el formulario se enviará
    window.location.href = 'index.html';
  });
});
