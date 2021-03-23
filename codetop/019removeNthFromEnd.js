/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 19. 删除链表的倒数第 N 个结点 | medium
 * 
 */

function removeNthFromEnd(head, n) {
  let dummy = new ListNode(-1, head)
  let fast = slow = dummy
  while (n-- >= 0 && fast) {  // 先走n+1步
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next ? slow.next.next : null
  return dummy.next
}
