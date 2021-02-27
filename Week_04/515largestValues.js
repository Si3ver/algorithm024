/**
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
 * 
 * 515. 在每个树行中找最大值
 * medium
 * 
 */

/*
     1
   /   \
  3     2
 / \     \
5   3     9

[1, 3, 9]
*/

// 二叉树的层序遍历
const largestValues = function(root) {
  if (root == null) return []
  const res = [], queue = [root]
  while (queue.length) {
    const n = queue.length
    let max = -Infinity
    for(let i = 0; i < n; ++i) {
      const p = queue.pop()
      max = Math.max(max, p.val)
      if (p.left  != null) queue.unshift(p.left)
      if (p.right != null) queue.unshift(p.right)
    }
    res.push(max)
  }
  return res
}
