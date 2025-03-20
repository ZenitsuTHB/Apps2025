# Métodos Comunes Para Trabajar Con Arrays

## 1. ¿Qué Es Un Array?

- Es una **colección ordenada de elementos**.
- Puede contener cualquier tipo de dato: números, strings, objetos, otros arrays, etc.

---

## 2. Métodos Básicos Para Modificar Arrays

### a) `push()`

- **Añade un elemento al final** del array.
- **Ejemplo**:

  ```javascript
  let frutas = ['manzana', 'banana'];
  frutas.push('naranja'); // Añade 'naranja' al final
  console.log(frutas); // ['manzana', 'banana', 'naranja']
  ```

---

### b) `pop()`

- **Elimina el último elemento** del array.
- **Ejemplo**:

  ```javascript
  let frutas = ['manzana', 'banana', 'naranja'];
  frutas.pop(); // Elimina 'naranja'
  console.log(frutas); // ['manzana', 'banana']
  ```

---

### c) `shift()`

- **Elimina el primer elemento** del array.
- **Ejemplo**:

  ```javascript
  let frutas = ['manzana', 'banana', 'naranja'];
  frutas.shift(); // Elimina 'manzana'
  console.log(frutas); // ['banana', 'naranja']
  ```

---

### d) `unshift()`

- **Añade un elemento al principio** del array.
- **Ejemplo**:

  ```javascript
  let frutas = ['banana', 'naranja'];
  frutas.unshift('manzana'); // Añade 'manzana' al principio
  console.log(frutas); // ['manzana', 'banana', 'naranja']
  ```

---

## 3. Resumen De Métodos Básicos

| Método     | Descripción                        | Ejemplo                          |
|------------|------------------------------------|----------------------------------|
| `push()`   | Añade un elemento al final.        | `frutas.push('naranja')`         |
| `pop()`    | Elimina el último elemento.        | `frutas.pop()`                   |
| `shift()`  | Elimina el primer elemento.        | `frutas.shift()`                 |
| `unshift()`| Añade un elemento al principio.    | `frutas.unshift('manzana')`      |

---

## 4. Métodos Para Buscar Y Filtrar

### a) `indexOf()`

- **Busca un elemento** y devuelve su **índice** (posición). Si no lo encuentra, devuelve `-1`.
- **Ejemplo**:

  ```javascript
  let frutas = ['manzana', 'banana', 'naranja'];
  let índice = frutas.indexOf('banana'); // 1
  console.log(índice);
  ```

---

### b) `includes()`

- **Verifica si un elemento existe** en el array. Devuelve `true` o `false`.
- **Ejemplo**:

  ```javascript
  let frutas = ['manzana', 'banana', 'naranja'];
  let existe = frutas.includes('banana'); // true
  console.log(existe);
  ```

---

### c) `filter()`

- **Crea un nuevo array** con los elementos que cumplan una condición.
- **Ejemplo**:

  ```javascript
  let números = [1, 2, 3, 4, 5];
  let pares = números.filter(function(número) {
    return número % 2 === 0;
  });
  console.log(pares); // [2, 4]
  ```

---

## 5. Métodos Para Transformar Arrays

### a) `map()`

- **Crea un nuevo array** aplicando una función a cada elemento.
- **Ejemplo**:

  ```javascript
  let números = [1, 2, 3];
  let dobles = números.map(function(número) {
    return número * 2;
  });
  console.log(dobles); // [2, 4, 6]
  ```

---

### b) `reduce()`

- **Reduce el array a un solo valor** aplicando una función acumuladora.
- **Ejemplo**:

  ```javascript
  let números = [1, 2, 3, 4];
  let suma = números.reduce(function(acumulador, número) {
    return acumulador + número;
  }, 0); // 0 es el valor inicial del acumulador
  console.log(suma); // 10
  ```

---

## 6. Resumen De Métodos Avanzados

| Método       | Descripción                              | Ejemplo                          |
|--------------|------------------------------------------|----------------------------------|
| `indexOf()`  | Busca un elemento y devuelve su índice.  | `frutas.indexOf('banana')`       |
| `includes()` | Verifica si un elemento existe.          | `frutas.includes('banana')`      |
| `filter()`   | Filtra elementos que cumplen una condición. | `números.filter(n => n % 2 === 0)` |
| `map()`      | Transforma cada elemento del array.      | `números.map(n => n * 2)`        |
| `reduce()`   | Reduce el array a un solo valor.         | `números.reduce((acc, n) => acc + n, 0)` |

