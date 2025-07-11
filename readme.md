Documentación – RetroGames Shop
Descripción General
RetroGames Shop es una tienda web ficticia de videojuegos retro donde los usuarios pueden ver catálogos, noticias, galería y enlaces útiles del mundo gamer clásico. Está desarrollada usando HTML, CSS, Bootstrap, JavaScript y opcionalmente jQuery.
El sitio es completamente estático y su objetivo es mostrar el manejo de frontend con un diseño “pixel art” y funcionalidades modernas.

Estructura del Proyecto
bash
Copy
Edit
/
├── index.html          # Página principal (inicio)
├── catalogo.html       # Catálogo de productos (juegos)
├── galeria.html        # Galería de imágenes
├── noticias.html       # Noticias del mundo retro
├── enlaces.html        # Links útiles sobre videojuegos retro
├── contacto.html       # Página de contacto
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   ├── main.js         # Lógica principal (productos dinámicos, búsqueda, etc.)
│   └── darkmode.js     # Lógica para el modo oscuro
└── img/
    └── [imágenes]      # Logos, portadas de juegos, iconos, etc.
Principales Funcionalidades
1. Navbar de navegación
Permite moverse entre las secciones principales del sitio.

Contiene un botón para alternar entre modo claro/oscuro.

2. Carousel
En la página de inicio, muestra un carrusel con imágenes destacadas de juegos clásicos.

Bootstrap se encarga de la transición y navegación entre slides.

3. Catálogo de juegos
Muestra los productos/juegos en tarjetas (“cards”) usando Bootstrap.

Las tarjetas se generan dinámicamente desde un array de objetos en main.js.

Incluye barra de búsqueda para filtrar por nombre o descripción.

4. Galería
Muestra imágenes de portadas, arte y fanarts de juegos retro.

5. Noticias
Lista artículos ficticios sobre lanzamientos, curiosidades o torneos retro.

Cada noticia incluye imagen, título, resumen y fecha.

6. Enlaces útiles
Lista recursos y comunidades relacionadas a videojuegos retro.

7. Contacto
Formulario básico para “contactar” a la tienda (simulado).

8. Modo Oscuro
Implementado con un botón en la navbar.

Guarda la preferencia en localStorage para mantener el modo en cada página.

Explicación de Archivos Clave
main.js
Define el array juegosRetro con objetos que representan cada videojuego (nombre, descripción, precio, imagen).

Genera dinámicamente las cards del catálogo y las inserta en el DOM.

Implementa la búsqueda filtrando los juegos mostrados según lo que escribe el usuario.

darkmode.js
Detecta el click en el botón “Modo Oscuro”.

Cambia la clase del <body> a dark-mode o la remueve para volver al modo claro.

Guarda la preferencia del usuario en localStorage y la aplica en todas las páginas.

styles.css
Personaliza fuentes (usa Google Fonts, Press Start 2P para el toque retro).

Limita el tamaño de imágenes, cards y adapta colores para ambos modos.

Aplica media queries para hacerlo responsive.

Tecnologías Utilizadas
HTML5 y CSS3

Bootstrap 5

JavaScript (vanilla)

jQuery (opcional, para facilitar animaciones o manipulación DOM)

Google Fonts (Press Start 2P para tipografía retro)

Imágenes libres de videojuegos retro para portadas y galería

Cómo ejecutar el proyecto
Descarga o clona el repositorio en tu PC.

Abre la carpeta del proyecto con Visual Studio Code.

Abre index.html en tu navegador (doble click o usa la extensión “Live Server” en VS Code para desarrollo).

Navega entre las páginas usando la barra de navegación.