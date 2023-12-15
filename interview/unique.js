function unique(arr) {
    const target = []
    const res = {}
    arr.forEach(el => {
        if (typeof el == 'object') {
            const str = JSON.stringify(el)
            if (!res[str]) {
                target.push(el)
                res[str] = el
            }
        } else if (!target.includes(el)) {
            target.push(el)
        }
    });
    return target
}
const obj1 = { age: 12 }
const arr = [123, '123', {}, {}, null, undefined, void 0, "abc", "abc", obj1, obj1, { age: 12 }, { age: 12, name: 'lyn' }]
console.log(unique(arr))


