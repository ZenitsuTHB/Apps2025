# Layouts Con Float Vs Inline-block

---

## 🏗️ Ejemplo 1: Layout Con Float

```html
<div style="height: 500px; width: 700px; margin: auto">
    <!-- Columna izquierda -->
    <div style="float: left; background: red; width: 100px; height: 500px"></div>
    
    <!-- Contenedor central -->
    <div style="float: left; width: 500px">
        <div style="background: yellow; height: 100px"></div>
        <div style="background: blue; height: 300px"></div>
        <div style="background: purple; height: 100px"></div>
    </div>
    
    <!-- Columna derecha -->
    <div style="float: left; background: green; width: 100px; height: 500px"></div>
</div>
```

> [!note]- Características del float
> - Necesita `clearfix` para contener elementos flotantes
> - Los elementos salen del flujo normal del documento
> - Requiere anchos fijos precisos
> - Problemas comunes con márgenes colapsados

---

## 🧩 Ejemplo 2: Layout Con Inline-block

```html
<div style="height: 500px; width: 700px; margin: auto; font-size: 0">
    <!-- Columna izquierda -->
    <div style="
        display: inline-block;
        background: red;
        width: 100px;
        height: 500px;
        vertical-align: top;">
    </div>
    
    <!-- Contenedor central -->
    <div style="display: inline-block; width: 500px; vertical-align: top">
        <div style="background: yellow; height: 100px"></div>
        <div style="background: blue; height: 300px"></div>
        <div style="background: purple; height: 100px"></div>
    </div>
    
    <!-- Columna derecha -->
    <div style="
        display: inline-block;
        background: green;
        width: 100px;
        height: 500px;
        vertical-align: top;">
    </div>
</div>
```

> [!tip]- Técnicas clave para inline-block
> 1. `font-size: 0` en el contenedor padre
> 2. `vertical-align: top` para alineación uniforme
> 3. Restaurar `font-size` en elementos hijos
> 4. Cálculo preciso de anchos (100px + 500px + 100px = 700px)

---

## 📊 Comparativa: Float Vs Inline-block

| Característica          | Float                        | Inline-Block               |
|-------------------------|------------------------------|----------------------------|
| Flujo del documento     | Elementos fuera del flujo    | Mantiene el flujo normal   |
| Espaciado entre elementos | Necesita clearfix           | Requiere `font-size: 0`    |
| Alineación vertical     | Automática                   | Control con `vertical-align` |
| Responsividad           | Difícil de manejar           | Más adaptable              |
| Uso moderno             | Obsoleto                     | Transicional               |

---

## 🛠️ Buenas Prácticas Actuales (2023)

1. **Usar Flexbox**:

```css
.contenedor {
    display: flex;
    gap: 20px;
}
```

2. **Usar CSS Grid**:

```css
.contenedor {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
}
```

3. **Técnicas de reset**:

```css
/* Reset para floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Reset para inline-block */
.inline-block-parent {
    font-size: 0;
}
.inline-block-child {
    font-size: 16px;
}
```

---

## ⚠️ Problemas Comunes Y Soluciones

> [!failure]- Desbordamiento de contenido
> **Solución**:
> ```css
> .contenedor {
>     overflow: auto; /* o hidden */
> }
> ```

> [!failure]- Espacios no deseados en inline-block
> **Solución**:
> ```html
> <!-- Eliminar espacios entre elementos -->
> <div class="item"></div><div class="item"></div>
> ```

> [!failure]- Desalineación vertical
> **Solución**:
> ```css
> .elemento {
>     vertical-align: top;
>     display: inline-block;
> }
> ```

---

## 📚 Recursos Recomendados

- [Guía completa de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [Evolución de los layouts CSS](https://web.dev/learn/css/layout/)
