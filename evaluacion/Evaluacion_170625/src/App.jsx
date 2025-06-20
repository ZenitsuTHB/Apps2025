import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
