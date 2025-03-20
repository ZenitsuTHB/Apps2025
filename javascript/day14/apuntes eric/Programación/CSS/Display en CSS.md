# Display En Css: Block, Inline E Inline-block

---

## 📌 Tipos De Display

### 1. `display: block`

- **Comportamiento**: Ocupa todo el ancho disponible
- **Flujo**: Apilamiento vertical
- **Ejemplos**: `<div>`, `<p>`, `<h1>`-`<h6>`
- **Características**:
  - Acepta width/height
  - Respeta margin/padding
  - Fuerza salto de línea

### 2. `display: inline`

- **Comportamiento**: Ocupa solo el espacio necesario
- **Flujo**: En línea horizontal
- **Ejemplos**: `<span>`, `<a>`, `<strong>`
- **Características**:
  - Ignora width/height
  - Margin/padding solo horizontal
  - No fuerza salto de línea

### 3. `display: inline-block`

- **Comportamiento**: Híbrido entre block e inline
- **Flujo**: En línea horizontal
- **Características**:
  - Acepta width/height
  - Respeta margin/padding completo
  - Alineación vertical controlable

---

## 🎯 Ejemplo Práctico: Layout Con Inline-block

```html
<div style="
    background-image: url('https://pablomonteserin.com/wp-content/uploads/2020/05/bg-2.jpg');
    width: 1000px;
    height: 1000px;
    margin: auto;
    background-repeat: no-repeat;">
    
    <!-- Columna 1 -->
    <div style="
        width: 250px;
        padding: 25px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;">
        <p>Lorem ipsum dolor sit amet...</p>
    </div>
    
    <!-- Columna 2 -->
    <div style="
        width: 250px;
        padding: 25px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;">
        <p>Lorem ipsum dolor sit amet...</p>
    </div>
    
    <!-- Columna 3 -->
    <div style="
        width: 250px;
        padding: 25px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;">
        <p>Lorem ipsum dolor sit amet...</p>
    </div>
</div>
```

> [!tip]- Claves del diseño
> - `inline-block` para alinear horizontalmente
> - `vertical-align: top` para alineación uniforme
> - `box-sizing: border-box` para dimensiones precisas
> - Padding interno para espaciado controlado

---

## 📊 Comparativa De Displays

| Propiedad          | block            | inline           | inline-block     |
|--------------------|------------------|------------------|------------------|
| Width/Height       | Sí               | No               | Sí               |
| Margin/Padding     | Completo         | Solo horizontal  | Completo         |
| Alineación         | Vertical         | Horizontal       | Horizontal       |
| Salto de línea     | Sí               | No               | No               |
| Ejemplos comunes   | div, p, h1-h6    | span, a, strong  | -                |

---

## 🛠️ Mejores Prácticas

1. **Alineación vertical**:

   ```css
   .elemento {
       vertical-align: top; /* middle | bottom */
   }
   ```

2. **Espaciado entre elementos**:

   ```css
   .contenedor {
       font-size: 0; /* Elimina espacios fantasma */
   }
   .elemento {
       font-size: 16px; /* Restaura tamaño */
   }
   ```

3. **Responsividad**:

   ```css
   @media (max-width: 768px) {
       .elemento {
           display: block;
           width: 100%;
       }
   }
   ```

4. **Alternativas modernas**:

   ```css
   .contenedor {
       display: flex; /* Más control sobre alineación */
   }
   ```

---

## ⚠️ Problemas Comunes Y Soluciones

> [!failure]- Espacios no deseados
> **Causa**: Espacios en blanco en HTML
> **Solución**:
> ```html
> <div><!--
>     --><span>Elemento 1</span><!--
>     --><span>Elemento 2</span><!--
> --></div>
> ```

> [!failure]- Desalineación vertical
> **Causa**: Elementos con diferente altura
> **Solución**:
> ```css
> .elemento {
>     vertical-align: top;
> }
> ```

> [!failure]- Desbordamiento en móviles
> **Causa**: Anchos fijos
> **Solución**:
> ```css
> @media (max-width: 768px) {
>     .elemento {
>         display: block;
>         width: 100%;
>     }
> }
> ```

---

## 🎨 Ejemplo Avanzado: Galería Responsive

```html
<div class="galeria">
    <div class="item">...</div>
    <div class="item">...</div>
    <div class="item">...</div>
</div>

<style>
.galeria {
    text-align: center;
    font-size: 0;
}
.item {
    display: inline-block;
    width: 30%;
    margin: 1%;
    vertical-align: top;
    font-size: 16px;
}
@media (max-width: 600px) {
    .item {
        width: 48%;
    }
}
</style>
```

> [!success]- Características
> - Espaciado uniforme con porcentajes
> - Alineación perfecta con `vertical-align`
> - Adaptación responsive con media queries

