// Variables Globales
let username = "";
let total = 0;
let quantity = 0;

// Solicita al usuario que ingrese su nombre.
function getUserName() {
  while (username === "") {
    username = prompt("Ingrese su nombre de usuario");
    console.log(username === null);
    if (username === "" || username === null || username.length <= 3 ) {
      alert("El nombre ingresado es demasiado corto");
      username = "";
    }
  }
  alert(`Bienvenido ${username}!`);
}

// Llama a otras funciones, y ejecuta compras segun el usuario lo requiera. 
function init() {
  getUserName();
  let product;
  let stay = true;
  while (stay) {
    product = askUserByProduct();
    if (product < 7 && product > 0 && !isNaN(product)) {
      quantity++;
      total += getPrice(product);
    } else {
      continue;
    }
    let answer = askUserIfcontinues();
    if (answer === 2) stay = false;
  }
  applyDiscount();
}

// Retorna el valor del producto ingresador por el usuario.
function getPrice(product) {
  if (product === 1) {
    return 150000;
  } else if (product === 2) {
    return 240000;
  } else if (product === 3) {
    return 23000;
  } else if (product === 4) {
    return 90000;
  } else if (product === 5) {
    return 40000;
  } else {
    return 5000;
  }
}

// Verifica la cantidad de productos ingresados al carrito y si corresponde aplica un descuento.
function applyDiscount() {
  let text = "No se aplicaron descuentos";
  if (quantity === 3) {
    total = total - total * 0.1;
    text = `Se aplico un descuento del 10%`;
  } else if (quantity === 4) {
    total -= total * 0.15;
    text = `Se aplico un descuento del 15%`;
  } else if (quantity >= 5) {
    total -= total * 0.2;
    text = `Se aplico un descuento del 20%`;
  }
  showResume(text);
}

// Solicita al usuario que ingrese un producto al carrito.
function askUserByProduct() {
  return parseInt(
    prompt(
      `Seleccione un producto:
      
      1 - PC Escritorio - $150.000
      2 - Notebook - $240.000
      3 - Tablet - $23.000
      4 - Celular - $90.000
      5 - Monitore - $40.000
      6 - Periferico - $5.000
      
      `
    )
  );
}

// Consulta al usuario si desea continuar con la compra
function askUserIfcontinues() {
  let res = parseInt(prompt(`Desea seguir comprando? 1 - Si o 2 - No`));
  while (res !== 1 && res !== 2) {
    res = parseInt(prompt(`Desea seguir comprando? 1 - Si o 2 - No`));
  }
  return res;
}

// Muestra el resumen de la compra realizada por el usuario.
function showResume(text) {
  alert(`
    Resumen de compra de ${username}:

    Cantidad de productos: ${quantity}
    Precio total: $${total}

    ${text}
  `);
}

// Ejecuta el programa
init();
