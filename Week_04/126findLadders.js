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

// BFS （不会写回溯就先用copy, 会超时。。。）
const findLadders = function(beginWord, endWord, wordList) {
  const res = [],
        queue = [[1, [beginWord], new Set(wordList)]],
        alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let minLevel = Infinity // 最短转换序列的长度
  while (queue.length) {
    const [level, path, wordsSet] = queue.pop(),
          word = path[path.length - 1]
    
    // console.log("🚀", path)
    if (word === endWord) {
      res.push(path.slice())
      minLevel = Math.min(minLevel, level)
    } else {
      for (let i = 0; i < word.length; ++i) {
        for (const ch of alphabets) {
          const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
          if (wordsSet.has(nextWord)) {
            wordsSet.delete(nextWord)
            queue.unshift([level + 1, path.concat([nextWord]), new Set(wordsSet)])
          }
        }
      }
    }
  }
  return res.filter(path => path.length === minLevel)
}

// ---- test case ----
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]))
console.log(findLadders("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))
