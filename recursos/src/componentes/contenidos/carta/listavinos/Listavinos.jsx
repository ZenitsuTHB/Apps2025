import React from 'react'
import Vino from '../vino/Vino'
import './Listavinos.css'

const Listavinos = () => {
  return (
    <div className="row">
        <h2 className='text-center'>Gran selección de vinos <small>Todos en stock!</small></h2>
        <div className="row">
          <div className="listavinos animated fadeIn">
            <Vino></Vino>
            <Vino></Vino>
            <Vino></Vino>
          </div>
      </div>
    </div>
  )
}

export default Listavinos