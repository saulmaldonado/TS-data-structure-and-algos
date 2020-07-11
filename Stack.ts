class Stack<T = any> {
  protected items: T[] = [];
  protected size: number = 0;

  push(item: T): void {
    this.items[this.size] = item;
    this.size++;
  }

  pop(): T {
    let item = this.items[--this.size];
    this.items.length--;
    return item;
  }

  peek(): T {
    return this.items[this.size - 1];
  }

  isEmpty(): boolean {
    return this.size > 0;
  }
}

class StringStack extends Stack<string> {
  constructor(string: string) {
    super();
    for (let i = 0; i < string.length; i++) {
      if (!string[i] || string[i] === ' ') continue;
      super.push(string[i]);
    }
  }

  reverse(): string {
    let itemsCopy = this.items.slice();
    let charArray = [];
    while (this.size > 0) {
      charArray.push(this.pop());
    }
    this.items = itemsCopy;
    this.size = itemsCopy.length;
    return charArray.join('');
  }

  isBalanced(): boolean {
    const bracketsMap: Record<string, string> = {
      ')': '(',
      '}': '{',
      '>': '<',
      ']': '[',
    };
    const bracketsStack = new Stack<string>();

    for (let i = 0; i < this.items.length; i) {
      if (Object.values(bracketsMap).includes(this.items[i])) bracketsStack.push(this.items[i]);

      if (
        Object.keys(bracketsMap).includes(this.items[i]) &&
        this.pop() !== bracketsMap[this.items[i]]
      ) {
        return false;
      }
    }
    return true;
  }
}
