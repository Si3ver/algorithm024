/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 242. 有效的字母异位词
 */

function isAnagram (s, t) {
  const m = s.length, n = t.length
  if (m !== n) return false
  const startIdx = 'a'.codePointAt(0)
  const cnt = Array(26).fill(0)
  for (let i = 0; i < n; ++i) {
    const idxS = s.codePointAt(i) - startIdx
    const idxT = t.codePointAt(i) - startIdx
    cnt[idxS] = cnt[idxS] + 1
    cnt[idxT] = cnt[idxT] - 1
  }
  return cnt.filter(item => item !== 0).length === 0
}

// ---- test case ----
console.log(isAnagram('anagram', 'nagaram'))  // true
console.log(isAnagram('rat', 'car'))          // false
