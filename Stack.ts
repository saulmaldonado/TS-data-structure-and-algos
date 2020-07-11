class Stack<T = any> {
  #items: T[] = [];
  #size: number = 0;

  push(item: T): void {
    this.#items[this.#size] = item;
    this.#size++;
  }

  pop(): T {
    let item = this.#items[--this.#size];
    this.#items.length--;
    return item;
  }

  peek(): T {
    return this.#items[this.#size - 1];
  }

  isEmpty(): boolean {
    return this.#size > 0;
  }
}
