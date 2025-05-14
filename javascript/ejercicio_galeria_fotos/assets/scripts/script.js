//EJERCICIO 2.1 y 2.2 CREAR LA LIBRERIA DE SELECCION DE FOTOS y activar el evento DBLCLICK para cada foto

//array con el nombre de cada una de las fotos a mostrar
const FOTOTECA = ['casa1.jpg', 'casa2.jpg', 'casa3.jpg', 'casa4.jpg', 'casa5.jpg', 'casa6.jpg', 'casa7.jpg', 'casa8.jpg']

//array vacio con las fotos de la galeria
let galeria = []

//constante con el nodo galeria para añadir las fotos seleccionadas
const divGaleria = document.querySelector('#galeria')

//al cargar la página se ejecuta una función que confecciona los nodos de la fototeca
confeccionarFototeca()

//CHATGPT START, To add fotos to local storage 
leerGaleriaStorage()

function leerGaleriaStorage() {
    const galeriaStorage = localStorage.getItem('galeria')?.split(',')

    galeria = galeriaStorage ? galeriaStorage : []

    galeria.forEach(foto => {
        creaNodoGaleria(foto) // usamos creaNodoGaleria en lugar de agregarAGaleria para evitar conflicto de duplicados
    })
}

function guardarGaleriaStorage() {
    let galeriaTexto = galeria.join(',')
    localStorage.setItem('galeria', galeriaTexto)
}

function creaNodoGaleria(foto) {
    let div = document.createElement('div')
    div.classList.add('imagenesGaleria')

    let im1 = document.createElement('img')
    im1.setAttribute('src', `img/${foto}`)
    im1.onclick = function () { mostrarLightbox(foto) }
    im1.classList.add('imagenGaleria')

    let im2 = document.createElement('img') // corrected by chatgpt
    im2.setAttribute('src', 'img/borrar.png')
    im2.setAttribute('data-img', foto)
    im2.onclick = borrarFoto
    im2.classList.add('borrar')

    div.appendChild(im1)
    div.appendChild(im2)
    divGaleria.appendChild(div)
}
//CHATGPT END

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

    if (!foto) return // corrected by chatgpt – ignora valores vacíos

    //comprobar que la foto seleccionada no se encuentre ya en la galeria
    if (galeria.includes(foto)) {
        window.alert(`La foto ${foto} ya existe en la galería`)
        return
    }

    //añadir la foto a un array que llamaremos galeria y que, inicialmente estará vacio
    galeria.push(foto)

    //CHATGPT to add to local storage
    creaNodoGaleria(foto) // corrected by chatgpt
    guardarGaleriaStorage() // corrected by chatgpt

    // ❌ todo lo siguiente está duplicado de creaNodoGaleria, lo eliminamos // corrected by chatgpt
    /*
    let div = document.createElement('div')
    div.classList.add('imagenesGaleria')

    let img1 = document.createElement('img')
    img1.setAttribute('src', `img/${foto}`)
    img1.onclick = function () { mostrarLightbox(foto) }
    img1.classList.add('imagenGaleria')

    let img2 = document.createElement('img')
    img2.setAttribute('src', 'img/borrar.png')
    img2.setAttribute('data-img', foto)
    img2.onclick = borrarFoto
    img2.classList.add('borrar')

    div.appendChild(img1)
    div.appendChild(img2)
    divGaleria.appendChild(div)
    */
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

    //CHATGPT to add to the local storage
    guardarGaleriaStorage() // corrected by chatgpt
}

//activar el evento para cerrar el lightbox
document.querySelector('#lightbox').onclick = function (ev) {
    //ev.target hace referencia al elemento específico sobre el que se ha interactuado (click)
    //ev.currentTarget hace referencia al elemento que lleva asociado el evento click
    ev.currentTarget.style.display = 'none'
    ev.currentTarget.classList.remove('visible') // 🔁 reset pour la prochaine fois
}

function mostrarLightbox(foto) {
    //informar el atributo src con la foto a mostrar
    document.querySelector('#fotoLightbox').setAttribute('src', `img/${foto}`)

    //mostrar el lightbox
    document.querySelector('#lightbox').style.display = 'flex'

    //CHATGPT
    // attendre que l’image charge pour appliquer la classe visible
    img.onload = () => {
        lightbox.classList.add('visible')
    }
}
