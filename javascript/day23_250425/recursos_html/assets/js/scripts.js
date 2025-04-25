//cargar componente de inicio
cargarSeccion('inicio')

//activar enlaces estáticos (barra de navegación)
let enlaces = document.querySelectorAll('nav span')

enlaces.forEach(enlace => enlace.onclick = function(ev) {
    let seccion = ev.target.getAttribute('data-seccion')
    cargarSeccion(seccion)
})

function cargarSeccion(seccion, id=null) {
    
    fetch(`html/${seccion}.html`)
    .then(response => response.text())
    .then(seccion => document.querySelector('#contenido').innerHTML = seccion)

}
