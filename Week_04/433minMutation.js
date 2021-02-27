/**
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/
 * 
 * 433. 最小基因变化
 * medium
 * 
 */

// 思路：BFS暴力搜索
// lastStep记录上一步的基因🧬和步数，bankSet用于可遍历的基因库
// 复杂度 O(单条基因长度 * 基因元素数 * 基因库包含基因数）
const minMutation = function(start, end, bank) {
  const lastStep = [[start, 0]], bankSet = new Set(bank)
  while(lastStep.length) {
    const [curr, step] = lastStep.pop()
    if (curr === end) return step
    for(let i = 0; i < curr.length; ++i) {
      for(const ch of ['A', 'C', 'G', 'T']) {
        // 突变后的基因（暴力穷举）
        const mutation = curr.slice(0, i) + ch + curr.slice(i+1)
        // console.log(mutation, lastStep, bankSet)
        if (bankSet.has(mutation)) {
          bankSet.delete(mutation)
          lastStep.unshift([mutation, step + 1])
        }
      }
    }
  }
  return -1
}

// ---- test case ----
// console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']))
// console.log(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']))
console.log(minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']))
