//import React, { useState } from 'react'
import './Vino.css'
import IMG from '../../../../entorno/Img'

const Vino = ({ vino /*, imagen */ }) => {


  return (
    <div>
      <img className="mx-auto d-block" src={`${IMG}/${vino.imagen}`} alt={vino.nombre} />
    </div>
  )
}

export default Vino