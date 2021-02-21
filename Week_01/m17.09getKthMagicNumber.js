/**
 * https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 * 
 * 思路：三指针法
 * 
 * 1, 3, 5, 7, 9, 15, 21, 35, 49, 
 * 
 * 推导公式：f(n) = min(3f(p3), 5f(p5), 7f(p7))
 * 
 */
const getKthMagicNumber = function(k) {
  if (k < 2) return k
  let p3 = p5 = p7 = 0, nums = [1]
  for(let i = 1; i < k; ++i) {
    const x = 3 * nums[p3], y = 5 * nums[p5], z = 7 * nums[p7]
    nums[i] = Math.min(x, y, z)
    if (nums[i] === x) ++p3
    if (nums[i] === y) ++p5
    if (nums[i] === z) ++p7
  }
  
  console.log("🚀🚀🚀🚀", p3, p5, p7)
  return nums[k - 1]
}

// ---- test case ----
new Array(20).fill(0).forEach((item, idx) => {
  console.log(`${idx + 1}: ` + getKthMagicNumber(idx + 1))
})
