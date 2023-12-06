/**
 * https://leetcode.cn/problems/pascals-triangle
 *
 * 杨辉三角
 *
 * 思路：生成器，f(i, j) = f(i-1, j-1) + f(i-1, j)
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];
    for (let i = 0; i < numRows; ++i) {
        const row = Array(i + 1).fill(1);
        for (let j = 1; j < i; ++j) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j];
            // console.log('inner', i, j, res[i - 1], row)
        }
        // console.log(row)
        res.push(row);
    }
    return res;
};

// --- test ---
console.log(generate(5))
