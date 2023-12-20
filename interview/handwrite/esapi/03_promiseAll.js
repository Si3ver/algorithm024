// Promise.all

function pAll(_promises) {
    return new Promise((resolve, reject) => {
        // Iterable => Array
        const promises = Array.from(_promises);
        // 结果用一个数组维护
        const r = [];
        const len = promises.length;
        let count = 0;
        for (let i = 0; i < len; ++i) {
            // Promise.resolve 把所有数据都转化为 Promise
            Promise.resolve(promises[i]).then(o => {
                r[i] = o;
                if (++count === len) {
                    resolve(r);
                }
            }).catch(e => reject(e));
        }
    })
}
