class User {
  constructor(userName, userPassword) {
    this.name = userName;
    this.userPassword = userPassword;
  }

  sayHello() {
    return `Bienvenido ${this.name}!`;
  }

  getName() {
    return this.name;
  }
}

class Cart {
  constructor() {
    this.productList = [];
    this.total = 0;
    this.text = "No se aplicaron descuentos";
  }

  getPorductList() {
    return this.productList;
  }

  setProduct(product) {
    this.productList.push(product);
  }

  removeProduct() {
    // this.productList.pop(product);
  }

  getTotalProducts() {
    return this.productList.length;
  }

  getTotalPrice() {
    for (const product of this.productList) {
      this.total += product.getProductPrice() * product.getProductAmount();
    }
    this.applyDiscount();
  }

  applyDiscount() {
    let quantity = this.getTotalProducts();
    if (quantity === 3) {
      this.total -= this.total * 0.1;
      this.text = `Se aplico un descuento del 10%`;
    } else if (quantity === 4) {
      this.total -= this.total * 0.15;
      this.text = `Se aplico un descuento del 15%`;
    } else if (quantity >= 5) {
      this.total -= this.total * 0.2;
      this.text = `Se aplico un descuento del 20%`;
    }
  }

  showResume() {
    let productsDetail = "";
    this.getTotalPrice();
    console.log(this.getPorductList());
    this.getPorductList().forEach((element) => {
      productsDetail += `${element.prodName}
      `;
    });

    alert(`
      Resumen de compra de ${userInfo.getName()}:
  
      Cantidad de productos: ${this.getTotalProducts()}
  
      ${productsDetail}
      Precio total: $${this.total}
  
      ${this.text}
    `);
  }
}

class Product {
  constructor(prodName, prodPrice) {
    this.prodName = prodName;
    this.prodPrice = prodPrice;
    this.prodAmount = 1;
  }

  getProductName() {
    return this.prodName;
  }

  getProductPrice() {
    return this.prodPrice;
  }

  getProductAmount() {
    return this.prodAmount;
  }

  setProductAmount() {
    this.prodAmount++;
  }
}

