// src/components/Login.jsx
import React, { useState } from 'react';
import { signIn } from '../services/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/config';
import { loginWithGoogle } from '../services/auth';
import { useUserContext } from '../contexts/UserContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useUserContext();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    const result = await signIn(email, password);
    if (typeof result === 'string' && result.includes('auth/')) {
      setError('Usuario o contraseña incorrectos');
    }
    // Si se loguea correctamente, el contexto y el onAuthStateChanged en App cambiarán el render
  };
  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    if (user) {
      setUser(user); // Update the context
    } else {
      setError("Error al iniciar sesión con Google");
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario creado:", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Este correo ya está registrado. Intenta iniciar sesión.");
      } else {
        alert("Error al registrar: " + error.message);
      }
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">SignIn</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleGoogleLogin}>SignIn with Google</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
