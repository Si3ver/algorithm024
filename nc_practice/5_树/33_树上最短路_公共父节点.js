// 33. 树上最短路

function solve(x, y) {
    let ans = 0;
    while (x !== y) {
        y = y >> 1
        ++ans
        if (x > y) { // 交换
            const tmp = x
            x = y
            y = tmp
        }
    }
    return ans;
}
