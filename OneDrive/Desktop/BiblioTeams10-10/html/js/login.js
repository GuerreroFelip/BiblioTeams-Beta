function iniciarSesion() {
    // Valores de ejemplo para validar
    const usuarioValido = "admin";
    const contraseñaValida = "12345";

    // Capturamos los valores de los campos
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    const mensajeError = document.getElementById("error-msg");

    // Validamos las credenciales
    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        mensajeError.textContent = "";
        alert("Inicio de sesión exitoso");
        // Redirigir al perfil o realizar alguna acción adicional
        return true;
    } else {
        mensajeError.textContent = "Usuario o contraseña incorrectos";
        return false; // Prevenir el envío del formulario
    }
}
