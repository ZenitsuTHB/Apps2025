Aquí tienes tus apuntes sobre la inserción de videos y mapas en HTML, formateados para Obsidian con mejoras de organización y sintaxis:

# Inserción De Contenido Externo: Videos Y Mapas

---

## 🎥 Insertar Videos En Html

### Youtube

```html
<iframe 
  src="https://www.youtube.com/embed/fqK2NfZVipI"
  width="560" 
  height="315" 
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

### Vimeo

```html
<iframe 
  src="https://player.vimeo.com/video/59785024" 
  width="560" 
  height="315" 
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture" 
  allowfullscreen>
</iframe>
```

> [!tip] Mejores prácticas para videos
> - Usar `loading="lazy"` para carga diferida
> - Añadir `title` para accesibilidad
> - Considerar `max-width: 100%` para responsividad
> - Usar `aspect-ratio` para mantener proporciones

---

## 🗺️ Insertar Mapas De Google Maps

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23930.71427945646!2d2.195456!3d41.4318592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1740569466651!5m2!1ses!2ses"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación en Google Maps">
</iframe>
```

> [!note] Cómo obtener el código
> 1. Abrir Google Maps
> 2. Buscar ubicación deseada
> 3. Clic en "Compartir" > "Insertar un mapa"
> 4. Copiar código iframe

---

## 📌 Configuraciones Avanzadas

### Parámetros Comunes Para Videos

```markdown
- `autoplay=1`: Inicio automático
- `loop=1`: Reproducción en bucle
- `controls=0`: Ocultar controles
- `mute=1`: Silenciar audio inicial
```

### Atributos Importantes Para Iframes

```html
<iframe
  ...
  loading="lazy"              <!-- Carga diferida -->
  referrerpolicy="no-referrer-when-downgrade"
  allowfullscreen             <!-- Permitir pantalla completa -->
  sandbox="allow-scripts allow-same-origin">
</iframe>
```

---

## 📝 Mejores Prácticas

1. **Responsividad**:

   ```css
   .responsive-iframe {
     position: relative;
     padding-bottom: 56.25%; /* Relación 16:9 */
     height: 0;
   }
   .responsive-iframe iframe {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
   }
   ```

2. **Accesibilidad**:
   - Añadir `title` descriptivo
   - Proporcionar alternativa textual
   - Considerar modo alto contraste

3. **Optimización de rendimiento**:
   - Usar `loading="lazy"`
   - Implementar placeholders
   - Considerar Intersection Observer API
