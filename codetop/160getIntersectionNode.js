/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * 160. 相交链表 | easy
 * 
 */

function getIntersectionNode(headA, headB) {
  let a = headA, b = headB
  while (a !== b) {
    a = a == null ? headB : a.next
    b = b == null ? headA : b.next
  }
  return a
}
