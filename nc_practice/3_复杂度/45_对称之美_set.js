// 对称之美
// 思路：双指针 + hash
// https://ac.nowcoder.com/acm/contest/10746/H
// 类似题，非对称之美（最长回文子串）：https://ac.nowcoder.com/acm/problem/214851

// 思路：核心在于判断两个字符串是否有同一个 char。找相同 char 可以用 set 降低复杂度
function hasSameChar(str1, str2) {
    const set = new Set(str1.split(''))
    for (const ch of str2) {
        if (set.has(ch)) {
            return true;
        }
    }
    return false;
}

function solve(strArr) {
    const n = strArr.length;
    const times = n >> 1;
    let ans = true;
    for (let i = 0; i < times; ++i) {
        if (!hasSameChar(strArr[i], strArr[n - i - 1])) {
            ans = false;
            break;
        }
    }
    return ans;
}

console.log(solve(['a'])) // true
console.log(solve(['a', 'b', 'c'])) // false
console.log(solve(['a', 'b', 'ac'])) // true
