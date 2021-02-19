/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 思路：
 * 1. 建立辅助函数，扩充4个下标。pStart，pEnd，iStart，iEnd
 * 2. 递归调用辅助函数
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = function(preorder, inorder) {
  const helper = (preorder, pStart, pEnd, inorder, iStart, iEnd) => {
    // terminator
    if (pStart === pEnd) {
      return null
    }
    // process [rootValue -> iRootIdx -> leftSize]
    const rootValue = preorder[pStart], root = new TreeNode(rootValue)
    let iRootIdx = 0
    for(let i = 0; i < inorder.length; ++i) {
      if (inorder[i] === rootValue) {
        iRootIdx = i
        break
      }
    }
    const leftSize = iRootIdx - iStart
    // drill down
    root.left = helper(preorder, pStart + 1, pStart + leftSize + 1, inorder, iStart, iRootIdx)
    root.right = helper(preorder, pStart + leftSize + 1, pEnd, inorder, iRootIdx + 1, iEnd)
    // revert states
    return root
  }

  return helper(preorder, 0, preorder.length, inorder, 0, inorder.length)
}
