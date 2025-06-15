// 小红的数字删除

// 思路：
// 1. 统计余数 0、1、2 的个数 cntArr 和总余数 totalRemain
// 2. 如果总余数为 0，说明随便删。但要注意前导零
// 3. 如果总余数为 1，说明需要先删除一个余数为 1 的数字，再回到第二步
// 4. 如果总余数为 2，说明需要先删除一个余数为 2 的数字，再回到第二步

function solve(numStr) {
    const cntArr = [0, 0, 0]
    for (let i = 0; i < numStr.length; ++i) {
        const digit = numStr[i] - '0'
        const remain = digit % 3
        ++cntArr[remain]
    }
    const totalRemain = (cntArr[1] + 2 * cntArr[2]) % 3
    let ans = 0;
    if (totalRemain) {
        if (cntArr[totalRemain] === 0) { // 没得删
            return 0;
        } else {
            ans = 1
            --cntArr[totalRemain]
            // console.log(cntArr, totalRemain)
            if (cntArr[totalRemain] === 0 && !['3', '6', '9'].includes(numStr[0])) { // '10000003'
                for (let i = 1; i < numStr.length; ++i) {
                    if (numStr[i] === '0') {
                        --cntArr[0]
                    } else {
                        break;
                    }
                }
            }
        }
    }
    ans += cntArr[0]
    if (cntArr[1] || cntArr[2]) {
        return ans
    }
    return ans - 1
}

console.log(solve('0')) // 0
// console.log(solve('2251'))
// console.log(solve('30021'))
console.log(solve('3000000'))  // 6
console.log(solve('30000001')) // 7
console.log(solve('10000003')) // 1
console.log(solve('3000000103')) // 9
console.log(solve('1000000303')) // 3
console.log(solve('1000000'))  // 0
// console.log(solve('333'))
// console.log(solve('123'))
// console.log(solve('300'))
