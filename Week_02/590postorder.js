/**
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * 
 */

// 1. 递归版 dfs
const postorder = function(root) {
  if (root == null) return []
  const res = []
  const dfs = (p) => {
    p.children && p.children.forEach(child => {
      if (child) dfs(child)
    })
    res.push(p.val)
  }
  dfs(root)
  return res
}

// !! 2. 非递归版 【反转】
// trick  孩子从左往右压栈，出来则是从右往左遍历。最后再翻转
const postorder = function(root) {
  if (root == null) return []
  const res = [], stack = [root]
  while (stack.length) {
    root = stack.pop()
    if (root) res.push(root.val)
    root.children.forEach(child => {
      stack.push(child)
    })
  }
  return res.reverse()
}
