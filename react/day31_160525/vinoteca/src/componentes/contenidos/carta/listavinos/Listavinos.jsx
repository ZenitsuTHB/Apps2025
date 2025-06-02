import React, { useEffect, useState } from 'react'
import Vino from '../vino/Vino'
import './Listavinos.css'
import API from '../../../../entorno/Api'
//const imgBaseUrl = 'https://alcyon-it.com/APIS/vinoteca/assets/img';
import Detallevino from '../detallevino/Detallevino'

const Listavinos = () => {
  //creating  state variable
  const [wines, setWines] = useState([])
  const [thisId, setThisId] = useState(null)
  //call the API to get the datas from it
  useEffect(() => {
    // console.log(thisId)
    // if (thisId !== null) {
    fetch(`${API}`)
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
    // }
  }, []);
  return (
    <div className="row">
      <h2 className='text-center'>Gran selección de vinos <small>Todos en stock!</small></h2>
      <div className="row">
        <div className="listavinos animated fadeIn">
          {
            wines.length > 0 ? wines.map((vino) => (
              <div
                key={vino.id}
                onMouseEnter={() => setThisId(vino.id)}
                onMouseLeave={() => setThisId(null)}
              >
                <Vino vino={vino} /*imagen={vino.imagen}*/ />
              </div>
            )) : <h1>No hay vinos disponibles  ... (*_*) !*?#</h1>}
        </div>
        {thisId && <Detallevino id={thisId} />}
      </div>
    </div>
  )
}

export default Listavinos