/**
 * https://leetcode-cn.com/problems/path-sum/
 * 112. 路径总和
 */

// 递归
function hasPathSum(root, sum) {
  if (root == null) return false
  if (root.left == null && root.right == null) {
    return sum === root.val
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

// BFS(有副作用，会改变树的val)
function hasPathSum(root, sum) {
  if (root == null) return false
  let queue = [root]
  while (queue.length > 0) {
    let node = queue.pop()
    if (node.left == null && node.right == null && node.val === sum) {
      return true
    }
    if (node.left) {
      node.left.val += node.val
      queue.unshift(node.left)
    }
    if (node.right) {
      node.right.val += node.val
      queue.unshift(node.right)
    }
  }
  return false
}
