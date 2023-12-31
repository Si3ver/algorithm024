/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * 200. 岛屿数量
 * medium
 */

// dfs
var numIslands = function(A) {
    if (!Array.isArray(A) || A.length < 1 || !Array.isArray(A[0]) || A[0].length < 1) return 0;

    const m = A.length, n = A[0].length;
    let cnt = 0;

    const dfsMarking = (i, j) => {
        if (i >= 0 && i < m && j >= 0 && j < n && A[i][j] === '1') {
            A[i][j] = '0';
            dfsMarking(i + 1, j);
            dfsMarking(i - 1, j);
            dfsMarking(i, j + 1);
            dfsMarking(i, j - 1);
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (A[i][j] === '1') {
                ++cnt;
                dfsMarking(i, j);
            }
        }
    }
    return cnt;
};


// ---- test case ----
const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]
const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid1))
console.log(numIslands(grid2))
console.log(numIslands([[]]))
