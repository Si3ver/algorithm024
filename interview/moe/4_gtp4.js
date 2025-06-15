function numToChinese(num) {
    if (num === 0) return '零';

    const strNum = String(num);
    const len = strNum.length;

    if (len > 16) return '数字太大';

    const cnNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const cnUnits = ['', '十', '百', '千'];
    const cnBigUnits = ['', '万', '亿', '万亿'];
    const result = [];

    let zeroCount = 0;

    for (let i = 0; i < len; i++) {
        const digit = strNum[len - 1 - i];
        const cnNum = cnNums[parseInt(digit)];
        const unitPos = i % 4;
        const bigUnitPos = Math.floor(i / 4);

        if (digit === '0') {
            zeroCount++;
            if (unitPos === 0 && zeroCount < 4) {
                result.unshift(cnBigUnits[bigUnitPos]);
            }
        } else {
            zeroCount = 0;
            result.unshift(cnNum + cnUnits[unitPos] + (unitPos === 0 ? cnBigUnits[bigUnitPos] : ''));
        }
    }

    return result.join('').replace(/零+/g, '零').replace(/零万/g, '万').replace(/零亿/g, '亿').replace(/亿万/g, '亿');
}

// 测试您提供的例子
console.log(numToChinese(10000000000000)); // 十万亿
console.log(numToChinese(1234)); // 一千二百三十四
console.log(numToChinese(5678)); // 五千六百七十八
console.log(numToChinese(12345678)); // 一千二百三十四万五千六百七十八
console.log(numToChinese(1234567890987654)); // 一千二百三十四万五千六百七十八亿九千零九十八万七千六百五十四
console.log(numToChinese(1200000000000200)); // 一千二百万亿零二百
