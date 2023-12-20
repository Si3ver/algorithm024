function isEqual(x, y) {
    if (x === y) return true;
    if (typeof x === 'object' && !!x && typeof y === 'object' && !!y) {
        const keysX = Object.keys(x);
        const keysY = Object.keys(y);
        if (keysX.length !== keysY.length) return false;
        for (const key of keysX) {
            if (!isEqual(x[key], y[key])) return false; // recursive
        }
        return true;
    }
    return false;
}

// ---- test case ----
const o1 = { a: [1,2,3], b:'222', c: { d: { e: [34] }, e: 1 } }
const o2 = { a: [1,2,3], b:'222', c: { d: { e: [34] }, e: 1 } }
const o3 = { a: [1,2,3], b:'222', c: { d: { e: [35] }, e: 1 } }
console.log(isEqual(o1, o2));
console.log(isEqual(o3, o2));
