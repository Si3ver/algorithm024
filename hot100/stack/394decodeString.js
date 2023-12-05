/**
 * https://leetcode.cn/problems/decode-string
 * 字符串解码
 *
 * 【stack】
 *
 */

/**
 * @param {string} s
 * @return {string}
 *
 * 解法：辅助栈 item 存 [multi, res]
 */
var decodeString = function(s) {
    const stack = [];
    let res = '', multi = 0;
    for (const ch of s) {
        const isNumber = !Number.isNaN(Number(ch));
        if (isNumber) {
            multi = multi * 10 + Number(ch);
        } else if (ch === '[') {
            stack.push([res, multi]);
            res = '';
            multi = 0;
        } else if (ch === ']') {
            const [lastRes, curMulti] = stack.pop();
            res = lastRes + res.repeat(curMulti);
        } else {
            res = `${res}${ch}`;
        }
        console.log(ch, res);
    }
    return res;
};

// ---- test ----
console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('abc3[cd]xyz'));
