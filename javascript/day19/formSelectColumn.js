//PARTE 1: Formulario alta
/*
Al pulsar el botón de alta se trasladará el nombre y apellidos de la persona que hemos informado en el formulario a la tabla situada debajo previa validación de los datos (nombre y apellidos son obligatorios).
Una vez se hayan trasladado se limpiará el formulario
*/

document.querySelector('#alta').onclick = addToList
//Rebuild the table when page loaded
document.addEventListener('DOMContentLoaded', loadTableFromStorage);
function loadTableFromStorage() 
{
    //clean the table before loading it
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';//erase all the existente ROWS

    //Getting datas from localstorage
    const savedData = JSON.parse(localStorage.getItem('tableData')) || [];
    if (savedData && savedData.expiry > Date.now())
    {
        if (savedData.data && Array.isArray(savedData.data))
        {
            savedData.data.forEach(rowData => {
                const [name, firstName] = rowData;
                addRows(name, firstName)
            });
        }
    }
    else
    {
        localStorage.removeItem('tableData');
        //alert('Datas has been expired !, ADD new ones');
        return ;
    }   
}

function addRowToStorage(rowElement)
{
    const cells = rowElement.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent.trim());

   //cells.forEach(cell => { rowData.push(cell.textContent.trim()) });
    const savedData = JSON.parse(localStorage.getItem('tableData')) || {
        data: [],
        expiry: Date.now() + (1 * 1 * 30 * 60 * 1000)
    };
    savedData.data.push(rowData);
    localStorage.setItem('tableData', JSON.stringify(savedData));
    
    console.log(localStorage)
}

//FUNCTION TO ADD A ROW
function addRows(name, firstName)
{
    //look for the tbody and find the table
    const tbody = document.querySelector('table tbody');
    //creating new ROW
    const newRow = document.createElement('tr');

    //creating the CELLS in the ROW
    const nameCell = document.createElement('td');
    const firstnameCell = document.createElement('td');

    //Assigning the cells to their respective class
    nameCell.className = 'nombre'
    firstnameCell.className = 'appellidos'

    //Assigning values to the cells 
    nameCell.textContent = name;
    firstnameCell.textContent = firstName;

    //Add the cells to the ROW
    newRow.appendChild(nameCell);
    newRow.appendChild(firstnameCell);

    //Add the ROW to the table, tbody
    tbody.appendChild(newRow);
}

function addToList()
{
    let name = document.querySelector('#nombre').value.trim()
    name = name.replace(/\s+/g, ' ');
    let firstName = document.querySelector('#apellidos').value.trim()
    firstName= firstName.replace(/\s+/g, ' ');
    if(!name || !firstName)
    {
        alert("Name and firstname is mandatory !\n")
        return ;
    }
    addRows(name, firstName);
    //Save the last row added
    const lastRow = document.querySelector('table tbody tr:last-child');
    addRowToStorage(lastRow);
    document.querySelector('#nombre').value = ''
    document.querySelector('#apellidos').value = ''
}

//PARTE 2: TABLA CONSULTA
/*
Al pulsar sobre una fila de la tabla (que no sea la de las cabeceras) se trasladará el nombre y apellidos de la fila pulsada a  los inputs del formulario y se activarán los botones de modificación y baja (que inicialmente están desactivados)
*/

// button 
// name and firstName returns to their respectives inputs field
// and the modification button and baja button will be activated

       
//PARTE 3: FORM MODIFICATION
/*
Al pulsar el botón de modificación se modificará el nombre y apellidos de la persona que hemos seleccionado antes en la tabla y se trasladarán los cambios a la tabla situada debajo previa validación de los datos (nombre y apellidos son obligatorios).
*/

//PARTE 4: FORMULARIO BAJA
/*
Al pulsar el botón de baja se borrará la persona que hemos seleccionado antes de la tabla.
Una vez borrada se desactivarán los botones de baja y modificación 
*/
