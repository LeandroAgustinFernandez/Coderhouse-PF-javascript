class Product {
  constructor(prodId, prodName, prodPrice, prodAmount = 1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.prodPrice = prodPrice;
    this.prodAmount = prodAmount;
  }

  getProductId() {
    return this.prodId;
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

  setProductAmount(mod = "inc") {
    mod === "inc" ? this.prodAmount++ : this.prodAmount--;
  }
}
