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

  static BinarySearchIterative(arr: number[], item: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (arr[middle] === item) {
        return middle;
      }

      if (item < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  }

  static TernarySearch(
    arr: number[],
    item: number,
    left: number = 0,
    right: number = arr.length - 1,
  ): number {
    if (left > right) return -1;

    let partitionSize = Math.floor((right - left) / 3);

    let mid1 = left + partitionSize;
    let mid2 = right + partitionSize;

    if (arr[mid1]) return mid1;

    if (arr[mid2]) return mid2;

    if (item < arr[mid1]) {
      return Search.TernarySearch(arr, item, left, mid1 - 1);
    }
    if (item > arr[mid2]) {
      return Search.TernarySearch(arr, item, mid2 + 1, right);
    }

    return Search.TernarySearch(arr, item, mid1 + 1, mid2 - 1);
  }

  static JumpSearch(arr: number[], item: number) {
    let blockSize = Math.floor(Math.sqrt(arr.length));
    let start = 0;
    let next = blockSize;

    while (arr[next - 1] < item) {
      start = next;
      if (start >= arr.length) break;
      next += blockSize;
      if (next > arr.length) next = arr.length;
    }
    for (let i = start; i < next; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  }

  static ExponentialSearch(arr: number[], item: number) {
    let bound = 1;
    while (arr[bound] < item) {
      bound *= 2;
    }

    // last bound
    let left = bound / 2;
    let right = Math.min(bound, arr.length - 1);

    return Search.BinarySearchRecursive(arr, item, left, right);
  }
}
