/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** 
 * 24. 两两交换链表中的节点
 * 思路1: 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  var newHead = head.next, hnn = head.next.next
  newHead.next = head
  head.next = swapPairs(hnn)
  return newHead
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** 思路2: 空指针头画图
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var dummy = { val: -1, next: head }, cur = dummy
  while(cur.next && cur.next.next) {
    var p1 = cur.next
    var p2 = cur.next.next
    p1.next = p2.next
    cur.next = p2
    p2.next = p1
  }
  return dummy.next
};
