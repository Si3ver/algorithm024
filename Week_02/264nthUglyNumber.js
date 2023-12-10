/**
 * https://leetcode-cn.com/problems/ugly-number-ii/
 *
 * 相同题目：
 * 【剑指 Offer 49. 丑数】 https://leetcode-cn.com/problems/chou-shu-lcof/
 * 【面试题 17.09. 第 k 个数】 https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 */

// 解法： 三指针法递推
var nthUglyNumber = function(n) {
    if (n < 7) return n;
    let p2 = p3 = p5 = 0, nums = [1];
    for (let i = 1; i < n; ++i) {
        const x = 2 * nums[p2];
        const y = 3 * nums[p3];
        const z = 5 * nums[p5];
        nums[i] = Math.min(x, y, z);
        if (nums[i] === x) ++p2;
        if (nums[i] === y) ++p3;
        if (nums[i] === z) ++p5;
    }
    return nums[n - 1];
};

// ---- test case ----
for(let i = 1; i <= 100; ++i) {
  console.log(`${i}: ${nthUglyNumber(i)}`)
}
