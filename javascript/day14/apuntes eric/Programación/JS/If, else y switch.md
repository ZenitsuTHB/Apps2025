# Condicionales En Javascript: `if`, `else` Y Operadores

## 1. ¿Qué Es Un Condicional?

- Es una estructura que permite **tomar decisiones** en el código.
- Ejecuta un bloque de código **solo si se cumple una condición**.

---

## 2. Estructura Básica: `if...else`

```javascript
if (condición) {
  // Código que se ejecuta si la condición es verdadera
} else {
  // Código que se ejecuta si la condición es falsa
}
```

### Ejemplo:

```javascript
const nombre = "Joe";

if (nombre === "Joe") { // Si nombre NO es "Joe"
  console.log("Tu nombre es Joe!");
} else { 
  console.log("Tu nombre NO ES Joe");
}
```

- **Resultado**: Como `nombre` es `"Joe"`, se ejecuta el `if` y se imprime:
  `"Tu nombre es Joe!"`.

---

## 3. Operadores De Comparación

| Operador | Descripción                     | Ejemplo           |
|----------|---------------------------------|-------------------|
| `===`    | Igualdad estricta (valor y tipo)| `5 === 5` → `true`|
| `==`     | Igualdad (solo valor)           | `5 == "5"` → `true`|
| `!=`     | Desigualdad                     | `5 != 3` → `true` |
| `!==`    | Desigualdad estricta            | `5 !== "5"` → `true`|
| `>`      | Mayor que                       | `5 > 3` → `true`  |
| `<`      | Menor que                       | `5 < 3` → `false` |
| `>=`     | Mayor o igual que               | `5 >= 5` → `true` |
| `<=`     | Menor o igual que               | `5 <= 3` → `false`|

---

## 4. Operadores Lógicos

| Operador | Descripción           | Ejemplo                          |
|----------|-----------------------|----------------------------------|
| `&&`     | AND (y)               | `true && false` → `false`        |
| `||`     | OR (o)                | `true || false` → `true`         |
| `!`      | NOT (no)              | `!true` → `false`                |

---

## 5. Ejemplo Con Funciones Y Condicionales

### Función Para Evitar División Entre Cero

```javascript
function divCero(num1, num2) {
  if (num1 === 0 || num2 === 0) { // Si num1 o num2 es 0
    console.log("No puedo dividir entre 0");
  } else {
    return num1 / num2; // Si no, devuelve la división
  }
}

console.log(divCero(10, 2)); // 5
console.log(divCero(10, 0)); // "No puedo dividir entre 0"
```

- **Explicación**:
  - Si `num1` o `num2` es `0`, muestra un mensaje de error.
  - Si no, devuelve el resultado de la división.

---

## 6. Consejos Prácticos

1. **Usa `===` en lugar de `==`**:
   - `===` compara valor **y tipo**, evitando errores inesperados.
   - Ejemplo: `5 === "5"` es `false`, pero `5 == "5"` es `true`.

2. **Combina condiciones con `&&` y `||`**:
   - `&&` (AND): Ambas condiciones deben ser verdaderas.
   - `||` (OR): Al menos una condición debe ser verdadera.

3. **Evita anidar demasiados `if`**:
   - Usa `else if` para múltiples condiciones.
   - Ejemplo:

     ```javascript
     if (condición1) {
       // ...
     } else if (condición2) {
       // ...
     } else {
       // ...
     }
     ```

---

## 7. Ejemplo Completo

```javascript
const nombre = "Joe";

// Condicional básico
if (nombre != "Joe") {
  console.log("Tu nombre NO es Joe!");
} else {
  console.log("Tu nombre ES Joe");
}

// Función con condicional
function divCero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    console.log("No puedo dividir entre 0");
  } else {
    return num1 / num2;
  }
}

console.log(divCero(10, 2)); // 5
console.log(divCero(10, 0)); // "No puedo dividir entre 0"
```

---

## 8. Resumen Rápido

| Concepto               | Descripción                              |
|------------------------|------------------------------------------|
| `if (condición)`       | Ejecuta un bloque si la condición es verdadera. |
| `else`                 | Ejecuta un bloque si la condición es falsa. |
| `===`                  | Compara valor y tipo (recomendado).     |
| `||`                   | OR (al menos una condición verdadera).  |
| `&&`                   | AND (todas las condiciones verdaderas). |

