class TSSet<T = any> {
  protected items: T[] = [];

  size() {
    return this.items.length;
  }

  add(item: T): boolean {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        return false;
      }
    }
    this.items.push(item);
    return true;
  }

  addAll(...items: T[]) {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.add(items[i])) return false;
    }
    return true;
  }

  remove(item: T) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  removeAll(...items: T[]): void {
    for (let i = 0; i < this.items.length; i++) {
      this.remove(items[i]);
    }
  }

  contains(item: T) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        return true;
      }
    }
    return false;
  }

  containsAll(...items: T[]) {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.contains(items[i])) return false;
    }
    return true;
  }

  toArray(): T[] {
    return this.items;
  }
}
