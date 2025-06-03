import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          {/*<li><NavLink to={'/'} />Home< NavLink /></li>*/}
          <li><NavLink to={'/crud'}>crud</NavLink></li>
          <li><NavLink to={'/read'}>read</NavLink></li>
          <li><NavLink to={'/create'}>create</NavLink></li>
          <li><NavLink to={'/delete'}>delete</NavLink></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