---

# Funciones Con `switch` En JavaScript

## 1. ¿Qué Es `switch`?

- Es una estructura de control que permite **evaluar múltiples casos** de manera más clara y organizada que varios `if...else`.
- Compara una expresión con diferentes valores y ejecuta el bloque de código correspondiente al caso que coincida.

---

## 2. Estructura De `switch`

```javascript
switch (expresión) {
  case valor1:
    // Código si expresión == valor1
    break;
  case valor2:
    // Código si expresión == valor2
    break;
  default:
    // Código si no coincide ningún caso
}
```

- **`break`**: Detiene la ejecución del `switch` después de ejecutar un caso.
- **`default`**: Se ejecuta si ningún caso coincide con la expresión.

---

## 3. Función `calcular`

La función `calcular` toma dos números (`num1`, `num2`) y un operador (`operador`), y devuelve el resultado de la operación.

### Código:

```javascript
function calcular(num1, num2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 != 0) {
        resultado = num1 / num2;
      } else {
        resultado = 'Error: División por cero';
      }
      break;
    default:
      resultado = 'Operador no válido';
  }

  return resultado;
}
```

---

## 4. Explicación Del Código

### 1. **Declaración De la función**

- **Parámetros**:
  - `num1`: Primer número.
  - `num2`: Segundo número.
  - `operador`: Operación a realizar (`+`, `-`, `*`, `/`).

### 2. **Uso De `switch`**

- Evalúa el valor de `operador` y ejecuta el caso correspondiente:
  - **`case '+'`**: Suma `num1` y `num2`.
  - **`case '-'`**: Resta `num2` de `num1`.
  - **`case '*'`**: Multiplica `num1` por `num2`.
  - **`case '/'`**: Divide `num1` entre `num2`, pero verifica si `num2` es `0` para evitar errores.

### 3. **Manejo De errores**

- **División por cero**: Si `num2` es `0`, devuelve un mensaje de error.
- **Operador no válido**: Si el operador no es `+`, `-`, `*` o `/`, devuelve `'Operador no válido'`.

---

## 5. Ejemplos De Uso

### Suma

```javascript
console.log(calcular(5, 3, '+')); // 8
```

### Resta

```javascript
console.log(calcular(5, 3, '-')); // 2
```

### Multiplicación

```javascript
console.log(calcular(5, 3, '*')); // 15
```

### División

```javascript
console.log(calcular(10, 2, '/')); // 5
console.log(calcular(10, 0, '/')); // "Error: División por cero"
```

### Operador no Válido

```javascript
console.log(calcular(5, 3, '%')); // "Operador no válido"
```

---

## 6. Resumen Rápido

| Operador | Descripción                     | Ejemplo                 |
|----------|---------------------------------|-------------------------|
| `+`      | Suma                            | `calcular(5, 3, '+')` → `8` |
| `-`      | Resta                           | `calcular(5, 3, '-')` → `2` |
| `*`      | Multiplicación                  | `calcular(5, 3, '*')` → `15` |
| `/`      | División (verifica división por 0)| `calcular(10, 2, '/')` → `5` |
| Otro     | Operador no válido              | `calcular(5, 3, '%')` → `"Operador no válido"` |

---

## 7. Consejos Prácticos

1. **Usa `switch` para múltiples casos**: Es más limpio y legible que varios `if...else`.
2. **No olvides el `break`**: Si no lo pones, el código seguirá ejecutando los casos siguientes.
3. **Maneja casos especiales**: Como la división por cero, para evitar errores.
4. **Usa `default`**: Para manejar casos inesperados o no válidos.

---

## 8. Código Completo

```javascript
function calcular(num1, num2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 != 0) {
        resultado = num1 / num2;
      } else {
        resultado = 'Error: División por cero';
      }
      break;
    default:
      resultado = 'Operador no válido';
  }

  return resultado;
}
```

---

Estos apuntes están optimizados para **Obsidian** y son fáciles de entender. ¡Espero que te ayuden a dominar el uso de `switch` en JavaScript! 😊
