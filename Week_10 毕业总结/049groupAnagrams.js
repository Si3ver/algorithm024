/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * 49. 字母异位词分组 ｜ medium
 */

// 哈希表统计
function groupAnagrams(strs) {
  const startIdx = 'a'.codePointAt(0)
  const map = {}
  for(const str of strs) {
    const cntArr = Array(26).fill(0)
    for (let i = 0; i < str.length; ++i) {
      cntArr[str.codePointAt(i) - startIdx]++
    }
    const key = cntArr.toString()
    if (map[key] === void(0)) {
      map[key] = [str]
    } else {
      map[key].push(str)
    }
  }
  return Object.values(map)
}

// ---- test case ----
console.log(groupAnagrams(
  ["eat", "tea", "tan", "ate", "nat", "bat"]
))
