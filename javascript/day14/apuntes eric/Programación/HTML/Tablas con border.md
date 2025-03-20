# Crear Tablas En Html Usando El Atributo `border`

El atributo `border` en HTML se utiliza para definir el borde de una tabla y sus celdas. Aunque es una forma rápida de añadir bordes, no es la más recomendada en la actualidad, ya que el estilo de las tablas se maneja mejor con CSS. Sin embargo, es útil para entender los conceptos básicos.

---

## Estructura Básica De Una Tabla Con `border`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablas en HTML</title>
</head>
<body>
    <table border="1"> 
        <!-- Primera fila -->
        <tr>
            <td>Celda 1,1</td>
            <td>Celda 1,2</td>
            <td>Celda 1,3</td>
        </tr>
        <!-- Segunda fila -->
        <tr>
            <td>Celda 2,1</td>
            <td>Celda 2,2</td>
            <td>Celda 2,3</td>
        </tr>
    </table>
</body>
</html>
```

## Explicación Del Código

1. **Etiqueta `<table>`**:
    - Define el inicio y fin de la tabla.
    - El atributo `border="1"` añade un borde de 1 píxel alrededor de la tabla y sus celdas.

2. **Etiqueta `<tr>` (Table Row)**:
    - Define una fila de la tabla.
    - Cada fila puede contener una o más celdas.

3. **Etiqueta `<td>` (Table Data)**:
    - Define una celda dentro de una fila.
    - El contenido de la celda se coloca entre las etiquetas `<td>` y `</td>`.

---

## Atributo `border`

- **Valor**: Un número que define el grosor del borde en píxeles.
    - Ejemplo: `border="1"` crea un borde de 1 píxel.
    - Si no se especifica o se usa `border="0"`, la tabla no tendrá bordes visibles.
- **Limitaciones**:
    - No permite personalización avanzada (color, estilo, etc.).
    - Es preferible usar CSS para estilizar bordes.

---

## Combinar Celdas: `rowspan` Y `colspan`

En HTML, puedes combinar celdas de una tabla usando los atributos `rowspan` y `colspan`. Estos atributos permiten que una celda ocupe varias filas o columnas, respectivamente.

### `colspan` (Combinar columnas)

- **Propósito**: Hace que una celda ocupe varias columnas.
- **Uso**: Añade el atributo `colspan` a una celda (`<td>` o `<th>`).
- **Valor**: Un número que indica cuántas columnas ocupará la celda.

#### Ejemplo:

<table border="1">
    <tr>
        <td colspan="2">Celda combinada (2 columnas)</td>
        <td>Celda normal</td>
    </tr>
    <tr>
    <td>Celda 2,1</td>
        <td>Celda 2,2</td>
        <td>Celda 2,3</td>
    </tr>
</table>

```html
<table border="1">
    <tr>
        <td colspan="2">Celda combinada (2 columnas)</td>
        <td>Celda normal</td>
    </tr>
    <tr>
        <td>Celda 2,1</td>
        <td>Celda 2,2</td>
        <td>Celda 2,3</td>
    </tr>
</table>
```

### `rowspan` (Combinar filas)

- **Propósito**: Hace que una celda ocupe varias filas.
- **Uso**: Añade el atributo `rowspan` a una celda (`<td>` o `<th>`).
- **Valor**: Un número que indica cuántas filas ocupará la celda.

#### Ejemplo:

<table border="1">
    <tr>
        <td rowspan="2">Celda combinada (2 filas)</td>
        <td>Celda 1,2</td>
        <td>Celda 1,3</td>
    </tr>
    <tr>
        <td>Celda 2,2</td>
        <td>Celda 2,3</td>
    </tr>
</table>

```html

<table border="1">
    <tr>
        <td rowspan="2">Celda combinada (2 filas)</td>
        <td>Celda 1,2</td>
        <td>Celda 1,3</td>
    </tr>
    <tr>
        <td>Celda 2,2</td>
        <td>Celda 2,3</td>
    </tr>
</table>

```

---

### Combinar `rowspan` Y `colspan`

Puedes usar ambos atributos en la misma celda para crear diseños más complejos.

#### Ejemplo:

<table border="1">
    <tr>
        <td rowspan="2" colspan="2">Celda combinada (2 filas y 2 columnas)</td>
        <td>Celda 1,3</td>
    </tr>
    <tr>
        <td>Celda 2,3</td>
    </tr>
    <tr>
        <td>Celda 3,1</td>
        <td>Celda 3,2</td>
        <td>Celda 3,3</td>
    </tr>
</table>

```html
<table border="1">
    <tr>
        <td rowspan="2" colspan="2">Celda combinada (2 filas y 2 columnas)</td>
        <td>Celda 1,3</td>
    </tr>
    <tr>
        <td>Celda 2,3</td>
    </tr>
    <tr>
        <td>Celda 3,1</td>
        <td>Celda 3,2</td>
        <td>Celda 3,3</td>
    </tr>
