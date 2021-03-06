/**
 * medium
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 思路：递归
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function(root, p, q) {
  // terminator
  if (root == null || root == p || root == q) return root
  // process
  // drill down
  const findL = lowestCommonAncestor(root.left, p, q)
  const findR = lowestCommonAncestor(root.right, p, q)
  if (findL == null) return findR
  if (findR == null) return findL
  // revert states
  return root
}
