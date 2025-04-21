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

function parserName(oldName) {
 // oldName = oldName.trim()
  let newName = ''

  for( let i = 0; i < oldName.length; i++)
  {
    if (oldName[i] === ' ')
    {
      newName += oldName[i];
      while (oldName[i] === ' ')
        i++;  
    }
    newName += oldName[i];
  }
  return newName;
}

function sendBox() {

  let name = document.querySelector('#name').value
  name = parserName(name)
  if(!name) { 
    alert('Sorry name is mandatory !') 
    return 
  }

  let material = document.querySelector('#material').value
  let dimension = document.querySelector('[name=dimension]:checked').value
  let comment = document.querySelector('#comments').value

  let msg = name + ' ha pedido una caja de [' + material + '] con unas dimensiones [' + dimension + '].'+ comment 
  document.querySelector('#message').value = msg
}

//OTHER WAYS
//document.querySelector('button').addEventListener('click', sendRequest)
  //document.querySelector('button').onclick = sendRequest

    /*function eliminarEspacios(texto) {
    
    while (texto.indexOf('  ') >=0) {
    texto = texto.replace('  ', ' ')
    }
    return texto
    }
      function eliminarEspaciosConsecutivos(texto) {
      while (texto.includes("  ")) {
        texto = texto.split("  ").join(" ");
      }
      return texto.trim();
    }

      function eliminarEspaciosConsecutivos(texto) {
    return texto.split(/\s+/).join(' ').trim();
      }
    }
    
    function trimmer(text) {
 
      console.log('hola esta es trimmer')
      let trimmed = text.trim()
      let res = '';
      let flag = false
      
     for(let i = 0; i < trimmed.length; i++)
      {
        if (trimmed[i] == ' ')
            flag = true
        if (flag === true)
        {
          res += ' ';
          while (trimmed[i] == ' ')
            i++
          flag = false
        }
        if (i < trimmed.length)
          res += trimmed[i]
      }
      console.log('this is the res \n',res)
      return(res) 
    }
    
    function sendRequest () {

  
      document.querySelector('#message').value = ''
      let name = document.querySelector("#name").value
      let material = document.querySelector('#material').value
    
      let dimension = document.querySelector('[name=dimension]:checked').value
      if (!dimension){
        window.alert('Dimension is null or undefined')
        return
      }
      console.log('entrada: \n', name)
      name = trimmer(name)
      console.log('salida: \n', name)

      let comments = document.querySelector('#comments').value.trim()

      if(name === '')
      {
        window.alert('Name is mandatory !')
        return        
      }
      let msg = name + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimension + '. ' + comments

      document.querySelector('#message').value = msg
    }
    */