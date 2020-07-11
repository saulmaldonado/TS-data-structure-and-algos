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
    prevNode!.next = null;

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
      index++;
    }

    return array;
  }

  reversed(): void {
    this.isEmpty();
    let prevNode = this.head!;
    let currentNode = this.head!.next;

    while (currentNode != null) {
      // set pointer to next node
      let nextNode = currentNode.next;
      // link currentNode to its previous node
      currentNode.next = prevNode;

      //shift the pointers to the next node
      prevNode = currentNode;
      currentNode = nextNode;
    }

    // assign tail to the first node
    this.tail = this.head;
    this.tail!.next = null;
    this.head = prevNode;
  }

  // implement algorithm to return the kth node from the end
  getKthFromTheEnd(k: number): Node | undefined {
    this.isEmpty();

    // use to pointers, one for current node and one for the end
    let currentNode: Node = this.head!;
    let end: Node = this.head!;

    // move end k - 1 nodes through the list
    while (k - 1 > 0) {
      if (end.next === null) {
        // if the list is shorter than k - 1, there is no kth node from the end
        return;
      }
      end = end.next;
      k--;
    }
    // once k is 0 move both pointers until end.next is null
    while (end.next !== null) {
      currentNode = currentNode.next!;
      end = end.next;
    }
    // currentNode is the kth node from the end
    return currentNode;
  }

  // return the middle node of the list. If the list size is even, return both of the middle nodes
  middle(): Node | [Node, Node] {
    this.isEmpty();
    const array = [];
    let currentNode: Node | null = this.head!;
    let index = 0;

    //iterate through the list and store the nodes in an array
    while (currentNode !== null) {
      array[index] = currentNode;
      currentNode = currentNode.next;
      index++;
    }

    //using the array length, determine the middle nodes
    if (array.length % 2 === 0) {
      return [array[array.length / 2], array[array.length / 2 - 1]];
    } else {
      return array[Math.floor(array.length / 2)];
    }
  }

  print() {
    this.isEmpty();

    let currentNode: Node | null = this.head!;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  private isEmpty() {
    if (this.head === null) {
      throw new Error('Linked List is empty');
    }
  }
}
