import React from 'react';
import '../styles/historias.css';

const Historias = () => {
  return (
    <div className="historias-container">
      <h2 className="historias-title">Historias de las Casas de Hogwarts</h2>

      <section className="house-section gryffindor">
        <h3>Gryffindor</h3>
        <p>
          Fundada por Godric Gryffindor, esta casa valora el valor, la valentía y la caballerosidad.
          Según la leyenda, Godric era un hombre justo y audaz que valoraba a los estudiantes con coraje y determinación.
          El animal emblema es el león y los colores son rojo y dorado.
          Muchos héroes de Hogwarts han salido de Gryffindor, destacando por su nobleza y bravura.
        </p>
      </section>

      <section className="house-section hufflepuff">
        <h3>Hufflepuff</h3>
        <p>
          Fundada por Helga Hufflepuff, esta casa es conocida por su dedicación, paciencia y lealtad.
          Helga valoraba a los estudiantes justos y trabajadores, sin importar su origen o habilidades especiales.
          Su símbolo es el tejón y los colores amarillo y negro.
          Los Hufflepuffs son reconocidos por su amistad y sentido de la justicia.
        </p>
      </section>

      <section className="house-section ravenclaw">
        <h3>Ravenclaw</h3>
        <p>
          Fundada por Rowena Ravenclaw, esta casa premia la inteligencia, la sabiduría y la creatividad.
          Rowena buscaba estudiantes curiosos y de mente abierta, siempre deseosos de aprender.
          Su símbolo es el águila y sus colores son azul y bronce.
          Los Ravenclaws son conocidos por su ingenio y amor por el conocimiento.
        </p>
      </section>

      <section className="house-section slytherin">
        <h3>Slytherin</h3>
        <p>
          Fundada por Salazar Slytherin, esta casa valora la ambición, la astucia y la determinación.
          Salazar creía que solo los más astutos y capaces debían estudiar magia, por eso su casa tiene fama de exclusividad.
          El símbolo es la serpiente y sus colores son verde y plata.
          Los Slytherins son líderes natos y a menudo persiguen grandes metas personales.
        </p>
      </section>
    </div>
  );
}

export default Historias;
