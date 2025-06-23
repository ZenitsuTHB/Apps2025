import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ⚡ by <a href="https://github.com/zenitsuTHB">Arch</a> · {new Date().getFullYear()}</p>
      <p>© {new Date().getFullYear()} Three in a row. Todos los derechos falsificados.</p>
      <p>Contacto: realtime@threeinarow.com | Aviso Legal | Política de Cookies</p>
    </footer>
  )
}

export default Footer