import React, { useEffect, useState } from "react";
import '../styles/home.css'

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredHouse, setFilteredHouse] = useState("Todas");
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Obtener casas únicas para el filtro
  const houses = [
    "Todas",
    ...Array.from(new Set(characters.map((c) => c.house).filter(Boolean))),
  ];

  // Filtrar personajes según la casa seleccionada
  const filteredCharacters =
    filteredHouse === "Todas"
      ? characters
      : characters.filter((c) => c.house === filteredHouse);

  // Añadir o quitar personaje destacado
  const toggleFeatured = (char) => {
    const isFeatured = featured.some((f) => f.name === char.name);
    if (isFeatured) {
      setFeatured(featured.filter((f) => f.name !== char.name));
    } else {
      setFeatured([...featured, char]);
    }
  };

  return (
    <div className="home-container">
      <h1>Personajes de Harry Potter</h1>

      {/* Sección destacados */}
      {featured.length > 0 && (
        <section className="featured-section">
          <h2>Destacados</h2>
          <div className="characters-grid">
            {featured.map((char) => (
              <div
                key={char.name}
                className="character-card featured"
                onClick={() => toggleFeatured(char)}
                title="Haz clic para eliminar de destacados"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={char.image || "https://via.placeholder.com/200x280?text=Sin+Imagen"}
                  alt={char.name}
                />
                <h3>{char.name}</h3>
                <p>
                  <strong>Casa:</strong> {char.house || "Desconocida"}
                </p>
                <button style={{ display: "none" }}>Quitar</button> {/* botón oculto, clic en toda tarjeta */}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Selector de casas */}
      <div className="filter-container">
        <label htmlFor="house-select">Filtrar por casa: </label>
        <select
          id="house-select"
          value={filteredHouse}
          onChange={(e) => setFilteredHouse(e.target.value)}
        >
          {houses.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </select>
      </div>

      {/* Lista personajes */}
      <section className="characters-section">
        <h2>{filteredHouse === "Todas" ? "Todos los personajes" : `Casa: ${filteredHouse}`}</h2>
        <div className="characters-grid">
          {filteredCharacters.map((char) => {
            const isFeatured = featured.some((f) => f.name === char.name);
            return (
              <div key={char.name} className="character-card">
                <img
                  src={char.image || "https://via.placeholder.com/200x280?text=Sin+Imagen"}
                  alt={char.name}
                />
                <h3>{char.name}</h3>
                <p>
                  <strong>Casa:</strong> {char.house || "Desconocida"}
                </p>
                <button
                  className={isFeatured ? "btn-unfeature" : "btn-feature"}
                  onClick={() => toggleFeatured(char)}
                >
                  {isFeatured ? "Quitar de destacados" : "Destacar"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
