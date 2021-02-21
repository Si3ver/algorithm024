/**
 * https://leetcode-cn.com/problems/min-stack/
 * 
 * 思路：
 * 多维护一个辅助栈 min_stack，记录每个元素对应的 min
 */
var MinStack = function() {
  this._stack = []
  this._min_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x)
  const n = this._min_stack.length
  if (n > 0) {
    const top = this._min_stack[n - 1]
    this._min_stack.push(Math.min(top, x))
  } else {
    this._min_stack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._min_stack.pop()
  return this._stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const n = this._stack.length
  return this._stack[n - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const n = this._min_stack.length
  return this._min_stack[n - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// ---- test case ----
var ms = new MinStack()
console.log(ms.push(-2))
console.log(ms.push(0))
console.log(ms.push(-3))
console.log(ms.getMin())
console.log(ms.pop())
console.log(ms.top())
console.log(ms.getMin())
