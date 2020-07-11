class Node<T = any> {
  public value: T;
  public next: Node | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T = any> {
  private head: Node | null = null;
  private tail: Node | null = null;

  getFirst(): T {
    this.isEmpty();
    return this.head!.value;
  }

  getLast(): T {
    this.isEmpty();
    return this.tail!.value;
  }

  addLast(value: T): void {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(value: T): void {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode!.next = this.head;
      this.head = newNode;
    }
  }

  removeFirst(): void {
    this.isEmpty();
    this.head = this.head!.next;
  }

  removeLast(): void {
    this.isEmpty();

    let prevNode: Node | null = null;
    let currentNode: Node = this.head!;

    while (currentNode.next !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;

    if (this.head === this.tail) this.head = prevNode;
  }

  clear(): void {
    this.head = this.tail = null;
  }

  size(): number {
    let size = 0;
    if (this.head === null) return size;

    let currentNode = this.head;
    size++;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  indexOf(value: T): number {
    if (this.head === null) return -1;

    let currentNode: Node | null = this.head;
    let index: number = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.next!;
      index++;
    }
    return -1;
  }

  contains(value: T): boolean {
    if (this.head === null) {
      return false;
    }

    let currentNode: Node | null = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next!;
    }
    return false;
  }

  toArray(): T[] {
    const array = [];
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      array[index] = currentNode.value;
      currentNode = currentNode.next;
    }

    return array;
  }

  private isEmpty() {
    if (this.head === null) {
      throw new Error('Linked List is empty');
    }
  }
}
