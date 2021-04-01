/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * 
 * 剑指 Offer 55 - I. 二叉树的深度
 */

// 1. 递归
function maxDepth(root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// 2. 非递归, BFS
function maxDepth(root) {
  if (root == null) return 0
  const queue = [root]
  let cnt = 0
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; ++i) {
      const node = queue.pop()
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    ++cnt
  }
  return cnt
}

// 3. 非递归, DFS
function maxDepth(root) {
  if (root == null) return 0
  const stack = [root]
  const level = [1]
  let max = 0
  while (stack.length > 0) {
    const node = stack.pop()
    const l = level.pop()
    max = Math.max(max, l)
    if (node.right) {
      stack.push(node.right)
      level.push(l + 1)
    }
    if (node.left) {
      stack.push(node.left)
      level.push(l + 1)
    }
  }
  return max
}
