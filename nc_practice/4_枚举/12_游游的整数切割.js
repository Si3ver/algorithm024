// 游游的整数切割
function solve(numStr) {
    const n = numStr.length
    const lastDigit = numStr[n - 1] - '0'
    const isLastOdd = lastDigit & 1
    let ans = 0
    for (let i = 0; i < n - 1; ++i) {
        const digit = numStr[i] - '0'
        const isCurOdd = digit & 1
        if (isCurOdd && isLastOdd) ++ans
        if (!isCurOdd && !isLastOdd) ++ans
    }
    return ans
}
