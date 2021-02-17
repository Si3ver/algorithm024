/**
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * 思路：
 * 分治法，左子树全小于根结点，右子树全大于根结点
 * 构造辅助函数，扩展参数 lower（下界） 和 upper（上界）
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  function helper(root, lower, upper) {
    // terminator
    if (root == null) return true
    // process
    if (root.val <= lower || root.val >= upper) return false
    // drill down
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    // revert states
  }

  return helper(root, -Infinity, Infinity)
}
