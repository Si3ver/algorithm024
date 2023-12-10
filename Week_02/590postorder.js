/**
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 *
 */

// 1. 递归版 dfs
var preorderTraversal = function(root) {
    if (!root) return [];
    const res = [], stack = [root];
    while (stack.length) {
        const p = stack.pop();
        res.push(p.val)
        if (p.right) stack.push(p.right);
        if (p.left) stack.push(p.left);
    }
    return res;
};

// !! 2. 非递归版 【反转】
// trick  孩子从左往右压栈，出来则是从右往左遍历。最后再翻转
var postorder = function(root) {
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
