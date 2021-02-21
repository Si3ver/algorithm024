/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */

// 1. 递归DFS
const inorderTraversal1 = function(root) {
  if (root == null) return []
  const res = []
  const dfs = (p) => {
    if(p.left) dfs(p.left)
    res.push(p.val)
    if(p.right) dfs(p.right)
  }
  dfs(root)
  return res
}

// 2. 非递归，手动维护stack
const inorderTraversal = function(root) {
  if (root == null) return []
  const res = [], stack = []
  while(root || stack.length) {
    while (root) {  // 往左一直寻找，压栈
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
