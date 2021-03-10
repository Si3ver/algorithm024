/**
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * 
 */

// 1. 递归版 dfs
const preorder1 = function(root) {
  if (root == null) return []
  const res = []
  const dfs = (p) => {
    res.push(p.val)
    p.children && p.children.forEach(child => {
      if (child) dfs(child)
    })
  }
  dfs(root)
  return res
}

// !! 2. 非递归版
const preorder = function(root) {
  if (root == null) return []
  const res = [], stack = [root]
  while (stack.length > 0) {
    const p = stack.pop()
    if (p.children.length > 0) 
      for(let i = p.children.length - 1; i >= 0; --i) 
        stack.push(p.children[i])
    res.push(p.val)
  }
  return res
}
