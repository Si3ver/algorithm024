/**
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/
 * 433. 最小基因变化 | medium
 * 
 */

// 解法一：BFS + 回溯 + 剪枝
const minMutation1 = function(start, end, bank) {
  const bankSet = new Set(bank)
  const genes = [...'ACGT']
  const queue = [[start, 0]]
  while (queue.length > 0) {
    const [curStr, level] = queue.pop()
    if (curStr === end) return level
    for (let i = 0; i < curStr.length; ++i) {
      for (const ch of genes) {
        if (ch === curStr[i]) continue
        const nextStr = curStr.slice(0, i) + ch + curStr.slice(i + 1)
        if (bankSet.has(nextStr)) {
          bankSet.delete(nextStr)
          queue.unshift([nextStr, level + 1])
        }
      }
    }
  }
  return -1
}

// 解法二：双向BFS
const minMutation = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return -1
  const alphas = [...'ACGT']
  const n = beginWord.length
  const wordSet = new Set(wordList)
  let frontSet = new Set([beginWord])
  let endSet = new Set([endWord])
  let level = 0
  while (frontSet.size > 0) {
    ++level
    const nextFrontSet = new Set()
    for (curWord of frontSet) {
      for (let i = 0; i < n; ++i) {
        for (const ch of alphas) {
          if (ch !== curWord[i]) {
            nextWord = curWord.slice(0, i) + ch + curWord.slice(i + 1)
            if (endSet.has(nextWord)) {
              return level
            }
            if (wordSet.has(nextWord)) {
              nextFrontSet.add(nextWord)
              wordSet.delete(nextWord)
            }
          }
        }
      }
    }
    frontSet = nextFrontSet
    if (frontSet.size > endSet.size) {  // swap
      const tmp = frontSet
      frontSet = endSet
      endSet = tmp
    }
  }
  return -1
}

// ---- test case ----
console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']))  // 1
console.log(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])) // 2
console.log(minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']))  // 3
