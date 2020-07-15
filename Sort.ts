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

  static InsertionSort(arr: number[]) {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];

      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > current) {
          arr[j + 1] = arr[j];
        } else if (arr[j] <= current) {
          arr[j + 1] = current;
          break;
        }
      }
    }
  }

  static MergeSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = Sort.MergeSort(left);
    right = Sort.MergeSort(right);

    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  }

  static QuickSort(arr: number[], start: number = 0, end: number = arr.length - 1) {
    if (start >= end) return;

    let pivot = arr[end];

    let b = start - 1;
    for (let i = start; i <= end; i++) {
      if (arr[i] <= pivot) {
        let temp = arr[i];
        arr[i] = arr[++b];
        arr[b] = temp;
      }
    }
    Sort.QuickSort(arr, start, b - 1);
    Sort.QuickSort(arr, b + 1, end);
  }

  static CountingSort(arr: number[]) {
    let countingArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (!countingArr[arr[i]]) {
        countingArr[arr[i]] = 0;
      }
      countingArr[arr[i]]++;
    }

    let j = 0;
    for (let i = 0; i < countingArr.length; i++) {
      while (countingArr[i] > 0) {
        arr[j++] = i;
        countingArr[i]--;
      }
    }
  }

  static BucketSort(arr: number[], numOfBuckets: number) {
    let buckets = [];
    for (let i = 0; i < numOfBuckets; i++) {
      buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
      if (!buckets[Math.floor(arr[i] / numOfBuckets)]) {
        buckets[Math.floor(arr[i] / numOfBuckets)] = new Array();
      }

      buckets[Math.floor(arr[i] / numOfBuckets)].push(arr[i]);
    }

    let k = 0;
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        Sort.CountingSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
          arr[k++] = buckets[i][j];
        }
      }
    }
  }

  static RadixSort(arr: number[]) {
    let maxDigits: number = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(
        maxDigits,
        Math.floor(Math.log10(arr[i])) + 1 === 0 ? 1 : Math.floor(Math.log10(arr[i])) + 1
      );
    }

    for (let i = 0; i < maxDigits; i++) {
      let buckets: number[][] = Array.from({ length: 10 }, () => []);
      for (let j = 0; j < arr.length; j++) {
        buckets[Math.floor(arr[j] / Math.pow(10, i)) % 10].push(arr[j]);
      }
      arr = ([] as number[]).concat(...buckets);
    }
  }
}
