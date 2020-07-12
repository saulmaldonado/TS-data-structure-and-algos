class Sort {
  static BubbleSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    for (let j = 0; j < arr.length; j++) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let larger = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = larger;
        }
      }
    }

    return arr;
  }
}
