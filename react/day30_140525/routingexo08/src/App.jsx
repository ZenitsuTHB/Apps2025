import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dragon from './components/Dragon';
import Inicio from './components/Inicio';
import Navigate from './components/Navigate';
import NewBrain from './components/NewBrain';
import Oric from './components/Oric';
import Spectrum from './components/Spectrum';
import Toshiba from './components/Toshiba';
import ZX81 from './components/ZX81';

function App() {
  return (
    <>
    <Router>
    <Navigate />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/dragon' element={<Dragon/>}></Route>
        <Route path='/newbrain' element={<NewBrain/>}></Route>
        <Route path='/oric' element={<Oric/>}></Route>
        <Route path='/spectrum' element={<Spectrum/>}></Route>
        <Route path='/toshiba' element={<Toshiba/>}></Route>
        <Route path='/zx81' element={<ZX81/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
