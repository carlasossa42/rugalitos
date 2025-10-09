# Rugalitos

¡Bienvenido a **Rugalitos**, el eCommerce creado para que cuidadores y amantes de las mascotas puedan encontrar productos y servicios confiables en un solo lugar!

Este repositorio contiene el código fuente del proyecto web, así como la configuración necesaria para su ejecución y despliegue.

## Tabla de contenidos

- [Características principales](#características-principales)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Variables de entorno](#variables-de-entorno)
- [Calidad y pruebas](#calidad-y-pruebas)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Contacto](#contacto)

## Características principales

- Catálogo interactivo con filtros por categoría y galería de productos destacados.
- Carrito de compras con actualización en tiempo real de cantidades y totales.
- Espacio "Amigos de las mascotas" para destacar aliados y emprendimientos del sector.
- Secciones informativas de historia y contacto con formulario para nuevos aliados.
- Experiencia responsive optimizada para dispositivos móviles y accesible.

## Tecnologías

El proyecto está construido con tecnologías web estándar:

- **Frontend:** HTML5 semántico.
- **Estilos:** CSS3 con variables personalizadas y diseño responsive.
- **Interactividad:** JavaScript moderno sin dependencias externas.

> Nota: si más adelante se integran frameworks u otras herramientas, actualiza esta sección en consecuencia.

## Estructura del proyecto

```text
rugalitos/
├── app.js          # Lógica de interacción para el home (carrito, filtros, aliados)
├── index.html      # Página principal de la tienda
├── styles.css      # Estilos globales del home
└── README.md
```

## Inicio rápido

### Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge).
- Python 3 (opcional) u otra herramienta para servir archivos estáticos si deseas pruebas locales.

### Configuración inicial

```bash
# Clona el repositorio
git clone https://github.com/carlasossa42/rugalitos.git
cd rugalitos

# Levanta un servidor estático (opcional)
python3 -m http.server 5173

# Abre el home en el navegador
open http://localhost:5173  # macOS
start http://localhost:5173 # Windows
xdg-open http://localhost:5173 # Linux (si aplica)
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `python3 -m http.server 5173` | Sirve la web de manera local. |
| `python3 -m http.server 5173 --bind 127.0.0.1` | Alternativa si necesitas fijar la interfaz. |

## Variables de entorno

Este proyecto está construido únicamente con HTML, CSS y JavaScript nativos, por lo que no requiere variables de entorno.

## Calidad y pruebas

- Mantén los archivos `index.html`, `styles.css` y `app.js` bien estructurados, comentando partes complejas cuando sea necesario.
- Se recomienda validar el HTML con [W3C Validator](https://validator.w3.org/) y ejecutar pruebas manuales en navegadores modernos.

## Despliegue

Puedes desplegar el sitio en cualquier servicio de hosting estático como GitHub Pages, Netlify, Vercel o tu propio servidor Nginx.

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama nueva desde `main` (`git checkout -b feat/nueva-funcionalidad`).
3. Realiza tus cambios y añade pruebas cuando aplique.
4. Ejecuta los comandos de linting y pruebas.
5. Envía un Pull Request describiendo tus cambios.

## Contacto

Si tienes dudas o sugerencias puedes escribir a **carlasossa42@gmail.com** o crear un issue en GitHub.

---

¡Gracias por apoyar el desarrollo de Rugalitos! 🐾
