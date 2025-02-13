// task 5
class Car {
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  // повідомлення з інформацією про автомобіль
  static getSpecs(car) {
    return console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  //геттер і сеттер для властивості price
  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price += newPrice);
  }

  // заводимо аітомобіль
  turnOn(car) {
    return (this.isOn = true);
  }

  // глушимо автомобіль
  turnOff(car) {
    return (this.isOn = false), (this.speed = 0);
  }

  // * Додає до властивості speed отримане значення,
  // * за умови, що результуюча швидкість
  // * не більше, ніж значення властивості maxSpeed

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  //* Забирає від властивості speed отримане значення,
  // * за умови, що результуюча швидкість не менше нуля
  decelerate(value) {
    if (this.speed - value >= 0) {
      return (this.speed -= value);
    } else {
      return (this.speed = 0);
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.decelerate(25);
mustang.drive(3);
mustang.price = 100;
console.log(mustang.price);
Car.getSpecs(mustang);