</table>
```

### Tabla Compleja

<table border="1">
    <!-- Fila 1 -->
    <tr>
        <td colspan="6">Fila 1 - Celda combinada (6 columnas)</td>
    </tr>
    <!-- Fila 2 -->
    <tr>
        <td rowspan="4">Fila 2-5 - Celda combinada (4 filas)</td>
        <td>Fila 2 - Celda 2</td>
        <td colspan="2">Fila 2 - Celda combinada (2 columnas)</td>
        <td>Fila 2 - Celda 5</td>
        <td rowspan="4">Fila 2-5 - Celda combinada (4 filas)</td>
    </tr>
    <!-- Fila 3 -->
    <tr>
        <td>Fila 3 - Celda 2</td>
        <td>Fila 3 - Celda 3</td>
        <td rowspan="3">Fila 3-5 - Celda combinada (3 filas)</td>
        <td>Fila 3 - Celda 5</td>
    </tr>
    <!-- Fila 4 -->
    <tr>
        <td colspan="2" rowspan="2">Fila 4-5 - Celda combinada (2 filas y 2 columnas)</td>
        <td>Fila 4 - Celda 5</td>
    </tr>
    <!-- Fila 5 -->
    <tr>
        <td>Fila 5 - Celda 5</td>
    </tr>
    <!-- Fila 6 -->
    <tr>
        <td colspan="6">Fila 6 - Celda combinada (6 columnas)</td>
    </tr>
</table>

```html
<table border="1">
    <!-- Fila 1 -->
    <tr>
        <td colspan="6">Fila 1 - Celda combinada (6 columnas)</td>
    </tr>
    <!-- Fila 2 -->
    <tr>
        <td rowspan="4">Fila 2-5 - Celda combinada (4 filas)</td>
        <td>Fila 2 - Celda 2</td>
        <td colspan="2">Fila 2 - Celda combinada (2 columnas)</td>
        <td>Fila 2 - Celda 5</td>
        <td rowspan="4">Fila 2-5 - Celda combinada (4 filas)</td>
    </tr>
    <!-- Fila 3 -->
    <tr>
        <td>Fila 3 - Celda 2</td>
        <td>Fila 3 - Celda 3</td>
        <td rowspan="3">Fila 3-5 - Celda combinada (3 filas)</td>
        <td>Fila 3 - Celda 5</td>
    </tr>
    <!-- Fila 4 -->
    <tr>
        <td colspan="2" rowspan="2">Fila 4-5 - Celda combinada (2 filas y 2 columnas)</td>
        <td>Fila 4 - Celda 5</td>
    </tr>
    <!-- Fila 5 -->
    <tr>
        <td>Fila 5 - Celda 5</td>
    </tr>
    <!-- Fila 6 -->
    <tr>
        <td colspan="6">Fila 6 - Celda combinada (6 columnas)</td>
    </tr>
</table>
```

<table border="0"> <tr> <td colspan="6"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor1.jpg" alt="pieza puzzle picasso" /> </td> </tr> <tr> <td rowspan="4"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor2_c1.jpg" alt="pieza puzzle picasso" /> </td> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor2_c2.jpg" alt="pieza puzzle picasso" /> </td> <td colspan="2"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor2_c3.jpg" alt="pieza puzzle picasso" /> </td> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor2_c5.jpg" alt="pieza puzzle picasso" /> </td> <td rowspan="4"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor2_c6.jpg" alt="pieza puzzle picasso" /> </td> </tr> <tr> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor3_c2.jpg" alt="pieza puzzle picasso" /> </td> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor3_c3.jpg" alt="pieza puzzle picasso" /> </td> <td rowspan="3"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor3_c4.jpg" alt="pieza puzzle picasso" /> </td> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor3_c5.jpg" alt="pieza puzzle picasso" /> </td> </tr> <tr> <td colspan="2" rowspan="2"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor4_c2.jpg" alt="pieza puzzle picasso" /> </td> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor4_c5.jpg" alt="pieza puzzle picasso" /> </td> </tr> <tr> <td> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor5_c5.jpg" alt="pieza puzzle picasso" /> </td> </tr> <tr> <td colspan="6"> <img src="https://pablomonteserin.com/res/html5/ex/imgpicasso/img/picassor6_c1.jpg" alt="pieza puzzle picasso" /> </td> </tr> </table>
