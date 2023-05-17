// encuentra el elemento HTML (el boton) mediante su ID
const miBoton = document.getElementById ('miBoton'); 
// Definir la función que se ejecutará cuando se haga clic en el botón.
function handleClick(params) {
    alert ('hola, has hecho click');
}
//Agregar un oyente de eventos al botón.
miBoton.addEventListener('click', handleClick);



