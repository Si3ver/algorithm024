/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * 206. 反转链表
 */
const { ListNode, LinkedList } = require('./LinkedList.js')


function reverseList(head) {
  let prev = null
  while (head) {
    const curr = head
    head = head.next
    curr.next = prev
    prev = curr
  }
  return prev
}

// ---- test case ----
let link = new LinkedList()

link.append(1)
    .append(2)
    .append(3)
    .append(4)
    .append(5)
    .display()

link.head = reverseList(link.head)

link.display()

link.head = reverseList(link.head)

link.display()
