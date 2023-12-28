/**
 * TODO
 * 数字转化为中文描述
 */
function chineseNumber(num) {
    const chineseMap = new Map([
        [0, "零"],
        [1, "一"],
        [2, "二"],
        [3, "三"],
        [4, "四"],
        [5, "五"],
        [6, "六"],
        [7, "七"],
        [8, "八"],
        [9, "九"],
    ]);
    const unitMap = new Map([
        [1, ""],
        [10, "十"],
        [100, "百"],
        [1000, "千"],
        [1_0000, "万"],
        [1_0000_0000, "亿"],
    ]);

    if (num < 10) {
        return chineseMap.get(num);
    }

    if (num < 100) {
        const tenDigit = Math.floor(num / 10);
        const remainder = num % 10;
        let res =  chineseMap.get(tenDigit) + unitMap.get(10);
        if (remainder === 0) {
            return res;
        } else {
            return res + chineseMap.get(remainder);
        }
    }

    // if (num > 10000) {
    //     const unitDigit = Math.floor(num / 10000);
    //     const remainder = num % 10000;
    //     return
    // }

    for (const unit of unitMap.keys()) {
        if (unit <= num && num < unit * 10) {
            const unitDigit = Math.floor(num / unit);
            const remainder = num % unit;
            if (remainder === 0) {
                return chineseNumber(unitDigit) + unitMap.get(unit);
            } else {
                return (
                    chineseNumber(unitDigit) +
                    unitMap.get(unit) +
                    chineseNumber(remainder)
                );
            }
        }
    }
    return ''
}

// 示例用法
console.log(chineseNumber(1234));
console.log(chineseNumber(5678));
console.log(chineseNumber(1234_5678));           // 一千二百三十四万五千六百七十八
console.log(chineseNumber(1234_5678_9098_7654)); // 一千二百三十四万五千六百七十八亿九千零九十八万七千六百五十四
console.log(chineseNumber(1200_0000_0000_0200)); // 一千二百     万            亿   零          二百
