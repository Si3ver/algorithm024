/**
 * https://leetcode-cn.com/problems/assign-cookies/
 * 
 * greedy
 * 1. 排序
 * 2. 循环，小胃口👬匹配小饼干🍪
 */

const findContentChildren = function(g, s) {
  const toStr = Object.prototype.toString,
        ARR_TYPE = '[object Array]'
  if (toStr.call(g) !== ARR_TYPE
   || toStr.call(s) !== ARR_TYPE
   || g.length < 1
   || s.length < 1
  ) return 0
  g.sort((x, y) => x - y)
  s.sort((x, y) => x - y)

  let i = 0, j = 0, cnt = 0
  while (i < g.length && j < s.length) {
    g[i++] <= s[j++] ? ++cnt : --i
  }
  return cnt
}

// ---- test case ----
console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
