//-->Activar eventos para el documento
//-->Recoger los datos
// 1)name
//    parser name
// 2)material type
// 3)dimension
// 4)comments if have
//-->concatenate name + ha pedido una caja de + material type. + con unas dimensiones
//  + dimension + comments

document.querySelector('button').addEventListener('click', sendBox)

function parserName(oldname) {
  let tmpName = ' '
  let newName = oldname.trim()

  for( let i = 0; i < newName.size; i++)
  {
    if (tmpName[i] == ' ')
    {
      i++; 
      continue;
    }
    if (i < tmpName.size)
      newName += tmpName

  }
  return newName;
}

function sendBox() {

  let name = document.querySelector('#name').value
  name = parserName(name)
  alert(name)
  if(!name) { 
    alert('Sorry name is mandatory !') 
    return 
  }

  let material = document.querySelector('#material').value
  let dimension = document.querySelector('[name=dimension]:checked').value
  let comment = document.querySelector('')

  let msg = name + 'ha pedido una caja de ' + material + dimension + comment 
  document.querySelector('#message').value = msg
}