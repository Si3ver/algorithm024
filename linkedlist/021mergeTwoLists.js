/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 21. 合并两个有序链表 ｜ easy
 */

const { ListNode, LinkedList } = require('./LinkedList.js')

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode()
  let curr = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  curr.next = l1 || l2
  return dummy.next
}


// ---- test case ----
let l1 = new LinkedList()
let l2 = new LinkedList()

l1.append(1).append(2).append(4)
l2.append(1).append(3).append(4)

let ret = mergeTwoLists(l1.head, l2.head)
let l3 = new LinkedList(ret)
l3.display()
