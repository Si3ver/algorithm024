/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 思路：map统计
 * 
 */

const isAnagram = function(s, t) {
  if ( typeof s != 'string'
    || typeof t != 'string'
    || s.length !== t.length
  ) return false
  const arr = new Array(26).fill(0),
        startCodePoint = 'a'.codePointAt(0)
  for(let i = 0; i < s.length; ++i) {
    const idx = s[i].codePointAt(0) - startCodePoint
    ++arr[idx]
  }
  for(let i = 0; i < t.length; ++i) {
    const idx = t[i].codePointAt(0) - startCodePoint
    --arr[idx]
  }
  return arr.filter(item => item != 0).length === 0
}