---

## 7. Ejemplo Completo

```javascript
let frutas = ['manzana', 'banana'];

// Añadir y eliminar elementos
frutas.push('naranja'); // ['manzana', 'banana', 'naranja']
frutas.pop(); // ['manzana', 'banana']
frutas.unshift('pera'); // ['pera', 'manzana', 'banana']
frutas.shift(); // ['manzana', 'banana']

// Buscar elementos
console.log(frutas.indexOf('banana')); // 1
console.log(frutas.includes('manzana')); // true

// Transformar arrays
let números = [1, 2, 3, 4];
let pares = números.filter(n => n % 2 === 0); // [2, 4]
let dobles = números.map(n => n * 2); // [2, 4, 6, 8]
let suma = números.reduce((acc, n) => acc + n, 0); // 10
```

---

## 8. Consejos Prácticos

1. **Usa `push()` y `pop()`** para trabajar con el **final** del array.
2. **Usa `unshift()` y `shift()`** para trabajar con el **principio** del array.
3. **`filter()` y `map()`** son ideales para crear nuevos arrays sin modificar el original.
4. **`reduce()`** es poderoso para cálculos acumulativos.

---

# Métodos Y Propiedades Útiles Para Trabajar Con Arrays

## 1. Propiedad `length`

- **¿Para qué sirve?**: Te dice cuántos elementos tiene un array.
- **Ejemplo práctico**:

  ```javascript
  let tareas = ['Estudiar', 'Hacer ejercicio', 'Comprar comida'];
  console.log(`Tienes ${tareas.length} tareas pendientes.`);
  // Resultado: "Tienes 3 tareas pendientes."
  ```

---

## 2. Métodos Para Buscar Y Verificar

### a) `find()`

- **¿Para qué sirve?**: Encuentra el primer elemento que cumpla una condición.
- **Ejemplo práctico**:

  ```javascript
  let productos = [
    { nombre: 'Manzana', precio: 1.5 },
    { nombre: 'Banana', precio: 2.0 },
    { nombre: 'Naranja', precio: 1.0 }
  ];
  let productoBarato = productos.find(producto => producto.precio < 1.5);
  console.log(productoBarato); // { nombre: 'Naranja', precio: 1.0 }
  ```

---

### b) `some()`

- **¿Para qué sirve?**: Verifica si **al menos un elemento** cumple una condición.
- **Ejemplo práctico**:

  ```javascript
  let notas = [4, 6, 8, 5];
  let hayAprobados = notas.some(nota => nota >= 5);
  console.log(hayAprobados); // true
  ```

---

### c) `every()`

- **¿Para qué sirve?**: Verifica si **todos los elementos** cumplen una condición.
- **Ejemplo práctico**:

  ```javascript
  let edades = [18, 22, 25, 30];
  let todosMayoresDeEdad = edades.every(edad => edad >= 18);
  console.log(todosMayoresDeEdad); // true
  ```

### d) `indexOf`

```javascript
let frutas = ['manzana', 'banana', 'naranja'];
let índice = frutas.indexOf('banana');
console.log(índice); // 1
```

- **Explicación**: `'banana'` está en la posición `1` del array.
---

## 3. Métodos Para Ordenar Y Filtrar

### a) `sort()`

- **¿Para qué sirve?**: Ordena los elementos de un array.
- **Ejemplo práctico**:

  ```javascript
  let nombres = ['Carlos', 'Ana', 'David', 'Beatriz'];
  nombres.sort();
  console.log(nombres); // ['Ana', 'Beatriz', 'Carlos', 'David']
  ```

- **Ordenar números**:

  ```javascript
  let precios = [100, 50, 20, 200];
  precios.sort((a, b) => a - b); // Orden ascendente
  console.log(precios); // [20, 50, 100, 200]
  ```

---

### b) `filter()`

- **¿Para qué sirve?**: Crea un nuevo array con los elementos que cumplen una condición.
- **Ejemplo práctico**:

  ```javascript
  let números = [1, 2, 3, 4, 5, 6];
  let pares = números.filter(número => número % 2 === 0);
  console.log(pares); // [2, 4, 6]
  ```

---

## 4. Métodos Para Transformar Arrays

### a) `map()`

- **¿Para qué sirve?**: Crea un nuevo array aplicando una función a cada elemento.
- **Ejemplo práctico**:

  ```javascript
  let precios = [10, 20, 30];
  let preciosConIva = precios.map(precio => precio * 1.21);
  console.log(preciosConIva); // [12.1, 24.2, 36.3]
  ```

