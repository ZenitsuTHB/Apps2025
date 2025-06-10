import { onAuthStateChanged } from 'firebase/auth';

const { user, setUser } = useUserContext();

useEffect(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('user', user, ' userId:', user.uid);
      setUser(user);
    } else {
      console.log("No user logged");
      setUser(null);
    }
  });
}, []);

return user ? <Router /> : <Login />
