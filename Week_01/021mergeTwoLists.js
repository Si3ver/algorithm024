/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * easy | leetcode-021 | link-list
 */

/** 
 * 21. 合并两个有序链表
 * 思路： 类似归并排序的归并过程
 * 思路： 声明一个空指针头，遍历l1 和 l2，谁的值比较小就把谁拼接在后面
 */
var mergeTwoLists = function (l1, l2) {
  var dummy = {
    val: -1,
    next: null
  },
    cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2
  return dummy.next
};
