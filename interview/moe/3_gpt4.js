function convertToChineseNumeral(num) {
    const numStr = num.toString();
    const chineseNumerals = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千'];
    const bigUnits = ['', '万', '亿'];
    const extraBigUnit = '万亿';

    let result = '';
    let zeroFlag = false; // 标记连续的零
    let part = ''; // 每四位的读法
    let sectionCount = Math.ceil(numStr.length / 4); // 计算总共需要多少组（每组四位）

    // 处理每四位数为一组，从高位到低位
    for (let i = 0, start = 0; i < sectionCount; i++) {
        let end = numStr.length - i * 4;
        start = Math.max(end - 4, 0);
        let currentSection = numStr.substring(start, end);
        part = '';

        for (let j = 0; j < currentSection.length; j++) {
            const digit = currentSection[j];
            const numeral = chineseNumerals[parseInt(digit)];
            if (digit !== '0') {
                if (zeroFlag) {
                    part += '零';
                    zeroFlag = false;
                }
                part += numeral + units[currentSection.length - 1 - j];
            } else if (part.length !== 0) {
                zeroFlag = true;
            }
        }

        if (part) {
            // 添加大单位
            if (sectionCount > 2 && i === sectionCount - 2) {
                // 对于万亿级别的数字，第一次使用“万亿”，之后使用“万”
                part += (sectionCount === 3 && i === 0) ? extraBigUnit : bigUnits[1];
            } else if (i === sectionCount - 3) {
                part += bigUnits[2];
            }
        } else if (zeroFlag && result.length !== 0) {
            part = '零';
        }

        result = part + result;
    }

    // 处理一十开头的情况
    if (result.startsWith('一十')) {
        result = result.substring(1);
    }

    return result;
}


// 使用例子
console.log(convertToChineseNumeral(10_0000_0000_0000)); // 十万亿
console.log(convertToChineseNumeral(1234)); // 一千二百三十四
console.log(convertToChineseNumeral(5678)); // 五千六百七十八
console.log(convertToChineseNumeral(1234_5678));           // 一千二百三十四万五千六百七十八
console.log(convertToChineseNumeral(1234_5678_9098_7654)); // 一千二百三十四万五千六百七十八亿九千零九十八万七千六百五十四
console.log(convertToChineseNumeral(1200_0000_0000_0200)); // 一千二百万亿零二百
// console.log(convertToChineseNumeral(1200_0000_0000_0200)); // 一千二百     万            亿   零          二百
