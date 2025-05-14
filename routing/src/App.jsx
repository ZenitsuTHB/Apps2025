import './App.css'
import Navbar from './componentes/Navbar'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import A from './componentes/A'
import B from './componentes/B'
import C from './componentes/C'
import D from './componentes/D'
import Error404 from './componentes/Error404'
import Header from './componentes/Header'

function App() {
  
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route> 
          <Route path='/pagina1' element={<A/>}></Route>
          <Route path='/pagina2' element={<B/>}></Route>
          <Route path='/pagina3/:id' element={<C/>}></Route>
          <Route path='/pagina4' element={<D/>}></Route>
          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
