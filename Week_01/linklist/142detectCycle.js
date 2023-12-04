/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

const detectCycle = function(head) {
  let fast = slow = head, hasCycle = false
  while (fast && fast.next && slow) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      hasCycle = true
      break
    }
  }
  if (hasCycle) {
    fast = head
    while (fast && slow && fast !== slow) {
      fast = fast.next
      slow = slow.next
    }
    return fast
  }
  return null
}
