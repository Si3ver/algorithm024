/**
 * https://leetcode.cn/problems/rotate-image
 *
 * 旋转图像
 *
 * 思路：上下翻转 + 对角线翻转
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const swap = (i, j, k, l) => {
        const tmp = matrix[i][j];
        matrix[i][j] = matrix[k][l];
        matrix[k][l] = tmp;
    }

    const n = matrix.length;
    for (let i = 0; i < (n >> 1); ++i) {
        for (let j = 0; j < n; ++j) {
            swap(i, j, n - i - 1 ,j);
        }
    }
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            swap(i, j, j, i);
        }
    }
};
