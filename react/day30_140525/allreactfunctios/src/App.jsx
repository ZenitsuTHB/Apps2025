import './App.css';
import Idiomas from './components/Idiomas';
import Contenido from './components/Contenido';
import { Datas } from './context/Context';


function App() {
  return (
    <div className="App">
      <Datas>
        <div className='banderas'>
          <Idiomas />
        </div>
        <div className='contenido'>
          <Contenido />
        </div>
      </Datas>
    </div>
  );
}

export default App;
