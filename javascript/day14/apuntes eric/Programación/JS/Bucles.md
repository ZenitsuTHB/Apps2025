# Bucles En JavaScript

## 1. ¿Qué Es Un Bucle?

- Es una estructura que **repite un bloque de código** mientras se cumpla una condición.
- Se usa para **automatizar tareas repetitivas**.

---

## 2. Tipos De Bucles

### a) Bucle `for`

- Se usa cuando **sabes cuántas veces** quieres repetir el código.
- Estructura:

  ```javascript
  for (inicialización; condición; actualización) {
    // Código a repetir
  }
  ```

- **Partes**:
  1. **Inicialización**: Define una variable de control (por ejemplo, `let i = 0`).
  2. **Condición**: El bucle se repite mientras esta condición sea verdadera (por ejemplo, `i < 5`).
  3. **Actualización**: Modifica la variable de control en cada iteración (por ejemplo, `i++`).

#### Ejemplo:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración número: " + i);
}
```

- **Resultado**:

  ```
  Iteración número: 0
  Iteración número: 1
  Iteración número: 2
  Iteración número: 3
  Iteración número: 4
  ```

---

### b) Bucle `while`

- Se usa cuando **no sabes cuántas veces** se repetirá el código, pero tienes una condición para detenerlo.
- Estructura:

  ```javascript
  while (condición) {
    // Código a repetir
  }
  ```

- **Importante**: Asegúrate de que la condición eventualmente sea falsa, o el bucle será infinito.

#### Ejemplo:

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++; // Incrementa el contador
}
```

- **Resultado**:

  ```
  Contador: 0
  Contador: 1
  Contador: 2
  Contador: 3
  Contador: 4
  ```

---

### c) Bucle `do...while`

- Similar al `while`, pero **el código se ejecuta al menos una vez**, incluso si la condición es falsa.
- Estructura:

  ```javascript
  do {
    // Código a repetir
  } while (condición);
  ```

#### Ejemplo:

```javascript
let contador = 0;

do {
  console.log("Contador: " + contador);
  contador++;
} while (contador < 5);
```

- **Resultado**:

  ```
  Contador: 0
  Contador: 1
  Contador: 2
  Contador: 3
  Contador: 4
  ```

---

## 3. Comparación De Bucles

| Bucle         | ¿Cuándo usarlo?                          | Ejemplo                          |
|---------------|------------------------------------------|----------------------------------|
| `for`         | Cuando sabes cuántas veces repetir el código. | `for (let i = 0; i < 5; i++) { ... }` |
| `while`       | Cuando no sabes cuántas veces repetir, pero tienes una condición. | `while (condición) { ... }` |
| `do...while`  | Cuando el código debe ejecutarse al menos una vez. | `do { ... } while (condición);` |

---

## 4. Ejemplos Prácticos

### a) Recorrer Un Array Con `for`

```javascript
const frutas = ["Manzana", "Banana", "Naranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + frutas[i]);
}
```

- **Resultado**:

  ```
  Fruta: Manzana
  Fruta: Banana
  Fruta: Naranja
  ```

### b) Sumar Números Con `while`

```javascript
let suma = 0;
let numero = 1;

while (numero <= 5) {
  suma += numero; // suma = suma + numero
  numero++;
}

console.log("La suma es: " + suma); // 15
```

### c) Validar Entrada Con `do...while`

```javascript
let respuesta;

do {
  respuesta = prompt("¿Quieres continuar? (s/n)");
} while (respuesta !== "s" && respuesta !== "n");

console.log("Respuesta válida: " + respuesta);
```

## 1. ¿Qué Es `forEach`?

- Es un método de los **arrays** que permite **recorrer cada elemento** del array y ejecutar una función con él.
- Es más **limpio y legible** que un bucle `for` tradicional cuando solo necesitas recorrer un array.

---

## 2. Sintaxis

```javascript
array.forEach(function(elemento, índice, array) {
  // Código a ejecutar con cada elemento
});
```

- **Parámetros**:

    1. **`elemento`**: El valor del elemento actual.
    2. **`índice`** (opcional): La posición del elemento en el array.
    3. **`array`** (opcional): El array que se está recorriendo.

---

## 3. Ejemplo Básico

```javascript
const frutas = ["Manzana", "Banana", "Naranja"];

frutas.forEach(function(fruta, índice) {
  console.log("Fruta " + (índice + 1) + ": " + fruta);
});
```

- **Resultado**:


Fruta 1: Manzana
Fruta 2: Banana
Fruta 3: Naranja

---

## 4. Características De `forEach`

---

## 5. Consejos Prácticos

1. **Evita bucles infinitos**: Asegúrate de que la condición del bucle eventualmente sea falsa.
2. **Usa `for` para recorrer arrays**: Es más claro y conciso.
3. **Usa `while` cuando no sabes cuántas veces se repetirá**: Por ejemplo, en validaciones de entrada.
4. **`do...while` para ejecutar al menos una vez**: Útil en menús o preguntas al usuario.

---

## 6. Resumen Rápido

| Bucle         | Uso                                      | Ejemplo                          |
|---------------|------------------------------------------|----------------------------------|
| `for`         | Repetición con un número conocido de veces. | `for (let i = 0; i < 5; i++) { ... }` |
| `while`       | Repetición mientras se cumpla una condición. | `while (condición) { ... }`      |
| `do...while`  | Repetición que se ejecuta al menos una vez. | `do { ... } while (condición);`  |

---

Estos apuntes están optimizados para **Obsidian** y son fáciles de entender. ¡Espero que te ayuden a dominar los bucles en JavaScript! 😊
