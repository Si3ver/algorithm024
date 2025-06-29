/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * 438. 找到字符串中所有字母异位词 ｜ medium
 */

// 滑动窗口 + 数组统计 O(n)
function findAnagrams1 (s, p) {
  const m = s.length, n = p.length
  if (m < n || n < 1) return []
  const startIdx = 'a'.codePointAt(0)
  // 按 s、p 前n个字符，初始化统计数组 cntArr
  const cntArr = Array(26).fill(0)
  for (let i = 0; i < n; ++i) {
    const idxP = p.codePointAt(i) - startIdx
    const idxS = s.codePointAt(i) - startIdx
    ++cntArr[idxP]
    --cntArr[idxS]
  }
  // 初始化 win 窗口，存储当前窗口中的字母
  const res = []
  const win = [...s.substr(0, n)]
  if (cntArr.filter(cnt => cnt !== 0).length === 0) res.push(0)
  for (let i = n; i < m; ++i) {
    // 更新窗口 win
    const newCh = s.charAt(i)
    win.push(newCh)
    const oldCh = win.shift()
    // 更新 cntArr
    const newIdx = newCh.codePointAt(0) - startIdx
    const oldIdx = oldCh.codePointAt(0) - startIdx
    --cntArr[newIdx]
    ++cntArr[oldIdx]
    // console.log(newCh, oldCh, cntArr, res)
    if (cntArr.filter(cnt => cnt !== 0).length === 0) res.push(i - n + 1)
  }
  return res
}

// 滑动窗口套路
var findAnagrams = function(s, t) {
    const need = new Map(), wind = new Map();
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const res = [], size = t.length;
    let count = 0;
    for (let i = 0, j = 0; j < s.length; ++j) {
        // Step1: 扩 1
        const jChar = s[j];
        if (need.has(jChar)) {
            wind.set(jChar, (wind.get(jChar) || 0) + 1);
            if (wind.get(jChar) === need.get(jChar)) { // !!
                ++count;
            }
        } else { // 遇到不符合的元素，可以直接挪左指针到 j+1
            wind.clear();
            count = 0;
            i = j + 1;
            continue;
        }
        // Step2: 看看结果ok不
        if (j - i + 1 === size) {
            if (count === need.size) {
                res.push(i);
            }
            // Step3: 缩 1
            const iChar = s[i];
            ++i;
            if (wind.get(iChar) === need.get(iChar)) { // !!
                --count;
            }
            wind.set(iChar, wind.get(iChar) - 1);
        }
    }
    return res;
};

// ---- test case ----
console.log(findAnagrams('cbaebabacd', 'abc'))  // [0, 6]
console.log(findAnagrams('abab', 'ab'))   // [0, 1, 2]
// console.log(findAnagrams('baa', 'aa'))
