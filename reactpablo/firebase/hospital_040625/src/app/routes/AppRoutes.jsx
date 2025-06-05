import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import Home from '../../pages/Home'
import Read from '../../pages/Read'
import Create from '../../pages/Create'
import UpdateDelete from '../../pages/UpdateDelete'
import About from '../../pages/About'

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/create'} element={<Create />} />
          <Route path={'/read'} element={<Read />} />
          <Route path={'/updatedelete'} element={<UpdateDelete />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes
