const API_CATEGORIAS = "https://movies.alcyon-it.com/api/categorias"

function consultaCategorias() {
    fetch(API_CATEGORIAS)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            throw (`Algo fue malamente: ${respuesta.status}`)
        } 
    })
    .then(categorias => {
        //console.log(categorias)
        //confeccionar las etiquetas <option value="id">nombre</option>
        let options = ''

        categorias.map(categoria => {
            options += `<option value="${categoria.id}">${categoria.nombre}</option>`
        })

        document.querySelector('#idcategoria').insertAdjacentHTML('beforeend', options)

    })
    .catch(error => window.alert(error))
}