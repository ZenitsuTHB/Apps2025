import React from 'react'
import { useParams } from 'react-router-dom'

function C() {
  const parametros = useParams()

  console.log(parametros)

  return (
    <div>
      <h1>Página 3</h1>
      <p>El parámetro recibido es {parametros.id}</p>
    </div>
  )
}

export default C
