import React, { useEffect, useState } from 'react';
import { auth } from './services/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserContext, UserProvider } from './contexts/UserContext';
import Router from './components/Router';
import Login from './pages/Login';
//import Register from './components/Register';

function AppContent() {
  const { user, setUser } = useUserContext();
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [setUser]);

  if (user) return <Router />;

  return showRegister ? (
    <>
      {/*<Register />*/}
      <p>
        ¿Ya tienes cuenta? <button onClick={() => setShowRegister(false)}>Inicia sesión</button>
      </p>
    </>
  ) : (
    <>
      <Login />
      <p>
        ¿No tienes cuenta? <button onClick={() => setShowRegister(true)}>Regístrate</button>
      </p>
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
