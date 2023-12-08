/**
 * https://leetcode-cn.com/problems/product-of-array-except-self/
 * 238. 除自身以外数组的乘积
 * O(n) + O(1)
 *
 * trick
 */

// 方法：第一轮从左往右，存储下标左边元素乘积; 第二轮从右往左，乘上右边的元素乘积
var productExceptSelf = function(nums) {
    const res = [];
    for (let i = 0, k = 1; i < nums.length; ++i) {
        res.push(k); // res 存储当前下标左边的元素的乘积
        k *= nums[i];
    }
    for(let i = nums.length - 1, k = 1; i >= 0; --i) {
        res[i] *= k;
        k *= nums[i];
    }
    return res;
};

// ---- test case ----
console.log(productExceptSelf([1,2,3,4])) // [1, 1, 2, 6] -> [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // -1, -1, 0, 0, 0
