// Función para revisar las credenciales ingresadas
function RevisarCredenciales() {
  // Obtener los valores de los campos de correo y contraseñas
  const correo = document.getElementById("correo").value;
  const contrasena1 = document.getElementById("contrasena1").value;
  const contrasena2 = document.getElementById("contrasena2").value;

  // Verificar si las contraseñas coinciden
  if (contrasena1 != contrasena2) {
    // Mostrar un mensaje de alerta si las contraseñas no coinciden
    window.alert("Las contraseñas no coinciden");
  } else {
    // Mostrar un mensaje con el correo y la contraseña si las contraseñas coinciden
    window.alert(
      "Su correo es: " + correo + " y su contraseña es: " + contrasena1
    );  
  }
}

