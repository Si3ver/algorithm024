/**
 * https://leetcode-cn.com/problems/reverse-only-letters/
 * 917. 仅仅反转字母
 */

function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

function isStr(ch, A, Z, a, z) {
  if (ch >= A && ch <= Z || ch >= a && ch <= z) {
    return true
  }
  return false
}

function reverseOnlyLetters(S) {
  const A = 'A'.codePointAt(0)
  const Z = 'Z'.codePointAt(0)
  const a = 'a'.codePointAt(0)
  const z = 'z'.codePointAt(0)

  const res = S.split('')
  let lo = 0, hi = res.length - 1
  while (lo < hi) {
    while(lo < hi && !isStr(res[lo].codePointAt(0), A, Z, a, z)) { ++lo }
    while(lo < hi && !isStr(res[hi].codePointAt(0), A, Z, a, z)) { --hi }
    swap(res, lo++, hi--)
  }
  return res.join('')
}

// ---- test case ----
console.log(reverseOnlyLetters('ab-cd'))
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))
console.log(reverseOnlyLetters("7_28]"))
