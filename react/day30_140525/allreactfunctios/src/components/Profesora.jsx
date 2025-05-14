import React from 'react';
import foto from '../img/marta.PNG'; // Usamos 'import'

function Profesora() {
  return (
    <div className='profesora'>
      <h2>Profesora:</h2>
      <div className='foto'>
        <img src={foto} alt="profesora" />
      </div>
      <div className='nombre'>
        Nombre profesora
      </div>
    </div>
  );
}

export default Profesora;
