/**
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list
 *
 * 二叉树展开为链表
 */

// 思路：dfs，先推入数组。再遍历数组，构造链表
var flatten = function (root) {

    const arr = [];
    const dfs = (node) => {
        if (!node) return;
        arr.push(node);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);

    let p = root;
    for (let i = 1; i < arr.length; ++i) {
        p.left = null
        p.right = arr[i];
        p = p.right;
    }
    return root;
}
