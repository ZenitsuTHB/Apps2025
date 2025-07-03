import React from 'react';

const objetosMagicos = [
  {
    nombre: 'Varita de Saúco',
    descripcion: 'La varita más poderosa, parte de las Reliquias de la Muerte.',
    imagen: 'https://staticdelivery.nexusmods.com/mods/2673/images/6787/6787-1658643057-1203170543.png',
  },
  {
    nombre: 'Snitch Dorada',
    descripcion: 'Pelota pequeña usada en el Quidditch, difícil de atrapar.',
    imagen: 'https://preview.redd.it/a0iwmvrt1lk61.jpg?width=640&crop=smart&auto=webp&s=3b956361a6d4d227eecff37a29a5c513e29ab834',
  },
  {
    nombre: 'Mapa del Merodeador',
    descripcion: 'Mapa mágico que muestra la ubicación de todos en Hogwarts.',
    imagen: 'https://wallpapersok.com/images/high/marauders-map-from-harry-potter-bfysqiyu0x7liolg.webp',
  },
  {
    nombre: 'Capa de Invisibilidad',
    descripcion: 'Capa mágica que vuelve invisible a quien la lleve puesta.',
    imagen: 'https://windlass.com/wp-content/uploads/2017/11/0002448_0.jpeg',
  },
];

const Objetos = () => {
  return (
    <div className="objetos-container">
      <h2 className="objetos-title">Objetos Mágicos Famosos</h2>
      <div className="objetos-grid">
        {objetosMagicos.map((objeto, index) => (
          <div key={index} className="objeto-card">
            <img src={objeto.imagen} alt={objeto.nombre} className="objeto-img" />
            <h3 className="objeto-nombre">{objeto.nombre}</h3>
            <p className="objeto-descripcion">{objeto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objetos;
