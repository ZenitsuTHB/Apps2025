### Consulta de las peliculas


1.- modificar el fichero scripts.js para que, una vez cargado el componente de consulta, se ejecute la función que se encargue de realizar las acciones necesarias para iniciar el componente

2.- Crear la funcion consulta() dentro del nuevo fichero consulta.js para realizar las acciones de inicio del componente:

    - Confeccionar la combo de categorias (llamando a una nueva función consultaCategorias  que crearemos en un fichero categorias.js)

    - Confeccionar las fichas de las películas (llamando a una nueva función consultaPeliculas  que crearemos en un fichero peliculas.js)

    - activar listeners elementos estáticos del componente (filtros por título y categorias)

3.- Crear la función consultaCategorias() dentro del fichero categorias.js. Esta función realizará la siguiente operativa:

    - Petición con la API Fetch al endpoint de consulta de todas las categorías 

    - Si la petición es OK (segundo then) recorrer el array de respuesta y, para cada categoría, confeccionar la correspondiente etiqueta <option></option> que enviaremos a la combo del documento consulta.html 

    - SI la petición no es OK (catch) mostrar el error en un alert

4.- Añadir los nuevos fichero consulta.js y categorias.js al fichero principal index.html de forma que ya podamos probar lo que llevamos hecho hasta ahora

5.- Crear la función consultaPeliculas() dentro del fichero peliculas.js. Esta función realizará la siguiente operativa:

    - recuperar los valores que puedan tener los filtros de busqueda (titulo y categoría)

    - Confeccionar el endpoint de la API según se hayan seleccionado filtros o no

    - Petición con la API Fetch al endpoint de consulta de todas las peliculas 

    - Si la petición es OK (segundo then) recorrer el array de respuesta y, para cada película, confeccionar la correspondiente ficha que enviaremos a la sección .peliculas del documento consulta.html

    - Si la consulta no devuelve ninguna película (array vacio) mostrar el mensaje 'NO hay películas' en el área .alert-warning de consulta.html

    - SI la petición no es OK (catch) mostrar el error en un alert

6.- Añadir el nuevo fichero peliculas.js al fichero principal index.html 

### Dar de alta una pelicula

1.- modificar el fichero scripts.js para que, una vez cargado el componente de alta, se ejecute la función que se encargue de realizar las acciones necesarias para iniciar el componente

2.- Crear la funcion alta() dentro del nuevo fichero alta.js para realizar las acciones de inicio del componente:

    - Confeccionar la combo de categorias (llamando a la función que ya tenemos confeccionada de la consulta)

    - activar listeners elementos estáticos del componente (botón de alta y previsualización de imagen)

3.- Añadir el nuevo fichero alta.js al fichero principal index.html 

4.- Editar el fichero alta.html para añadir los atributos id a cada elemento del formulario (por error mio están con atributos name)

5.- Dentro del fichero peliculas.js (donde ya tenemos la función de consulta) añadir las siguientes operativas

    - Añadir la función de altaPelicula()

    - Añadir la función de previsualizar la imagen seleccionada (tal como vimos en el ejemplo de ayer)

6.- LA función altaPelicula() realizrá las siguientes acciones

    - recuperar los datos del formulario 

    - confeccionar el objeto FormData (recordad que si no hemos seleccionado imagen el atributo img no debe enviarse a la API)

    - confeccionar los parámetros de la petición (método POST y body con el objeto formdata)

    - realizar la petición con la API Fetch 

    - Si la petición es OK (segundo then) mostrar un mensaje de alta efectuada 

    - SI la petición no es OK (catch) mostrar los mensajes de error que nos entrega la API en la seccion alert-danger del documento alta.html
