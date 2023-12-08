/**
 * 缺失的第一个正数
 *
 * 要求，不能开新空间
 * 思路：利用数组空间，原地置换
 */

var firstMissingPositive = function (nums) {

    const swap = (i, j) => {
        if (i !== j) {
            const tmp = nums[i];
            nums[i]  = nums[j];
            nums[j] = tmp;
        }
    }

    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            swap(i, nums[i] - 1); // 放到正确的位置上 -> [1, ..., n]
        }
    }

    for(let i = 0; i < n; ++i) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}
