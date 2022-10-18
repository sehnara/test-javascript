class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element) {
    if (!element && element !== 0) {
      throw new Error("there is no element!");
    }
    const node = { element, prev: this.head };
    this.head = node;
    this.length++;
  }

  pop() {
    if (!this.length) {
      throw new Error("stack is Empty!");
    }
    const last = this.head.element
    this.head = this.head.prev
    this.length--;
    return last;
  }

  peek() {
    if (!this.length) {
      throw new Error("stack is Empty!");
    }
    return this.head.element;
  }
}

module.exports = Stack;
