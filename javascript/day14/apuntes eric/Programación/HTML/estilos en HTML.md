# Estilos En Línea Y Manejo De `div`

## 📌 Estilos En Línea (inline styles)

```html
<p style="
    padding-right: 50px;
    height: 150px;
    background: black;
    color: orange;
    text-align: right;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    width: 600px;">
    hola
</p>
```

<p style="
    padding-right: 50px;
    height: 150px;
    background: black;
    color: orange;
    text-align: right;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    width: 600px;">
    hola
</p>

> [!warning]- Consideraciones
> - Solo usar para estilos únicos
> - Evitar en proyectos grandes
> - Priorizar clases CSS para mantenimiento

---

## 🧱 Manejo De `div` Con Estilos

### Problema Común: Padding Y Dimensiones

```html
<!-- Caso base -->
<div style="width: 200px; background-color: pink;">
    Lorem ipsum dolor
</div>

<!-- Problema: Padding afecta ancho total -->
<div style="width: 200px; background-color: salmon; padding: 50px;">
    Lorem ipsum dolor
</div>

<!-- Solución: box-sizing -->
<div style="width: 200px; background-color: green; padding: 50px; box-sizing: border-box;">
    Lorem ipsum dolor
</div>
```

> [!tip] Explicación
> - Sin `box-sizing`: padding se suma al ancho definido
> - Con `box-sizing: border-box`: padding se incluye en el ancho
> - Aplicar globalmente:
> ```css
>   * { box-sizing: border-box; }
>   ```

---

### Problema Común: Bordes Y Dimensiones

```html
<!-- Caso base -->
<div style="width: 200px; background-color: pink;">
    Lorem ipsum dolor
</div>

<!-- Problema: Borde afecta ancho total -->
<div style="width: 200px; background-color: salmon; border: 25px solid green;">
    Lorem ipsum dolor
</div>

<!-- Solución: box-sizing -->
<div style="width: 200px; background-color: salmon; border: 25px solid green; box-sizing: border-box;">
    Lorem ipsum dolor
</div>
```

> [!example] Visualización
>
> | Caso                  | Ancho real | Comportamiento |
> |-----------------------|------------|----------------|
> | Sin box-sizing        | 250px      | Borde 200px + padding 25px X2 se suman |
> | Con box-sizing        | 200px      | Borde + padding incluidos |

---

## 🎯 Márgenes Y `overflow`

### Ejemplo Práctico

```html
<div style="
    background-image: url('https://pablomonteserin.com/wp-content/uploads/2020/06/teatro.jpg');
    width: 600px;
    height: 500px;
    margin: auto;
    overflow: hidden;">
    <p style="
        font-size: 3rem;
        color: white;
        width: 420px;
        height: 150px;
        overflow: auto;
        margin-left: 100px;
        margin-top: 200px;
        background-image: url('https://pablomonteserin.com/res/html5/ex/lista-enlaces/sinActivar.png');">
        Las rosas son rojas, el cielo es azul, quisiera ser tan alto como un abedul!!!
    </p>
</div>
```

<div style="
    background-image: url('https://pablomonteserin.com/wp-content/uploads/2020/06/teatro.jpg');
    width: 600px;
    height: 500px;
    margin: auto;
    overflow: hidden;">
    <p style="
        font-size: 3rem;
        color: white;
        width: 420px;
        height: 150px;
        overflow: auto;
        margin-left: 100px;
        margin-top: 200px;
        background-image: url('https://pablomonteserin.com/res/html5/ex/lista-enlaces/sinActivar.png');">
        Las rosas son rojas, el cielo es azul, quisiera ser tan alto como un abedul!!!
    </p>
</div>

> [!note] Explicación de propiedades
>
> - `margin: auto`: Centra el contenedor horizontalmente
>
> - `overflow: hidden`: Oculta el contenido que sobresale
>
> - `overflow: auto`: Añade scroll cuando el contenido excede el tamaño
>
> - `margin-left`/`margin-top`: Desplaza el elemento internamente

### Ejemplo Display Block Y Margin 0

para pegar visualmente imagenes y textos, display block y margenes 0

```html
  <div style="width: 800px; margin: auto">
  <img
    style="display: block"
    src="https://pablomonteserin.com/res/html5/ex/una-columna/img/cabecera.gif"
    alt=""
  />
  <h1
    style="background-color: #373f4c; margin-top: 0; margin-bottom: 0; text-align: center; color: white;"
  >
    hola holaa
  </h1>

  <div style="background-color: #373f4c; color: white; padding: 25px">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>
  </div>
  
  <img
    src="https://pablomonteserin.com/res/html5/ex/una-columna/img/bot.gif"
    alt=""
  />
</div>
```

<div style="width: 800px; margin: auto">
  <img
    style="display: block"
    src="https://pablomonteserin.com/res/html5/ex/una-columna/img/cabecera.gif"
    alt=""
  />
  <h1
    style="background-color: #373f4c; margin-top: 0; margin-bottom: 0; text-align: center; color: white;"
  >
    hola holaa
  </h1>

  <div style="background-color: #373f4c; color: white; padding: 25px">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit,
      rerum obcaecati necessitatibus mollitia veritatis vel ullam exercitationem
      quidem cumque numquam, perspiciatis laboriosam! Obcaecati illo laboriosam
      eius labore, nostrum nisi?
    </p>
  </div>

  <img

    src="https://pablomonteserin.com/res/html5/ex/una-columna/img/bot.gif"

    alt=""

  />

</div>

> [!tip] Claves del diseño
>
> - `margin: auto` para centrar el contenedor principal
>
> - `margin: 0` en el título para eliminar espacio superior/inferior
>
> - Imágenes en bloque (`display: block`) para evitar espacios fantasma

## 📝 Mejores Prácticas

1. **Organización de estilos**:

   ```html
   <style>
   .mi-clase {
       width: 200px;
       padding: 50px;
       box-sizing: border-box;
   }
   </style>
   <div class="mi-clase">Contenido</div>
   ```

2. **Sistema de medidas**:
   - Usar `rem` para tipografía
   - `%` o `vw/vh` para layouts responsivos
   - `px` para bordes y sombras

3. **Jerarquía visual**:

   ```css
   .contenedor {
       width: min(90%, 1200px);
       margin: 0 auto;
       padding: 2rem;
   }
   ```

4. **Herramientas útiles**:
   - [CSS Box Model Visualizer](https://www.w3schools.com/css/css_boxmodel.asp)
   - [Box-sizing Reset](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)
