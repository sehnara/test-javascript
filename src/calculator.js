class Calculator {
  constructor() {
    this.value = 0;
  }
  set(a) {
    this.value = a;
  }
  clear() {
    this.value = 0;
  }
  add(a) {
    const sum = this.value + a;
    if (sum > 100) {
      throw new Error("value can not be greater than 100");
    }
    this.value = sum;
  }
  substract(a) {
    this.value -= a;
  }
  multiply(a) {
    this.value *= a;
  }
  divide(a) {
    this.value /= a;
  }
}

module.exports = Calculator;
