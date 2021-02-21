/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * 思路：【BFS】
 * 手动维护queue （push + unshift）
 * 内层维护一个循环，循环当前queue的size，为一层（null不要加入queue）
 */

const levelOrder = function(root) {
  if (root == null) return []
  const res = [], queue = [root]
  while(queue.length) {
    const n = queue.length, line = []
    for(let i = 0; i < n; ++i) {  // 循环n次为一层结果
      const p = queue.pop()
      if (p.left != null) queue.unshift(p.left)
      if (p.right != null) queue.unshift(p.right)
      line.push(p.val)
    }
    res.push(line)
  }
  return res
}
