// Obtenemos una referencia al párrafo y al botón
const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');

// Creamos una función para cambiar el texto del párrafo
function cambiarTexto() {
    parrafo.textContent = '¡El texto ha sido cambiado!';
}

// Agregamos un event listener al botón para llamar a la función cuando se haga clic
boton.addEventListener('click', cambiarTexto);
