/**
 * 矩阵置零
 *
 * 思路：
 *
 */


// 方法一：第一遍记录行号数组i, 列号数组j，第二遍置零。  其实也 ✅
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const rows = new Set(), cols = new Set();

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    // console.log(rows, cols);

    for (const r of rows) {
        for (let j = 0; j < n; ++j) {
            matrix[r][j] = 0;
        }
    }

    for (const c of cols) {
        for (let i = 0; i < m; ++i) {
            matrix[i][c] = 0;
        }
    }
}

// 方法二：优化空间复杂度为 O(1)。 用首行 0 标记该行有 0，首列 0 标记该列有 0。
var setZeroes2 = function (matrix) {
    const m = matrix.length, n = matrix[0].length;

    // Step1， 遍历首行，记录首行是否有零
    let isFirstRowHasZero = false;
    for (let j = 0; j < n; ++j) {
        console.log('...', j, matrix[0][j])
        if (matrix[0][j] === 0) {
            isFirstRowHasZero = true;
            break;
        }
    }

    // Step2， 遍历首列，记录首列是否有零
    let isFirstColHasZero = false;
    for (let i = 0; i < m; ++i) {
        console.log('...', i, matrix[i][0])
        if (matrix[i][0] === 0) {
            isFirstColHasZero = true;
            break;
        }
    }
    console.log(isFirstRowHasZero, isFirstColHasZero);
    // Step3: 遍历除首行首列的矩阵，用首行首列记录
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // 表示 i 行有零
                matrix[0][j] = 0; // 表示 j 行有零
            }
        }
    }
    console.log(matrix);
    // Step4: 置零
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step5: 处理首行首列
    if (isFirstRowHasZero) {
        for (let j = 0; j < n; ++j) {
            matrix[0][j] = 0;
        }
    }
    if (isFirstColHasZero) {
        for (let i = 0; i < m; ++i) {
            matrix[i][0] = 0;
        }
    }
}

// ---- test ----
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
const matrix = [[1, 0]]
setZeroes2(matrix);
console.log(matrix);

