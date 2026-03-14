# 🍿 Mis Pelis Popcorn
**Desarrollado por:** Aldana Rodriguez | **Diseñadora & Desarrolladora Web**

App en **React** para gestionar una lista de películas, integrada con **Firebase Firestore** y la API de **TMDB**.

## ✨ Funcionalidades
- 🔍 **Búsqueda en tiempo real:** Con debounce de 500ms para optimizar la API.
- 💾 **Persistencia:** CRUD completo (Crear, Leer, Actualizar, Borrar) en Firebase.
- 🎥 **Estados:** Clasificación de películas como "Pendientes" o "Vistas".
- 🖼️ **Robustez:** Sistema de fallback para posters no encontrados (`/no-poster.png`).

## 🛠️ Tecnologías
- **React + Vite** (v7)
- **Firebase** (Firestore)
- **Lucide React** (Iconografía)
- **CSS Modules** (Estilos encapsulados)

## 🔍 Debugging Realizado
- **Terminal:** Compilación exitosa con `npm run build` (0 errores de sintaxis).
- **Consola:** Corrección de accesibilidad en formularios (asociación de ID, Name y Labels).
- **Red:** Validación de peticiones asíncronas y manejo de errores 404 en imágenes mediante el evento `onError`.

## 🎨 Créditos y Atribuciones
- **Iconos:** [Lucide React](https://lucide.dev)
- **Popcorn Icon:** Creado por [Maan Icons - Flaticon](https://www.flaticon.com)
- **API de Películas:** [The Movie Database (TMDB)](https://www.themoviedb.org)

## ⚙️ Instalación y Configuración

Si deseas clonar este proyecto y ejecutarlo localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   `git clone https://github.com`

2. **Instalar dependencias:**
   `npm install`

3. **Configurar Firebase:**
   Crea un proyecto en [Firebase Console](https://console.firebase.google.com), activa Firestore y reemplaza tus credenciales en `src/services/firebase.js`.

4. **Ejecutar en modo desarrollo:**
   `npm run dev`

5. **Compilar para producción:**
   `npm run build`