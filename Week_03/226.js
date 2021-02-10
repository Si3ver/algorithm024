/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode-cn.com/problems/invert-binary-tree/submissions/
 * 1. 边界条件
 * 2. 交换
 * 3. 递归处理子问题
 * 4. return
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null
  var tmp = root.left
  root.left = root.right
  root.right = tmp
  invertTree(root.left)
  invertTree(root.right)
  return root
};
