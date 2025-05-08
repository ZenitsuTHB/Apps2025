//elementos que necesita el componente

import logo from './logo.svg';
import killer from './img/kill-bill.jpg';
import binguers from './img/los_bingueros.jpg';
import sawer from './img/saw.jpg';

import './App.css';
import micro from './img/0.png';

//funcion del componente
function App() {
  //codigo javascript antes del return, con data binding
  let name = 'Hacker lite'
  // let direction = <adress>Av del death note,  70</adress>
  let direction = <strong>Av del death note,  70</strong>

  let titles = ['killer', 'binguer', 'sawer']

  return (
    <div className="App">
      <h2>Curso de React</h2>
      <p>esto es un parrafo <br /> con un salto de linea</p>
      <input type="text" value={name} />
      <p>{name}</p>
      <p>{direction}</p>
      <img src={micro} alt="" />

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
    </div >
  );
}

export default App;
