import React from 'react'
import { useEffect, useState } from 'react';
import { createPerson, getItems, deleteItem, updateItem } from '../services/api';

function Crud() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [people, setPeople] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getItems();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (newName.trim() === "") {
      setId("");
      setEditId(null);
      return;
    }

    // // Buscar persona que empiece con el texto escrito
    // const person = people.find(p => p.name.toLowerCase().startsWith(newName.toLowerCase()));

    // if (person) {
    //   setId(person.id);
    //   setEditId(person.id);
    // } else {
    //   setId("");
    //   // Aquí mantenemos editId para que no se cambie el botón si estabas editando
    //   // setEditId(null);   <-- OJO: no lo limpiamos aquí
    // }
  };



  const handleSubmit = async () => {
    if (!name.trim()) return; // evitar nombres vacíos

    if (editId) {
      await updateItem(editId, { name });
      setPeople(prevPeople => prevPeople.map(p => p.id === editId ? { ...p, name } : p));
    } else {
      const newId = await createPerson({ name });
      setPeople(prevPeople => [...prevPeople, { id: newId, name }]);
    }

    setName("");
    setId("");
    setEditId(null);
  };

  const handleDelete = async () => {
    if (editId) {
      await deleteItem(editId);
      setPeople(people.filter(p => p.id !== editId));
      setName("");
      setId("");
      setEditId(null);
    }
  };

  // Cuando selecciono un nombre de la lista, cargo nombre e id en inputs
  const handleSelectPerson = (person) => {
    setName(person.name);
    setId(person.id);
    setEditId(person.id);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Ingrese nombre"
      />
      <input
        type="text"
        value={id}
        readOnly
        placeholder="Id"
      />
      <button onClick={handleSubmit}>
        {editId ? "Actualizar" : "Add"}
      </button>
      <button onClick={handleDelete} disabled={!editId}>
        Delete
      </button>

      <h3>Lista de personas</h3>
      <ul>
        {people.map(person => (
          <li
            key={person.id}
            onClick={() => handleSelectPerson(person)}
            style={{ cursor: 'pointer', padding: '4px', borderBottom: '1px solid #ccc' }}
          >
            {person.id} -  {person.name}
          </li>
        ))}
      </ul>
      <hr />

    </div>
  )
}

export default Crud
