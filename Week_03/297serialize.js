/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // 解法一：DFS （递归写法）
const serialize = function(root) {
  if (root == null) {
    return 'X';
  }
  const left  = serialize(root.left)
  const right = serialize(root.right)
  return root.val + ',' + left + ','+ right
}

const deserialize = function(data) {
  const treeVals = data.split(',')

  const buildTree = (list) => {
    const rootVal = list.shift()
    if (rootVal === 'X') return null
    const root = new TreeNode(rootVal)
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }

  return buildTree(treeVals)
}


// 1,2,X,X,3,4,X,X,5,X,X

