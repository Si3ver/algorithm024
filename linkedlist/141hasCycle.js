/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 141. 环形链表 | easy
 * 
 */

const { ListNode, LinkedList } = require('./LinkedList.js')

function hasCycle(head) {
  let fast = slow = head
  while (fast && fast.next && slow) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) return true
  }
  return false
}

// ---- test case ----
var link = new LinkedList()
link.append(3)
    .append(2)
    .append(0)
    .append(4)
    .display()

console.log(hasCycle(link.head))
