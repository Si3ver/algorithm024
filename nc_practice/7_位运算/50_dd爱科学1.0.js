// dd爱科学1.0

function solve(s) {
    // q 数组维护当前最优的非递减子序列
    const q = [];
    
    for (let c of s) {
        // 二分查找第一个大于 c 的位置
        let left = 0, right = q.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (q[mid] > c) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        const idx = left;
        if (idx === q.length) {
            // 当前字符可以接在 q 末尾，扩展子序列
            q.push(c);
        } else {
            // 替换第一个大于 c 的元素，使 q 尽可能小
            q[idx] = c;
        }
    }
    console.log(q)
    // 最小修改次数 = 总长度 - 最长非递减子序列长度
    return s.length - q.length;
}

console.log(solve('ACEBF'))
