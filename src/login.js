function RevisarPass() {
  var correoInput = document.getElementById('correo');
  var passwordInput = document.getElementById('password');
  var checkboxInput = document.getElementById('checkbox');



  
  var correo = document.getElementById("correo").value;
  var password = document.getElementById("password").value.toString();
  var checkboxChecked = checkboxInput.checked;

  
  if (correo.trim() === '' || password.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  
  if (!checkboxChecked) {
    alert('Debes aceptar los Términos y Condiciones.');
    return;
  }

  
  console.log('Correo:', correo);
  console.log('Contraseña:', password);
  console.log('Ingresaste correctamente.');
}


// function ingresar() {
//     // Obtener el correo electrónico y la contraseña ingresados por el usuario
//     let correo = document.getElementById("correo").value;
//     let contrasena = document.getElementById("password").value;
  
//     // Obtener el correo electrónico y la contraseña almacenados en localStorage
//     let correoAlmacenado = localStorage.getItem("correo");
//     let contrasenaAlmacenada = localStorage.getItem("password");
  
//     // Comparar los valores ingresados por el usuario con los valores almacenados en localStorage
//     if (correo === correoAlmacenado && contrasena === contrasenaAlmacenada) {
//       // Permitir que el usuario ingrese
      

//       alert("Bienvenido/a " + correo + "!");
//       location.href = "../pages/saldo.html";

      
//     } else {
//       // Mostrar un mensaje de error si los valores no coinciden
//       alert("El correo electrónico o la contraseña son incorrectos. Por favor, inténtalo de nuevo o registrate");
//     }
//   }

//   function redireccionar() {
    
//     location.href = "../pages/saldo.html";
    
//     alert("Envio");
//   }
  
  