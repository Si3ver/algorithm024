/**
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 
 */

// 解法一：用map统计，再排序，取前k项  O(nlogn)
const topKFrequent1 = function(nums, k) {
  const m = {}
  for(let i = 0; i < nums.length; ++i) {
    if (m[nums[i]] !== void(0)) {
      ++m[nums[i]]
    } else {
      m[nums[i]] = 1
    }
  }
  const sortedM = Object.entries(m).sort(([_k1, v1], [_k2, v2]) => v2 - v1) // 按 value 逆序
  return sortedM.map(m => Number(m[0])).slice(0, k)
}


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

// 解法二：利用heap O(nlogk)
const topKFrequent = function(nums, k) {
  const m = {}, res = []
  for(let i = 0; i < nums.length; ++i) {
    if (m[nums[i]] !== void(0)) {
      ++m[nums[i]]
    } else {
      m[nums[i]] = 1
    }
  }
  const mEntries = Object.entries(m)
  const pq = new PriorityQueue(
    ([_k1, v1], [_k2, v2]) => {return v1 - v2 > 0}
  )
  mEntries.forEach(entry => {
    pq.push(entry)
    // console.log(pq)
  })
  for(let i = 0; i < k; ++i) {
    // console.log(pq.peek())
    res.push(pq.pop())
  }
  return res.map(m => Number(m[0]))
}


// ---- test case ----
console.log(topKFrequent1([2,2,1,1,1,2,2,3], 2))
console.log(topKFrequent([2,2,1,1,1,2,2,3], 2))


