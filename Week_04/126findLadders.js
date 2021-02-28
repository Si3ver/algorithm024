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

// 解法一：BFS （不会写回溯就先用copy参数, 会超时。。。）
const findLadders1 = function (beginWord, endWord, wordList) {
  const res = [],
    queue = [
      [1, [beginWord], new Set(wordList)]
    ],
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





// 解法二：构建图
var findLadders = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) < 0) return [];
  if (wordList.indexOf(beginWord) == -1) wordList.push(beginWord);

  let allCombDict = new Map();
  let wordLevel = new Map();
  let wordConnection = new Map();
  let L = beginWord.length;
  // 建图
  for (let word of wordList) {
    for (let i = 0; i < L; ++i) {
      let key = word.slice(0, i) + "*" + word.slice(i + 1);
      if (allCombDict.has(key)) allCombDict.get(key).push(word);
      else allCombDict.set(key, [word]);
    }
  }
  let queue = [beginWord];
  let wordUsed = new Set();
  let step = 1;
  let flag = 1;
  //帮助我们判断是否能从beginWord到endWord，如果可以则转为0，这可以帮助我们提前结束循环，并且如果不能到达endWord,则不需要再进行DFS 直接返回[];
  //BFS
  while (queue.length && flag) {
    let len = queue.length;
    for (let t = 0; t < len; ++t) {
      let word = queue.shift();
      if (!wordUsed.has(word)) {
        wordUsed.add(word);
        wordLevel.set(word, step);
        if (word == endWord) flag = 0;
        for (let i = 0; i < L; ++i) {
          let key = word.slice(0, i) + "*" + word.slice(i + 1);
          if (allCombDict.has(key)) {
            let connected = allCombDict.get(key).filter((d) => d != word);//这里要去除自身，两个原因：1.connected里面要保存的是该节点的邻居节点，自身不属于；2.如果将自身这个节点加进去会产生重复；
            if (wordConnection.has(word))
              wordConnection.get(word).push(...connected);
            else wordConnection.set(word, [...connected]);
            queue.push(...connected);
          }
        }
      }
    }
    step++;
  }
  if (flag) return [];
  let res = [];
  //DFS
  function dfs(list, word, connection, level) {
    let lev = level.get(word);
    if (lev == 1) {
      res.push([...list]);
      return;
    }
    for (let node of connection.get(word)) {
      if (level.get(node) == lev - 1) {
        list.unshift(node);
        dfs(list, node, connection, level);
        list.shift();
      }
    }
  }
  dfs([endWord], endWord, wordConnection, wordLevel);
  return res;
};



// ---- test case ----
// console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
// console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))
console.log(findLadders("qa", "sq", ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]))
