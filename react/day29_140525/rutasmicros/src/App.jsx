import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import FichaMicro from './componentes/FichaMicro'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/micro/:nombre' element={<FichaMicro/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
