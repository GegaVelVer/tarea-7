// Función para imprimir las credenciales ingresadas
function printCredenciales() {
  // Obtener el valor del correo y la contraseña
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  // Mostrar un mensaje de alerta con el correo y la contraseña
  window.alert(
    "Su correo es: " + correo + " y su contraseña es: " + contrasena
  );
}
