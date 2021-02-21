/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * 字母异位词分组
 * 
 * 【map】
 * 
 */

const groupAnagrams = function(strs) {
  if (!Object.prototype.toString.apply(strs) === '[object Array]'
    || strs.length < 1
  ) return []
  const m = {}, startCodePoint = 'a'.codePointAt(0)
  strs.forEach(str => {
    const cntArr = new Array(26).fill(0)
    for(let i = 0; i < str.length; ++i) {
      ++cntArr[str.codePointAt(i) - startCodePoint]
    }
    const key = cntArr.toString()
    if (m[key] === void(0)) {
      m[key] = [str]
    } else {
      m[key].push(str)
    }
  })
  return Object.values(m)
}


// ---- test case ----
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
