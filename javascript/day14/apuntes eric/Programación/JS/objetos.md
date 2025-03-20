# Objetos En JavaScript

## 1. ¿Qué Es Un Objeto?

- Es una **colección de propiedades** que almacenan información relacionada.
- Cada propiedad tiene un **nombre** (clave) y un **valor**.
- Puedes pensar en un objeto como una **carpeta** con archivos, donde cada archivo tiene un nombre y contiene información.

---

## 2. Crear Un Objeto

- Se define con llaves `{}` y las propiedades se separan por comas.
- **Ejemplo**:

  ```javascript
  const persona = {
    nombre: "Joe",
    edad: 14,
    altura: 1.80
  };
  ```

---

## 3. Acceder a Las Propiedades

- Puedes acceder a las propiedades de un objeto usando **notación de punto** o **notación de corchetes**.

### a) Notación De Punto

```javascript
console.log(persona.nombre); // "Joe"
console.log(persona.edad);   // 14
console.log(persona.altura); // 1.80
```

### b) Notación De Corchetes

```javascript
console.log(persona["nombre"]); // "Joe"
console.log(persona["edad"]);   // 14
console.log(persona["altura"]); // 1.80
```

- **Nota**: La notación de corchetes es útil cuando el nombre de la propiedad está almacenado en una variable:

  ```javascript
  let propiedad = "edad";
  console.log(persona[propiedad]); // 14
  ```

---

## 4. Modificar Propiedades

- Puedes cambiar el valor de una propiedad en cualquier momento.
- **Ejemplo**:

  ```javascript
  persona.edad = 15;
  console.log(persona.edad); // 15
  ```

---

## 5. Añadir Nuevas Propiedades

- Puedes añadir nuevas propiedades a un objeto existente.
- **Ejemplo**:

  ```javascript
  persona.peso = 60;
  console.log(persona.peso); // 60
  ```

---

## 6. Eliminar Propiedades

- Puedes eliminar una propiedad usando `delete`.
- **Ejemplo**:

  ```javascript
  delete persona.altura;
  console.log(persona.altura); // undefined
  ```

---

## 7. Métodos En Objetos

- Un **método** es una función que está dentro de un objeto.
- **Ejemplo**:

  ```javascript
  const persona = {
    nombre: "Joe",
    edad: 14,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
  };

  persona.saludar(); // "Hola, mi nombre es Joe."
  ```

- **Nota**: `this` se refiere al objeto actual (`persona` en este caso).

---

## 8. Recorrer Un Objeto

- Puedes usar un bucle `for...in` para recorrer las propiedades de un objeto.
- **Ejemplo**:

  ```javascript
  for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }
  ```

- **Resultado**:

  ```
  nombre: Joe
  edad: 14
  altura: 1.80
  ```

---

## 9. Ejemplo Completo

```javascript
const persona = {
  nombre: "Joe",
  edad: 14,
  altura: 1.80,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
};

// Acceder a propiedades
console.log(persona.nombre); // "Joe"
console.log(persona["edad"]); // 14

// Modificar propiedad
persona.edad = 15;
console.log(persona.edad); // 15

// Añadir nueva propiedad
persona.peso = 60;
console.log(persona.peso); // 60

// Eliminar propiedad
delete persona.altura;
console.log(persona.altura); // undefined

// Llamar a un método
persona.saludar(); // "Hola, mi nombre es Joe."

// Recorrer el objeto
for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
```
