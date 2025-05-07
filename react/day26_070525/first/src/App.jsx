//elementos que necesita el componente

import logo from './logo.svg';
import './App.css';
import micro from './img/0.png';

//funcion del componente
function App() {
  //codigo javascript antes del return, con data binding
  let name = 'Hacker lite'
  // let direction = <adress>Av del death note,  70</adress>
  let direction = <strong>Av del death note,  70</strong>
  return (
    <div className="App">
      {window.alert('hola')}
      <h2>Curso de React</h2>
      <p>esto es un parrafo <br /> con un salto de linea</p>
      <input type="text" value={name} />
      <p>{name}</p>
      <p>{direction}</p>
      <img src={micro} alt="" />

    </div>
  );
}

export default App;
