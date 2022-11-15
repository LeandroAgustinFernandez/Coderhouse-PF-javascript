// CLASES

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
const favorites = [];
const logOutBtn = document.querySelector("#logOut");
const closePayment = document.querySelector("#paymentEnd");
// Lista de productoss
const products = [
  {
    id: 1,
    name: "Notebook Dell G5",
    description: "16gb 512gb Intel Core I5 Nvidia Gtx 1650 Ti",
    price: 699999,
    offer: false,
    image: "1-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 2,
    name: "Notebook Hp Stream 14-cb171wm",
    description: "Intel Celeron N4000 4gb Ram 64gb Ssd ",
    price: 139999,
    offer: false,
    image: "2-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 3,
    name: "Notebook Hp",
    description: "8gb Ram 512gb Amd Ryzen 7-5700u Azul Horizonte ",
    price: 339999,
    offer: false,
    image: "3-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 4,
    name: "Notebook Lenovo",
    description: "8gb 1 Tb Intel Core I7 15,6 Fhd Windows10 ",
    price: 349999,
    offer: false,
    image: "4-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 5,
    name: "Notebook eNova C141EK5-SC512-W10H",
    description: "Intel Core i5 ",
    price: 164999,
    offer: false,
    image: "5-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 6,
    name: "Notebook Lenovo 14' Touch",
    description: "Intel Core I3 4gb Ram 128gb Ssd ",
    price: 119999,
    offer: true,
    image: "6-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 7,
    name: "Macbook Pro Apple",
    description: "2021 512gb 16gb Ram M1 Chip Neural Engine",
    price: 1099999,
    offer: false,
    image: "7-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 8,
    name: "Notebook Dell",
    description: "Nvidia Rtx 3050 Intel Core I7 512gb 16gb Ram",
    price: 449999,
    offer: false,
    image: "8-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 9,
    name: "3400 1tb+256gb 8gb Ram Intel Core I5 ",
    description: "3400 1tb+256gb 8gb Ram Intel Core I5",
    price: 299999,
    offer: true,
    image: "9-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 10,
    name: "Notebook Lenovo 14",
    description: "4gb Ram 128gb Intel Pentium Silver N5030 ",
    price: 119999,
    offer: false,
    image: "10-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 11,
    name: "Notebook Hp",
    description: "16gb Ram 512gb Ssd Nvidia Rtx 3050 Ti Amd Ryzen 7 ",
    price: 599999,
    offer: false,
    image: "11-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 12,
    name: "Notebook Msi",
    description: "16gb 512gb Intel Core I7 Nvidia Rtx 3070 Gaming ",
    price: 649999,
    offer: false,
    image: "12-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    id: 13,
    name: "Computadora Escritorio Dell Vostro",
    description: "Core I3 4gb 1tb Linux ",
    price: 110999,
    offer: true,
    image: "1-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 14,
    name: "All In One PCBOX",
    description: "ARWIN PCB-A195C- Intel Celeron ",
    price: 97599,
    offer: false,
    image: "2-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 15,
    name: "Computadora Viewsonic",
    description: "VPC6503-I39100 Intel Core i3 ",
    price: 95159,
    offer: false,
    image: "3-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 16,
    name: "Kit Pcbox",
    description: "Intel Core I5 8gb 240ssd Teclado Mouse Y Parlantes ",
    price: 114999,
    offer: false,
    image: "4-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 17,
    name: "PC AIO All In One 24",
    description:
      "Dell priceiplex 7470 Intel Core i5 8GB 256GB SSD Windows 10 Pro ",
    price: 114999,
    offer: false,
    image: "5-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 18,
    name: "Pc De Escritorio Iqual",
    description: "Intel Core I3 10105 8gb Ddr4 Ssd 240 ",
    price: 75399,
    offer: false,
    image: "6-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 19,
    name: "Computadora PCBOX",
    description: "Dual Core Intel Celeron ",
    price: 85399,
    offer: false,
    image: "7-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 20,
    name: "All In One HP",
    description: "205G3 1R2L5LT AMD A4 ",
    price: 92719,
    offer: false,
    image: "8-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 21,
    name: "Pc All In One Aio",
    description: "Iqual Q213 Intel Core I3 4gb 1tb Windows ",
    price: 100319,
    offer: true,
    image: "9-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 22,
    name: "PC HP",
    description: "260 G4 Celeron 5205U 4GB 1TB Windows 10 Home 246F9LT ",
    price: 73399,
    offer: false,
    image: "10-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 23,
    name: "PC PCBOX",
    description: "Intel Celeron 240GB HDD 4GB RAM WIN10 HSL ",
    price: 64029,
    offer: false,
    image: "11-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    id: 24,
    name: "Samsung Galaxy S22 Ultra",
    description: "SM-S908 256GB Green ",
    price: 599999,
    offer: false,
    image: "1-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 25,
    name: "Celular Libre Samsung A03",
    description: "32 GB Blue Azul ",
    price: 36999,
    offer: false,
    image: "2-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 26,
    name: "Celular Motorola Moto G52",
    description: "128 GB charcoal grey 6 GB RAM ",
    price: 79999,
    offer: true,
    image: "3-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 27,
    name: "Celular Motorola Moto G51",
    description: "5G 128 GB dorado 4 GB RAM ",
    price: 69999,
    offer: true,
    image: "4-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 28,
    name: "Celular Samsung Galaxy S22 Ultra",
    description: "Burgundy SM-S908EDRMARO ",
    price: 394109,
    offer: false,
    image: "5-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 29,
    name: "Celular Motorola Moto Edge 30 Pro",
    description: "256 Gb Verde Cosmos 8 Gb Ram ",
    price: 249999,
    offer: false,
    image: "6-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 30,
    name: "Celular Libre Motorola E6S",
    description: "Special Edition 4 64 Rojo XT2053-2* ",
    price: 34999,
    offer: false,
    image: "7-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 31,
    name: "Celular Libre Samsung A13",
    description: "SM-A135M Negro ",
    price: 60999,
    offer: false,
    image: "8-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 32,
    name: "Samsung Galaxy S22 Ultra",
    description: "Sm-s908 256gb Liberado Blanco ",
    price: 599999,
    offer: false,
    image: "9-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 33,
    name: "Celular Libre Motorola Moto G9 Power",
    description: "Violeta XT2091-4 ",
    price: 85999,
    offer: false,
    image: "10-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 34,
    name: "Celular Quantum Q20",
    description: "4G 6.1 pulgadas 128 4GB Azul Android 10 S905-AR-B-TDF ",
    price: 44969,
    offer: false,
    image: "11-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 35,
    name: "Celular Libre Samsung Galaxy A01",
    description: "Core Negro SM-A013MZKLARO GB ",
    price: 34999,
    offer: false,
    image: "12-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    id: 36,
    name: "Tablet Amazon Fire 7",
    description: "2019 Kfmuwi 7 16gb Black Y 1gb De Memoria Ram ",
    price: 22999,
    offer: false,
    image: "1-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 37,
    name: "Tablet Amazon Fire 7",
    description: '2019 KFMUWI 7" 16GB plum y 1GB de memoria RAM ',
    price: 22999,
    offer: true,
    image: "2-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 38,
    name: "Samsung Galaxy Tab A7 Lite",
    description: "Tablet 32gb 3gb Ram Octa-core Grey ",
    price: 54999,
    offer: false,
    image: "3-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 39,
    name: "Tablet Apple iPad Pro",
    description: "De 11 3rd Gen Wi-fi 128gb 8gb Ram ",
    price: 499999,
    offer: false,
    image: "4-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 40,
    name: "Tablet Lenovo TB-X505F 10",
    description: "Qualcomm Negro 16 GB ",
    price: 32959,
    offer: false,
    image: "5-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 41,
    name: "Tablet Samsung Galaxy A7 Lite",
    description: "Sm-t225 32gb 3gb Ram Octa-core silver ",
    price: 89999,
    offer: false,
    image: "6-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 42,
    name: "Tablet Samsung Galaxy A7 Lite",
    description: "Lite Sm-t225 32gb 3gb Ram Octa-core Gris ",
    price: 99999,
    offer: false,
    image: "7-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 43,
    name: "Tablet Hyundai KORAL",
    description: '7W4 BK 7 " Rockchip Negro 8 GB ',
    price: 11999,
    offer: false,
    image: "8-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 44,
    name: "Tablet Philco TP7A6 7",
    description: "Negro 16 GB ",
    price: 19999,
    offer: false,
    image: "9-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 45,
    name: "Tablet EXO WAVE I101M 10.1",
    description: "ARM Dorado 16 GB ",
    price: 24999,
    offer: false,
    image: "10-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 46,
    name: "Tablet Alcatel 1t10",
    description: "Smart 2gb Con Teclado Y Flip Cover ",
    price: 42549,
    offer: false,
    image: "11-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 47,
    name: "Tablet Iqual T10G 10.1",
    description: "Blanco 16 GB ",
    price: 25999,
    offer: false,
    image: "12-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    id: 48,
    name: "Pantalla Monitor Gamer Viewsonic Xg2705 27",
    description: "Full Hd 144hz",
    price: 119999,
    offer: false,
    image: "1-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 49,
    name: "Pantalla Monitor Viewsonic 34",
    description: "Wide Quad Hd Ultra Ancho",
    price: 199999,
    offer: true,
    image: "2-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 50,
    name: 'Monitor Philips 22"',
    description: "LED FullHD HDMI VGA Negro 221V8 77",
    price: 59369,
    offer: true,
    image: "3-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 51,
    name: "Monitor Samsung 27 QHD Odyssey",
    description: "G5 165hz Curvo LS27AG550ELX",
    price: 154059,
    offer: false,
    image: "4-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 52,
    name: "Monitor Samsung 24 FHD Odyssey",
    description: "G3 144hz LF24G35TFWLX",
    price: 100619,
    offer: false,
    image: "5-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 53,
    name: "Monitor Samsung 27 QHD",
    description: "A700 IPS LS27A700NWLX",
    price: 155279,
    offer: false,
    image: "6-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 54,
    name: 'MONITOR 19" PHILIPS 193V5LHSB2 77',
    description: "HD VGA HDMI (8712581740993)",
    price: 38069,
    offer: false,
    image: "7-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 55,
    name: 'MONITOR 20" LG 20MK400H-B',
    description: "HD VGA HDMI",
    price: 47359,
    offer: false,
    image: "8-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 56,
    name: 'MONITOR 19" LG 19M38A',
    description: "ULTRA FINO 5MS",
    price: 41619,
    offer: false,
    image: "9-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 57,
    name: "Monitor Gamer IPS 24",
    description: "Full HD LG 24MK600M con Freesync",
    price: 149999,
    offer: false,
    image: "10-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 58,
    name: 'Monitor Gamer VA 32" QHD LG',
    description: "UltraGear 32GN600 con Freesync y 165Hz",
    price: 175999,
    offer: false,
    image: "11-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 59,
    name: "Monitor Gamer 24 Pulgadas Benq Zowie",
    description: "Xl2411k Esports 144hz",
    price: 179999,
    offer: false,
    image: "12-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    id: 60,
    name: "Auricular Plantronics",
    description: "Supra Plus HW261N",
    price: 18969,
    offer: true,
    image: "1-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 61,
    name: "Auriculares Logitech",
    description: "H151 Negro",
    price: 4999,
    offer: false,
    image: "2-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 62,
    name: "Teclado y Mouse Noga",
    description: "NKB-300",
    price: 1349,
    offer: false,
    image: "3-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 63,
    name: "Auriculares Philips Supraurales",
    description: "Con Cable y Micrófono Blancos TAH4105WT 00",
    price: 4919,
    offer: false,
    image: "4-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 64,
    name: "Teclado Mecánico y Mouse",
    description: "Level Up Pegasus con Switches Outemu Blue",
    price: 9889,
    offer: false,
    image: "5-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 65,
    name: "Mouse Inalámbrico Logitech",
    description: "M190 Azul Y Negro",
    price: 2069,
    offer: false,
    image: "6-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 66,
    name: "Teclado Verbatim",
    description: "Combo",
    price: 4399,
    offer: false,
    image: "7-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 67,
    name: "AURICULAR C MIC VINCHA TRUST",
    description: "GXT 444 WAYMAN PRO (8713439232486)",
    price: 15269,
    offer: false,
    image: "8-accesorio.png",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 68,
    name: "MOUSE WIRELESS STEELSERIES PRIME",
    description:
      "price 400IPS PRESTIGE OM 5 BOTONES RGB DIESTRO BLACK (5707119041256)",
    offerLista: 29249,
    image: "9-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 69,
    name: "MOUSE WIRELESS LOGITECH",
    description:
      "G PRO priceSUPERLIGHT HERO 25K 25600 DPI MAGENTA 910-005955 (97855159830)",
    offer: false,
    image: "10-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 70,
    name: "MOUSE STEELSERIES PRIME",
    description:
      "price 450IPS PRESTIGE OM 6 BOTONES 69G RGB DIESTRO BLACK (5707119040365)",
    offerLista: 14109,
    image: "11-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    id: 71,
    name: "MOUSE STEELSERIES AEROX 3",
    description: "8500CPI 300IPS 6 BOTONES DIESTRO BLACK (5707119042154)",
    price: 14169,
    offer: false,
    image: "12-accesorio.png",
    category: "accesorios",
    outstanding: false,
  },
];

