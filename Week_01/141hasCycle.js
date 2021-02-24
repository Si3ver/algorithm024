/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */

const hasCycle = function(head) {
  let fast = slow = head
  while(fast && fast.next && slow) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
