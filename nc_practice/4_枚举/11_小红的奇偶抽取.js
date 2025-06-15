
// 小红的奇偶抽取
function solve(numStr) {
    let oddNum = 0,
        evenNum = 0;
    
    for (let i = 0; i < numStr.length; ++i) {
        const digit = numStr[i] - '0'
        if (digit & 1) {
            oddNum = oddNum * 10 + digit;
        } else {
            evenNum = evenNum * 10 + digit;
        }
    }
    return Math.abs(oddNum - evenNum)
}
