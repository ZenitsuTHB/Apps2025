import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chuck from './components/Chuck';

function App() {

  const API = 'https://randomuser.me/api'
  // const API = 'https://randomuser.me/api/?results=3'

  const [name, setName] = useState()
  const [image, setImage] = useState()

  let [cont, setCont] = useState(1)
  const [users, setUsers] = useState([]);


  useEffect(() => {

    if (cont > 3) return;
    fetch(API)
      .then((rep) => {
        if (rep.ok) {
          return rep.json()
        }
        else {
          throw new Error('Bad Petition');
        }
      })
      .then(user => {
        //console.log(user)
        const newUser = {
          name: `${user.results[0].name.first} ${user.results[0].name.last}`,
          image: user.results[0].picture.large,
        };
        setName(newUser.name);
        setImage(newUser.image);
        //setUsers(user.results)
        setUsers(prevUsers => [...prevUsers, newUser]);
        //if (cont < 3) setCont(++cont);prof
        if (cont < 3) setCont(prev => prev + 1);//optim

      })
      .catch(error => console.log(error))
  }, [cont]);


  return (
    <div className="App">
      <h3>Emplead@ del mes:</h3>
      <p>Nombre: {name}</p>
      <img src={image} alt={name} />
      <hr />
      <h3>Empleados del mes:</h3>
      {users.map((user, idx) =>
        <div key={idx} className='inline'>
          <p>Nombre: {user.name}</p>
          <img src={user.image} alt={user.name} />
        </div>
      )}
      <hr />
      <Chuck></Chuck>
    </div>
  );
}

export default App;
