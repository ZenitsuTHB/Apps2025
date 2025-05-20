import logo from './logo.svg';
import './App.css';
import Token1 from './components/Token1';
import Token2 from './components/Token2';
import { Datas } from './context/Context';
import Colors from './components/Colors';


function App() {
  return (
    <>
      <Datas>
        <div className="App">
          <Token1></Token1>
          <Token2></Token2>
          <hr />
          <Colors></Colors>
        </div>
      </Datas>
    </>
  );
}

export default App;
