/**
 * https://leetcode.cn/problems/copy-list-with-random-pointer
 *
 * 随机链表的复制
 *
 * 思路：第一轮存入 hash 表（oldNode -> newNode），第二轮连指针
 * O(n), O(n)
 *
 */

var copyRandomList = function (head) {
    const map = new Map();
    // 第一轮遍历：创建节点，并存入 map(oldNode -> newNode)
    for (let p = head; p !== null; p = p.next) {
        const node = new Node(p.val, null, null);
        map.set(p, node);
    }

    // 第二轮遍历
    for (let p = head; p !== null; p = p.next) {
        const node = map.get(p);
        p.next && (node.next = map.get(p.next));
        p.random && (node.random = map.get(p.random));
    }
    return map.get(head);
};
