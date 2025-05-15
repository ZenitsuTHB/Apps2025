import React from 'react'
import micros from '../datos/micros'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className='enlacesmicros'>
      {
        micros.map((micro, indice) => <Link key={indice} to={`/micro/${micro.micro}`}><img src={`img/${micro.imagen}`}></img></Link>)
      }
    </div>
  )
}

export default Inicio
