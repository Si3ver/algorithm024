/**
 * https://leetcode-cn.com/problems/word-ladder-ii
 * hard
 * 126. 单词接龙 II
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

// BFS
const findLadders = function(beginWord, endWord, wordList) {
  const res = [],
        queue = [[1, [beginWord]]],
        wordsSet = new Set(wordList),
        alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
  while (queue.length) {
    // console.log("🚀", queue)
    const [level, path] = queue.pop(),
          word = path[path.length - 1]
    
    if (word === endWord) {
      res.push(path.slice())
    } else {
      for (let i = 0; i < word.length; ++i) {
        for (const ch of alphabets) {
          const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
          if (wordsSet.has(nextWord)) {
            wordsSet.delete(nextWord)
            queue.unshift([level + 1, path.concat([nextWord])])
          }
        }

      }

    }
  }
  return res
}

// ---- test case ----
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
// console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]))
