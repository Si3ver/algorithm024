/**
 * https://leetcode-cn.com/problems/super-ugly-number/
 * 
 */

// 思路：此题采用丑数的定义一，用递推法求解
const nthSuperUglyNumber = function(n, primes) {
  const size = primes.length,
        idxs = new Array(size).fill(0),
        arr = [1]

  for(let i = 1; i < n; ++i) {
    const nexts = []
    for(let j = 0; j < size; ++j) {
      nexts[j] = primes[j] * arr[idxs[j]]
    }
    arr[i] = Math.min(...nexts)
    nexts.forEach((next, idx) => {
      if (arr[i] === next) {
        ++idxs[idx]
      }
    })
    // console.log("🚀", i, primes, idxs, nexts)
  }
  return arr[n - 1]
}

// ---- test case ----
console.log(nthSuperUglyNumber(12, [2,7,13,19]))
