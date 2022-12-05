// VARIABLES GLOBALES
let userInfo;
let cart = new Cart();
const productContainer = document.querySelector("#home_products-all");
const productOfferContainer = document.querySelector("#home_products-offer");
const productFavoriteContainer = document.querySelector(
  "#home_products-favorite"
);
const categories = document.querySelectorAll(".badge-category");
const cartItems = document.querySelector(".fa-shopping-cart");
const resume = document.querySelector("#resume");
const cantProducts = document.querySelector(".cart-contador");
const finalPrice = document.querySelector("#offcanvas-footer");
const btnLogin = document.querySelector("#btn-login");
const productDetails = document.querySelectorAll(".home_products-details");
const logOutBtn = document.querySelector("#logOut");
const closePayment = document.querySelector("#paymentEnd");
const favorites = [];
const products = [];

// LISTENERS
productDetails.forEach((productDetailContainer) => {
  productDetailContainer.addEventListener("click", (e) => {
    e.target.classList.contains("favorito") && updateFavorites(e.target);
    e.target.classList.contains("fa-cart-plus") &&
      cartButtons(e.target.dataset.id);
    e.target.classList.contains("badge-category") && changeCategory(e.target);
  });
});

cartItems.addEventListener("click", showCartDetail);

resume.addEventListener("click", (e) => {
  e.target.classList.contains("removeItem") && removeItemFromCart(e);
  e.target.classList.contains("modAmount") && changeProductAmount(e);
});

btnLogin.addEventListener("click", loginUser);

logOutBtn.addEventListener("click", unsetUserInfo);

finalPrice.addEventListener("click", (e) => {
  e.target.classList.contains("closeCart") && loadPaymentDetail();
});

closePayment.addEventListener("click", closeUserPayment);

window.addEventListener("load", init);

// FUNCIONES
// USUARIO: Ingreso a la pagina.
function loginUser() {
  let userName = document.querySelector("#username").value;
  let userPass = document.querySelector("#password").value;
  if (userName === "" || userName === null || userName.length <= 3) {
    toastr.error("El nombre ingresado es demasiado corto.");
  } else if (userPass === "" || userPass === null) {
    toastr.error("El campo password no puede quedar vacio.");
  } else if (userPass.length < 6) {
    toastr.error("El password debe tener 6 o mas caracteres.");
  } else {
    setUserInfo(userName, userPass);
  }
}
// USUARIO: Manejo de la informacion de usuario en el DOM y Storage al ingresar.
function setUserInfo(name, pass) {
  userInfo = new User(name, pass);
  loadUserInfoDOM(userInfo.getName(), false);
  toastr.success(`${userInfo.sayHello()}`);
  clickForModals("#close-login");
  saveLocalStorage("loguedUser", JSON.stringify(userInfo));
  getProductsFavorites();
  getCartProductStorage();
  toggleFavoritesContainer();
}
// USUARIO: Manejo de la informacion de usuario en el DOM y Storage al desloguearse.
function unsetUserInfo() {
  userInfo.clearInfo();
  userInfo = undefined;
  loadUserInfoDOM("", true);
  toastr.info(`Se ha cerrado la sesión correctamente. Esperamos verte pronto!`);
  localStorage.removeItem("loguedUser");
  resetStatus();
  init();
}
// USUARIO: Manejo de la informacion de usuario DOM.
function loadUserInfoDOM(name, nameHide) {
  document.querySelector("#userNameLog").innerText = name;
  document.querySelector("#userNameLog").hidden = nameHide;
  document.querySelector("#userLogin").hidden = !nameHide;
  logOutBtn.parentElement.hidden = nameHide;
}
// USUARIO: Comprueba si el usuario esta logueado.
function userNotLogued(msg) {
  toastr.info(msg);
  clickForModals("#userLogin");
}
// PRODUCTOS:
async function getProductsFromJSON() {
  let res = await fetch("./productos.json");
  let response = await res.json();
  response.forEach((product) => products.push(product));
}
// PRODUCTOS: Muestra productos en el DOM segun el contenedor indicado.
function loadProducts(products, container, minChilds = 1) {
  clearContainer(container, minChilds);
  setProducts(container, products);
}

