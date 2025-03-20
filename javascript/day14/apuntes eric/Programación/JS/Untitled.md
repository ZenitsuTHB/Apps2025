Aquí tienes el código organizado, explicado y optimizado para que sea más claro y útil como apuntes en **Obsidian**:

---

# Ejercicios Prácticos Con Funciones En JavaScript

## 1. Declaración De Variables

```javascript
var edad = 20; // Usando var (no recomendado)
const nombre = "Sergio"; // Usando const (valor fijo)
```

- **`var`**: Declara una variable con scope de función (evitar su uso).
- **`const`**: Declara una constante (no se puede reasignar).

---

## 2. Funciones Tradicionales Vs Funciones Flecha

### Función Tradicional

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}
```

### Función Flecha

```javascript
const saludarFlecha = (nombre) => {
  console.log(`Hola ${nombre} desde una flecha`);
};
```

- **Diferencia clave**:
  - Las funciones flecha no tienen su propio `this`.
  - Son más concisas y se usan para funciones simples o callbacks.

---

## 3. Llamadas a Funciones

```javascript
saludar(nombre); // "Hola Sergio"
saludarFlecha(nombre); // "Hola Sergio desde una flecha"
```

---

## 4. Funciones Matemáticas Básicas

### Suma

```javascript
function suma(a, b) {
  return a + b;
}
```

### Resta

```javascript
function resta(a, b) {
  return a - b;
}
```

### Multiplicación

```javascript
function multiplicacion(a, b) {
  return a * b;
}
```

### División

```javascript
function division(a, b) {
  return a / b;
}
```

---

## 5. Llamadas a Funciones Matemáticas

```javascript
console.log(suma(2, 3));       // 5
console.log(resta(2, 3));      // -1
console.log(multiplicacion(2, 3)); // 6
console.log(division(2, 3));   // 0.666...
```

---

## 6. Código Completo

```javascript
var edad = 20;
const nombre = "Sergio";

console.log(edad); // 20

// Funciones
function saludar(nombre) {
  console.log("Hola " + nombre);
}

const saludarFlecha = (nombre) => {
  console.log(`Hola ${nombre} desde una flecha`);
};

// Llamadas a funciones
saludar(nombre); // "Hola Sergio"
saludarFlecha(nombre); // "Hola Sergio desde una flecha"

// Funciones matemáticas
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Llamadas a funciones matemáticas
console.log(suma(2, 3));       // 5
console.log(resta(2, 3));      // -1
console.log(multiplicacion(2, 3)); // 6
console.log(division(2, 3));   // 0.666...
```

---

## 7. Resumen Rápido

| Función              | Tipo          | Descripción                              |
|----------------------|---------------|------------------------------------------|
| `saludar(nombre)`    | Tradicional   | Imprime un saludo con el nombre.         |
| `saludarFlecha(nombre)` | Flecha      | Imprime un saludo usando template literals. |
| `suma(a, b)`         | Tradicional   | Devuelve la suma de `a` y `b`.           |
| `resta(a, b)`        | Tradicional   | Devuelve la resta de `a` y `b`.          |
| `multiplicacion(a, b)` | Tradicional | Devuelve la multiplicación de `a` y `b`. |
| `division(a, b)`     | Tradicional   | Devuelve la división de `a` y `b`.       |

---

## 8. Consejos Prácticos

1. **Usa `const`** para declarar funciones flecha o valores fijos.
2. **Evita `var`**: Usa `let` o `const` en su lugar.
3. **Template literals**: Usa `` `Hola ${nombre}` `` para concatenar strings de forma más limpia.

---

Estos apuntes están optimizados para **Obsidian** y son fáciles de entender. ¡Espero que te sirvan! 😊
