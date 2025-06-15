// 小欧的选数乘积

function solve(x, y, arr) {
    if (x >= y) return 0
    if (!arr.length) return -1
    const set = new Set(arr.map(Number).sort((x,y) => y - x))
    let ans = 0
    for (const times of set) {
        x *= times
        ++ans
        if (x >= y) return ans
    }
    return -1
}