function setProducts(container, products) {
  for (let i = 0; i <= Math.round(products.length / 5); i++) {
    let divContainer = document.createElement("div");
    divContainer.classList = "products";
    for (let j = i * 5; j < (i + 1) * 5; j++) {
      if (products[j]) divContainer.append(productCard(products[j]));
    }
    container.appendChild(divContainer);
  }
}
// PRODUCTOS: Vacia el contendor indicado.
function clearContainer(container, minChilds) {
  if (container.children.length > minChilds) {
    let productsContainer = container.querySelectorAll(`.products`);
    productsContainer.forEach((child) => {
      container.removeChild(child);
    });
  }
}
// PRODUCTOS: Crea y retorna un elemento CARD (tarjeta) con la informacion del producto.
function productCard(product) {
  const { id, name, image, price, outstanding, offer } = product;
  let nameTemp = name.length >= 15 ? name.substring(0, 13) + "..." : name;
  let divCard = document.createElement("div");
  let i = document.createElement("i");
  let img = document.createElement("img");
  let divBody = document.createElement("div");
  let pTitle = document.createElement("p");
  let divCart = document.createElement("div");
  let pPrice = document.createElement("p");
  let span = document.createElement("span");
  let ibtn = document.createElement("i");

  divCard.setAttribute("class", "card card-product");
  i.setAttribute(
    "class",
    `fa ${outstanding ? "fa-star" : "fa-star-o"} fa-2x favorito`
  );
  i.dataset.id = `${id}`;
  i.ariaHidden = true;
  img.src = `./assets/img/productos/${image}`;
  img.classList.add("card-img-top");
  img.alt = `${name}`;
  divBody.setAttribute("class", "card-body card-body-mod");
  pTitle.classList.add("card-title-mod");
  pTitle.innerText = nameTemp;
  divCart.classList.add("card-cart");
  offer
    ? pPrice.setAttribute("class", "card-price text-success fw-bold")
    : pPrice.setAttribute("class", "card-price");
  pPrice.innerText = `$ ${new Intl.NumberFormat("de-DE").format(price)}`;
  span.classList.add("card-btn");
  ibtn.setAttribute("class", "fa fa-cart-plus fa-1x");
  ibtn.ariaHidden = true;
  ibtn.dataset.id = `${id}`;

  span.append(ibtn);
  divCart.append(pPrice);
  divCart.append(span);
  divBody.append(pTitle);
  divBody.append(divCart);
  divCard.append(i);
  divCard.append(img);
  divCard.append(divBody);

  return divCard;
}
// PRODUCTOS: Agrega el producto al carrito. Si existe suma una unidad.
function cartButtons(idCart) {
  if (!userInfo) {
    userNotLogued("Debe ingresar antes de comenzar a comprar");
  } else {
    addProductToCart(idCart);
    saveLocalStorage(
      `cart-${userInfo.getName()}`,
      JSON.stringify(cart.getPorductList())
    );
    cantProducts.innerHTML = cart.getTotalProducts();
  }
}
// PRODUCTOS: agrega un producto al carrito
function addProductToCart(idCart) {
  let item = cart.itemExists(parseInt(idCart));
  if (!item) {
    let { id, name, price } = products.find(
      (product) => product.id === parseInt(idCart)
    );
    cart.setProduct(new Product(id, name, price));
    toastr.success("Se agrego un producto al carrito!");
  } else {
    item.setProductAmount();
    toastr.success("Se agrego una unidad a un producto existente!");
  }
}

// PRODUCTOS: Carga los productos segun la categoria seleccionada.
function changeCategory(element) {
  removeBgBadge(element);
  element.dataset.category !== "all"
    ? loadProducts(
        getProductsByCategory(element.dataset.category),
        productContainer,
        2
      )
    : loadProducts(products, productContainer, 2);
}
// PRODUCTOS: Devuelve los productos segun la categoria ingresada.
function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}
// PRODUCTOS: Devuelve los productos en oferta.
function getProductsOffer() {
  return products.filter((product) => product.offer === true);
}
// CARRITO: Muestra en el DOM el detalle de los productos dentro del carrito.
function showCartDetail() {
  resume.innerHTML = "";
  finalPrice.innerHTML = "";
  if (cart.getPorductList().length === 0) {
    resume.innerHTML = `<li>Aun no hay productos en la cesta</li>`;
  } else {
    cart
      .getPorductList()
      .forEach((product) => resume.append(productInCart(product)));
  }
  finalPrice.innerHTML += `${showResumenCart(cart.showResume())}`;
  finalPrice.innerHTML += `<button class="btn btn-info mt-3 closeCart" ${
    cart.getTotalProducts() === 0 ? "hidden" : ""
  }>Finalizar Compra</button>`;
}
// CARRITO: Muestra en el DOM el resumen del carrito y si se aplicaron descuentos.
function showResumenCart({ total, cant, text }) {
  return `<h4 class="my-4">Total   $ ${total}</h4>
  <h5 class="fst-italic">Por un total de ${cant} productos</h5>
  <h5 class="fst-italic">${text}</h5>`;
}