// Variables Globales
let userInfo;
let quantity = 0;
let cart = new Cart();
// Lista de productos
let products = [
  {
    name: "Notebook Dell G5",
    description: "16gb 512gb Intel Core I5 Nvidia Gtx 1650 Ti",
    price: 699999,
    offer: false,
    image: "1-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Hp Stream 14-cb171wm",
    description: "Intel Celeron N4000 4gb Ram 64gb Ssd ",
    price: 139999,
    offer: false,
    image: "2-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Hp",
    description: "8gb Ram 512gb Amd Ryzen 7-5700u Azul Horizonte ",
    price: 339999,
    offer: false,
    image: "3-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Lenovo",
    description: "8gb 1 Tb Intel Core I7 15,6 Fhd Windows10 ",
    price: 349999,
    offer: false,
    image: "4-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook eNova C141EK5-SC512-W10H",
    description: "Intel Core i5 ",
    price: 164999,
    offer: false,
    image: "5-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Lenovo 14' Touch",
    description: "Intel Core I3 4gb Ram 128gb Ssd ",
    price: 119999,
    offer: true,
    image: "6-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Macbook Pro Apple",
    description: "2021 512gb 16gb Ram M1 Chip Neural Engine",
    price: 1099999,
    offer: true,
    image: "7-notebook.jpg",
    category: "notebook",
    outstanding: true,
  },
  {
    name: "Notebook Dell",
    description: "Nvidia Rtx 3050 Intel Core I7 512gb 16gb Ram",
    price: 449999,
    offer: true,
    image: "8-notebook.jpg",
    category: "notebook",
    outstanding: true,
  },
  {
    name: "3400 1tb+256gb 8gb Ram Intel Core I5 ",
    description: "3400 1tb+256gb 8gb Ram Intel Core I5",
    price: 299999,
    offer: true,
    image: "9-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Lenovo 14",
    description: "4gb Ram 128gb Intel Pentium Silver N5030 ",
    price: 119999,
    offer: true,
    image: "10-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Hp",
    description: "16gb Ram 512gb Ssd Nvidia Rtx 3050 Ti Amd Ryzen 7 ",
    price: 599999,
    offer: true,
    image: "11-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Notebook Msi",
    description: "16gb 512gb Intel Core I7 Nvidia Rtx 3070 Gaming ",
    price: 649999,
    offer: true,
    image: "12-notebook.jpg",
    category: "notebook",
    outstanding: false,
  },
  {
    name: "Computadora Escritorio Dell Vostro",
    description: "Core I3 4gb 1tb Linux ",
    price: 110999,
    offer: true,
    image: "1-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "All In One PCBOX",
    description: "ARWIN PCB-A195C- Intel Celeron ",
    price: 97599,
    offer: false,
    image: "2-pc.jpg",
    category: "pc",
    outstanding: true,
  },
  {
    name: "Computadora Viewsonic",
    description: "VPC6503-I39100 Intel Core i3 ",
    price: 95159,
    offer: false,
    image: "3-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "Kit Pcbox",
    description: "Intel Core I5 8gb 240ssd Teclado Mouse Y Parlantes ",
    price: 114999,
    offer: false,
    image: "4-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "PC AIO All In One 24",
    description:
      "Dell priceiplex 7470 Intel Core i5 8GB 256GB SSD Windows 10 Pro ",
    price: 114999,
    offer: true,
    image: "5-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "Pc De Escritorio Iqual",
    description: "Intel Core I3 10105 8gb Ddr4 Ssd 240 ",
    price: 75399,
    offer: true,
    image: "6-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "Computadora PCBOX",
    description: "Dual Core Intel Celeron ",
    price: 85399,
    offer: false,
    image: "7-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "All In One HP",
    description: "205G3 1R2L5LT AMD A4 ",
    price: 92719,
    offer: false,
    image: "8-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "Pc All In One Aio",
    description: "Iqual Q213 Intel Core I3 4gb 1tb Windows ",
    price: 100319,
    offer: true,
    image: "9-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "PC HP",
    description: "260 G4 Celeron 5205U 4GB 1TB Windows 10 Home 246F9LT ",
    price: 73399,
    offer: true,
    image: "10-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "PC PCBOX",
    description: "Intel Celeron 240GB HDD 4GB RAM WIN10 HSL ",
    price: 64029,
    offer: true,
    image: "11-pc.jpg",
    category: "pc",
    outstanding: false,
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    description: "SM-S908 256GB Green ",
    price: 599999,
    offer: false,
    image: "1-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Libre Samsung A03",
    description: "32 GB Blue Azul ",
    price: 36999,
    offer: false,
    image: "2-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Motorola Moto G52",
    description: "128 GB charcoal grey 6 GB RAM ",
    price: 79999,
    offer: true,
    image: "3-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Motorola Moto G51",
    description: "5G 128 GB dorado 4 GB RAM ",
    price: 69999,
    offer: true,
    image: "4-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Samsung Galaxy S22 Ultra",
    description: "Burgundy SM-S908EDRMARO ",
    price: 394109,
    offer: true,
    image: "5-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Motorola Moto Edge 30 Pro",
    description: "256 Gb Verde Cosmos 8 Gb Ram ",
    price: 249999,
    offer: true,
    image: "6-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Libre Motorola E6S",
    description: "Special Edition 4 64 Rojo XT2053-2* ",
    price: 34999,
    offer: false,
    image: "7-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Libre Samsung A13",
    description: "SM-A135M Negro ",
    price: 60999,
    offer: false,
    image: "8-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    description: "Sm-s908 256gb Liberado Blanco ",
    price: 599999,
    offer: true,
    image: "9-celular.jpg",
    category: "celulares",
    outstanding: true,
  },
  {
    name: "Celular Libre Motorola Moto G9 Power",
    description: "Violeta XT2091-4 ",
    price: 85999,
    offer: false,
    image: "10-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Celular Quantum Q20",
    description: "4G 6.1 pulgadas 128 4GB Azul Android 10 S905-AR-B-TDF ",
    price: 44969,
    offer: true,
    image: "11-celular.jpg",
    category: "celulares",
    outstanding: true,
  },
  {
    name: "Celular Libre Samsung Galaxy A01",
    description: "Core Negro SM-A013MZKLARO GB ",
    price: 34999,
    offer: false,
    image: "12-celular.jpg",
    category: "celulares",
    outstanding: false,
  },
  {
    name: "Tablet Amazon Fire 7",
    description: "2019 Kfmuwi 7 16gb Black Y 1gb De Memoria Ram ",
    price: 22999,
    offer: true,
    image: "1-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Amazon Fire 7",
    description: '2019 KFMUWI 7" 16GB plum y 1GB de memoria RAM ',
    price: 22999,
    offer: true,
    image: "2-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Samsung Galaxy Tab A7 Lite",
    description: "Tablet 32gb 3gb Ram Octa-core Grey ",
    price: 54999,
    offer: true,
    image: "3-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Apple iPad Pro",
    description: "De 11 3rd Gen Wi-fi 128gb 8gb Ram ",
    price: 499999,
    offer: false,
    image: "4-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Lenovo TB-X505F 10",
    description: "Qualcomm Negro 16 GB ",
    price: 32959,
    offer: false,
    image: "5-tablet.jpg",
    category: "tablets",
    outstanding: true,
  },
  {
    name: "Tablet Samsung Galaxy A7 Lite",
    description: "Sm-t225 32gb 3gb Ram Octa-core silver ",
    price: 89999,
    offer: true,
    image: "6-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Samsung Galaxy A7 Lite",
    description: "Lite Sm-t225 32gb 3gb Ram Octa-core Gris ",
    price: 99999,
    offer: false,
    image: "7-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Hyundai KORAL",
    description: '7W4 BK 7 " Rockchip Negro 8 GB ',
    price: 11999,
    offer: false,
    image: "8-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Philco TP7A6 7",
    description: "Negro 16 GB ",
    price: 19999,
    offer: false,
    image: "9-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet EXO WAVE I101M 10.1",
    description: "ARM Dorado 16 GB ",
    price: 24999,
    offer: false,
    image: "10-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Alcatel 1t10",
    description: "Smart 2gb Con Teclado Y Flip Cover ",
    price: 42549,
    offer: false,
    image: "11-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Tablet Iqual T10G 10.1",
    description: "Blanco 16 GB ",
    price: 25999,
    offer: false,
    image: "12-tablet.jpg",
    category: "tablets",
    outstanding: false,
  },
  {
    name: "Pantalla Monitor Gamer Viewsonic Xg2705 27",
    description: "Full Hd 144hz",
    price: 119999,
    offer: true,
    image: "1-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Pantalla Monitor Viewsonic 34",
    description: "Wide Quad Hd Ultra Ancho",
    price: 199999,
    offer: true,
    image: "2-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: 'Monitor Philips 22"',
    description: "LED FullHD HDMI VGA Negro 221V8 77",
    price: 59369,
    offer: true,
    image: "3-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Monitor Samsung 27 QHD Odyssey",
    description: "G5 165hz Curvo LS27AG550ELX",
    price: 154059,
    offer: true,
    image: "4-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Monitor Samsung 24 FHD Odyssey",
    description: "G3 144hz LF24G35TFWLX",
    price: 100619,
    offer: true,
    image: "5-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Monitor Samsung 27 QHD",
    description: "A700 IPS LS27A700NWLX",
    price: 155279,
    offer: true,
    image: "6-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: 'MONITOR 19" PHILIPS 193V5LHSB2 77',
    description: "HD VGA HDMI (8712581740993)",
    price: 38069,
    offer: false,
    image: "7-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: 'MONITOR 20" LG 20MK400H-B',
    description: "HD VGA HDMI",
    price: 47359,
    offer: false,
    image: "8-monitor.jpg",
    category: "monitores",
    outstanding: true,
  },
  {
    name: 'MONITOR 19" LG 19M38A',
    description: "ULTRA FINO 5MS",
    price: 41619,
    offer: false,
    image: "9-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Monitor Gamer IPS 24",
    description: "Full HD LG 24MK600M con Freesync",
    price: 149999,
    offer: true,
    image: "10-monitor.jpg",
    category: "monitores",
    outstanding: true,
  },
  {
    name: 'Monitor Gamer VA 32" QHD LG',
    description: "UltraGear 32GN600 con Freesync y 165Hz",
    price: 175999,
    offer: true,
    image: "11-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Monitor Gamer 24 Pulgadas Benq Zowie",
    description: "Xl2411k Esports 144hz",
    price: 179999,
    offer: true,
    image: "12-monitor.jpg",
    category: "monitores",
    outstanding: false,
  },
  {
    name: "Auricular Plantronics",
    description: "Supra Plus HW261N",
    price: 18969,
    offer: true,
    image: "1-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "Auriculares Logitech",
    description: "H151 Negro",
    price: 4999,
    offer: false,
    image: "2-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "Teclado y Mouse Noga",
    description: "NKB-300",
    price: 1349,
    offer: true,
    image: "3-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "Auriculares Philips Supraurales",
    description: "Con Cable y Micrófono Blancos TAH4105WT 00",
    price: 4919,
    offer: true,
    image: "4-accesorio.jpg",
    category: "accesorios",
    outstanding: true,
  },
  {
    name: "Teclado Mecánico y Mouse",
    description: "Level Up Pegasus con Switches Outemu Blue",
    price: 9889,
    offer: true,
    image: "5-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "Mouse Inalámbrico Logitech",
    description: "M190 Azul Y Negro",
    price: 2069,
    offer: false,
    image: "6-accesorio.jpg",
    category: "accesorios",
    outstanding: true,
  },
  {
    name: "Teclado Verbatim",
    description: "Combo",
    price: 4399,
    offer: false,
    image: "7-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "AURICULAR C MIC VINCHA TRUST",
    description: "GXT 444 WAYMAN PRO (8713439232486)",
    price: 15269,
    offer: false,
    image: "8-accesorio.png",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "MOUSE WIRELESS STEELSERIES PRIME",
    description:
      "price 400IPS PRESTIGE OM 5 BOTONES RGB DIESTRO BLACK (5707119041256)",
    offerLista: 29249,
    image: "9-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "MOUSE WIRELESS LOGITECH",
    description:
      "G PRO priceSUPERLIGHT HERO 25K 25600 DPI MAGENTA 910-005955 (97855159830)",
    offer: false,
    image: "10-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "MOUSE STEELSERIES PRIME",
    description:
      "price 450IPS PRESTIGE OM 6 BOTONES 69G RGB DIESTRO BLACK (5707119040365)",
    offerLista: 14109,
    image: "11-accesorio.jpg",
    category: "accesorios",
    outstanding: false,
  },
  {
    name: "MOUSE STEELSERIES AEROX 3",
    description: "8500CPI 300IPS 6 BOTONES DIESTRO BLACK (5707119042154)",
    price: 14169,
    offer: false,
    image: "12-accesorio.png",
    category: "accesorios",
    outstanding: false,
  },
];

