$(document).ready(function(){
    $('#contactForm').submit(function(e){
      
      var nombre = $('#nombre').val();
      if(nombre.trim() == ''){
        alert('Por favor ingresa tu nombre.');
        e.preventDefault(); 
        return;
      }
  
      
      var correo = $('#correo').val();
      if(correo.trim() == ''){
        alert('Por favor ingresa tu correo electrónico.');
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
      if(razonContacto.trim() == ''){
        alert('Por favor selecciona la razón de contacto.');
        e.preventDefault(); 
        return;
      }
  
     
    });
});
