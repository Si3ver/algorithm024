/**
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst
 * BST中第 k 小的元素
 * @param {*} root
 * @param {*} k
 *
 *
 * 思路： dfs 中序遍历，结果为数组第 k 个元素
 * O(n) O(n)
 */
var kthSmallest = function (root, k) {
    const nums = [];

    const dfs = (p) => {
        if (!p) return;
        dfs(p.left);
        nums.push(p.val);
        // if (nums.length === k) {
        //     return
        // }
        dfs(p.right);
    }

    dfs(root);
    return nums[k - 1];
}
