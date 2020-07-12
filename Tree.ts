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
    if (!this.root) return (this.root = new Node(value));

    let currentNode: Node | null = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.leftChild === null) {
          return (currentNode.leftChild = new Node(value));
        }
        currentNode = currentNode.leftChild;
      } else {
        if (currentNode.rightChild === null) {
          return (currentNode.rightChild = new Node(value));
        }
        currentNode = currentNode.rightChild;
      }
    }
    return (currentNode = new Node(value));
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
    return false;
  }

  traversePreorder(root: Node | null = this.root) {
    if (!root) return;
    console.log(root.value);
    this.traversePreorder(root.leftChild);
    this.traversePreorder(root.rightChild);
  }

  traverseInOrder(root: Node | null = this.root) {
    if (!root) return;
    this.traversePreorder(root.leftChild);
    console.log(root.value);
    this.traversePreorder(root.rightChild);
  }
}
