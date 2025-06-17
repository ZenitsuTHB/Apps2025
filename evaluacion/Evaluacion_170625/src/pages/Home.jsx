import React, { useEffect, useState } from 'react';

const Home = () => {
  const [news, setNews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://www.elmundotoday.com/wp-json/wp/v2/posts?_embed')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      });
  }, []);

  const addToFavorites = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="home">
      <h1>Últimas noticias</h1>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            {item._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={item._embedded['wp:featuredmedia'][0].source_url}
                alt="noticia"
                onClick={() => addToFavorites(item)}
              />
            )}
          </div>
        ))}
      </div>

      <h2>Favoritos</h2>
      <div className="favorites">
        {favorites.map((item) => (
          <img
            key={item.id}
            src={item._embedded['wp:featuredmedia']?.[0]?.source_url}
            alt="favorito"
            onClick={() => removeFromFavorites(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
