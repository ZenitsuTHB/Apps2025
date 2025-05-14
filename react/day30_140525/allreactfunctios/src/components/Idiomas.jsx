import React from 'react';
import banderaEs from '../img/spain.jpg';
import banderaFr from '../img/francia.png';
import banderaUk from '../img/uk.png';

function Idiomas() {
  return (
    <div className='idiomas'>
      <div className='bandera'>
        <img src={banderaEs} alt="bandera" />
      </div>
      <div className='bandera'>
        <img src={banderaUk} alt="bandera" />
      </div>
      <div className='bandera'>
        <img src={banderaFr} alt="bandera" />
      </div>
    </div>
  );
}

export default Idiomas;
