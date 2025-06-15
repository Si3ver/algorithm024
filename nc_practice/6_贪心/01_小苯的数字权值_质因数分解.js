// 小红的数字权值
// https://www.nowcoder.com/questionTerminal/aeacca655eec45999a6dc4d998dfd4a5?answerType=1&f=discussion

// 思路：
// 分为不拆（pi + 1）乘积和拆（pi 求和翻倍）和两种策略。
// 先算出所有质因数，再根据质因数的个数和指数和，判断哪种策略更优。

function solve(x) {
    if (x === 2) return 2;
    let sum = 0, // 拆 (p1+p2+p3+...)*2
        mmm = 1; // 不拆 (p1+1)*(p2+1)*...
    for (let i = 2; i * i <= x; ++i) {
        if (x % i === 0) {
            let cnt = 0;
            while (x % i === 0) {
                ++cnt;
                x /= i;
            }
            mmm *= cnt + 1;
            sum += cnt;
        }
    }
    if (x > 1) { // x 是剩余的最后质因子，可能是 1、2、3、5、7、11、13、17、19 等等
        mmm *= 2;
        sum += 1;
    }
    // console.log(x, ':', mmm, 2 * sum);
    return Math.max(mmm, 2 * sum);
}

// 当只有 1 个质因子时，设指数为 p，不拆(1+p) <= 拆开(2p)，拆开更优
console.log(solve(2));   // = 2^1 | 不拆=1+1 = 拆=2*1  2
console.log(solve(4));   // = 2^2 | 不拆=1+2 < 拆=2*2  4
console.log(solve(8));   // = 2^3 | 不拆=1+3 < 拆=2*3  6
console.log(solve(9));   // = 3^2 | 不拆=1+2 < 拆=2*2  4
console.log(solve(16));  // = 2^4 | 不拆=1+4 < 拆=2*4  8

// 当有2个质因子时，设指数为 p1, p2。不拆(p1+1)*(p2+1) >= 拆2*(p1+p2)，不拆更优
console.log(solve(6));   // = 2^1 *  3^1 | 不拆=2*2 = 拆=2*2  4
console.log(solve(10));  // = 2^1 *  5^1 | 不拆=2*2 = 拆=2*2  4
console.log(solve(123)); // = 3^1 * 41^1 | 不拆=2*2 = 拆=2*2  4
console.log(solve(12));  // = 2^2 *  3^1 | 不拆=3*2 > 拆=2*3  6
console.log(solve(24));  // = 3^1 *  2^3 | 不拆=2*4 = 拆=2*4  8
console.log(solve(36));  // = 2^2 *  3^2 | 不拆=3*3 > 拆=2*4  9
