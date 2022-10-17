const Calculator = require("../../calculator");
let calculator;
beforeEach(() => {
  calculator = new Calculator();
});

describe("Calculator", () => {
  it("init", () => {
    expect(calculator.value).toBe(0);
  });

  it("set", () => {
    calculator.set(1);
    expect(calculator.value).toBe(1);
  });

  it("clear", () => {
    calculator.set(7);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it("add", () => {
    calculator.set(1);
    calculator.add(4);
    expect(calculator.value).toBe(5);
  });

  it("add() should throw error if value is greater than 100", () => {
    expect(() => {
      calculator.add(101);
    }).toThrow("value can not be greater than 100");
  });

  it("substract", () => {
    calculator.set(5);
    calculator.substract(2);
    expect(calculator.value).toBe(3);
  });

  it("multiply", () => {
    calculator.set(7);
    calculator.multiply(5);
    expect(calculator.value).toBe(35);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    it("4/2 === 2", () => {
      calculator.set(4);
      calculator.divide(2);
      expect(calculator.value).toBe(2);
    });
  });
});
