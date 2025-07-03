import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} API de HarryPotter. Todos los derechos falsificados.</p>
      <p>Contacto: APIdeHarryPotter.com | Aviso Legal | Política de Cookies</p>
    </footer>
  );
}

export default Footer;
