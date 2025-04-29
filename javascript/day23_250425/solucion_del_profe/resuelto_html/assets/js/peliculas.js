const API_PELICULAS = "https://movies.alcyon-it.com/api/peliculas"

function consultaPeliculas() {
    //recuperar los valores que puedan tener los filtros de busqueda (titulo y categoría)
    let filtro = document.querySelector('#filtro').value.trim()
    let categoria = document.querySelector('#idcategoria').value 

    let api = API_PELICULAS

    if (filtro || categoria > 0) {
        api += `?categoria=${categoria}&filtro=${filtro}`
    }

    //utilizar la API fetch para consultar todas las películas y para cada película confeccionar su correspondiente ficha
    fetch(api)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            throw (`Algo fue malamente: ${respuesta.status}`)
        } 
    })
    .then(peliculas => {

        let fichas = ''

        peliculas.map(pelicula => {
            fichas += `<div class="card m-2 mb-5">`
            fichas += `<img class="card-img-top" src="${pelicula.img}">`
            fichas += `<div class="card-body">`
            fichas += `<h4 class="card-title">${pelicula.titulo}</h4>`
            //fichas += `<p class="card-text">${pelicula.sinopsis}</p>`
            fichas += `<p class="card-text"></p>`
            fichas += `<p class="card-text">Dirección: ${pelicula.direccion}</p>`
            fichas += `<p class="card-text">`
            fichas += `<small class="text-muted">Año: ${pelicula.anio}</small>`
            fichas += `</p>`
            fichas += `<span onclick="cargarSeccion('detalle', ${pelicula.id})" class="btn btn-outline-primary btn-block">Ver más...</span>&nbsp;`
            fichas += `<span onclick="cargarSeccion('mantenimiento', ${pelicula.id})" class="btn btn-outline-primary btn-block">Mantenimiento</span>`
            fichas += `</div>`
            fichas += `</div>`
        })

        //document.querySelector('.peliculas').insertAdjacentHTML('beforeend', fichas)
        document.querySelector('.peliculas').innerHTML = fichas

        //mostrar la alerta si no hay peliculas
        !fichas 
        ? document.querySelector('.alert').classList.remove('avisos')
        : document.querySelector('.alert').classList.add('avisos')

    })
    .catch(error => window.alert(error))

    /* 
    estructura ficha para cada película
    
    <div class="card m-2 mb-5">
      <img class="card-img-top" src="assets/img/sinportada.jpg">
      <div class="card-body">
          <h4 class="card-title">título pelicula</h4>
          <p class="card-text">sinopsis</p>
          <p class="card-text"></p>
          <p class="card-text">Dirección:</p>
          <p class="card-text">
            <small class="text-muted">Año:</small>
          </p>
          <span onclick="cargarSeccion('detalle', 'id')" class="btn btn-outline-primary btn-block">Ver más...</span>&nbsp;
          <span onclick="cargarSeccion('mantenimiento', 'id')" class="btn btn-outline-primary btn-block">Mantenimiento</span>
      </div>
    </div>
    */
}