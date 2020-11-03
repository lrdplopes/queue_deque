export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  items = {
    0: 5,
    1: 8,
  };
  count = 2;
  lowestCount = 0;

  // "enqueue" - adiciona um novo elemento no final da fila;
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //"dequeue" - remove o primeiro elemento da fila;
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // "peek" - devolve o item que está na frente da fila;
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // "isEmpty" - devolve true se a pilha estiver vazia, e false caso contrário;
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

// const queue = new Queue();
// queue.enqueue("Lucas");
// queue.enqueue("Clara");
// // console.log(queue.isEmpty());
// // console.log(queue.toString());
// queue.enqueue("Nicole");
// // console.log(queue.toString());
// // console.log(queue.size());
// // console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());
