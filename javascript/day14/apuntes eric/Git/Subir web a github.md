# Publicar Una Página Web En Github Pages

## 🔨 Requisitos Técnicos

- **Hosting gratuito**: GitHub Pages
- **Dominio personalizado**: Opcional (~$14/año)
- **Tecnologías soportadas**:
  - Frontend básico (HTML/CSS/JS)
  - Sitios estáticos/JAMStack
  - ✖️ No soporta backend ni bases de datos

## 🚀 Guía De Publicación Paso a Paso

### 1. Preparar Estructura Del Proyecto

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Sitio Web</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <!-- Contenido principal -->
</body>
</html>
```

> [!tip] Estructura recomendada
>
> ```
> mi-sitio/
> ├── index.html
> ├── styles/
> │   └── main.css
> └── assets/
>     ├── images/
>     └── scripts/
> ```

### 2. Configurar Repositorio Git

Subir a un repositorio nuevo en GitHub por donde quieras.

```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

### 3. Activar Github Pages

1. Ir a `Settings > Pages`
2. Configurar:
      - Seleccionar la rama principal (main/master)
      - Carpeta: `/root` (o la carpeta donde esté tu index.html)
3. Guardar cambios

### 4. Despliegue Inicial

   - Esperar 1-2 minutos para el despliegue
   - Recargar la página de GitHub Pages
   - Tu sitio estará disponible clicando al link o en: `https://<tu-usuario>.github.io/<nombre-repositorio>/`

---
