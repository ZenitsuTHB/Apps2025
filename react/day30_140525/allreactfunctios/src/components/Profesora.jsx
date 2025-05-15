import React, { useContext } from 'react';
//import foto from '../img/marta.PNG'; // Usamos 'import'
import { Context } from '../context/Context';

function Profesora() {
  const { profesora } = useContext(Context)
  return (
    <div className='profesora'>
      <h2>Profesora:</h2>
      <div className='foto'>
        <img src={profesora.foto} alt="profesora" />
      </div>
      <div className='nombre'>
        {profesora.nombre}
      </div>
    </div>
  );
}

export default Profesora;
