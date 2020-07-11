class Queue<T = any> {
  protected items: Array<T | null> = [];
  readonly size: number;
  protected headIndex: number = 0;
  protected tailIndex: number = 0;

  constructor(size: number) {
    this.size = size;
  }

  enqueue(item: T) {
    if (this.items.length === this.size) throw new Error('Queue is full');
    this.items[this.tailIndex] = item;

    this.tailIndex = (this.tailIndex + 1) % this.size;
  }

  dequeue(): T {
    if (!this.size) throw new Error('Queue is empty');

    let item = this.items[this.headIndex];
    this.items[this.headIndex++] = null;
    return item!;
  }

  peek(): T | null {
    if (!this.items.length) return null;

    return this.items[this.headIndex];
  }

  isEmpty(): boolean {
    return !this.items.length;
  }

  isFull() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === null) return false;
    }
    return true;
  }
}

class PriorityQueue extends Queue<number> {
  constructor(size: number) {
    super(size);
  }

  enqueue(item: number) {
    if (this.items.length === this.size) throw new Error('Queue is full');
    if (this.items.length < 1) this.items[0] = item;
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i]! > item) {
        this.items[i + 1] = this.items[i];
      } else {
        this.items[i] = item;
        break;
      }
    }
  }
}
