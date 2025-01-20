// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(),
//  який виводить в консоль значення полів login і email об'єкта який його викликав.
class Account {
  constructor(infoAccount) {
    this.login = infoAccount.login;
    this.email = infoAccount.email;
  }
  getInfo() {
    return `Login: ${this.login}, Email: ${this.email}`;
  }
}
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo());

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo());

//Login: Mangozedog, Email: mango@dog.woof
//Login: Poly, Email: poly@mail.com
