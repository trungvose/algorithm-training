class LRUCache {
  private _map: Map<number, number>;
  private _capacity: number;
  constructor (capacity: number) {
    this._capacity = capacity
    this._map = new Map()
  }

  get (key: number): number {
    if (this._map.has(key)) {
      const value = this._map.get(key)
      this._map.delete(key)
      if (value) {
        this._map.set(key, value)
        return value
      }
    }
    return -1
  }

  put (key: number, value: number): void {
    if (this._map.has(key)) {
      this._map.delete(key)
    } else {
      if (this._map.size === this._capacity) {
        const [firstKey] = Array.from(this._map.keys())
        this._map.delete(firstKey)
      }
    }
    this._map.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
