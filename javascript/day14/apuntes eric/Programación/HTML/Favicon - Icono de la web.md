# Uso De Favicons En Html

---

## 🖼️ Insertar Un Favicon En Tu Sitio Web

### Código Básico

```html
<link rel="icon" href="https://pablomonteserin.com/mi-cara.png" type="image/png" />
```

### Ubicación Recomendada

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="ruta/al/favicon.png" type="image/png" />
    <title>Título del documento</title>
</head>
```

> [!tip] Buenas prácticas
> - Colocar en `<head>` antes del título
> - Usar formato PNG para transparencias
> - Tamaño recomendado: 32x32 o 64x64 px
> - Considerar múltiples tamaños para diferentes dispositivos

---

## 🛠️ Configuraciones Avanzadas

### Generación Automática

> Usar herramientas como:
> - [RealFaviconGenerator](https://realfavicongenerator.net/)
> - [Favicon.io](https://favicon.io/)
> - [Favicon.cc](https://www.favicon.cc/)

---

## 📝 Mejores Prácticas

1. **Optimización de archivos**:
   - Usar compresión sin pérdida
   - Mantener tamaño < 50KB
   - Considerar formato WebP para modernos navegadores

2. **Estructura de archivos**:

   ```
   /assets
     /icons
       favicon.ico
       icon-16x16.png
       icon-32x32.png
       apple-touch-icon.png
       site.webmanifest
   ```

3. **Testing**:
   - Verificar en múltiples navegadores
   - Comprobar en diferentes dispositivos
   - Usar [Favicon Checker](https://www.favicon-checker.com/)

---

## ⚠️ Solución De Problemas Comunes

> [!failure]- Favicon no aparece
> - Verificar ruta del archivo
> - Limpiar caché del navegador (Ctrl + F5)
> - Comprobar permisos del archivo

> [!failure]- Imagen pixelada
> - Usar tamaño adecuado (mínimo 32x32 px)
> - Exportar en alta resolución
> - Considerar formato vectorial (SVG)
