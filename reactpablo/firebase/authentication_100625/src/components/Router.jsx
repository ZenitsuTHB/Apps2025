// src/Router.jsx
import React from 'react';
import { logout } from './services/auth';

export default function Router() {
  return (
    <div>
      <h1>Bienvenido, estás logueado</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
