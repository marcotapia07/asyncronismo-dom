async function cargarContenidoAdicional() {
    try {
      
        const respuesta = await fetch('j.json');
        const contenido = await respuesta.json();

        document.getElementById('titulo').innerText = contenido.titulo;
        document.getElementById('parrafo').innerText = contenido.parrafo;
        document.getElementById('imagen').src = contenido.imagen;
    } catch (error) {
        console.error('Error al cargar contenido adicional:', error);
    }
}

document.getElementById('cargarContenido').addEventListener('click', cargarContenidoAdicional);
