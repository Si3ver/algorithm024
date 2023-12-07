/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode-cn.com/problems/invert-binary-tree/submissions/
 * 1. terminator
 * 2. process
 * 3. drill down
 * 4. reverse states
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  // terminator
  if (root == null) return root
  // process
  const tmp = root.left
  root.left = root.right
  root.right = tmp
  // drill down
  invertTree(root.left)
  invertTree(root.right)
  // revert states
  return root
}

// queue + bfs
var invertTree2 = function(root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        const node = queue.pop();
        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        if (node.left) {
            queue.unshift(node.left);
        }
        if (node.right) {
            queue.unshift(node.right);
        }
    }
    return root;
};
