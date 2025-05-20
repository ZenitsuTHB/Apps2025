import React, { useContext } from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import { Context } from '../context/Context'
import profesoraUbicacion from './Ubicacion'

function Contenido() {

  const { profesora } = useContext(Context)
  return (
    <>
      <h1>{profesora.titulo}</h1>
      <h2>Disponibilidad</h2>
      <div className='botones'>
        <button>Profesora</button>
        <button>Lugar</button>
      </div>
      {profesoraUbicacion
          ? <Profesora />
          : <Ubicacion profesora={profesora} />
      }
    </>

  )
}

export default Contenido
