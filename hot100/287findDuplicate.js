/**
 * https://leetcode.cn/problems/find-the-duplicate-number/
 *
 * trick
 *
 * 思考，元素的范围是 1 ～ len-1，这些数可以看作下标，构成一个有环链表。
 * 思路：快慢指针变种
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = fast = 0, hasCycle = false;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    fast = 0;
    do {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow !== fast);

    return fast;
};
