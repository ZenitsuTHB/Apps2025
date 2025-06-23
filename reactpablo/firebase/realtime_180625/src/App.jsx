import { useState } from 'react'
import Navigate   from '../src/Routes/Router'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

function App() {

  return (
    <div className="app-container">
      <Header />
      <Navigate />
      <Footer />
    </div>
  )
}

export default App
