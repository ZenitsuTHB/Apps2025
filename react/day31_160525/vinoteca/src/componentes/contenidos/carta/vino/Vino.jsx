//import React, { useState } from 'react'
import './Vino.css'
import IMG from '../../../../entorno/Img'

const Vino = ({ vino, onMouseEnter/*, imagen */ }) => {


  return (
    <div onMouseEnter={onMouseEnter}>
      <img className="mx-auto d-block" src={`${IMG}/${vino.imagen}`} alt={vino.nombre} />
    </div>
  )
}

export default Vino