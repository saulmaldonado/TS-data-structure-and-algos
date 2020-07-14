class TSNode {
  value: number;
  leftChild: TSNode | null = null;
  rightChild: TSNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class Tree {
  root: TSNode | null = null;

  insert(value: number) {
    if (!this.root) return (this.root = new TSNode(value));

    let currentNode: TSNode | null = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.leftChild === null) {
          return (currentNode.leftChild = new TSNode(value));
        }
        currentNode = currentNode.leftChild;
      } else {
        if (currentNode.rightChild === null) {
          return (currentNode.rightChild = new TSNode(value));
        }
        currentNode = currentNode.rightChild;
      }
    }
    return (currentNode = new TSNode(value));
  }

  find(value: number) {
    let currentNode: TSNode | null = this.root;

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

  traversePreOrder(root: TSNode | null = this.root) {
    if (!root) return;
    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrder(root: TSNode | null = this.root) {
    if (!root) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root: TSNode | null = this.root) {
    if (!root) return;
    this.traversePostOrder(root.rightChild);
    this.traversePostOrder(root.leftChild);
    console.log(root.value);
  }

  height(root: TSNode | null = this.root): number {
    // empty tree
    if (root === null) {
      return 0;
    }

    if (root.leftChild === null && root.rightChild === null) {
      return 0;
    }

    return 1 + Math.max(this.height(root.rightChild), this.height(root.leftChild));
  }

  min(root: TSNode | null = this.root): number {
    if (!root) return Number.MAX_SAFE_INTEGER;
    if (root.leftChild === null && root.rightChild === null) return root.value;

    const left = this.min(root.leftChild);
    const right = this.min(root.rightChild);

    return Math.min(Math.min(left, right), root.value);
  }

  max(root: TSNode | null = this.root): number {
    if (!root) return Number.MIN_SAFE_INTEGER;
    if (root.leftChild === null && root.rightChild === null) return root.value;

    const left = this.max(root.leftChild);
    const right = this.max(root.rightChild);

    return Math.max(Math.max(left, right), root.value);
  }

  static compareTrees(first: Tree, second: Tree): boolean {
    return this.equals(first.root, second.root);
  }

  private static equals(first: TSNode | null, second: TSNode | null): boolean {
    //base case. both nodes are null, reached end of tree
    if (first === null && second === null) return true;

    // if both nodes exist, compare both. Call method recursively on its child nodes
    if (first !== null && second !== null) {
      return (
        first.value === second.value &&
        this.equals(first.leftChild, second.leftChild) &&
        this.equals(first.rightChild, second.rightChild)
      );
    }

    // one valid node and one null node
    return false;
  }
}
