import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>@ {new Date().getFullYear()} Hospital Exercise. All rights reserved.</p>
      <div className="footer-links">
        <nav>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/privacy' >Privacy Policy</NavLink>
          <NavLink to='/contact' >Contact</NavLink>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
