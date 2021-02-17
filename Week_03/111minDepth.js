/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
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
const minDepth = function(root) {
  // terminator
  if(root == null) return 0
  // process
  if (root.left == null && root.right == null) return 1
  // drill down
  const dLeft = minDepth(root.left)
  const dRight = minDepth(root.right)
  // revert states
  if (root.left == null) {
    return dRight + 1
  } else if (root.right == null) {
    return dLeft + 1
  } else {
    return Math.min(dLeft, dRight) + 1
  }
}
