/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 54. 螺旋矩阵 | medium
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length; n = matrix[0].length;
    const visited = Array(m).fill(true).map(() => Array(n).fill(false));

    let dir = 0, r = 0, c = 0; // dir 指方向，0 右 1 下 2 左 3 上
    const dr = [0, 1,  0, -1];
    const dc = [1, 0, -1,  0];
    const res = [];
    for (let i = 0; i < m * n; ++i) {
        res.push(matrix[r][c]);

        visited[r][c] = true;
        let nextR = r + dr[dir];
        let nextC = c + dc[dir];
        if (nextR < 0 || nextR >= m || nextC < 0 || nextC >= n || visited[nextR][nextC]) {
            dir = (dir + 1) % 4;
            nextR = r + dr[dir];
            nextC = c + dc[dir];
        }
        r = nextR;
        c = nextC;
    }
    return res;
};

// ---- test case ----
console.log(spiralOrder(
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
))
// console.log(spiralOrder(
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//   ]
// ))
