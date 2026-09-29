const formularioJS = document.getElementById("formulario");



formularioJS.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("Boton funcionando");


    const nombre = document.getElementById("nombreInput").value.trim();
    const apellido = document.getElementById("apellidoInput").value;
    const telefono = document.getElementById("telefonoInput").value;
    const pais = document.getElementById("paisSelect").value;



    if (
        nombre === "" || apellido == "" || telefono === "" || pais === ""
    ) {
        alert("campo no puede ser vacio");
        return;
    }

    if (
        nombre.toLowerCase() === apellido.toLowerCase()
    ) {
        alert("no pueden ser igual")
    }
    console.log("Nombre: ", nombre);
    console.log("Apellido: ", apellido);
    console.log("Telefono: ", telefono);
    console.log("Pais: ", pais);

    const usuario = {
        nombreArray: nombre,
        apellido: apellido,
        telefono: telefono,
        pais: pais
    }



    console.log("Este es mi arreglo: ", usuario);

    localStorage.setItem("usuarioLocalStorage", JSON.stringify(usuario))

    window.location = "tabla.html"


})


function validarVacios(nombre, apellido) {
    if (nombre === '') {
        alert("El nombre es obligatorio")
        return false;
    }

    if (apellido === '') {
        alert("El apellido es obligatorio")
        return false;

    }

    return true;
}




