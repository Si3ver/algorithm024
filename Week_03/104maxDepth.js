/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 思路： 递归
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  // terminator
  if (root == null) return 0
  // process
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  // drill down
  // revert states
}
