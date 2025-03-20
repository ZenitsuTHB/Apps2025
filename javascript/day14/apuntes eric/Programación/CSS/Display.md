# Guía Completa De Css Display (Enfoque En Flexbox)

## 1. Tipos Principales De Display

### 1.1 `block`

- **Comportamiento**:
  - Ocupa todo el ancho disponible
  - Apilamiento vertical
  - Acepta todas las propiedades de box-model
- **Elementos nativos**: `<div>`, `<p>`, `<h1>-<h6>`

### 1.2 `inline`

- **Comportamiento**:
  - Ocupa solo espacio necesario
  - No acepta width/height
  - Margin/padding solo horizontal
- **Elementos nativos**: `<span>`, `<a>`, `<strong>`

### 1.3 `inline-block`

- **Híbrido**:
  - Comportamiento inline pero acepta width/height
  - Útil para elementos en línea que necesitan dimensiones

### 1.4 `none`

- Elimina el elemento del flujo del documento
- No ocupa espacio visual

---

## 2. Flexbox (display: flex) - El Que Más Necesitas 🎯

### 2.1 Conceptos Clave

- **Contenedor flex**: Elemento padre con `display: flex`
- **Ítems flex**: Elementos hijos directos
- **Ejes**:
  - **Principal**: Dirección de distribución (por defecto horizontal)
  - **Cruzado**: Dirección perpendicular

### 2.2 Propiedades Del Contenedor

| Propiedad | Valores comunes | Descripción |
|-----------|-----------------|-------------|
| `flex-direction` | `row`, `column`, `row-reverse`, `column-reverse` | Dirección del eje principal |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | Alineación eje principal |
| `align-items` | `stretch`, `flex-start`, `flex-end`, `center`, `baseline` | Alineación eje cruzado |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Control de múltiples líneas |
| `gap` | `10px`, `1rem` | Espacio entre ítems |

### 2.3 Propiedades De Los Ítems

| Propiedad | Valores | Descripción |
|-----------|---------|-------------|
| `order` | `0`, `1`, `-1` | Orden visual |
| `flex-grow` | Número | Capacidad de crecimiento |
| `flex-shrink` | Número | Capacidad de reducción |
| `flex-basis` | `auto`, `200px`, `30%` | Tamaño base |
| `align-self` | `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch` | Alineación individual |

### 2.4 Patrones Comunes Con Flexbox

#### Centrado Perfecto

```css
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### Distribución Equitativa

```css
.ítems {
  flex: 1; /* Todos crecen igual */
}
```

#### Menú Responsive

```css
.menu {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
```

---

## 3. Comparativa Flex Vs Grid

| Característica | Flexbox | Grid |
|----------------|---------|------|
| **Dimensión** | 1D (filas o columnas) | 2D (filas y columnas) |
| **Control** | Distribución en eje principal | Control preciso de celdas |
| **Casos de uso** | Elementos en línea, menús | Layouts complejos, cuadrículas |
| **Alineación** | Buen soporte | Soporte similar |
| **Espaciado** | `gap` (soporte moderno) | `gap` nativo |

---

## 4. Errores Comunes Con Flexbox

1. **Olvidar `flex-wrap`**:

```css
/* Mal */
.contenedor { display: flex; width: 100%; }

/* Bien */
.contenedor { display: flex; flex-wrap: wrap; }
```

2. **Confundir ejes**:

```css
/* Para dirección column, justify-content trabaja verticalmente */
.contenedor {
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
}
```

3. **Uso incorrecto de `flex` shorthand**:

```css
/* Mal */
flex: 200px;

/* Bien */
flex: 0 0 200px; /* (grow, shrink, basis) */
```

---

## 5. Recursos Visuales

### 5.1 Diagrama Flexbox

```
[Contenedor Flex]
├── Eje Principal → justify-content
└── Eje Cruzado → align-items

[Ítems]
├── flex-grow → Expansión
├── flex-shrink → Contracción
└── order → Posición
```

### 5.2 Cheatsheet Rápida

```css
/* Contenedor */
display: flex;
flex-direction: row | column;
justify-content: center | space-between;
align-items: center | stretch;
gap: 10px;

/* Ítems */
flex: 1; /* grow=1, shrink=1, basis=0 */
align-self: flex-end;
order: 2;
```

---

## 6. Ejercicio Práctico

Crea este layout usando Flexbox:

```
[Header]
[Main Content][Sidebar]
[Footer]
```

**Solución**:

```html
<div class="contenedor">
  <header></header>
  <div class="main-content"></div>
  <aside class="sidebar"></aside>
  <footer></footer>
</div>
```

```css
.contenedor {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 300px;
}
```

---

## 7. Herramientas Recomendadas

1. [Flexbox Froggy](https://flexboxfroggy.com/) - Juego interactivo
2. [CSS Tricks Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
3. [Firefox Flex Inspector](https://developer.mozilla.org/es/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)

Dominar Flexbox requiere práctica, pero una vez que entiendas estos conceptos podrás crear layouts complejos de manera eficiente. ¡Empieza con ejemplos sencillos y ve aumentando la complejidad! 😊
