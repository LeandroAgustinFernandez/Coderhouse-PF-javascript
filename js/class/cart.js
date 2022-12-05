class Cart {
    constructor() {
      this.productList = [];
      this.total = 0;
      this.text = "";
    }
  
    getPorductList() {
      return this.productList;
    }
  
    setProduct(product) {
      this.productList.push(product);
    }
  
    removeProduct(id) {
      this.productList.forEach((product) => {
        if (product.prodId == id) {
          let index = this.productList.indexOf(product);
          this.productList.splice(index, 1);
        }
      });
    }
  
    getTotalProducts() {
      return this.productList.length;
    }
  
    getTotalPrice() {
      this.total = 0;
      for (const product of this.productList) {
        this.total += product.getProductPrice() * product.getProductAmount();
      }
      this.applyDiscount();
    }
  
    itemExists(id) {
      let item = this.getPorductList().find((product) => product.prodId === id);
      return item;
    }
  
    applyDiscount() {
      let quantity = this.getTotalProducts();
      if (quantity < 3) {
        this.total = this.total;
        this.text = "No se aplicaron descuentos";
      } else if (quantity === 3) {
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
      this.getTotalPrice();
      let resumePrice = {
        total: this.total,
        cant: this.getTotalProducts(),
        text: this.text,
      };
      return resumePrice;
    }
  
    clearList() {
      this.productList.length = 0;
    }
  }
  