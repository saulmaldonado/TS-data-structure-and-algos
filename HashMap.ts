class HashMap<T = any> {
  private keyMap: Array<Array<[string, T]>> = [];
  private prime: number = 31;
  constructor(size: number = 53) {
    this.keyMap = new Array(size);

    return new Proxy(this, {
      get(target, prop): T | undefined {
        return target.get(prop.toString());
      },
      set(target, prop, value): boolean {
        target.set(prop.toString(), value);
        return true;
      },
    });
  }

  private hash(key: string) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total += key[i].charCodeAt(0) * this.prime;
    }
    return total % this.keyMap.length;
  }

  set(key: string, value: T) {
    const index = this.hash(key);
    this.keyMap[index] ?? (this.keyMap[index] = new Array<[string, T]>()).push([key, value]);
  }
  get(key: string) {
    const index = this.hash(key);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return;
  }
}
