const reduce = (list, fn, ...init) => {
    let next = init.length ? init[0] : list[0];
    for (let i = init.length ? 0 : 1; i < list.length; ++i) {
        next = fn(next, list[i], i);
    }
    return next;
}

// ---- test case ----
const res = reduce([1,2,3,4,5], (sum, num) => {
    return sum + num;
}, 100);
console.log(res);  // 115
