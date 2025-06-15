/**
 * @param {number} n 台阶数量
 * @return {number} 跳法数量
 */
function jumpFloor(n) {
  if (n <= 3) return n
  let pre = 2, cur = 3
  for (let i = 4; i <= n; i++) {
    let temp = cur
    cur = pre + cur
    pre = temp
  }
  return cur
}
