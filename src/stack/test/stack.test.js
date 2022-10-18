const Stack = require("../stack");

describe("stack test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("Init : Stack array length is 0", () => {
    expect(stack.length).toBe(0);
  });

  describe("push", () => {
    it("Push : number parameter", () => {
      stack.push(2);
      expect(stack.length).toBe(1);
      expect(stack.arr[stack.arr.length - 1]).toBe(2);
    });

    it("Push : undefined", () => {
      expect(() => {
        stack.push();
      }).toThrow("there is no element!");
    });

    it("Push : 0", () => {
      stack.push(0);
      expect(stack.length).toBe(1);
      expect(stack.arr[stack.arr.length - 1]).toBe(0);
    });
  });

  describe("pop", () => {
    it("pop : normal situation", () => {
      stack.push(7);
      expect(stack.pop()).toBe(7);
      expect(stack.length).toBe(0);
    });

    it("pop : when stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("stack is Empty!");
    });
  });

  describe("peek", () => {
    it("peek : when stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("stack is Empty!");
    });

    it("peek : return last element", () => {
      stack.push(1);
      stack.push(4);
      stack.push(6);
      expect(stack.peek()).toBe(6);
    });
  });
});
