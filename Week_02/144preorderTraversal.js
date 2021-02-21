/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 *  【dfs】
 */

// 1. 递归解法
const preorderTraversal1 = function(root) {
  if (root == null) return []
  const res = []
  const dfs = (root) => {
    res.push(root.val)
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
  }
  dfs(root)
  return res
}

// 2. 非递归解法 
const preorderTraversal = function(root) {
  if (root == null) return []
  const res = [], stack = [root]
  while(stack.length) {
    const p = stack.pop()
    if(p.right) stack.push(p.right)
    if(p.left) stack.push(p.left)
    res.push(p.val)
  }
  return res
}
