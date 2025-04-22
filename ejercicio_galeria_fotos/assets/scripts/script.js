//EJERCICIO 2.1 y 2.2 CREAR LA LIBRERIA DE SELECCION DE FOTOS y activar el evento DBLCLICK para cada foto

//array con el nombre de cada una de las fotos a mostrar
const FOTOTECA = ['casa1.jpg', 'casa2.jpg', 'casa3.jpg', 'casa4.jpg', 'casa5.jpg', 'casa6.jpg', 'casa7.jpg', 'casa8.jpg']

//array vacio con las fotos de la galeria
let galeria = []

//constante con el nodo galeria para añadir las fotos seleccionadas
const divGaleria = document.querySelector('#galeria')

//al cargar la página se ejecuta una función que confecciona los nodos de la fototeca
confeccionarFototeca()

//función para confeccionar los nodos de la fototeca
function confeccionarFototeca() {
    const divFotos = document.querySelector('#fotos')

    //crear un nodo <img> para cada elemento del array
    FOTOTECA.forEach(foto => {
        let img = document.createElement('img')
        img.setAttribute('src', `img/${foto}`)
        img.ondblclick = function () { agregarAGaleria(foto) } //pasar el nombre de la foto como parámetro de entrada a la función
        divFotos.appendChild(img)
    })
}

//EJERCICIO 3: AÑADIR LAS FOTOS SELECCIONADAS DE LA FOTOTECA EN LA GALERIA
function agregarAGaleria(foto) {
    //comprobar que la foto seleccionada no se encuentre ya en la galeria
    if (galeria.includes(foto)) {
        window.alert(`La foto ${foto} ya existe en la galería`)
        return
    }

    //añadir la foto a un array que llamaremos galeria y que, inicialmente estará vacio
    galeria.push(foto)

    //confeccionar el nodo correspondiente a la foto utilizando una función crearNodoGaleria
    /*
    <div class='imagenesGaleria'>
        <img class = ‘imagenGaleria’ src='img/nombreImagen.jpg'>
        <img class='borrar' src='img/borrar.png' data-img='nombreImagen.jpg'>
    </div>
    */
    //crear el nodo de la caja contenedora
    let div = document.createElement('div')
    div.classList.add('imagenesGaleria')

    //crear el nodo de la imagen seleccionada
    let img1 = document.createElement('img')
    img1.setAttribute('src', `img/${foto}`)
    img1.classList.add('imagenGaleria')

    //crear el nodo de la imagen para borrar
    let img2 = document.createElement('img')
    img2.setAttribute('src', 'img/borrar.png')
    img2.setAttribute('data-img', foto)
    img2.onclick = borrarFoto
    img2.classList.add('borrar')

    //trasladar los nodos de imagen dentro de la caja contenedora
    div.appendChild(img1)
    div.appendChild(img2)

    //trasladar la caja contenedora dentro de la galeria
    divGaleria.appendChild(div)
}

function borrarFoto(ev) {
    //recuperar el nombre de la foto
    let nombreFoto = ev.target.getAttribute('data-img')

    //buscar el nombre en el array para conocer el índice
    let indiceFoto = galeria.indexOf(nombreFoto)

    //borrar el elemento del array
    galeria.splice(indiceFoto, 1)

    //borrar el nodo de la caja galeria
    document.querySelectorAll('.imagenesGaleria')[indiceFoto].remove()
}

//EJERCICIO 5.1: AMPLIACIÓN FOTO GALERIA SOBRE LA QUE CLICAMOS(1a PARTE)
