// "addFront()" - esse método adiciona um novo elemento na frente do deque;
// "addBack()" - esse método adiciona um novo elemento no fim do deque;
// "removeFront()" - esse método remove o primeiro elemento do deque;
// "removeBack()" - esse método remove o último elemento do deque;
// "peekFront()" - esse método devolve o primeiro elemento do deque;
// "peekBack()" - esse método devolve o último elemento do deque;
// Além disso, compartilha dos mesmos métodos: "isEmpty, clear, size e toString";

export default class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  items = {
    1: 8,
    2: 9,
  };
  count = 3;
  lowestCount = 1;

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.element[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  // "size" - devolve o número de elementos contido na fila;
  size() {
    return this.count - this.lowestCount;
  }

  // "clear" - limpar todos os elementos da fila;
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // "toString" - devolver os valores em forma de string;
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const deque = new Deque();
// console.log(deque.isEmpty());
deque.addBack("Lucas");
deque.addBack("Clara");
// console.log(deque.toString());
deque.addBack("Nicole");
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
deque.removeFront();
// console.log(deque.toString());
deque.removeBack();
// console.log(deque.toString());
deque.addFront("Lucas");
// console.log(deque.toString());
