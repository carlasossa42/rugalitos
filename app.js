const productData = [
  {
    id: 1,
    name: "Alimento premium para perro adulto",
    description: "Receta natural con salmón y quinoa, fortalece el sistema inmune y cuida el pelaje.",
    price: 89900,
    category: "perros",
    tags: ["sin granos", "omega 3"],
    image:
      "https://images.unsplash.com/photo-1619983081593-ec39cffdfa71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Arena aglomerante ecológica",
    description: "Absorción superior con fibras de bambú, ideal para hogares con varios gatos.",
    price: 52500,
    category: "gatos",
    tags: ["ecológica", "control de olores"],
    image:
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kit dental para mascotas",
    description: "Incluye cepillo doble, dedal de silicona y pasta enzimática de sabor vainilla.",
    price: 36000,
    category: "bienestar",
    tags: ["higiene", "veterinario"],
    image:
      "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Arnés ergonómico para paseos",
    description: "Material respirable y reflectivo, se ajusta a diferentes tamaños y evita tirones.",
    price: 41750,
    category: "accesorios",
    tags: ["reflectivo", "antitirones"],
    image:
      "https://images.unsplash.com/photo-1619983081678-a564b02ec3d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Snacks funcionales relajantes",
    description: "Suplemento con manzanilla y L-triptófano para reducir el estrés en viajes y tormentas.",
    price: 27400,
    category: "bienestar",
    tags: ["calmante", "natural"],
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Rascador modular con hamaca",
    description: "Centro de entretenimiento con postes de yute y superficie de descanso elevada.",
    price: 112000,
    category: "gatos",
    tags: ["entretenimiento", "duradero"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Shampoo nutritivo para pelaje brillante",
    description: "Formulado con avena y aceite de argán para hidratar sin irritar la piel.",
    price: 24990,
    category: "perros",
    tags: ["hipoalergénico", "hidratante"],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Fuente purificadora de agua",
    description: "Flujo constante y filtro de carbón activado que fomenta la hidratación continua.",
    price: 68200,
    category: "accesorios",
    tags: ["hidratación", "silenciosa"],
    image:
      "https://images.unsplash.com/photo-1545577931-6f03aa1f7c07?auto=format&fit=crop&w=800&q=80",
  },
];

const partners = [
  {
    name: "PetWalk Medellín",
    category: "Paseos conscientes",
    description:
      "Equipo de paseadores certificados que diseñan rutas a la medida y envían reportes en tiempo real.",
    contact: "@petwalk.med",
  },
  {
    name: "VetCare 24/7",
    category: "Veterinaria integral",
    description:
      "Clínica con atención presencial y teleconsultas, especializada en medicina preventiva y terapias alternativas.",
    contact: "www.vetcare247.co",
  },
  {
    name: "Happy Groomers",
    category: "Estética y spa",
    description:
      "Servicios de grooming con productos naturales, aromaterapia y protocolos anti-estrés para perros y gatos.",
    contact: "@happygroomers",
  },
  {
    name: "Refugio La Manada",
    category: "Rescate y adopciones",
    description:
      "Organización que rehabilita animales en situación de calle y los conecta con familias responsables.",
    contact: "lamanada.org",
  },
];

const state = {
  filter: "all",
  cart: [],
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);

const productGrid = document.getElementById("productGrid");
const partnerGrid = document.getElementById("partnerGrid");
const cartItems = document.getElementById("cartItems");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const cartEmpty = document.getElementById("cartEmpty");
const checkoutBtn = document.getElementById("checkoutBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const currentYearEl = document.getElementById("currentYear");

currentYearEl.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
  })
);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    filterButtons.forEach((button) => button.classList.toggle("is-active", button === btn));
    renderProducts();
  });
});

function renderProducts() {
  const filtered =
    state.filter === "all" ? productData : productData.filter((product) => product.category === state.filter);

  productGrid.innerHTML = filtered
    .map((product) => `
      <article class="product-card">
        <div class="product-card__image" style="background-image: url('${product.image}')"></div>
        <div class="product-card__body">
          <div class="product-card__tags">
            ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <h3 class="product-card__title">${product.name}</h3>
          <p class="product-card__description">${product.description}</p>
          <div class="product-card__footer">
            <span class="price">${formatCurrency(product.price)}</span>
            <button class="btn btn--primary" data-add="${product.id}">Agregar</button>
          </div>
        </div>
      </article>
    `)
    .join("");

  productGrid.querySelectorAll("[data-add]").forEach((button) =>
    button.addEventListener("click", () => addToCart(Number(button.dataset.add)))
  );
}

function renderPartners() {
  partnerGrid.innerHTML = partners
    .map(
      (partner) => `
      <article class="partner-card">
        <span class="partner-card__category">${partner.category}</span>
        <h3 class="partner-card__name">${partner.name}</h3>
        <p class="partner-card__description">${partner.description}</p>
        <a class="btn btn--secondary" href="#contacto">${partner.contact}</a>
      </article>
    `
    )
    .join("");
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = "";
    cartList.innerHTML = "";
    cartEmpty.hidden = false;
    cartTotal.textContent = formatCurrency(0);
    checkoutBtn.disabled = true;
    return;
  }

  cartEmpty.hidden = true;
  checkoutBtn.disabled = false;

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
      <article class="cart-item">
        <div class="cart-item__image" style="background-image: url('${item.product.image}')"></div>
        <div class="cart-item__info">
          <span class="cart-item__name">${item.product.name}</span>
          <span class="cart-item__price">${formatCurrency(item.product.price)}</span>
          <div class="cart-item__controls">
            <button class="qty-btn" data-action="decrease" data-id="${item.product.id}">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" data-action="increase" data-id="${item.product.id}">+</button>
            <button class="remove-btn" data-action="remove" data-id="${item.product.id}">Eliminar</button>
          </div>
        </div>
        <strong>${formatCurrency(item.product.price * item.quantity)}</strong>
      </article>
    `
    )
    .join("");

  cartItems.querySelectorAll("[data-action]").forEach((control) =>
    control.addEventListener("click", () => handleCartAction(control.dataset.action, Number(control.dataset.id)))
  );

  cartList.innerHTML = state.cart
    .map(
      (item) => `
        <li>
          <span>${item.product.name}</span>
          <span>${item.quantity} x ${formatCurrency(item.product.price)}</span>
        </li>
      `
    )
    .join("");

  const totalValue = state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  cartTotal.textContent = formatCurrency(totalValue);
}

function addToCart(productId) {
  const product = productData.find((item) => item.id === productId);
  const existingItem = state.cart.find((item) => item.product.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ product, quantity: 1 });
  }

  renderCart();
}

function handleCartAction(action, productId) {
  const cartItem = state.cart.find((item) => item.product.id === productId);
  if (!cartItem) return;

  if (action === "increase") {
    cartItem.quantity += 1;
  }

  if (action === "decrease") {
    cartItem.quantity = Math.max(1, cartItem.quantity - 1);
  }

  if (action === "remove") {
    state.cart = state.cart.filter((item) => item.product.id !== productId);
  }

  renderCart();
}

checkoutBtn.addEventListener("click", () => {
  if (!state.cart.length) return;

  checkoutBtn.textContent = "Procesando...";
  checkoutBtn.disabled = true;

  setTimeout(() => {
    state.cart = [];
    renderCart();
    checkoutBtn.textContent = "¡Pedido confirmado!";

    setTimeout(() => {
      checkoutBtn.textContent = "Proceder al pago";
      checkoutBtn.disabled = state.cart.length === 0;
    }, 1800);
  }, 1000);
});

renderProducts();
renderPartners();
renderCart();
