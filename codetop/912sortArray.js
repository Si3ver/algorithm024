/**
 * https://leetcode-cn.com/problems/sort-an-array/
 * 912. 排序数组 | medium
 */

var sortArray = function(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return nums;
    const pivotIndex = partition(nums, left, right);
    sortArray(nums, left, pivotIndex - 1);
    sortArray(nums, pivotIndex + 1, right);
    return nums;
};

function partition(nums, left, right) {
    const pivot = nums[left];
    while (left < right) {
        // console.log(left, right, nums)
        while (left < right && nums[right] >= pivot) --right;
        if (left < right) nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) ++left;
        if (left < right) nums[right] = nums[left];
    }
    nums[left] = pivot;
    // console.log(nums, left, right)
    return left;
}

// ---- test case ----
console.log(sortArray([5,2,3,1]))
console.log(sortArray([0]))
