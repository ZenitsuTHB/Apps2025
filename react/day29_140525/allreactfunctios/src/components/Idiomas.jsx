import React, { useContext } from 'react';
import banderaEs from '../img/spain.jpg';
import banderaFr from '../img/francia.png';
import banderaUk from '../img/uk.png';
import { Context } from '../context/Context';

function Idiomas() {

  const { setIdioma } = useContext(Context)
  return (
    <div className='idiomas'>
      <div className='bandera'>
        <img src={banderaEs} alt="bandera" onClick={() => setIdioma(0)} />
      </div>
      <div className='bandera'>
        <img src={banderaUk} alt="bandera" onClick={() => setIdioma(1)} />
      </div>
      <div className='bandera'>
        <img src={banderaFr} alt="bandera" onClick={() => setIdioma(2)} />
      </div>
    </div>
  );
}

export default Idiomas;
