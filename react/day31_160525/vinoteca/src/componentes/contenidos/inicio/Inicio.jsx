import React from 'react'
import IMG from '../../../entorno/Img'

const Inicio = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center">Bienvenido a nuestra bodega de vinos</h1>
      <img className="mx-auto d-block img-fluid" style={{ opacity: 0.7 }} src={`${IMG}/home.png`} alt='' />
      <h3 className="text-center mt-5">Calidad y servicio al mejor precio</h3>
    </div>
  )
}

export default Inicio