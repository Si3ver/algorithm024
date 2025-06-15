// 函数

// 思路：借位减法
function fn(numStr) {
    const len = numStr.length
    let ans = '', flag = 0 // 向前借位
    for (let i = len - 1; i >= 0; --i) {
        const digit = numStr[i] - '0' - flag
        if (digit > 3) {
            flag = 0
            ans = '3'.repeat(ans.length + 1) // 遇到大哥了，需要把后面刷成 3
        } else if (digit < 1) {
            flag = 1
            ans = '3' + ans // 借位后，当前位变 3
        } else {
            flag = 0
            ans = `${digit}${ans}`
        }
    }
    // console.log(flag, ans, 'x')
    return flag && ans[0] === '3' ? ans.slice(1) : ans
}

console.log(fn(''))     //   ''
console.log(fn('0'))    // ''
console.log(fn('1'))    // 1
console.log(fn('10'))    // 3
console.log(fn('1010'))    // 333
console.log(fn('2010'))    // 1333
console.log(fn('100'))    // 33
console.log(fn('400'))    // 333
console.log(fn('125'))    // 123
console.log(fn('12517'))  // 12333
console.log(fn('100517'))  // 33333
console.log(fn('200517'))  // 133333
console.log(fn('300517'))  // 133333
console.log(fn('400517'))  // 133333
console.log(fn('999999999999999999'))  // 
