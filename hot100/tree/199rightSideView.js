/**
 * https://leetcode.cn/problems/binary-tree-right-side-view
 *
 * 二叉树的右视图
 */

// 思路1： bfs层序遍历
var rightSideView = function (root) {
    if (!root) return [];
    const res = [], queue = [root];
    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; ++i) {
            const node = queue.pop();
            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                queue.unshift(node.right);
            }
            if (i === size - 1) {
                res.add(node.val);
            }
        }
    }
    return res;
}
