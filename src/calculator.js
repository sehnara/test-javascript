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
    this.value += a;
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
