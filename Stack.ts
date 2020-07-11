class Stack<T = any> {
  #items: T[] = [];
  protected size: number = 0;

  push(item: T): void {
    this.#items[this.size] = item;
    this.size++;
  }

  pop(): T {
    let item = this.#items[--this.size];
    this.#items.length--;
    return item;
  }

  peek(): T {
    return this.#items[this.size - 1];
  }

  isEmpty(): boolean {
    return this.size > 0;
  }
}

class StringReverser extends Stack<string> {
  constructor(string: string) {
    super();
    for (let i = 0; i < string.length; i++) {
      if (!string[i] || string[i] === ' ') continue;
      super.push(string[i]);
    }
  }

  reverse(): string {
    let charArray = [];
    while (this.size > 0) {
      charArray.push(this.pop());
    }
    return charArray.join('');
  }
}
