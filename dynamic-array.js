class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);

    // Your code here
  }

  read(index) {
    if (index >= this.length) {
      return undefined;
    } else {
      return this.data[index];
    }

    // Your code here
  }

  push(val) {
    // Your code here
    this.data[this.length]= val
    this.length++
  }

  pop() {
    // Your code here
    let popper =this.data[this.length-1]
    this.data[this.length -1]=undefined
    console.log(popper)
    this.length--
    return popper
  }

  shift() {
    // Your code here

  }

  unshift(val) {
    // Your code here
    for (let i = this.length; i>0; i--){
      this.data[i]=this.data[i-1]
    }
    this.data[0]=val
    this.length++
  }

  indexOf(val) {
    // Your code here
  }

  resize() {
    // Your code here
  }
}

module.exports = DynamicArray;
