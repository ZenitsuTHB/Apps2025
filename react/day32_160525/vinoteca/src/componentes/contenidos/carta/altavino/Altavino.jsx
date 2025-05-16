import React from 'react'
import './Altavino.css'

const Altavino = () => {
  return (
    <div className='row'>
      <div className='column col-8'>
        <form>
          <div className="mb-3">
            <label className="form-label">NOMBRE</label>
            <input type="text" className="form-control uppercase" placeholder="NOMBRE" autoFocus/>
          </div>
          <div className="mb-3">
            <label className="form-label">País</label>
            <input type="text" className="form-control capitalize" placeholder="País" />
          </div>
          <div className="mb-3">
            <label className="form-label">Región</label>
            <input type="text" className="form-control capitalize" placeholder="Región" />
          </div>
          <div className="mb-3">
            <label className="form-label">Uvas</label>
            <input type="text" className="form-control capitalize" placeholder="Uvas" />
          </div>
          <div className="mb-3">
            <label className="form-label">Año</label>
            <input type="number" min='1800' max='2100' className="form-control capitalize" placeholder="Año" />
          </div>
          <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input type="file" className="form-control" accept='image/*'/>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea rows='8' className="form-control capitalize"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">Alta vino</button>
            <button type="reset" className="btn btn-warning">Limpiar</button>
          </div>
        </form>
      </div>
      <div className='column col-4'>
          <br></br>
          <img src='./img/sinbotella.jpg' alt="previsualizar" id='previsualizar'/>
      </div>
    </div>
  )
}

export default Altavino