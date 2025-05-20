import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import Error404 from './components/Error404';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/pagina1' element={<A />}></Route>
          <Route path='/pagina2' element={<B />}></Route >
          <Route path='/pagina3' element={<C />}></Route >
          <Route path='/pagina4' element={<D />}></Route >
          <Route path='*' element={<Error404 />}></Route>
        </Routes >
      </Router >
    </>
  );
}

export default App;
