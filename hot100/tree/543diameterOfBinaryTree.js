/**
 * https://leetcode.cn/problems/diameter-of-binary-tree
 *
 * 二叉树的直径
 *
 * 思路：
 */

var diameterOfBinaryTree = function(root) {

    let count = 1; // 最长路径的节点个数

    const depth = (node) => {
        if (!node) return 0;
        let l = depth(node.left);
        let r = depth(node.right);
        count = Math.max(count, l + r + 1); // 更新最长路径节点数
        return Math.max(l, r) + 1 // 返回根到叶子的最长路径的节点数
    }

    depth(root);
    return count - 1
};
