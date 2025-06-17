import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from './services/config';
import { useUserContext } from './contexts/UserContext';
import Login from './pages/Login';
import Router from './components/Router';

function App() {

  const { user, setUser } = useUserContext();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);
  return user ? <Router /> : <Login />
}

export default App
