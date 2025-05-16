import './App.css';
import Navbar from './componentes/comunes/Navbar'
import Footer from './componentes/comunes/Footer';
import Inicio from './componentes/contenidos/inicio/Inicio';
import Notfound from './componentes/contenidos/noencontrado/Notfound';
import Listavinos from './componentes/contenidos/carta/listavinos/Listavinos';
import Altavino from './componentes/contenidos/carta/altavino'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/ ' element={<Inicio />}></Route>
          <Route path='/galeria' element={<Listavinos />}></Route>
          <Route path='/dardealta' element={<Altavino />}></Route>
          <Notfound></Notfound>

        </Routes>

      </Router >
      <Footer></Footer>
    </div >
  );
}

export default App;
