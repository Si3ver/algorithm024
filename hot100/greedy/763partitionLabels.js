/**
 * https://leetcode.cn/problems/partition-labels
 * 划分字母区间
 *
 */

var partitionLabels = (S) => {
    const lastPosMap = new Map(); // 字母的最远位置
    for (let i = 0; i < S.length; ++i) {
        lastPosMap.set(S[i], i);
    }

    const res = [];
    let start = 0; // 切割点
    let maxPos = 0; // 已扫描的字符中，最远的位置
    for (let i = 0; i < S.length; ++i) {
        const curLastPos = lastPosMap.get(S[i]);
        maxPos = Math.max(maxPos, curLastPos);
        if (i === maxPos) {
            res.push(i - start + 1);
            start = i + 1;
        }
    }
    return res;
}

// ---- test case ----
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
console.log(partitionLabels('eccbbbbdec')); // [10]
