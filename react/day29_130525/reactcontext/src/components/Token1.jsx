import React, { useContext, useRef } from 'react'
import image from '../assets/img/sinclair_zx_spectrum.png'
import { Context } from '../context/Context'

function Token1() {

  const { color } = useContext(Context)
  const token = useRef()

  return (
    <div ref={token} className='token'>
      <img src={image} alt="" />
      <h3>ZX Spectrum</h3>
    </div>
  )
}

export default Token1
