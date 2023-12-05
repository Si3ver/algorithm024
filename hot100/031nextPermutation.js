/**
 * https://leetcode.cn/problems/next-permutation/description/
 *
 * 下一个排列
 *
 * 思路：找升序对，交换来个大一点儿的，后半部份逆序为升序。
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!Array.isArray(nums) || nums.length < 1) return;

    // Step1: 从后往前，找到连续的升序对 A[pos] < A[pos + 1]
    let pos = - 1;
    for (let i = nums.length - 2; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) { // 升序对
            pos = i;
            break;
        }
    }
    if (pos === -1) {
        nums.reverse();
        return
    }

    // Step2: 从后往前，找到第一个大于 A[pos] 的值交换，如 12354 -> 12453
    for (let i = nums.length - 1; i > pos; --i) {
        if (nums[i] > nums[pos]) {
            const tmp = nums[pos];
            nums[pos] = nums[i];
            nums[i] = tmp;
            break;
        }
    }

    // Step3: 逆置 pos+1, end
    for (let l = pos + 1, r = nums.length -1; l < r; ++l, --r) {
        const tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
    }
};

// ---- test ----
const arr1 = [1, 2, 3, 5, 4];
nextPermutation(arr1);
console.log(arr1); // [1, 2, 4, 3, 5]

