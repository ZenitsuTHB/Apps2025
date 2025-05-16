import React, { useEffect, useState } from 'react'
import Vino from '../vino/Vino'
import './Listavinos.css'
import API from '../../../../entorno/Api'

const Listavinos = () => {

  //creating  state variable
  const [wines, setWines] = useState([])

  //call the API to get the datas from it
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setWines(data);
        console.log(data)
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  }, []);
  return (
    <div className="row">
      <h2 className='text-center'>Gran selección de vinos <small>Todos en stock!</small></h2>
      <div className="row">
        <div className="listavinos animated fadeIn">
          {wines.map((vino, index) => (
            <Vino key={index} data={vino} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listavinos