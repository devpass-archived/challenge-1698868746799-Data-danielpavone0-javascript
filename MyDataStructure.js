class MyDataStructure {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.push(element);
  }

  remove(element) {
    this.data.splice(this.data.indexOf(element), 1);
  }

  isEmpty() {
    if (!this.data.length) return true;
  }

  length() {
    return this.data.length;
  }
}

module.exports = MyDataStructure;
