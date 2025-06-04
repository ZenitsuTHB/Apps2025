import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (

  <Header>
    <h1>Hospital Exercise</h1>
    <nav>
      <NavLink to='/' exact='true' activeClassname='active'>Inicio</NavLink>
      <NavLink to='/about' activeClassname='active'>Acerca de</NavLink>
    </nav>
  </Header>

  📁 Estructura de carpetas(sugerida)

  / src
  / components
Layout.js
Header.js
Footer.js
  / pages
Home.js
About.js
App.js

🧱 Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

🧱 Header.js

import React from 'react';

const Header = () => (
  <header>
    <h1>Mi Aplicación</h1>
    <nav>
      <a href="/">Inicio</a> | <a href="/about">Acerca de</a>
    </nav>
  </header>
);

export default Header;

🧱 Footer.js

import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Mi Aplicación</p>
  </footer>
);

export default Footer;

🧱 Home.js(Ejemplo de una página)

import React from 'react';

const Home = () => (
  <div>
    <h2>Bienvenido</h2>
    <p>Esta es la página de inicio.</p>
  </div>
);

export default Home;

🧱 App.js(con React Router)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


)


export default Header
