/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 429. N 叉树的层序遍历
 * BFS
 */

var levelOrder = function(root) {
    if (!root) return [];
    const res = [], queue = [root];
    while (queue.length) {
        const line = [], n = queue.length;
        for (let i = 0; i < n; ++i) {
            const node = queue.pop();
            if (node.children.length) {
                node.children.forEach(child => queue.unshift(child));
            }
            line.push(node.val);
        }
        res.push(line);
    }
    return res;
};
