//acciones a realizar cuando se cargue el componente de alta

function alta() {
    //window.alert('SE ha cargado el componente de alta')

    //1. confeccionar la combo de categorias
    consultaCategorias()

    //2.activar listeners elementos estáticos del componente (botón de alta o formulario y previsualización de imagen)
    document.querySelector('#formalta').onsubmit = function(ev) {
        ev.preventDefault() //desactivando el comportamiento por defecto del evento submit (enviar el formulario al servidor)
        altaPelicula()
    }   

    document.querySelector('#portada').oninput = previsualizarImagen
}