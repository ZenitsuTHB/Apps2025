import React, { useEffect, useState } from 'react'
import { getItems } from '../services/api';

function Read() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getItems();
        const extractedName = items.map(item => item.name);
        setNames(extractedName);
      }
      catch (error) { console.error("Error al obtener los datos: ", error); }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Read</h1>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>))}
      </ol>
    </div>
  )
}

export default Read
