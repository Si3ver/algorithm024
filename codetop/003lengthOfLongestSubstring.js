/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * 3. 无重复字符的最长子串 | medium
 *
 * hashmap + 双指针
 */

var lengthOfLongestSubstring = function(s) {
    const map = new Map();      // 记录字母上一次出现的位置
    let maxSize = 0;
    for (let i = j = 0; j < s.length; ++j) {
        const jChar = s[j];
        if (map.has(jChar) && map.get(jChar) >= i) {  // 出现重复，更新 left
            i = map.get(jChar) + 1;
        }
        map.set(jChar, j);
        if (maxSize < j - i + 1) {
            maxSize = j - i + 1;
        }
    }
    return maxSize;
};

// ---- test case ----
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb'))    // 1
console.log(lengthOfLongestSubstring('pwwkew'))   // 3
console.log(lengthOfLongestSubstring(''))         // 0
