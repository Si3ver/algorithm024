/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 剑指 Offer 22. 链表中倒数第k个节点 | easy
 * 
 * linklist、双指针
 */

const getKthFromEnd = function(head, k) {
  let slow = fast = head
  while (--k >= 0) fast = fast.next
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