// CARRITO: Crea y retornar un elemento de Lista para el detalle del carrito.
function productInCart(product) {
  const { prodName, prodId, prodPrice, prodAmount } = product;
  let li = document.createElement("li");
  let h5Title = document.createElement("h5");
  let btnRemove = document.createElement("button");
  let h5Price = document.createElement("h5");
  let div = document.createElement("div");
  let btnDecrement = document.createElement("button");
  let span = document.createElement("span");
  let btnIncrement = document.createElement("button");

  h5Title.setAttribute("class", "d-flex justify-content-between");
  h5Title.innerText = `${prodName}`;
  btnRemove.setAttribute("class", "btn btn-danger removeItem");
  btnRemove.id = `${prodId}`;
  btnRemove.innerHTML = "&times;";
  h5Price.innerText = `$ ${prodPrice}`;
  btnDecrement.setAttribute("class", "btn btn-info modAmount");
  btnDecrement.dataset.change = `dec`;
  btnDecrement.innerText = `-`;
  btnDecrement.dataset.id = `${prodId}`;
  btnDecrement.disabled = prodAmount === 1;
  btnIncrement.setAttribute("class", "btn btn-info modAmount");
  btnIncrement.dataset.change = `inc`;
  btnIncrement.innerText = `+`;
  btnIncrement.dataset.id = `${prodId}`;
  span.classList.add("px-3");
  span.innerText = `${prodAmount}`;

  h5Title.append(btnRemove);
  div.append(btnDecrement);
  div.append(span);
  div.append(btnIncrement);
  li.append(h5Title);
  li.append(h5Price);
  li.append(div);

  return li;
}
// CARRITO: Elimina un elemento del carrito.
function removeItemFromCart(e) {
  cart.removeProduct(e.target.id);
  showCartDetail();
  cantProducts.innerHTML = cart.getTotalProducts();
  saveLocalStorage(
    `cart-${userInfo.getName()}`,
    JSON.stringify(cart.getPorductList())
  );
  toastr.warning("Se elimino el producto correctamente.");
}
// CARRITO: Modifica la cantidad de un producto presente en el carrito.
function changeProductAmount(e) {
  let product = cart.itemExists(parseInt(e.target.dataset.id));
  product.setProductAmount(e.target.dataset.change);
  showCartDetail();
  saveLocalStorage(
    `cart-${userInfo.getName()}`,
    JSON.stringify(cart.getPorductList())
  );
}
// FAVORITOS: Agrega o elimina un producto de la lista de favoritos y lo refresca en el DOM.
function updateFavorites(element) {
  if (!userInfo) {
    userNotLogued(
      "Debe ingresar para seleccionar sus productos como favoritos."
    );
  } else {
    if (element.classList.contains("fa-star")) {
      element.classList.remove("fa-star");
      element.classList.add("fa-star-o");
      favorites.forEach((product) => {
        if (product.id == element.dataset.id) {
          let index = favorites.indexOf(product);
          favorites.splice(index, 1);
        }
      });
      toastr.info(`Se elimino el producto de tu lista de favoritos.`);
    } else {
      element.classList.add("fa-star");
      element.classList.remove("fa-star-o");
      let favoriteProduct = products.find(
        (product) => product.id === parseInt(element.dataset.id)
      );
      favoriteProduct.outstanding = true;
      favorites.push(favoriteProduct);
      toastr.success(`Se agrego el producto a tu lista de favoritos!`);
    }
    toggleFavoritesContainer();
    setFavoritesIntoProduct();
    saveLocalStorage(
      `favorites-${userInfo.getName()}`,
      JSON.stringify(favorites)
    );
  }
}
// FAVORITOS: Modifica la lista de productos para que los favoritos se reflejen en Ofertas y Productos.
function setFavoritesIntoProduct() {
  setFavortires();
  let category = document.querySelector(".list-group-item h3 .bg-dark");
  changeCategory(category);
  loadProducts(getProductsOffer(), productOfferContainer);
  loadProducts(favorites, productFavoriteContainer);
}
// FAVORITOS: Modifica los favoritos en el array de productos
function setFavortires() {
  products.forEach((product) => {
    product.outstanding = false;
    favorites.forEach((favorite) => {
      if (product.id === favorite.id) product.outstanding = true;
    });
  });
}
// DOM: Modifica clases segun la seleccion de categoria del usuario.
function removeBgBadge(categorySelected) {
  categories.forEach((category) => {
    category.classList.remove("bg-dark");
    category.classList.add("bg-secondary");
  });
  categorySelected.classList.remove("bg-secondary");
  categorySelected.classList.add("bg-dark");
}
// DOM: Abre el modal segun el id enviado.
function clickForModals(id) {
  document.querySelector(id).click();
}
// DOM: Reseteo del DOM al salir el usuario.
function resetStatus() {
  products.length = 0;
  favorites.length = 0;
  setFavoritesIntoProduct();
  cart.clearList();
  cantProducts.innerHTML = cart.getTotalProducts();
  productFavoriteContainer.innerHTML = `<p class="title">Favoritos</p>`;
  removeBgBadge(categories[0]);
}
// DOM: Despliega un modal con el cierre de la compra.
function loadPaymentDetail() {
  document.querySelector(
    "#paymentUser"
  ).innerText = `Usuario: ${userInfo.getName()}`;
  createTableDetail();
  document.querySelector("#paymentTotal").innerHTML = `${showResumenCart(
    cart.showResume()
  )}`;
  clickForModals("#closeOffcanvasProducts");
  clickForModals("#openModal");
}
// DOM: Crea la tabla de detalle que se muestra en el detalle.
function createTableDetail() {
  let products = cart.getPorductList();
  let tBody = document.querySelector("#tableBody");
  tBody.innerHTML = "";
  products.forEach(({ prodName, prodAmount, prodPrice }) => {
    let tr = document.createElement("tr");
    let tdTitle = document.createElement("td");
    tdTitle.innerText = `${prodName}`;
    let tdPrice = document.createElement("td");
    tdPrice.innerText = `$ ${new Intl.NumberFormat("de-DE").format(prodPrice)}`;
    let tdAmount = document.createElement("td");
    tdAmount.innerText = `${prodAmount}`;
    tr.append(tdTitle);
    tr.append(tdPrice);
    tr.append(tdAmount);
    tBody.append(tr);
  });
}
// DOM: Muestra y oculta la seccion favoritos en caso de tener o no productos seleccionados.
function toggleFavoritesContainer() {
  productFavoriteContainer.hidden = favorites.length === 0;
}
// DOM y STORAGE: Finaliza la compra y elimina el storage del carrito relacionado al usuario.
function closeUserPayment() {
  clickForModals("#openModal");
  cart.clearList();
  cantProducts.innerHTML = cart.getTotalProducts();
  localStorage.removeItem(`cart-${userInfo.getName()}`);
  toastr.success(
    `${userInfo.getName()} finalizaste la compra exitosamente! Gracias! Esperamos verte de nuevo!`
  );
}
// STORAGE: Funcion para simplificar el guardado en el storage.
function saveLocalStorage(clave, valor) {
  localStorage.setItem(clave, valor);
}
// STORAGE: Comprueba si la sesion de usuario se encuentra abierta.
function userIsLogued() {
  if (localStorage.loguedUser != undefined) {
    let user = JSON.parse(localStorage.getItem("loguedUser"));
    setUserInfo(user.name, user.password);
  }
}
// STORAGE: Devuelve los productos guardados en el storage seleccionados como favoritos por el usuario.
function getProductsFavorites() {
  if (
    localStorage.loguedUser !== undefined &&
    localStorage[`favorites-${userInfo.getName()}`] !== undefined
  ) {
    favorites.length = 0;
    let items = JSON.parse(
      localStorage.getItem(`favorites-${userInfo.getName()}`)
    );
    items.forEach((item) => favorites.push(item));
  }
  setFavoritesIntoProduct();
}
// STORAGE: Devuelve los productos del carrito guardados en el storage por el usuario que no finalizo la compra.
function getCartProductStorage() {
  if (
    localStorage.loguedUser !== undefined &&
    localStorage[`cart-${userInfo.getName()}`] !== undefined
  ) {
    cart.clearList();
    let items = JSON.parse(localStorage.getItem(`cart-${userInfo.getName()}`));
    items.forEach((item) => {
      cart.setProduct(
        new Product(
          item.prodId,
          item.prodName,
          parseInt(item.prodPrice),
          item.prodAmount
        )
      );
      cantProducts.innerHTML = cart.getTotalProducts();
    });
  }
}
// DOM: Inicializa los contenedores mostrando los productos segun el usuario este logueado o no.
async function init() {
  await getProductsFromJSON();
  userIsLogued();
  if (userInfo !== undefined) {
    getCartProductStorage();
    getProductsFavorites();
  } else {
    loadProducts(getProductsOffer(), productOfferContainer);
    loadProducts(products, productContainer, 2);
  }
  toggleFavoritesContainer();
}
