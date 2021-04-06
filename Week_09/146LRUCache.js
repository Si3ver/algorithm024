/**
 * https://leetcode-cn.com/problems/lru-cache/
 * 146. LRU 缓存机制 | medium
 */

// 解法一：利用 Map 本身是 orderedDict 的特性
class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }
  get(key) {
    if (!this.cache.has(key)) return -1
    const v = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, v)
    return this.cache.get(key)
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.capacity) {
      const iter = this.cache.keys()
      // console.log("🚀", iter)
      this.cache.delete(iter.next().value)
    }
  }
}

// 解法二：HashMap + DoubleLinkedList
class ListNode {
  constructor(key, value) {
    this.key = key; // 用于存放key，以便于后面在cache中删除
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache1 {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    // 空头节点和空尾节点方便操作
    this.dummyHead = new ListNode(-1, -1);
    this.dummyTail = new ListNode(-1, -1);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key);
    this._move2head(node); // 移到头部
    return node.value;
  }
  put(key, value) {
    if (this.cache.has(key)) { // 存在
      const node = this.cache.get(key);
      node.value = value; // 更新值
      this._move2head(node);
    } else { // 不存在
      if (this.cache.size === this.capacity) { // 满了
        const removedNode = this.dummyTail.prev; // 移除最后一个
        this._removeNode(removedNode);
        this.cache.delete(removedNode.key);
      }
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this._addHead(newNode);
    }
  }
  _addHead(node) {
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
  }
  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  _move2head(node) {
    this._removeNode(node);
    this._addHead(node);
  }
}

// ---- test case ----
const cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1)) // 1
cache.put(3, 3)
console.log(cache.get(2)) // -1
cache.put(4, 4)
console.log(cache.get(1)) // -1
console.log(cache.get(3)) // 3
console.log(cache.get(4)) // 4
