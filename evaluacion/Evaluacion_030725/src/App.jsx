import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </div>
  )
}

export default App
