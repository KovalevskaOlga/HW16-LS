// task 4
class StringBuilder {
  constructor(string) {
    this.string = string;
  }
  get value() {
    return this.string;
  }

  set value(newValue) {
    return (this.string += newValue);
  }

  prepend(str) {
    return (this.string = str + this.string);
  }
  pad(str) {
    return (this.string = str + this.string + str);
  }
}
const builder = new StringBuilder(".");

builder.value = "^";
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
