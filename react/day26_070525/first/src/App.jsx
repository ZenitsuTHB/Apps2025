//elementos que necesita el componente

import logo from './logo.svg';
import killer from './img/kill-bill.jpg';
import binguers from './img/los_bingueros.jpg';
import sawer from './img/saw.jpg';
import portada from './img/sinportada.jpg'

import './App.css';
import { useRef } from 'react';

//funcion del componente
function App() {
  //codigo javascript antes del return, con data binding
  let name = 'Hacker lite'
  // let direction = <adress>Av del death note,  70</adress>
  let direction = <strong>Av del death note,  70</strong>

  let titles = ['killer', 'binguer', 'sawer']

  let contador = 1;
  function increment(e) {
    contador++;
    e.target.innerText = contador
  }

  const change = 67
  const parag = useRef() //hook de react

  function convert() {

    parag.current.innerText = contador * change
  }

  function changeImage(e) {
    let name = e.target.getAttribute('src')

    console.log(name)

    if (name.includes('los')) {
      e.target.setAttribute('src', killer)
    }
    else {
      e.target.setAttribute('src', binguers)

    }
  }

  function changeTitle(e) {
    let h3 = e.target

    if (h3.innerText === 'Visto') {
      h3.innerText = ''
    }
    else {
      h3.innerText = 'Visto'
    }
  }

  function changeImgage2(e) {
    let img = e.target

    if (img.src.includes('portada')) {
      //hide the image
      img.style.visibility = 'hidden'
      //remove the image
      img.style.display = 'none'
    }
    else {
      img.src = portada
      img.parentNode.style.backgroundColor = 'initial'

    }
  }

  return (
    <div className="App">
      <h2>Curso de React</h2>
      <p>esto es un parrafo <br /> con un salto de linea</p>
      <input type="text" value={name} />
      <p>{name}</p>
      <p>{direction}</p>
      <img src={binguers} alt="" />

      <h2>Actividad 2</h2>
      <div className='tokens'>
        <div className='token0'>
          <img src={killer} alt="" />
          <h3>{titles[0]}</h3>
        </div>
        <div className='token1'>
          <img src={binguers} alt="" />
          <h3>{titles[1]}</h3>
        </div>
        <div className='token2'>
          <img src={sawer} alt="" />
          <h3>{titles[2]}</h3>
        </div>
      </div>
      <h2>Actividad 3 - pdf 2</h2>
      <div>
        <p ref={parag} className='contador' onClick={increment}>{contador}</p>
        <p><button onClick={convert}>Convertir</button></p>
        <div className='imagen'>
          <img src={binguers} alt="" onClick={changeImage} />
        </div>
        <p><input className='texto' /></p>
      </div>
      <h2>Actividad 4</h2>
      <div className='tokens'>
        <div className='token0'>
          <img onClick={changeImgage2} src={killer} alt="" />
          <h3 onClick={changeTitle}>{titles[0]}</h3>
        </div>
        <div className='token1'>
          <img onClick={changeImgage2} src={binguers} alt="" />
          <h3 onClick={changeTitle}>{titles[1]}</h3>
        </div>
        <div className='token2'>
          <img onClick={changeImgage2} src={sawer} alt="" />
          <h3 onClick={changeTitle}>{titles[2]}</h3>
        </div>
      </div>
    </div >
  );
}

export default App;
