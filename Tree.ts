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

  traversePreOrder(root: Node | null = this.root) {
    if (!root) return;
    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrder(root: Node | null = this.root) {
    if (!root) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root: Node | null = this.root) {
    if (!root) return;
    this.traversePostOrder(root.rightChild);
    this.traversePostOrder(root.leftChild);
    console.log(root.value);
  }

  height(root: Node | null = this.root): number {
    // empty tree
    if (root === null) {
      return 0;
    }

    if (root.leftChild === null && root.rightChild === null) {
      return 0;
    }

    return 1 + Math.max(this.height(root.rightChild), this.height(root.leftChild));
  }
}
