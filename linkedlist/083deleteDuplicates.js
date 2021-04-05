/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 83. 删除排序链表中的重复元素
 */
const { ListNode, LinkedList } = require('./LinkedList.js')

function deleteDuplicates(head) {
  let node = head
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}

// ---- test case ----

// ---- test case ----
var link = new LinkedList()
link.append(1)
    .append(1)
    .append(2)
    .append(3)
    .append(3)
    .display()

link = deleteDuplicates(link.head)
// console.log(JSON.stringify(link, null, 2))
link = new LinkedList(link)

link.display()
