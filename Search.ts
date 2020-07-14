class Search {
  static LinearSearch(arr: number[], item: number) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  }

  static BinarySearchRecursive(
    arr: number[],
    item: number,
    left: number = 0,
    right: number = arr.length - 1,
  ): number {
    let middle = Math.floor((left + right) / 2);

    if (left > right) {
      return -1;
    }

    if (arr[middle] === item) {
      return middle;
    }

    if (item < arr[middle]) {
      return Search.BinarySearchRecursive(arr, item, left, middle - 1);
    }

    return Search.BinarySearchRecursive(arr, item, middle + 1, right);
  }
}
