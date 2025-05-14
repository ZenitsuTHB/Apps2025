import logo from './logo.svg';
import './App.css';
import Idiomas from './components/Idiomas';
import Contenido from './components/Contenido';


function App() {
  return (
    <div className="App">
      <div className='banderas'>
        <Idiomas />
      </div>
      <div className='contenido'>
        <Contenido />
      </div>
    </div>
  );
}

export default App;
