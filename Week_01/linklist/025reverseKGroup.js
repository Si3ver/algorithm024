/**
 * https://leetcode.cn/problems/reverse-nodes-in-k-group
 *
 * k 个一组翻转链表
 */

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(-1, head);
    let pre = end = dummy;

    while (end.next) {
        for (let i = 0; i < k && end; ++i) {
            end = end.next;
        }
        if (!end) break;
        const start = pre.next;
        const next = end.next;

        end.next = null;
        pre.next = reverse(start);
        start.next = next;

        pre = start;
        end = pre;
    }
    return dummy.next;
};

function reverse(head) {
    let prev = null;
    while (head) {
        const curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;
    }
    return prev;
}
