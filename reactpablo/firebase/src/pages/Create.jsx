import React, { useState } from 'react';
import { createPerson } from '../services/api'; // Ajusta ruta según tu proyecto

function Create() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) return; // evitar nombres vacíos
    try {
      const newId = await createPerson({ name });
      console.log("Nuevo ID creado:", newId);
      setName("");
    } catch (error) {
      console.error("Error creando persona:", error);
    }
  };

  return (
    <div>
      <h1>Create</h1>
      <input
        type="text"
        placeholder="Guest name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default Create;
