/**
 * https://leetcode-cn.com/problems/word-ladder/
 * 127. 单词接龙 | hard
 */

// 解法一：BFS + 回溯 + 剪枝
const ladderLength1 = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  const queue = [[beginWord, 1]]
  const alphas = [...'abcdefghijklmnopqrstuvwxyz']
  while (queue.length > 0) {
    const [curWord, level] = queue.pop()
    if (curWord === endWord) return level
    for (let i = 0; i < curWord.length; ++i) {
      for (const ch of alphas) {
        if (ch === curWord[i]) continue // prun
        const nextWord = curWord.slice(0, i) + ch + curWord.slice(i + 1)
        if (wordSet.has(nextWord)) {
          wordSet.delete(nextWord)
          queue.unshift([nextWord, level + 1])
        }
      }
    }
  }
  return 0
}

// 解法二：双向BFS
const ladderLength = function(beginWord, endWord, wordList) {
  // TODO 
}

// ---- test case ----
console.log(ladderLength('abc', 'def', ['dbc', 'bbc', 'dec', 'def', 'log', 'cog'])) // 4
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])) // 5
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))  // 0
console.log(ladderLength("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"])) // 5
