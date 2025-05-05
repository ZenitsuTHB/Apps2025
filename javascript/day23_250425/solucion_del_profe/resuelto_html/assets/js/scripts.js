//cargar componente o sección de inicio
cargarSeccion('inicio')

//activar enlaces estáticos (barra de navegación)
let enlaces = document.querySelectorAll('.navbar-brand, .nav-link')

enlaces.forEach(enlace => enlace.onclick = function(ev) {
    let seccion = ev.target.getAttribute('data-seccion')
    
    //la función cargarSección es asíncrona de forma que la función que inicia el componente debe esperar obligatoriamente a que finalice la ejecución de la primera función (porque necesita acceder a un elmento del DOM del componente a cargar -combo-)
    cargarSeccion(seccion)  
})

//función para cargar cada una de los componentes de la aplicación SPA
function cargarSeccion(seccion, id=null) {
    
    fetch(`html/${seccion}.html`)
    .then(response => response.text())
    .then(seccionhtml => {
        document.querySelector('#contenido').innerHTML = seccionhtml
        iniciarComponente(seccion)
    })

}

function iniciarComponente(seccion, id) {
    //acciones que hay que realizar cuando se cargue cada componente
    switch (seccion) {
        case 'consulta':
            consulta()
            break;
        case 'alta':
            alta()
            break;
        default:
            break;
    }
}
