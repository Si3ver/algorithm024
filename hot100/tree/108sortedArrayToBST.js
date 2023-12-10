/**
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree
 *
 * 思路：分而治之，建立根，左右为子问题。）
 */

// 递归版
var sortedArrayToBST = function(nums) {
    const helper = (l, r) => {
        if (l > r) return null;
        let mid = l + ((r - l) >> 1);
        return new TreeNode(nums[mid], helper(l, mid - 1), helper(mid + 1, r));
    }

    return helper(0, nums.length - 1);
};
