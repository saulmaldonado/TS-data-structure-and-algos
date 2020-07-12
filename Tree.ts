class Node {
  value: number;
  leftChild: Node | null = null;
  rightChild: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class Tree {
  root: Node | null = null;

  insert(value: number) {
    let currentNode: Node | null = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    currentNode = new Node(value);
  }

  find(value: number) {
    let currentNode: Node | null = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value > value) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
  }
}
