import React from 'react'
import './Notfound.css'
import IMG from '../../../entorno/Img'

const Notfound = () => {
  return (
    <div>
      <h1 className="text-center">Ooooooooppss!</h1>
      <img className='notfnd' alt='' src={`${IMG}/sinbotella.jpg`}></img>
    </div>
  )
}

export default Notfound