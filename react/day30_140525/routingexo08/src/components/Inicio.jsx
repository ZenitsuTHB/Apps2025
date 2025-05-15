import React from 'react'
import micros from './Micros'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className='token'>
      <img
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*HkxuPf5NHcbXAvT0tNV3ig.png"
        alt="Banner de inicio"
      />
      <h1>Inicio</h1>

      {micros.map((micro, idx) => (
        <Link key={idx} to={`/micros/${micro.micro}`}>
          <img src={`img/${micro.imagen}`} alt={`${micro.micro}`} />
        </Link>
      ))}
    </div>
  )
}

export default Inicio
