class HashMap<T = any> {
  private keyMap: Array<Array<[string, T]>> = [];
  private prime: number = 31;
  constructor(size: number = 53) {
    this.keyMap = new Array(size);

    return new Proxy(this, {
      get(target, prop): T | undefined | Array<Array<[string, T]>> {
        if (prop === 'keyMap') {
          return target.keyMap;
        }
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

  static values<T = any>(hashMap: HashMap): T[] {
    const values = [];
    for (let i = 0; i < hashMap.keyMap.length; i++) {
      if (hashMap.keyMap[i]) {
        for (let j = 0; j < hashMap.keyMap[i].length; j++) {
          values.push(hashMap.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }

  static keys(hashMap: HashMap): string[] {
    const keys = [];
    for (let i = 0; i < hashMap.keyMap.length; i++) {
      if (hashMap.keyMap[i]) {
        for (let j = 0; j < hashMap.keyMap[i].length; j++) {
          keys.push(hashMap.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
}
