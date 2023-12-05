/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 4. 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
 * medium | leetcode-189 | array
 * 思路：反转三次，时间复杂度O(n), 空间复杂度O(1)
 */

// O(n) 时间复杂度，O(1)空间复杂度解法： 反转3次
const rotate = function(nums, k) {
    if (!Array.isArray(nums) || nums.length < 2) return;

    const reverse = (start, end) => {
        while (start < end) {
            const tmp = nums[start];
            nums[start++] = nums[end];
            nums[end--] = tmp;
        }
    }

    k = k % nums.length;
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1)
}

// 方法二：splice 剪切法～ 空间复杂度 O(k)
const rotate2 = function (nums, k) {
    k = k % nums.length;
    nums.splice(0, 0, ...nums.splice(-k));
}

// ---- test ----
var arr1 = [1,2,3,4,5,6,7], arr2 = Array.from(arr1), k = 3;
console.log('rotate:', arr1, arr2)
rotate(arr1, k);
rotate2(arr2, k);
console.log('rotate:', arr1, arr2)