---

### b) `reduce()`

- **¿Para qué sirve?**: Reduce el array a un solo valor (por ejemplo, una suma).
- **Ejemplo práctico**:

  ```javascript
  let gastos = [100, 50, 30, 20];
  let totalGastos = gastos.reduce((acumulador, gasto) => acumulador + gasto, 0);
  console.log(totalGastos); // 200
  ```

---

## 5. Métodos Para Unir Y Dividir

### a) `concat()`

- **¿Para qué sirve?**: Combina dos o más arrays.
- **Ejemplo práctico**:

  ```javascript
  let frutas = ['Manzana', 'Banana'];
  let verduras = ['Zanahoria', 'Lechuga'];
  let alimentos = frutas.concat(verduras);
  console.log(alimentos); // ['Manzana', 'Banana', 'Zanahoria', 'Lechuga']
  ```

---

### b) `join()`

- **¿Para qué sirve?**: Convierte un array en un string, uniendo los elementos con un separador.
- **Ejemplo práctico**:

  ```javascript
  let palabras = ['Hola', 'mundo', 'JavaScript'];
  let frase = palabras.join(' ');
  console.log(frase); // "Hola mundo JavaScript"
  ```

---

### c) `slice()`

- **¿Para qué sirve?**: Devuelve una copia de una parte del array.
- **Ejemplo práctico**:

  ```javascript
  let colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
  let subColores = colores.slice(1, 3); // Desde el índice 1 hasta el 3 (sin incluir)
  console.log(subColores); // ['Verde', 'Azul']
  ```

---

### d) `splice()`

- **¿Para qué sirve?**: Modifica el array añadiendo o eliminando elementos.
- **Ejemplo práctico**:

  ```javascript
  let tareas = ['Estudiar', 'Comer', 'Dormir'];
  tareas.splice(1, 1, 'Hacer ejercicio'); // Elimina 1 elemento en el índice 1 y añade 'Hacer ejercicio'
  console.log(tareas); // ['Estudiar', 'Hacer ejercicio', 'Dormir']
  ```

---

## 6. Ejemplo Completo Y Práctico

```javascript
// Lista de productos
let productos = [
  { nombre: 'Manzana', precio: 1.5 },
  { nombre: 'Banana', precio: 2.0 },
  { nombre: 'Naranja', precio: 1.0 }
];

// 1. Filtrar productos baratos (precio < 2)
let productosBaratos = productos.filter(producto => producto.precio < 2);
console.log(productosBaratos); // [{ nombre: 'Manzana', precio: 1.5 }, { nombre: 'Naranja', precio: 1.0 }]

// 2. Aplicar un descuento del 10% a cada producto
let productosConDescuento = productos.map(producto => {
  return { nombre: producto.nombre, precio: producto.precio * 0.9 };
});
console.log(productosConDescuento); // [{ nombre: 'Manzana', precio: 1.35 }, ...]

// 3. Calcular el precio total de todos los productos
let precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotal); // 4.5
```

---

## 7. Resumen Rápido

| Método/Propiedad | Descripción                                            | Ejemplo                                  |
| ---------------- | ------------------------------------------------------ | ---------------------------------------- |
| `length`         | Número de elementos en el array.                       | `tareas.length`                          |
| `find()`         | Busca el primer elemento que cumpla una condición.     | `productos.find(p => p.precio < 2)`      |
| `some()`         | Verifica si al menos un elemento cumple una condición. | `notas.some(n => n >= 5)`                |
| `every()`        | Verifica si todos los elementos cumplen una condición. | `edades.every(e => e >= 18)`             |
| `sort()`         | Ordena los elementos del array.                        | `nombres.sort()`                         |
| `filter()`       | Filtra elementos que cumplen una condición.            | `números.filter(n => n % 2 === 0)`       |
| `map()`          | Transforma cada elemento del array.                    | `precios.map(p => p * 1.21)`             |
| `reduce()`       | Reduce el array a un solo valor.                       | `gastos.reduce((acc, g) => acc + g, 0)`  |
| `concat()`       | Combina dos o más arrays.                              | `frutas.concat(verduras)`                |
| `join()`         | Convierte el array en un string.                       | `palabras.join(' ')`                     |
| `slice()`        | Devuelve una copia de una parte del array.             | `colores.slice(1, 3)`                    |
| `splice()`       | Modifica el array añadiendo o eliminando elementos.    | `tareas.splice(1, 1, 'Hacer ejercicio')` |

