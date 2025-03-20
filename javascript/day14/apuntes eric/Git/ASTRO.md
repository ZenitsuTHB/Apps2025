# Astro

Para instalar Astro correctamente, sigue estos pasos detallados:

## 1. **Requisitos previos**

Asegúrate de tener instalado:

- Node.js v18.14.1 o superior
- npm (v9+) o pnpm/yarn
- Editor de código (VS Code recomendado)

## 2. **Crear Nuevo proyecto**

Para crear el proyecto en el directorio actual:

```bash
npm create astro .
```

## 3. **Configuración Durante la instalación**

El asistente te preguntará:

```
✔ Where should we create your new project? › ./ (directorio actual)
✔ How would you like to start your new project? › Basic
✔ Install dependencies? › Yes
✔ Do you plan to write TypeScript? › Yes/No (elige según prefieras)
✔ Initialize a new git repository? › Yes
```

## 4. **Si La Instalación Se bloquea**

Si el proceso se detiene en "Dependencies installing...":

1. Elimina `node_modules` y `package-lock.json`:

```bash
rm -rf node_modules package-lock.json
```

1. Reinstala manualmente:

```bash
npm install
```

## 5. **Estructura Del proyecto**

Después de la instalación exitosa tendrás:

```
├── src/
│   ├── pages/
│   │   └── index.astro
├── public/
├── package.json
├── astro.config.mjs
```

## 6. **Comandos esenciales**

```bash
npm run dev   # Inicia servidor de desarrollo en http://localhost:4321
npm run build # Genera versión para producción en /dist
npm run preview # Previsualiza build localmente
```

## 7. **Solución De Problemas comunes**

- **Error de versiones**: Actualiza Node.js y npm:

```bash
npm install -g npm@latest
```

- **Errores de dependencias**: Usa otro gestor de paquetes:

```bash
pnpm create astro . # o yarn create astro
```

- **Problemas de red**: Configura registro de npm:

```bash
npm config set registry https://registry.npmjs.org/
```

## 8. **Primeros Pasos Con Astro**

1. Edita la página principal en `src/pages/index.astro`
2. Agrega componentes en `src/components/`
3. Personaliza la configuración en `astro.config.mjs`

## 9. **Alternativa Rápida (si Falla la instalación)**

Para una instalación mínima sin asistente:

```bash
npm init astro -- --template basics --install --yes
```

**Importante**: Si usas Windows, asegúrate de ejecutar PowerShell o CMD como administrador para evitar problemas de permisos.
