/**
 * https://leetcode-cn.com/problems/reverse-string-ii/
 */

const reverseStr = function(s, k) {
  const swap = function (arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  const arr = s.split('')
  for(let i = 0; i < arr.length; i += 2 * k) {
    let start = i, end = Math.min(i + k - 1, arr.length - 1)
    // console.log("🚀", start, end)
    while(start < end) {
      swap(arr, start++, end--)
    }
  }
  return arr.join('')
}

// test case
console.log(reverseStr('abcdefg', 2))
console.log(reverseStr("abcdefg", 8))


