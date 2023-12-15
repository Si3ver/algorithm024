/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 思路：分治
 * 1. 画递归树，构造辅助函数
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    const map = new Map([
        ['2', 'abc'], ['3', 'def'], ['4', 'ghi'],
        ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'],
        ['8', 'tuv'], ['9', 'wxyz']
    ]);

    const res = [];
    const helper = (level, path) => {
        // terminator
        if (level === digits.length) {
            res.push(path.join(''));
            return;
        }
        // process
        const selectors = map.get(digits[level]);
        for (let i = 0; i < selectors.length; ++i) {
            path.push(selectors[i]);
            // drill down
            helper(level + 1, path);
            // revert status
            path.pop();
        }
    }

    helper(0, []);
    return res;
};

console.log(letterCombinations('23'))
// console.log(letterCombinations('995'))
console.log(letterCombinations(''))

/*
Line 41 in solution.js
             throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type list<string>");
: "" is not valid value for the expected return type list<string>
    Line 41: Char 20 in solution.js (Object.<anonymous>)
    Line 16: Char 8 in runner.js (Object.runner)
    Line 27: Char 26 in solution.js (Object.<anonymous>)
    Line 1251: Char 30 in loader.js (Module._compile)
    Line 1272: Char 10 in loader.js (Object.Module._extensions..js)
    Line 1100: Char 32 in loader.js (Module.load)
    Line 962: Char 14 in loader.js (Function.Module._load)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    Line 17: Char 47 in run_main_module.js
*/
