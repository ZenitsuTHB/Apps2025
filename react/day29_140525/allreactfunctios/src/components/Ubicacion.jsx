import React from 'react';

function Ubicacion({ profesora }) {
  return (
    <div className='ubicacion'>
      <h2>Lugar:</h2>
      <div className='direccion'>
        {profesora.dirección}
      </div>
    </div>
  );
}

export default Ubicacion;
