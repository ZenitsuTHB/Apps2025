import React, { useEffect, useState } from 'react'
import Vino from '../vino/Vino'
import './Listavinos.css'
import API from '../../../../entorno/Api'
//const imgBaseUrl = 'https://alcyon-it.com/APIS/vinoteca/assets/img';


const Listavinos = () => {
  //creating  state variable
  const [wines, setWines] = useState([])
  const [thisId, setThisId] = useState(null)
  //call the API to get the datas from it
  useEffect(() => {
    if (thisId !== null) {
      fetch(`${API}/${thisId}`)
        .then(response => response.json())
        .then(data => {
          /*const withImages = data.map(vino => ({
            ...vino,
            imagen: `${imgBaseUrl}/${vino.imagen}`,
          }));*/
          setWines(data);
          //console.log(withImages)
        })
        .catch(error => {
          console.error("Error al obtener datos:", error);
        });
    }
  }, [thisId]);
  return (
    <div className="row">
      <h2 className='text-center'>Gran selección de vinos <small>Todos en stock!</small></h2>
      <div className="row">
        <div className="listavinos animated fadeIn">
          {wines.map((vino, index) => (
            <Vino vino={vino} key={vino.id} /*imagen={vino.imagen}*/ />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listavinos