import React from 'react'
import { useParams } from 'react-router-dom'
import micros from './Micros'

function Tokenmicro() {

  const datas = useParams()

  const datasmicro = micros.find(micro => micro.micro === datas.nombre)

  return (
    <div className='token'>
      <img src={`img/${datasmicro.imagen}`} alt="" />
      <h3>{datasmicro.micro}</h3>
      <p>{datasmicro.modelo}</p>
    </div>
  )
}

export default Tokenmicro
