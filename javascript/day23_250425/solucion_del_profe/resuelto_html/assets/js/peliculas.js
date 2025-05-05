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
            fichas += `<p class="card-text">Categoria: ${pelicula.categoria?.nombre}</p>`
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
          <p class="card-text">Categoria: </p>
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

function altaPelicula() {
    //recuperar las cajas de avisos y errores
    const avisosOK = document.querySelector('.alert-success')
    const avisosNOK = document.querySelector('.alert-danger')

    //ocultar las cajas de avisos y errores
    avisosOK.classList.add('avisos')
    avisosNOK.classList.add('avisos')
           
    //recuperar datos del formulario 
    let imagen = document.querySelector('#portada').files[0]
    let titulo = document.querySelector('#titulo').value.trim()
    let direccion = document.querySelector('#direccion').value.trim()
    let anio = document.querySelector('#anio').value
    let idcategoria = document.querySelector('#idcategoria').value
    let sinopsis = document.querySelector('#sinopsis').value.trim()

    //validar datos 

    //confeccionar el objeto formData
    const formdata = new FormData() 
    formdata.append ('titulo', titulo)
    formdata.append ('direccion', direccion)
    formdata.append ('anio', anio)
    formdata.append ('sinopsis', sinopsis)
    formdata.append ('idcategoria', idcategoria)
    if (imagen) formdata.append ('img', imagen); //no podemos enviar a la api un atributo img sin informar (o lo enviamos informado con una imagen o NO lo enviamos)

    //crear el objeto con los parámetros de la petición
    const parametros = {
        'method': 'POST', //alta de recurso (pelicula)
        'body': formdata //datos a enviar al servidor
    }

    //realizar la petición con la API Fetch
    fetch(API_PELICULAS, parametros)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            //lanzamos una excepcion con la respuesta en formato json porque la API, en caso de error, nos va a enviar un json con el array de errores
            throw (respuesta.json())
        }
    })
    .then(mensaje => {console.log(mensaje)
        //si la respuesta es correcta mostrar un mensaje de alta efectuada
        avisosOK.classList.remove('avisos')
    })
    .catch(error => error.then(er => {
        //si la respuesta no es correcta mostrar los errores que vendrán en formato array
        console.log(er)
        let errores = ''

        //recorrer el array de errores para confeccionar una caja para cada uno de ellos
        er.forEach(e => {
            errores += `<div>${e}</div>`
        })

        avisosNOK.innerHTML = errores //mostrar errores en la caja
        avisosNOK.classList.remove('avisos') //visualizar la caja
    }))
    
}

function previsualizarImagen(ev) {
    //recuperar la imagen seleccionada
    let imagen = ev.target.files[0]

    //obtener una url temporal para poder utilizarla en la etiqueta img
    let urlImagen = URL.createObjectURL(imagen)

    //modificar el atributo src de la etiqueta img para añadir la nueva url de la imagen
    document.querySelector('#previsualizar').setAttribute('src', urlImagen)

}