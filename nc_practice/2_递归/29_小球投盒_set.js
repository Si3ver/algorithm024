// 小球投盒
// 思路：集合删除法，记录空盒序号，每次操作，删除非空盒子。
// 备注：集合遍历可以用 forEach
// 时间复杂度：O(n)

// 使用集合 set 存储空盒序号。
// 1. 如果操作类型为 1，从 set 中删除当前盒子序号；
// 2. 如果操作类型为 2，从 set 中删除其他序号；
function solve(n, lines) {
    const emptyBox = new Set(new Array(n).fill(0).map((_, idx) => String(idx + 1)));
    for (let i = 1; i < lines.length; ++i) { // 从 1 开始为每一步操作
        const [opType, boxId] = lines[i].split(" ");
        if (opType === "1") {
            emptyBox.delete(boxId);
        } else {
            emptyBox.forEach(id => {
                if (id !== boxId) {
                    emptyBox.delete(id);
                }
            })
        }
        if (emptyBox.size === 0) {
            return i;
        }
    }
    return -1;
}

console.log(solve(3, ['', "1 1", "1 2", "1 3"]))
console.log(solve(3, ['', "1 1", "2 2", "1 3", "1 2"]))
