class Sort {
  // worst case O^2
  static BubbleSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    let isSorted: boolean;

    for (let j = 0; j < arr.length; j++) {
      isSorted = true;
      for (let i = 1; i < arr.length - j; i++) {
        if (arr[i - 1] > arr[i]) {
          let larger = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = larger;
          isSorted = false;
        }
      }
      if (isSorted) break;
    }

    return arr;
  }

  static SelectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      let smaller = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = smaller;
    }
    return arr;
  }
}
