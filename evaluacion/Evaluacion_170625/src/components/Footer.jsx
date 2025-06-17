import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} El Mundo Today. Todos los derechos falsificados.</p>
      <p>Contacto: redaccion@elmundotoday.com | Aviso Legal | Política de Cookies</p>
    </footer>
  );
}

export default Footer;
