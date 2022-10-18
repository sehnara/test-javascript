class Stack {
  constructor() {
    this.arr = [];
    this.length = 0
  }

  push(element){
    if(!element && element !== 0){
        throw new Error('there is no element!')
    }
    this.arr[this.length] = element
    this.length ++
  }

  pop(){
    if(!this.length){
        throw new Error('stack is Empty!')
    }
    const last = this.arr[this.length-1]
    this.length--
    return last
  }

  peek(){
    if(!this.length){
        throw new Error('stack is Empty!')
    }
    return this.arr[this.length-1]
  }
}

module.exports = Stack;
