/**
 * https://leetcode.cn/problems/rotting-oranges
 *
 */

// BFS
var orangesRotting = function(A) {
    const m = A.length, n = A[0].length;
    const queue = [];
    let freshCnt = 0;
    // Step1: 统计新鲜橘子的数量 freshCnt，并且把烂橘子坐标放入队列
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (A[i][j] === 1) {
                ++freshCnt;
            } else if (A[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    // 尝试感染位置 r，c
    const mark = (r, c) => {
        if (r >= 0 && r < m && c >= 0 && c < n && A[r][c] === 1) {
            A[r][c] = 2;
            --freshCnt;
            queue.push([r, c]);
        }
    }

    // Step2: BFS 传染
    let round = 0;
    while (freshCnt && queue.length) {
        ++round;
        const size = queue.length;
        for (let i = 0; i < size; ++i) {
            const [r, c] = queue.shift();
            mark(r - 1, c);
            mark(r + 1, c);
            mark(r, c + 1);
            mark(r, c - 1);
        }
    }
    return freshCnt > 0 ? -1 : round;
};
