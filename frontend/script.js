const PRODUCT_ENDPOINT = '../data/productos.json';
const PRODUCT_GRID_SELECTOR = '[data-product-grid]';
const YEAR_TARGET = '#anio';
const CTA_BUTTON = '#ver-productos';

const mockProductos = [
  {
    id: 'mock-1',
    nombre: 'Kit de Paseo',
    precio_clp: 15990,
    imagen: 'https://via.placeholder.com/300x200?text=Paseo'
  },
  {
    id: 'mock-2',
    nombre: 'Fuente de Agua',
    precio_clp: 24990,
    imagen: 'https://via.placeholder.com/300x200?text=Agua'
  },
  {
    id: 'mock-3',
    nombre: 'Cama Antiestrés',
    precio_clp: 29990,
    imagen: 'https://via.placeholder.com/300x200?text=Cama'
  },
  {
    id: 'mock-4',
    nombre: 'Rascador Compacto',
    precio_clp: 21990,
    imagen: 'https://via.placeholder.com/300x200?text=Rascador'
  },
  {
    id: 'mock-5',
    nombre: 'Snacks de Salmón',
    precio_clp: 6990,
    imagen: 'https://via.placeholder.com/300x200?text=Snack'
  },
  {
    id: 'mock-6',
    nombre: 'Juguete Mordedor',
    precio_clp: 5990,
    imagen: 'https://via.placeholder.com/300x200?text=Mordedor'
  }
];

async function obtenerProductos() {
  try {
    const respuesta = await fetch(PRODUCT_ENDPOINT);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP ${respuesta.status}`);
    }
    const data = await respuesta.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('La respuesta no contiene productos válidos');
    }
    return data.slice(0, 6);
  } catch (error) {
    console.warn('[rugalitos] No fue posible cargar productos desde el JSON. Usando datos mock.', error);
    return mockProductos;
  }
}

function crearTarjeta(producto) {
  const articulo = document.createElement('article');
  articulo.className = 'tarjeta-producto';
  articulo.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
    <div class="tarjeta-cuerpo">
      <h3>${producto.nombre}</h3>
      <p>${formatearPrecio(producto.precio_clp)}</p>
      <button class="boton-agregar" type="button" aria-label="Agregar ${producto.nombre} al carrito">
        Agregar al carrito
      </button>
    </div>
  `;
  return articulo;
}

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(valor);
}

async function inicializar() {
  const contenedor = document.querySelector(PRODUCT_GRID_SELECTOR);
  if (!contenedor) {
    console.error('[rugalitos] No se encontró el contenedor de productos');
    return;
  }

  const productos = await obtenerProductos();
  const fragmento = document.createDocumentFragment();
  productos.forEach((producto) => {
    fragmento.appendChild(crearTarjeta(producto));
  });
  contenedor.innerHTML = '';
  contenedor.appendChild(fragmento);

  const botonCta = document.querySelector(CTA_BUTTON);
  if (botonCta) {
    botonCta.addEventListener('click', () => {
      contenedor.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const spanAnio = document.querySelector(YEAR_TARGET);
  if (spanAnio) {
    spanAnio.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
