//PARTE 1: Formulario alta
/*
    Al pulsar el botón de alta se trasladará el nombre y apellidos de la persona que hemos informado en el formulario a la tabla situada debajo previa validación de los datos (nombre y apellidos son obligatorios). Una vez se hayan trasladado se limpiará el formulario
*/

//GLOBALES

let lastTr = null;
const FORM = document.querySelector('form')

//SAVE DATAS AND MODIFY THEM IN LOCAL STORAGE
//Rebuild the table when page loaded
document.addEventListener('DOMContentLoaded', loadTableFromStorage);

//TABLE FROM STORAGE
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
        return;
    }
}

//ROW TO STORAGE
function addRowToStorage(rowElement) {

    const cells = rowElement.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent.trim());
    //cells.forEach(cell => { rowData.push(cell.textContent.trim()) });
    const savedData = JSON.parse(localStorage.getItem('tableData')) || {
        data: [],
        expiry: Date.now() + (1 * 1 * 5 * 60 * 1000)
    };
    savedData.data.push(rowData);

    localStorage.setItem('tableData', JSON.stringify(savedData));

}

//MODIFY STORAGE
function modifyRowInStorage(currentRow) {

    const cells = currentRow.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent.trim())
    // GET the datas saved in local Storage
    const savedData = JSON.parse(localStorage.getItem('tableData')) || {
        data: [],
        expiry: Date.now() + (1 * 1 * 5 * 60 * 1000)
    };
    // GET the index of the modified ROW
    const rowIndex = Array.from(currentRow.parentNode.children).indexOf(currentRow);
    savedData.data[rowIndex] = rowData;
    localStorage.setItem('tableData', JSON.stringify(savedData))
}

document.querySelector('#alta').onclick = addUser

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
    //Save the last ROW added
    lastTr = document.querySelector('table tbody tr:last-child');
    addRowToStorage(lastTr);
    lastTr = null;
    FORM.reset()
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
    moveDataToInputField({ currentTarget: currentRow })
});


function activateButtonsOr(choice) {

    if (choice === 1) {
        document.querySelector('#baja').removeAttribute('disabled')
        document.querySelector('#modi').removeAttribute('disabled')
        document.querySelector('#alta').setAttribute('disabled', true)
    }
    else {
        document.querySelector('#alta').removeAttribute('disabled');
        document.querySelector('#baja').setAttribute('disabled', true);
        document.querySelector('#modi').setAttribute('disabled', true);
    }

}

function moveDataToInputField(ev) {

    const currentRow = ev.currentTarget;
    const nombre = currentRow.querySelector('.nombre').innerText.trim()
    const apellidos = currentRow.querySelector('.apellidos').innerText.trim()

    document.querySelector('#nombre').value = nombre
    document.querySelector('#apellidos').value = apellidos
    activateButtonsOr(1);
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
    activateButtonsOr(2);
    FORM.reset()
}

//PARTE 4: FORMULARIO BAJA
/*
Al pulsar el botón de baja se borrará la persona que hemos seleccionado antes de la tabla.
Una vez borrada se desactivarán los botones de baja y modificación
*/

document.querySelector('#baja').addEventListener('click', removeData);

function removeData() {

    //lastTr.parentNode.removeChild(lastTr);
    lastTr.remove();
    
     // Supprimer du localStorage
     const savedData = JSON.parse(localStorage.getItem('tableData')) || { data: [], expiry: Date.now() + (1 * 60 * 1000) };
     const index = Array.from(document.querySelector('tbody').children).indexOf(lastTr);
     if (index >= 0) {
         savedData.data.splice(index, 1);
     }
 
     localStorage.setItem('tableData', JSON.stringify(savedData));
 
     // Réinitialiser
     lastTr = null;
    activateButtonsOr(2);
    FORM.reset()
}

