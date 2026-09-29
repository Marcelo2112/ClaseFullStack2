
const modalContenido = document.getElementById("modal");
//boton 
const botonAbrirModalAgregarProducto = document.getElementById("botonAgregarProducto");
//BOTONES EN MODAL
const botonCerrarModal = document.getElementById("botonCerrar");
const botonGuardarProducto = document.getElementById("botonGuardar");



// ESTADOS DE BOTON

botonGuardarProducto.disabled = true;


//funcion abrir modal 

botonAbrirModalAgregarProducto.addEventListener("click", function(){

    modalContenido.style.display = "flex"

});


botonCerrarModal.addEventListener("click", function(){

    modalContenido.style.display = "none"


});

botonGuardarProducto.addEventListener("click", function(){
    const botonNombreProducto = document.getElementById("nombreProducto").value;

    const cincoComidas =document.getElementById("cantidadProducto").value; 

    const skuProducto  = document.getElementById("sku").value;

    if (botonNombreProducto === ""){
        alert("Valor no puede ser vacio")
        return
    }

    if (cincoComidas <= 0 ){
        alert("Valor debe ser mayor a cero")
        return
    }

    if (skuProducto !== botonNombreProducto){
        alert("Nombre_producto y Sku no puede ser igual")
        return
    }


    console.log("nombre del producto:",botonNombreProducto);
    console.log("cantidad de productos:",cincoComidas);
    console.log("Sku: ", skuProducto);
});
