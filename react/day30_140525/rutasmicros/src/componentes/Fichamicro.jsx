import React from 'react'
import {useParams} from 'react-router-dom'
import micros from '../datos/micros'

function Fichamicro() {
  const datos = useParams()
  console.log(datos) // objeto que contiene un parámetro

  const datosmicro=micros.find(micro=>micro.micro == datos.nombre)

  if (!datosmicro) {
    return <h2>Micro no encontrado</h2>;
  }

  return (
    <div className='ficha'>
      <img src={`/img/${datosmicro.imagen}`} alt={datosmicro.micro}/>
      <h3>{datosmicro.micro}</h3>
      <p>{datosmicro.precio} $</p>
    </div>
  )
}

export default Fichamicro
