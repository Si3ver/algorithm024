/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
 * 思路：递归遍历左右子树
 */

var maxDepth = function(root) {
  if (!root)  return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
};
