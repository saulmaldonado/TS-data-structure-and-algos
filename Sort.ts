class Sort {
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
}
