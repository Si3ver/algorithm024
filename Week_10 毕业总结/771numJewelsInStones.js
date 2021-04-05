/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * 771. 宝石与石头
 */

// 集合， O(m + n)
function numJewelsInStones(jewels, stones) {
  const jewelSet = new Set([...jewels])
  let cnt = 0
  for (const ch of stones) {
    if (jewelSet.has(ch)) ++cnt
  }
  return cnt
}

// ---- test case ----
console.log(numJewelsInStones('aA', 'aAAbbbb')) // 3
console.log(numJewelsInStones('z', 'ZZ'))       // 0
console.log()
