//import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import microsvintage from './datos/micros';
import Tokenmicro from './components/Tokenmicro';
import { useState } from 'react';


function App() {
  //console.log(microsvintage)
  const [total, setTotal] = useState(0)
  return (
    <div className="App">
      <h1>Charge of Components</h1>
      <First name="ZX Spectrum" memory="42"></First>
      <First name="Oric Atmos" ></First>
      <Second micro={{ name: "Commodore 64", memory: "64" }}></Second>
      <hr />
      <h1>Actividad 4</h1>



      <h1>Micros Vintage</h1>
      <h2>Total: {total} €</h2>
      <div className='tokens'>
        {
          microsvintage.map((micro, index) =>
            <Tokenmicro datas={micro} key={index} total={setTotal}></Tokenmicro>
          )
        }
      </div>
    </div>
  );
}

export default App;
