//TEACHER's SOLUTION

//---------------------| PARTE 1 Formulario alta |-------------------//

//-----------------------| innerHTML adjacentHTML  |-----------

// CONSTANT FOR VERSION 0.1 && VERSION 0.0, vulnerable to injection XSS (Cross-Site Scripting)

const FORM = document.querySelector('form')
const TBODY = document.querySelector('tbody')
const BOTONBAJA = document.querySelector('#baja')
const BOTONMODI = document.querySelector('#modi')
let tr = null; // Global that allows us to know which ROW we've click on

document.querySelector('#alta').onclick = insertarUsuario

function addUser_v0_0()
{
    let nombre = document.querySelector('#nombre').value.trim()
    let apellidos = document.querySelector('#apellidos').value.trim()
    if (nombre === '' || apellidos === '') {
        alert('Por favor, introduce nombre y apellidos.');
        return;
    }
        let filaHTML = `<tr onclick='modificarFomulario(event)'> <td class="nombre">$
        {nombre} </td> <td class="apellidos"> ${apellidos}</td> </tr>`
        document.querySelector('tbody').insertAdjacentHTML('beforeend', filaHTML)
        FORM.reset()
}

function addUser_v0_1()
{
    document.querySelector('#alta').onclick = altaPersona
    function altaPersona() {

        //recuperar datos
        let nombre = document.querySelector('#nombre').value.trim()
        let apellidos = document.querySelector('#apellidos').value.trim()
        //validar los datos
        if (!nombre || !apellidos) {
            alert('Nombre y apellidos obligatorios')
            return
        }
        //confeccionar una fila de la tabla
        let fila = `<tr onclick='trasladarDatos(event)'><td>${nombre}</td> <td>$
        {apellidos}</td></tr>`
        //enviar la fila en la tabla
        TBODY.insertAdjacent('beforeend', fila)
        //limpiar el formulario
        FORM.reset() //limpiar el formulario.
        // ----reset()= Restablecer los valores por defector del formulario-----
    }
}

function trasladarDatos(ev)
{
    //recuperar nombre y apellidos de la fila pulsada
    let TD = ev.target  //etiquetas td (nombre o apellidos)
    TD.closest('tr')   //buscar la etiqueta tr que engloba las td
    let nombre = TD.querySelector('.nombre').innerHTML
    let apellidos = TD.querySelector('.apellidos').innerHTML
    document.querySelector(#nombre).value = nombre
    document.querySelector(#apellidos).value = apellidos
}

//----------------| PARTE 2 Consulta de datos |-------------------------//

document.querySelectorAll('tbody tr').forEach(fila => {
    //fila.addEventListener('click', modificarFomulario);
    fila.onclick = modificarFomulario;
})

function modificarFomulario(ev) {
    const fila = ev.currentTarget;
    const nombre = fila.querySelector('.nombre').innerText.trim();
    const apellidos = fila.querySelector('.apellidos').innerText.trim();
    document.querySelector('#nombre').value = nombre;
    document.querySelector('#apellidos').value = apellidos;

//activar botones eliminando el atributo disabled
BOTONMODI.removeAttribute('disabled')
BOTONBAJA.removeAttribute('disabled')
tr = fila; 

}

//----------------| PARTE 3 Formulario modificación |-------------------------//

BOTONMODI.onclick=modificarPersona
function modificarPersona()
{
    //recuperar los datos del formulario
    let nombre = document.querySelector('#nombre').value.trim()
    let apellidos = document.querySelector('#apellidos').value.trim()
    //validar los datos ------------siempre es mejor validar los datos. OJO EN EL EXAMEN.
    if (!nombre || !apellidos) {
        alert('Nombre y apellidos son obligatorios.');
        return;
    }

//enviar los datos a la fila que corresponda
//opción 1
tr.querySelector('.nombre').innerText = nombre
tr.querySelector('.apellidos').innerText = apellidos
}
//A collection of nodes is like a list of array and you access them the same way

//----------------| PARTE 4: Formulario baja |-------------------------//

BOTONBAJA.onclick = darseBajar
function darseBajar(){
    //tr.parentNode.removeChild(tr) // borrar un nodo hijo desde el nodo padre
    tr.remove()
    FORM.reset()

//desactivar los botones de modificar y baja
BOTONMODI.setAttribute('disabled', true)
BOTONBAJA.setAttribute('disabled',true)
}
