/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 102. 二叉树的层序遍历
 * 
 * 思路：【BFS】
 * 手动维护queue （push + unshift）
 * 内层维护一个循环，循环当前queue的size，为一层（null不要加入queue）
 */

function levelOrder(root) {
  if (root == null) return []
  const res = [], queue = [root]
  while (queue.length > 0) {
    const size = queue.length, line = []
    for (let i = 0; i < size; ++i) {
      const node = queue.pop()
      if (node.left)  queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
      line.push(node.val)
    }
    res.push(line)
  }
  return res
}
