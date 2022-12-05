class User {
    constructor(userName, userPassword) {
      this.name = userName;
      this.password = userPassword;
    }
  
    sayHello() {
      return `Bienvenido ${this.name}!`;
    }
  
    getName() {
      return this.name;
    }
  
    clearInfo() {
      this.name = "";
      this.password = "";
    }
  }