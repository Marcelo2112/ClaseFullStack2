
const usuarioBDD = {
    nombre: "Marcelo",
    password: "123456"
}


const formularioJS = document.getElementById("formulario");

formularioJS.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("Boton funcionando");


    const nombreLogin = document.getElementById("nombreLogin").value.trim();
    const passwordLogin = document.getElementById("passwordLogin").value;

    console.log(nombreLogin);
    console.log(passwordLogin);

    if (validarUsuario(nombreLogin, passwordLogin)) {
        window.location = "dashboard.html"

        return;
    }

    // alert('Credenciales incorrectas');




})

function validarUsuario(nombre, password) {

    if (nombre === usuarioBDD.nombre && password === usuarioBDD.password) {
        // alert("Usurio logeado");
        return true
    }

    alert("Credenciales incorrectas")
    return false;

}

const botonConsole = document.getElementById("botonConsoleLog");

botonConsole.addEventListener("click", function () {
    console.log("Console log");
});