/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/submissions/
 * 思路：维护好 prev，cur
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {
    let prev = null;
    while (head) {
        const curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;
    }
    return prev;
}
