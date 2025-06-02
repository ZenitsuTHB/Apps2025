import React, { useEffect, useState } from 'react'
import './Detallevino.css'
import API from '../../../../entorno/Api'
import IMG from '../../../../entorno/Img'

const Detallevino = ({ id }) => {
    const [wine, setWine] = useState(null)
    //const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return;
        fetch(`${API}/${id}`)
            .then(response => {
                if (response.status === 404) {
                    throw new Error('That\'s crazy man, (º_º), there\'s no such Wine !')
                }
                return response.json()
            })
            .then(data => {
                setWine(data)
            })
            .catch(error => alert(`We have found a problem while fetching -> ${error}`))
    }, [id]);
    if (!wine) return <p>Cargando vino ... (º_º)</p>

    return (
        <div id="marco">
            <div className="row">
                <div className="col justify-content-center">
                    <img width="50%" src={`${IMG}/${wine.imagen}`} alt={wine.nombre} className="img-responsive"
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h3>{wine.nombre}</h3>
                    <h4>{wine.region}</h4>
                    <h4>{wine.uvas}</h4>
                    <h4>{wine.anyo}</h4>
                    <p>{wine.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default Detallevino