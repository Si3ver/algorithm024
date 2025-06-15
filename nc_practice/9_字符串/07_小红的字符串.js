// 小红的字符串

// 一：暴力 O(n^2)
function solve(numStr, kStr) {
    const nLen = numStr.length,
        kLen = kStr.length;
    if (nLen < kLen) return 0;
    let ans = (2 * nLen - kLen + 2) * (kLen - 1) / 2; // 长度小于 kLen 的方案数
    for (let pos = 0; pos <= nLen - kLen; ++pos) { // 长度等于 kLen 的方案
        const curStr = numStr.slice(pos, pos + kLen);
        const curNum = parseInt(curStr);
        if (curNum < parseInt(kStr)) {
            ++ans;
        }
    }
    return ans;
}

// 二：滑动窗口？


console.log(solve('1234', '23'))
