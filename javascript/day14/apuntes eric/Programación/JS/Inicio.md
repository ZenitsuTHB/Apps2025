¡Claro! Aquí tienes una versión simplificada y optimizada para **Obsidian**, con un formato más claro y fácil de entender. Estos apuntes están diseñados para ser concisos y útiles para estudiar.

---

# Inicios de JavaScript: Variables

## 1. ¿Qué es una variable?
- Es un espacio en la memoria donde se guarda información para usarla después.
- Ejemplo: Guardar un nombre, una edad, etc.

---

## 2. Tipos de variables
### `let`
- **Para qué sirve**: Cuando el valor de la variable **puede cambiar**.
- **Ejemplo**:
  ```javascript
  let nombre = "Joe Bananas";
  nombre = "Salvatore"; // Cambiamos el valor
  ```
- **Scope**: Solo existe dentro del bloque donde se declara (por ejemplo, dentro de una función).

---

### `const`
- **Para qué sirve**: Cuando el valor **no va a cambiar**.
- **Ejemplo**:
  ```javascript
  const edad = 19;
  // edad = 20; // ¡Error! No se puede cambiar.
  ```
- **Scope**: Igual que `let`, solo existe dentro del bloque.

---

### `var` (No recomendado)
- Es la forma antigua de declarar variables.
- **Problema**: Tiene un scope de función (no de bloque), lo que puede causar errores.
- **Ejemplo**:
  ```javascript
  var nombre = "Joe";
  ```
- **Consejo**: Usa `let` o `const` en su lugar.

---

## 3. Scope (Alcance)
- **Scope de `let` y `const`**:
  - Solo existen dentro del bloque donde se declaran.
  - Ejemplo:
    ```javascript
    function saludar() {
        let mensaje = "Hola";
        console.log(mensaje); // Funciona
    }
    // console.log(mensaje); // ¡Error! No existe fuera de la función.
    ```

- **Scope de `var`**:
  - Existe en toda la función, incluso fuera de bloques.
  - Ejemplo:
    ```javascript
    function saludar() {
        if (true) {
            var mensaje = "Hola";
        }
        console.log(mensaje); // Funciona
    }
    ```

---

## 4. Funciones y variables
- Puedes pasar variables como argumentos a funciones.
- **Ejemplo**:
  ```javascript
  function mostrarInfo(nombre, edad) {
      console.log(nombre, edad);
  }

  let nombre = "Joe Bananas";
  const edad = 19;

  mostrarInfo(nombre, edad); // "Joe Bananas 19"
  ```

---

## 5. Consejos prácticos
1. **Usa `const` siempre que puedas**: Si el valor no va a cambiar, es más seguro.
2. **Usa `let` si necesitas cambiar el valor**: Para variables que van a mutar.
3. **Evita `var`**: Puede causar problemas de scope y es una práctica obsoleta.

---

## Ejemplo completo
```javascript
let nombre = "Joe Bananas"; // Puede cambiar
const edad = 19; // No puede cambiar

function mostrarInfo(nombre, edad) {
    console.log(nombre, edad);
}

mostrarInfo(nombre, edad); // "Joe Bananas 19"

function saludar() {
    let mensaje = "Hola";
    console.log(mensaje); // "Hola"
}
// console.log(mensaje); // ¡Error! No existe fuera de la función.
```

---

## Resumen rápido
| Tipo   | ¿Cambia? | Scope       | ¿Cuándo usarlo?               |
|--------|----------|-------------|-------------------------------|
| `let`  | Sí       | Bloque      | Cuando el valor va a cambiar. |
| `const`| No       | Bloque      | Cuando el valor es fijo.      |
| `var`  | Sí       | Función     | No usar (obsoleto).           |

---
