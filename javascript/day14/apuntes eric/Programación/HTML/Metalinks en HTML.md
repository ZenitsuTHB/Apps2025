# Metalinks En Html: Enlaces Internos

Permiten navegar a secciones específicas dentro de una misma página usando `id` y el símbolo `#`.

---

## Implementación En 2 Pasos

### 1. Asignar Identificador Único

```html
<h2 id="seccion-destino">Título de sección</h2>
<section id="contacto">...</section>
<div id="capitulo3">...</div>
```

> [!important] Reglas para `id`
> - Debe ser único en el documento
> - Sin espacios o caracteres especiales (excepto guiones)
> - Usar nombres descriptivos (no "seccion1")

### 2. Crear Enlace De Referencia

```html
<!-- Enlace interno -->
<a href="#seccion-destino">Ir a sección</a>

<!-- Desde otra página -->
<a href="otro-archivo.html#capitulo3">Capítulo 3 externo</a>
```

---

## Ejemplo Completo

### Ejemplo Secciones

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Metalinks en HTML</title>
</head>
<body>
    <h1>Página con enlaces internos</h1>

    <!-- Enlaces -->
    <ul>
        <li><a href="#seccion1">Ir a Sección 1</a></li>
        <li><a href="#seccion2">Ir a Sección 2</a></li>
        <li><a href="#seccion3">Ir a Sección 3</a></li>
    </ul>

    <!-- Secciones -->
    <h2 id="seccion1">Sección 1</h2>
    <p>Contenido de la sección 1...</p>

    <h2 id="seccion2">Sección 2</h2>
    <p>Contenido de la sección 2...</p>

    <h2 id="seccion3">Sección 3</h2>
    <p>Contenido de la sección 3...</p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<body>
    <nav>
        <ul>
            <li><a href="#intro">Introducción</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="/faq.html#preguntas">FAQ (externo)</a></li>
        </ul>
    </nav>

    <article id="intro">
        <h2>Introducción</h2>
        <p>Contenido...</p>
    </article>

    <section id="contacto">
        <h2>Contacto</h2>
        <p>Detalles...</p>
    </section>
</body>
</html>
```

### Ejemplo Otras Paginas

#### Ejemplo Botones

```html
<!-- Links a otras paginas  -->
<a href="./listas.html">Ir a prueba listas</a>
<a href="./PruebaMetalinks.html">Ir a prueba links</a>
<a href="./tablas.html">Ir a prueba tablas</a>
<a href="./estiloshtmlsimple.html">Ir a prueba estilos simples</a>
<a href="./iframes.html">Ir a prueba iframes</a>
```

#### Ejemplo Botones

``` html

<h1>Mis ejercicios de HTML</h1>

<h2>Selecciona un ejercicio:</h2>

<!-- Lista de ejercicios como botones -->
<ul style="list-style: none; padding: 0;">

  <li>
    <form action="./listas.html">
      <button type="submit">Práctica de Listas</button>
    </form>
  </li>
  
  <li>
    <form action="./PruebaMetalinks.html">
      <button type="submit">Práctica de Enlaces</button>
    </form>
  </li>
  
  <li>
    <form action="./tablas.html">
      <button type="submit">Práctica de Tablas</button>
    </form>
  </li>
  
  <li>
    <form action="./estiloshtmlsimple.html">
      <button type="submit">Práctica de Estilos</button>
    </form>
  </li>
  
  <li>
    <form action="./iframes.html">
      <button type="submit">Práctica de Iframes</button>
    </form>
  </li>
</ul>

<!-- Sección adicional para futuros ejercicios -->
<h3>Próximamente:</h3>
<ul style="list-style: none; padding: 0;">
  <li><button disabled>Formularios</button></li>
  <li><button disabled>Multimedia</button></li>
  <li><button disabled>SVG</button></li>
</ul>

```


---
