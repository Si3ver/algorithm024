/**
 * https://leetcode-cn.com/problems/word-ladder/description/
 * hard
 * 127. 单词接龙
 */

// BFS, 搜索所有可能的单词是否在词库中
// 复杂度：O(单词个数 * 单词长度 * 26)
const ladderLength = function(beginWord, endWord, wordList) {
  const wordsSet = new Set(wordList),
        queue = [[beginWord, 1]],
        alphbets = 'abcdefghijklmnopqrstuvwxyz'.split('')
  while (queue.length) {
    const [word, level] = queue.pop()
    if (word === endWord) return level
    for (let i = 0; i < word.length; ++i) {
      for (const ch of alphbets) {
        const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
        if (wordsSet.has(nextWord)) {
          wordsSet.delete(nextWord)
          queue.unshift([nextWord, level + 1])
        }
      }
    }
  }
  return 0
}

// ---- test case ----
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
