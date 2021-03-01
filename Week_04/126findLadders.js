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

// 解法一：BFS (要搜寻的情况太多，会超时！！！)
// 难点在于要找到 “所有的最短路径”
// 无法通过第 23 条测试用例，开 set 太多了，JS引擎垃圾回收跑崩了！！！
const findLadders1 = function (beginWord, endWord, wordList) {
  const res = [],
      queue = [[1, [beginWord], new Set(wordList)]],
      alphs = [...'abcdefghijklmnopqrstuvwxyz']
  let minLevel = Infinity
  while (queue.length) {
    const [level, path, wordSet] = queue.pop()
    const word = path[path.length - 1]

    if (word === endWord && (minLevel === Infinity || level === minLevel)) {
      res.push(path.slice())
      minLevel = level // 记录最短路径，用于后续剪枝
    } else {
      if (level >= minLevel) continue // 剪枝
      for (let i = 0; i < word.length; ++i) {
        for (const ch of alphs) {
          const nextWord = word.slice(0, i) + ch + word.slice(i + 1)
          if (wordSet.has(nextWord)) {
            wordSet.delete(nextWord)
            queue.unshift([level + 1, path.concat([nextWord]), new Set(wordSet)])
          }
        }
      }
    }
  }
  return res
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
console.time('findLadders1')
console.log(findLadders1("qa", "sq", ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]))
console.timeEnd('findLadders1')

console.time('findLadders')
console.log(findLadders("cet", "ism", ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]))
console.timeEnd('findLadders')
