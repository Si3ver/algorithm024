/**
 * https://leetcode-cn.com/problems/super-egg-drop/
 * 887. 鸡蛋掉落 | hard
 * 
 * M(k, n) = max(M(k - 1, part), M(k, n - part)) + 1
 * for part in range(1...n)
 * 
 * TODO x
 */

const superEggDrop = function(k, n) {
  
}

// ---- test case ----
console.log(superEggDrop(1, 2))
console.log(superEggDrop(2, 6))
console.log(superEggDrop(3, 14))

