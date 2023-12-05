/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * 字母异位词分组
 *
 * 【hashmap】
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!Array.isArray(strs) || strs.length < 1) return []

  const m = new Map(), startCp = 'a'.codePointAt(0);
  strs.forEach(str => {
      const cntArr = Array(26).fill(0);
      for (let i = 0; i < str.length; ++i) {
          cntArr[str.codePointAt(i) - startCp] += 1;
      }
      const key = cntArr.toString();
      if (!m.has(key)) {
          m.set(key, [str])
      } else {
          m.set(key, [...m.get(key), str])
      }
  })
  return Array.from(m.values());
};


// ---- test case ----
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