---

# Arrays Bidimensionales En JavaScript

## 1. ¿Qué Es Un Array Bidimensional?

- Es un **array que contiene otros arrays**.
- Puedes imaginarlo como una **tabla** con filas y columnas.
- Cada "fila" es un array, y cada "columna" es un elemento dentro de ese array.

---

## 2. Crear Un Array Bidimensional

```javascript
let listasDeFrutas = [
    ["manzana", "banana", "naranja"], // Fila 0
    ["kiwi", "mango", "cereza"],      // Fila 1
    ["fresa", "pera", "sandia"]       // Fila 2
];
```

- **Estructura**:
  - `listasDeFrutas[0]` → `["manzana", "banana", "naranja"]`
  - `listasDeFrutas[1]` → `["kiwi", "mango", "cereza"]`
  - `listasDeFrutas[2]` → `["fresa", "pera", "sandia"]`

---

## 3. Acceder a Elementos

- Para acceder a un elemento, usamos **dos índices**: `[fila][columna]`.
- **Ejemplo**:

  ```javascript
  console.log(listasDeFrutas[0][1]); // "banana"
  ```

  - **Explicación**:
    - `[0]`: Primera fila (`["manzana", "banana", "naranja"]`).
    - `[1]`: Segundo elemento de esa fila (`"banana"`).

---

## 4. Añadir Un Nuevo Array

- Puedes añadir un nuevo array al array bidimensional usando `push()`.
- **Ejemplo**:

  ```javascript
  let frutasNoMeGustan = ["Dragonfruit", "Jack"];
  listasDeFrutas.push(frutasNoMeGustan);
  console.log(listasDeFrutas);
  ```

  - **Resultado**:

    ```javascript
    [
        ["manzana", "banana", "naranja"],
        ["kiwi", "mango", "cereza"],
        ["fresa", "pera", "sandia"],
        ["Dragonfruit", "Jack"] // Nuevo array añadido
    ]
    ```

---

## 5. Recorrer Un Array Bidimensional

- Puedes usar bucles `for` o `forEach` para recorrer todos los elementos.

### a) Con `for`

```javascript
for (let i = 0; i < listasDeFrutas.length; i++) {
    for (let j = 0; j < listasDeFrutas[i].length; j++) {
        console.log(listasDeFrutas[i][j]);
    }
}
```

- **Resultado**:

  ```
  manzana
  banana
  naranja
  kiwi
  mango
  cereza
  fresa
  pera
  sandia
  Dragonfruit
  Jack
  ```

---

### b) Con `forEach`

```javascript
listasDeFrutas.forEach(fila => {
    fila.forEach(fruta => {
        console.log(fruta);
    });
});
```

- **Resultado**: El mismo que con `for`.

---

## 6. Ejemplo Práctico: Buscar Una Fruta

```javascript
function buscarFruta(lista, fruta) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].includes(fruta)) {
            return `¡${fruta} está en la fila ${i}!`;
        }
    }
    return `¡${fruta} no está en la lista!`;
}

console.log(buscarFruta(listasDeFrutas, "mango")); // "¡mango está en la fila 1!"
console.log(buscarFruta(listasDeFrutas, "uva"));   // "¡uva no está en la lista!"
```

---

## 7. Resumen Rápido

| Concepto               | Descripción                              | Ejemplo                          |
|------------------------|------------------------------------------|----------------------------------|
| **Array bidimensional**| Array que contiene otros arrays.         | `let lista = [[1, 2], [3, 4]];` |
| **Acceder a elementos**| Usa dos índices: `[fila][columna]`.      | `lista[0][1]` → `2`             |
| **Añadir un array**    | Usa `push()` para añadir un nuevo array. | `lista.push([5, 6]);`           |
| **Recorrer**           | Usa bucles anidados (`for` o `forEach`). | Ver ejemplos arriba.            |

---

## 8. Consejos Prácticos

1. **Usa arrays bidimensionales** para representar datos tabulares (como una tabla de Excel).
2. **Combina `indexOf` con bucles** para buscar elementos en arrays bidimensionales.
3. **`push()` es tu amigo**: Añade nuevos arrays o elementos fácilmente.

---

Estos apuntes están optimizados para **Obsidian** y son fáciles de entender. ¡Espero que te ayuden a dominar los arrays bidimensionales en JavaScript! 😊
