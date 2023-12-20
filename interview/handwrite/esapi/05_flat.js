// 思路：reduce + concat
function flatten(list, depth = 1) {
    if (depth === 0) return list;
    return list.reduce((a, b) => {
        const target = Array.isArray(b) ? flatten(b, depth - 1) : b;
        return a.concat(target);
    }, [])
}


// ---- test case ----
const a = flatten([1, 2, 3, [4, [5, 6]]]);
const b = flatten([1, 2, 3, [4, [5, 6]]], 2);
console.log(a, b);
