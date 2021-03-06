/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 429. N 叉树的层序遍历
 * BFS
 */

function levelOrder(root) {
  if (root == null) return []
  const res = [], queue = [root]
  while(queue.length) {
    const line = [], n = queue.length
    for(let i = 0; i < n; ++i) {
      const root = queue.pop()
      if (root.children.length)
        root.children.forEach(child => queue.unshift(child))
      line.push(root.val)
    }
    res.push(line)
  }
  return res
}
