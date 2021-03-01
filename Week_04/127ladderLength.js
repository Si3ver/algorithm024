/**
 * https://leetcode-cn.com/problems/word-ladder/description/
 * hard
 * 127. 单词接龙
 */

// BFS, 搜索所有可能的单词是否在词库中
// 复杂度：O(单词个数 * 单词长度 * 26)
const ladderLength = function (beginWord, endWord, wordList) {
  const s = new Set(wordList),
    queue = [[1, beginWord]],
    alphs = [...'abcdefghijklmnopqrstuvwxyz']
  while (queue.length) {
    const [level, word] = queue.pop()
    // console.log("🚀", level, word, s)
    if (word === endWord) return level
    for (let i = 0; i < word.length; ++i) {
      for (const ch of alphs) {
        const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
        if (s.has(nextWord)) {
          s.delete(nextWord)
          queue.unshift([level + 1, nextWord])
        }
      }
    }
  }
  return 0
}

// 拓展：返回其中一条最短路径
const findOnePath = function (beginWord, endWord, wordList) {
  const s = new Set(wordList),
        queue = [[1, [beginWord]]]
        alphs = [...'abcdefghijklmnopqrstuvwxyz']
  while (queue.length) {
    const [level, path] = queue.pop()
    const word = path[path.length - 1]
    if (word === endWord) return path
    for (let i = 0; i < word.length; ++i) {
      for (const ch of alphs) {
        const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
        if (s.has(nextWord)) {
          s.delete(nextWord)
          queue.unshift([level + 1, path.concat([nextWord])])
        }
      }
    }
  }
  return []
}

// ---- test case ----
// console.log(ladderLength('abc', 'def', ['dbc', 'bbc', 'dec', 'def', 'log', 'cog']))
// console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
// console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
// console.log(ladderLength("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))


console.log(findOnePath('abc', 'def', ['dbc', 'bbc', 'dec', 'def', 'log', 'cog']))
console.log(findOnePath('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
console.log(findOnePath('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
console.log(findOnePath("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))
