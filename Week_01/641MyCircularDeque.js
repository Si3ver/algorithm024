/**
 * 10. 设计循环双端队列（Facebook 在 1 年内面试中考过）
 * medium | leetcode-641 | deque
 * https://leetcode-cn.com/problems/design-circular-deque/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
 * 思路： js的array完全是超集，约束下 length 可以很简单实现
 */

var MyCircularDeque = function(k) {
  this.queue =  new Array()
  this.length = k
};

MyCircularDeque.prototype.insertFront = function(value) {
  if (this.queue.length < this.length) {
      this.queue.unshift(value)
      return true
  }
  return false
};
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.queue.length < this.length) {
      this.queue.push(value)
      return true
  }
  return false
};
MyCircularDeque.prototype.deleteFront = function() {
  if (this.queue.length > 0) {
      this.queue.shift()
      return true
  }
  return false
};
MyCircularDeque.prototype.deleteLast = function() {
  if (this.queue.length > 0) {
      this.queue.pop()
      return true
  }
  return false
};
MyCircularDeque.prototype.getFront = function() {
  if (this.queue.length === 0) {
      return -1
  }
  return this.queue[0]
};
MyCircularDeque.prototype.getRear = function() {
  if (this.queue.length === 0) {
      return -1
  }
  return this.queue[this.queue.length - 1]
};
MyCircularDeque.prototype.isEmpty = function() {
  return this.queue.length === 0
};
MyCircularDeque.prototype.isFull = function() {
  return this.queue.length === this.length
};
