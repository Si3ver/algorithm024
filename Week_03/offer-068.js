/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * 思路：递归
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root === p || root === q) return root
  var left = lowestCommonAncestor(root.left, p, q)
  var right = lowestCommonAncestor(root.right, p, q)
  // if (left === null && right === null) return null
  if (left === null) return right
  if (right === null) return left
  return root
};
