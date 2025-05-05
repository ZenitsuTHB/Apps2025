//PARTE 1: Formulario alta
/*
    Al pulsar el botón de alta se trasladará el nombre y apellidos de la persona que hemos informado en el formulario a la tabla situada debajo previa validación de los datos (nombre y apellidos son obligatorios). Una vez se hayan trasladado se limpiará el formulario
*/

document.querySelector('#alta').onclick = addUser

//SAVE DATAS AND MODIFY THEM IN LOCAL STORAGE
//Rebuild the table when page loaded
document.addEventListener('DOMContentLoaded', loadTableFromStorage);

function loadTableFromStorage() {
    //clean the table before loading it
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';//erase all the existente ROWS
    //Getting datas from localstorage
    const savedData = JSON.parse(localStorage.getItem('tableData')) || [];
    if (savedData && savedData.expiry > Date.now()) {
        if (savedData.data && Array.isArray(savedData.data)) {
            savedData.data.forEach(rowData => {
                const [name, firstName] = rowData;
                addRows(name, firstName)
            });
        }
    }
    else {
        localStorage.removeItem('tableData');
        //alert('Datas has been expired !, ADD new ones');
        return;
    }
}

function addRowToStorage(rowElement) {

    const cells = rowElement.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent.trim());
    //cells.forEach(cell => { rowData.push(cell.textContent.trim()) });
    const savedData = JSON.parse(localStorage.getItem('tableData')) || {
        data: [],
        expiry: Date.now() + (1 * 1 * 30 * 60 * 1000)
    };
    savedData.data.push(rowData);
    localStorage.setItem('tableData', JSON.stringify(savedData));
}

function modifyRowInStorage(currentRow) {

    const cells = currentRow.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent.trim())
    // GET the datas saved in local Storage
    const savedData = JSON.parse(localStorage.getItem('tableData')) || {
        data: [],
        expiry: Date.now() + (1 * 1 * 30 * 60 * 1000)
    };
    // GET the index of the modified ROW
    const rowIndex = Array.from(currentRow.parentNode.children).indexOf(currentRow);
    savedData.data[rowIndex] = rowData;
    localStorage.setItem('tableData', JSON.stringify(savedData))
}

//FUNCTION TO ADD A ROW
//look for the tbody and find the table
//creating new ROW ('tr)
//creating the CELLS in the ROW ('td')
//Assigning the cells to their respective class (className) create it
//Assigning values to the cells (textContent)
//Add the cells to the ROW (row.appendChild)
//Add the ROW to the table, tbody (table.appendChild)

function addRows(name, firstName) {

    const tbody = document.querySelector('table tbody');
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    const firstnameCell = document.createElement('td');

    nameCell.className = 'nombre'
    firstnameCell.className = 'apellidos'

    nameCell.textContent = name;
    firstnameCell.textContent = firstName;

    newRow.appendChild(nameCell);
    newRow.appendChild(firstnameCell);
    tbody.appendChild(newRow);
}

function addUser() {

    let name = document.querySelector('#nombre').value.replace(/\s+/g, ' ');
    let firstName = document.querySelector('#apellidos').value.replace(/\s+/g, ' ');
    if (!name || !firstName) {
        alert("Name and firstname is mandatory !\n");
        return;
    }
    addRows(name, firstName);
    //Save the last row added
    const lastRow = document.querySelector('table tbody tr:last-child');
    addRowToStorage(lastRow);
    document.querySelector('form').reset()
}

//PARTE 2: TABLA CONSULTA
/*
    Al pulsar sobre una fila de la tabla (que no sea la de las cabeceras) se trasladará el nombre y apellidos de la fila pulsada a  los inputs del formulario y se activarán los botones de modificación y baja (que inicialmente están desactivados)
*/

// Select the <tbody>, Add Events for the parent container -> <tbody>
// .addEventListener('click', function (ev) { ... })
// Detect which row was clicked on
// ev.target.closest('tr')

document.querySelector('tbody').addEventListener('click', function (ev) {

    const currentRow = ev.target.closest('tr');
    if (!currentRow) return;
    modifyForm({ currentTarget: currentRow })
});

let lastTr = null;

function modifyForm(ev) {

    const currentRow = ev.currentTarget;
    const nombre = currentRow.querySelector('.nombre').innerText.trim()
    const apellidos = currentRow.querySelector('.apellidos').innerText.trim()

    document.querySelector('#nombre').value = nombre
    document.querySelector('#apellidos').value = apellidos

    //document.querySelector('#baja').removeAttribute('disabled')
    //document.querySelector('#modi').removeAttribute('disabled')
    //document.querySelector('#alta').setAttribute('disabled', true)

    lastTr = currentRow;
}

//PARTE 3: DATA's MODIFICATION
/*
Al pulsar el botón de modificación se modificará el nombre y apellidos de la persona que hemos seleccionado antes en la tabla y se trasladarán los cambios a la tabla situada debajo previa validación de los datos (nombre y apellidos son obligatorios).
*/

document.querySelector('#modi').addEventListener('click', modifyData);

function modifyData() {

    let newName = document.querySelector('#nombre').value.replace(/\s+/g, ' ')
    let newFirstName = document.querySelector('#apellidos').value.replace(/\s+/g, ' ')

    if (!newName || !newFirstName) {
        alert('Nombre y apellidos son obligatorios.');
        return;
    }
    lastTr.querySelector('.nombre').innerText = newName
    lastTr.querySelector('.apellidos').innerText = newFirstName
    modifyRowInStorage(lastTr);
    document.querySelector('form').reset()
}

//PARTE 4: FORMULARIO BAJA
/*
Al pulsar el botón de baja se borrará la persona que hemos seleccionado antes de la tabla.
Una vez borrada se desactivarán los botones de baja y modificación
*/


/*/TEACHER's SOLUTION

//---------------------| PARTE 1 Formulario alta |-------------------//

-----------------------| innerHTML adjacentHTML  |-----------

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
</script>
*/