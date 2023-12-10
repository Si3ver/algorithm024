/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 24. 两两交换链表中的节点
 *
 */

// 思路1: 递归
const swapPairs1 = function(head) {
  // terminator
  if (!head || !head.next) return head
  // process & drill down
  let hn = head.next, hnn = hn.next
  head.next = swapPairs(hnn)
  hn.next = head
  // reverse status
  return hn
}

// 思路2: 非递归（空指针头）
var swapPairs2 = function(head) {
    const dummy = new ListNode(-1, head);
    let prev = dummy;

    while (prev.next && prev.next.next) {
        const curr = prev.next, then = curr.next;
        curr.next = then.next;
        then.next = curr;
        prev.next = then;
        prev = curr;
    }
    return dummy.next;
};
