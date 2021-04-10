/**
 * https://leetcode-cn.com/problems/product-of-array-except-self/
 * 238. 除自身以外数组的乘积
 */

// // 方法一：暴力  O(n^2)
// function productExceptSelf(nums) {
//   const n = nums.length
//   const res = Array(n)
//   for(let i = 0; i < n; ++i) {
//     res[i] = [
//       ...nums.slice(0, i),
//       ...nums.slice(i + 1)
//     ].reduce((ans, item) => ans * item)
//   }
//   return res
// }

// 方法二：两轮累计遍历
function productExceptSelf(nums) {
  const n = nums.length
  const res = Array(n)
  let ans = 1
  for(let i = 0; i < n; ++i) {
    res[i] = ans
    ans = ans * nums[i]
  }
  ans = 1
  for (let i = n - 1; i >= 0; --i) {
    res[i] *= ans
    ans *= nums[i]
  }
  return res
}


// ---- test case ----
console.log(productExceptSelf([1,2,3,4]))
