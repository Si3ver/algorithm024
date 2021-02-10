/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * easy ｜ https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 思路：利用stack
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  var p = head, stack = []
  while(p) {
    stack.push(p.val)
    p = p.next
  }
  var res = []
  while(stack.length) {
    res.push(stack.pop())
  }
  return res
};
