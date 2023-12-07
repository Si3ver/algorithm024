/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 二叉树的层序遍历
 *
 * 思路：【BFS】
 * 手动维护queue （push + unshift）
 * 内层维护一个循环，循环当前queue的size，为一层（null不要加入queue）
 */

var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root], res = [];
    while (queue.length) {
        const size = queue.length, row = [];
        for (let i = 0; i < size; ++i) {
            const node = queue.pop();
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
            row.push(node.val);
        }
        res.push(row);
    }
    return res;
};
