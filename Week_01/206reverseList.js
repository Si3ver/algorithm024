/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 思路：维护好 prev，cur
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {
  let prev = null
  while(head) {
    const cur = head
    head = head.next
    cur.next = prev
    prev = cur
  }
  return prev
}
