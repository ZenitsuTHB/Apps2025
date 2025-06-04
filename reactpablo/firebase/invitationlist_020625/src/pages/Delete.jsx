import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/api';

function Delete() {
  const [people, setPeople] = useState([]);
  const [idInput, setIdInput] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getItems();
        setPeople(data);
      } catch (error) {
        console.error("Error cargando personas:", error);
      }
    };
    fetchPeople();
  }, []);

  const handleDelete = async () => {
    if (!idInput) return;

    const exists = people.some(person => person.id === idInput);

    if (!exists) {
      alert("No existe un elemento con esa ID.");
      return;
    }

    try {
      await deleteItem(idInput);
      setPeople(people.filter(p => p.id !== idInput));
      setIdInput("");
    } catch (error) {
      console.error("Error eliminando persona:", error);
    }
  };

  return (
    <div>
      <h1>Delete</h1>
      <input
        type="text"
        placeholder="Ingrese ID a borrar"
        value={idInput}
        onChange={e => setIdInput(e.target.value)}
      />
      <button
        onClick={handleDelete}
        disabled={!idInput.trim()}
      >
        Delete
      </button>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            {person.id} - {person.name || person.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Delete;
