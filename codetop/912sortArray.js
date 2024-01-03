/**
 * https://leetcode-cn.com/problems/sort-an-array/
 * 912. 排序数组 | medium
 */

function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

function quickSort(nums, lo, hi) {
    if (lo >= hi) return;

    const pivotIndex = partition(nums, lo, hi);
    // 优化：跳过与 pivot 相等的元素
    let nextHi = pivotIndex - 1, nextLo = pivotIndex + 1;
    while (nextHi > lo && nums[nextHi] === nums[pivotIndex]) --nextHi;
    while (nextLo < hi && nums[nextLo] === nums[pivotIndex]) ++nextLo;

    quickSort(nums, lo, nextHi);
    quickSort(nums, nextLo, hi);
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
