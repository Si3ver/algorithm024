/**
 * https://leetcode.com/problems/trapping-rain-water/
 * 11. 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
 * hard ｜ leetcode-042 | array
 * 
 * 思路： maxLo、maxHi 记录遍历过的柱子中，左右最高柱子
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(A) {
    let res = 0;
    for (let maxR = maxL = l = 0, r = A.length - 1; l < r;) {
        if (A[l] < A[r]) {
            if (maxL < A[l]) {
                maxL = A[l];
            } else {
                res += maxL - A[l];
            }
            ++l;
        } else {
            if (maxR < A[r]) {
                maxR = A[r];
            } else {
                res += maxR - A[r];
            }
            --r;
        }
        console.log('aaa', l, r, maxL, maxR, res)
    }
    return res;
};

// ---- test case ----
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
