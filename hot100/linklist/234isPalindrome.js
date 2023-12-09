/**
 * https://leetcode.cn/problems/palindrome-linked-list
 *
 * 回文链表
 *
 * 思路：推进数组 + 双指针 O(n) + O(n)
 */

var isPalindrome = function(head) {
    const vals = [];

    while (head) {
        vals.push(head.val);
        head = head.next
    }
    for (let l = 0, r = vals.length - 1; l < r; ++l, --r) {
        if (vals[l] !== vals[r]) {
            return false;
        }
    }
    return true;
};
