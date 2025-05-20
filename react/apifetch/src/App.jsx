//elementos que necesita el componente
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chuck from './componentes/Chuck';

//función del componente
function App() {
  const [nombre, setNombre] = useState()
  const [imagen, setImagen] = useState()

  let [cont, setCont] = useState(1)

  const [usuarios, setUsuarios] = useState([])
  
  const API = 'https://randomuser.me/api'
  
  useEffect(() => {
    fetch(API)
    .then((resp) => {
      if (resp.ok) {
        return resp.json()
      } else {
        throw('algo ha ido mal')
      }
    })
    .then(usuario => {
      //console.log(usuario)
      setNombre(`${usuario.results[0].name.first} ${usuario.results[0].name.last}`)
      setImagen(usuario.results[0].picture.large)

      setUsuarios([...usuarios, {nombre: `${usuario.results[0].name.first} ${usuario.results[0].name.last}`, imagen:usuario.results[0].picture.large}])

      if (cont<3) setCont(++cont);
    })
    .catch(error => console.log(error))
  }, [cont])

  console.log(usuarios)

  return (
    <div className="App">
      <h3>Empleado del mes:</h3>
      <p>Nombre: {nombre}</p>
      <img src={imagen} alt={nombre}/>
      <hr></hr>
      {usuarios.map((usuario, indice) => 
        <div key={indice} className='inline'>
          <p>Nombre: {usuario.nombre}</p>
          <img src={usuario.imagen} alt={usuario.nombre}/>
        </div>
      )}
      <hr />
      <Chuck></Chuck>
    </div>
  );
}

export default App;
