import React from 'react'
import './Detallevino.css'

const Detallevino = () => {
  return (
    <div id="marco">
        <div className="row">
            <div className="col justify-content-center">
                <img width="50%" src={require('../../../../img/block_nine.jpg')} alt='' className="img-responsive"/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <h3>nombre</h3>
                <h4>region</h4>
                <h4>uvas</h4>
                <h4>anyo</h4>
                <p>descripcion</p>
            </div>
        </div>
    </div>
  )
}

export default Detallevino