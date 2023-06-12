const clave = prompt("Crea tu nueva contraseña");
alert("Contraseña creada con éxito");

let confirmacion = confirm("¿Estás listo para probar tu contraseña?");
if (confirmacion) {
  let intentos = 0;
  while (intentos < 3) {
    let contrasenaIngresada = prompt("Ingresa tu contraseña");
    
    if (clave !== contrasenaIngresada) {
      alert("Contraseña incorrecta");
      console.log(clave);
      console.log(contrasenaIngresada);
      intentos++;
    } else {
      alert("Contraseña correcta");
      break; 
    }
    
    if (intentos === 3) {
      alert("Has excedido el número máximo de intentos");
      break; // Salir del bucle si se excedieron los 3 intentos
    }
  }
} else {
  alert("Refresca cuando estés preparado");
}
