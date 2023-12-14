/**
 * https://leetcode.cn/problems/sort-list
 *
 * 排序链表
 */

// 解法一：数组排序
var sortList1 = function (head) {
    const arr = [];
    for (let p = head; p !== null; p = p.next) {
        arr.push(p.val);
    }

    arr.sort((x, y) => x - y);
    const dummy = new ListNode(-1);
    let p = dummy;
    for (const val of arr) {
        p.next = new ListNode(val);
        p = p.next;
    }
    return dummy.next;
}

// 解法二：归并～
