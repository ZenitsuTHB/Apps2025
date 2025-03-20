# Listas En Html: Ol Y Ul

En el desarrollo web, los menús de navegación suelen implementarse utilizando listas (`<ul>` o `<ol>`).

---

## Lista De Enlaces Con Imágenes

```html
<ul>
    <li>
        <a href="https://www.instagram.com">
            <img src="resources/sinActivar.png" width="100" height="50">
        </a>
    </li>
    <li>
        <a href="#">
            <img src="https://pablomonteserin.com/res/html5/ex/lista-enlaces/sinActivar.png" alt="botón">
        </a>
    </li>
    <!-- ... más elementos ... -->
</ul>
```

<ul>
    <li>
        <a href="https://www.instagram.com">
            <img src="resources/sinActivar.png" width="100" height="50">
        </a>
    </li>
    <li>
        <a href="#">
            <img src="https://pablomonteserin.com/res/html5/ex/lista-enlaces/sinActivar.png" alt="botón">
        </a>
    </li>
    <!-- ... más elementos ... -->
</ul>

> [!note] Características clave
> - Cada `<li>` contiene un enlace (`<a>`) con imagen (`<img>`)
> - Rutas pueden ser locales o externas
> - Atributo `alt` importante para accesibilidad
> - Usar rutas relativas para imágenes en tu proyecto

---

## Listas Anidadas

```html
<p>Lista de la compra</p>
<ul>
    <li>Zumitos</li>
    <li>Hortalizas</li>
    <li>Fruta
        <ol>
            <li>Manzanas</li>
            <li>Peras</li>
        </ol>
    </li>
</ul>
```

<ul>
    <li>Zumitos</li>
    <li>Hortalizas</li>
    <li>Fruta
        <ol>
            <li>Manzanas</li>
            <li>Peras</li>
        </ol>
    </li>
</ul>

> [!tip] Estructura recomendada
> - Combinar `<ul>` y `<ol>` según necesidad
> - Anidar máximo 3 niveles para mantener legibilidad
> - Usar sangrado consistente (4 espacios o tab)

---

## Atajos Emmet Para Listas

```html
ol>li*4>a[href=#]{hola}
```

**Resultado generado:**

```html
<ol>
    <li><a href="#">hola</a></li>
    <li><a href="#">hola</a></li>
    <li><a href="#">hola</a></li>
    <li><a href="#">hola</a></li>
</ol>
```

> [!example] Variaciones útiles
> `nav>ul>li*5>a[href=#pagina-$]{Sección $}`
> `ul.list>li.item*3>img[src=imagen$.png]`

---

## Buenas Prácticas

1. **Semántica adecuada:**
   - Usar `<ul>` para menús de navegación
   - Emplear `<ol>` cuando el orden es importante

2. **Accesibilidad:**
   - Siempre incluir `alt` en imágenes
   - Usar `aria-label` para listas complejas

3. **Optimización:**
   - Limitar niveles de anidamiento
   - Usar CSS para estilizado en vez de atributos HTML
   - Agrupar listas largas (>10 items) en categorías

4. **Mantenimiento:**
   - Comentar secciones complejas
   - Usar indentación consistente
