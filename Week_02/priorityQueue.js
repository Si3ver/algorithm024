const top = 0
const parent = i => ((i+1) >>> 1) - 1
const left = i => (i << 1) + 1
const right = i => (i + 1) << 1

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

// test case
var s = new PriorityQueue()
console.log(s.size())
s.push(56)
s.push(156)
s.push(536)
s.push(456)
s.push(564)
s.push(561)
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())
console.log(s.size(), s.peek())
console.log('pop:', s.pop())

