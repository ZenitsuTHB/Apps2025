import React, { useEffect, useState } from 'react'

const Chuck = () => {
  const [chiste, setChiste] = useState()
  const API = 'https://api.chucknorris.io/jokes/random'

  function otroChiste() {
    fetch(API)
    .then(resp => resp.json())
    .then(datos => setChiste(datos.value))
    .catch(error => console.log(error))
  }  

  //ejecutar la función una sola vez al cargar el componente
  useEffect(() =>{otroChiste()},[]) 

  return (
    <div>
        <h3>Chistecillo malo de Chuck:</h3>
        <p>{chiste}</p>
        <button onClick={otroChiste}>Otro chiste</button>
    </div>
  )
}

export default Chuck
