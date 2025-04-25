


function consulta() {


  const API_CATEGORIES = 'https://movies.alcyon-it.com/api/peliculas/categori'

  fetch(API_CATEGORIES)
    .then(categories => { })
    .then()
    .catch(error => alert(`Error fetching data from api : ${API_CATEGORIES}`));


}