// Solicita al usuario que ingrese su nombre y contraseña.
function login() {
  let userName = "";
  let userPass = "";
  while (userName === "") {
    userName = prompt("Ingrese su nombre");
    if (userName === "" || userName === null || userName.length <= 3) {
      alert("El nombre ingresado es demasiado corto");
      userName = "";
    }
  }
  while (userPass === "") {
    userPass = prompt("Ingrese su password");
    if (userPass === "" || userPass === null) {
      alert("El password ingresado es incorrecto");
      userPass = "";
    } else if (userPass.length < 6) {
      alert("El password debe tener 6 o mas caracteres.");
      userPass = "";
    }
  }
  userInfo = new User(userName, userPass);
  alert(userInfo.sayHello());
}

// Llama a otras funciones, y ejecuta compras segun el usuario lo requiera.
function init() {
  login();
  let stay = true;
  let categoryId;
  let productSelected;
  while (stay) {
    categoryId = askUserForCategory();
    productSelected = askUserByProduct(categoryId);
    cart.setProduct(productSelected);
    let answer = askUserIfcontinues();
    if (answer === 2) stay = false;
  }
  cart.showResume();
}

// Verifica la cantidad de productos ingresados al carrito y si corresponde aplica un descuento.

// Solicita al usuario que ingrese un producto al carrito.
function askUserByProduct(categoryId) {
  let productsByCategory = getProductsByCategory(categoryId);
  let productsOption = "";
  let ids = [];
  productsByCategory.forEach((product) => {
    ids.push(products.indexOf(product));
    productsOption += `${products.indexOf(product) + 1} - ${product.name} - $${
      product.price
    } \n`;
  });
  let productId =
    parseInt(prompt(`Seleccione un producto: \n\n${productsOption} \n`)) - 1;
  while (!ids.includes(productId)) {
    alert("No es una opcion valida!");
    productId =
      parseInt(prompt(`Seleccione un producto: \n\n${productsOption} \n`)) - 1;
  }
  return new Product(products[productId].name, products[productId].price);
}

function askUserForCategory() {
  let categories = getCategories();
  let categoriesOption = "";
  categories.forEach((category) => {
    categoriesOption += `${categories.indexOf(category) + 1} - ${category} \n`;
  });
  return (
    parseInt(prompt(`Seleccione una categoria:\n\n${categoriesOption}\n`)) - 1
  );
}

function getCategories() {
  return products
    .map((product) => product.category)
    .reduce((prev, next) => {
      if (!prev.includes(next)) prev.push(next);
      return prev;
    }, []);
}

function getProductsByCategory(categoryId) {
  let category = getCategories()[categoryId];
  return products.filter((product) => product.category === category);
}

// Consulta al usuario si desea continuar con la compra
function askUserIfcontinues() {
  let res = parseInt(prompt(`Desea seguir comprando? 1 - Si o 2 - No`));
  while (res !== 1 && res !== 2) {
    res = parseInt(prompt(`Desea seguir comprando? 1 - Si o 2 - No`));
  }
  return res;
}

// Ejecuta el programa
init();
