/**
 * https://leetcode.cn/problems/merge-k-sorted-lists
 *
 * 合并 k 个升序链表
 */

// 思路1. 两两合并 -> 归并
var merge2List = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val <= l2.val) {
        l1.next = merge2List(l1.next, l2);
        return l1;
    } else {
        l2.next = merge2List(l1, l2.next);
        return l2;
    }
};

var merge = function (lists, lo, hi) {
    if (lo === hi) {
        return lists[lo];
    }
    let mid = lo + ((hi - lo) >> 1);
    let l1 = merge(lists, lo, mid);
    let l2 = merge(lists, mid + 1, hi);
    return merge2List(l1, l2);
};

var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    return merge(lists, 0, lists.length - 1);
};

// 思路2.