// LISTENERS
productDetails.forEach((productDetailContainer) => {
  productDetailContainer.addEventListener("click", (e) => {
    e.target.classList.contains("favorito") && updateFavorites(e.target);
    e.target.classList.contains("fa-cart-plus") && cartButtons(e.target);
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

function setUserInfo(name, pass) {
  userInfo = new User(name, pass);
  loadUserInfoDOM(userInfo.getName(), false);
  toastr.success(`${userInfo.sayHello()}`);
  clickForModals("#close-login");
  saveLocalStorage("loguedUser", JSON.stringify(userInfo));
  getProductsFavorites();
  getCartProductStorage();
}

function unsetUserInfo() {
  userInfo.clearInfo();
  userInfo = undefined;
  loadUserInfoDOM("", true);
  toastr.info(`Se ha cerrado la sesión correctamente. Esperamos verte pronto!`);
  localStorage.removeItem("loguedUser");
  resetStatus();
  init();
}

function loadUserInfoDOM(name, nameHide) {
  document.querySelector("#userNameLog").innerText = name;
  document.querySelector("#userNameLog").hidden = nameHide;
  document.querySelector("#userLogin").hidden = !nameHide;
  logOutBtn.parentElement.hidden = nameHide;
}

// MUESTRA PRODUCTOS EN EL DOM SEGUN LOS PRODUCTOS Y CONTENEDOR INDICADO
function loadProducts(products, container, minChilds = 1) {
  clearContainer(container, minChilds);
  for (let i = 0; i <= Math.round(products.length / 5); i++) {
    let divContainer = document.createElement("div");
    divContainer.classList = "products";
    for (let j = i * 5; j < (i + 1) * 5; j++) {
      if (products[j]) {
        divContainer.append(productCard(products[j]));
      }
    }
    container.appendChild(divContainer);
  }
}

function clearContainer(container, minChilds) {
  if (container.children.length > minChilds) {
    document.querySelectorAll(`#${container.id} .products`).forEach((child) => {
      container.removeChild(child);
    });
  }
}

// TEMPLATE CARD DE PRODUCTO
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
// RETORNA EL DETALLE DE COMPRA EN EL DOM
function showCartDetail() {
  resume.innerHTML = "";
  finalPrice.innerHTML = "";
  if (cart.getPorductList().length === 0) {
    resume.innerHTML = `<li>Aun no hay productos en la cesta</li>`;
  } else {
    cart.getPorductList().forEach((product) => {
      resume.append(productInCart(product));
    });
  }

  finalPrice.innerHTML += `${showResumenCart(cart.showResume())}`;
  finalPrice.innerHTML += `<button class="btn btn-info mt-3 closeCart" ${
    cart.getTotalProducts() === 0 ? "hidden" : ""
  }>Finalizar Compra</button>`;
}
// TEMPLATE RESUMEN
function showResumenCart({ total, cant, text }) {
  return `<h4 class="my-4">Total   $ ${total}</h4>
  <h5 class="fst-italic">Por un total de ${cant} productos</h5>
  <h5 class="fst-italic">${text}</h5>`;
}

// TEMPLATE LIST-ITEM RESUMEN DE COMPRA
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

function changeProductAmount(e) {
  let product = cart.itemExists(parseInt(e.target.dataset.id));
  product.setProductAmount(e.target.dataset.change);
  showCartDetail();
  saveLocalStorage(
    `cart-${userInfo.getName()}`,
    JSON.stringify(cart.getPorductList())
  );
}

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

function removeBgBadge(categorySelected) {
  categories.forEach((category) => {
    category.classList.remove("bg-dark");
    category.classList.add("bg-secondary");
  });
  categorySelected.classList.remove("bg-secondary");
  categorySelected.classList.add("bg-dark");
}

function updateFavorites(element) {
  if (!userInfo) {
    checkUserLogued(
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
    setFavoritesIntoProduct();
    saveLocalStorage(
      `favorites-${userInfo.getName()}`,
      JSON.stringify(favorites)
    );
  }
}

function setFavoritesIntoProduct() {
  products.forEach((product) => {
    product.outstanding = false;
    favorites.forEach((favorite) => {
      if (product.id === favorite.id) product.outstanding = true;
    });
  });
  let category = document.querySelector(".list-group-item h3 .bg-dark");
  changeCategory(category);
  loadProducts(getProductsOffer(), productOfferContainer);
  loadProducts(favorites, productFavoriteContainer);
}

function cartButtons(element) {
  if (!userInfo) {
    checkUserLogued("Debe ingresar antes de comenzar a comprar");
  } else {
    let idCard = parseInt(element.dataset.id);
    let item = cart.itemExists(idCard);
    if (!item) {
      let { id, name, price } = products.find(
        (product) => product.id === idCard
      );
      cart.setProduct(new Product(id, name, price));
      toastr.success("Se agrego un producto al carrito!");
    } else {
      item.setProductAmount();
      toastr.success("Se agrego una unidad a un producto existente!");
    }
    saveLocalStorage(
      `cart-${userInfo.getName()}`,
      JSON.stringify(cart.getPorductList())
    );
    cantProducts.innerHTML = cart.getTotalProducts();
  }
}

function checkUserLogued(msg) {
  toastr.info(msg);
  clickForModals("#userLogin");
}

// MUESTRA LA INFORMACION DEL CART EN EL MODAL DEL DOM.
function loadPaymentDetail() {
  document.querySelector(
    "#paymentUser"
  ).innerText = `Usuario: ${userInfo.getName()}`;
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
  document.querySelector("#paymentTotal").innerHTML = `${showResumenCart(
    cart.showResume()
  )}`;
  clickForModals("#closeOffcanvasProducts");
  clickForModals("#openModal");
}

function closeUserPayment() {
  clickForModals("#openModal");
  cart.clearList();
  cantProducts.innerHTML = cart.getTotalProducts();
  localStorage.removeItem(`cart-${userInfo.getName()}`);
  toastr.success(
    `${userInfo.getName()} finalizaste la compra exitosamente! Gracias! Esperamos verte de nuevo!`
  );
}

// Llama a otras funciones, y ejecuta compras segun el usuario lo requiera.
function init() {
  userIsLogued();
  if (userInfo !== undefined) {
    getCartProductStorage();
    getProductsFavorites();
  } else {
    loadProducts(getProductsOffer(), productOfferContainer);
    loadProducts(products, productContainer, 2);
  }
}

function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

function getProductsOffer() {
  return products.filter((product) => product.offer === true);
}

// Comprueba si el usuario mantuvo su sesion abierta.
function userIsLogued() {
  if (localStorage.loguedUser != undefined) {
    let user = JSON.parse(localStorage.getItem("loguedUser"));
    setUserInfo(user.name, user.password);
  }
}

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

function saveLocalStorage(clave, valor) {
  localStorage.setItem(clave, valor);
}

function clickForModals(id) {
  document.querySelector(id).click();
}

function resetStatus() {
  favorites.length = 0;
  setFavoritesIntoProduct();
  cart.clearList();
  cantProducts.innerHTML = cart.getTotalProducts();
  productFavoriteContainer.innerHTML = `<p class="title">Favoritos</p>`;
}
// Ejecuta el programa
window.addEventListener("load", () => {
  init();
});
