class BaseArray<T = any> {
  public length: number;

  protected items: Record<number, T | undefined> = {};

  constructor(size?: number | undefined) {
    this.length = size ?? 0;
  }

  public toString(): string {
    let string = '';
    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        string += this.items[i] + ', ';
      } else {
        string += this.items[i];
      }
    }
    return '[' + string + ']';
  }

  public print(): void {
    console.log(this.toString());
  }

  public append(item: T): void {
    this.items[this.length] = item;
    this.length++;
  }

  public insertAt(item: T, index: number): void {
    for (let i = this.length; i > index; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.items[index] = item;
    this.length++;
  }

  public removeLast(): void {
    delete this.items[this.length];
    this.length--;
  }

  public removeAt(index: number): void {
    delete this.items[index];

    for (let i = index + 1; i < this.length; i++) {
      this.items[i - 1] = this.items[i];
    }
    this.length--;
  }

  public indexOf(item: T): number {
    for (let i = 0; i < this.length; i++) {
      if (item === this.items[i]) {
        return i;
      }
    }
    return -1;
  }
}

class NumberArray extends BaseArray<number> {
  constructor(size: number) {
    super(size);
  }
  public max(): number {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let maxNumberResult: number | undefined;
    for (let i = 0; i < this.length; i++) {
      if (this.items[i]) {
        maxNumberResult = Math.max(this.items[i]!, maxNumber);
        maxNumber = maxNumberResult;
      }
    }
    return maxNumber;
  }

  public min(): number | undefined {
    let minNumber = Number.MAX_SAFE_INTEGER;
    let minNumberResult: number | undefined;
    for (let i = 0; i < this.length; i++) {
      if (this.items[i]) {
        minNumberResult = Math.min(this.items[i]!, minNumber);
        minNumber = minNumberResult;
      }
    }
    return minNumberResult;
  }
}
