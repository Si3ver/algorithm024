const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

function delay(func, time, ...args) {
    return new Promise((resolve) => {
        setTimeout(() => {
            Promise.resolve(func(...args)).then(resolve);
        }, time);
    })
}

// ---- test case ----
// ;(async () => {
//     console.log(1);
//     await sleep(1000);
//     console.log(2);
// })();


console.log(new Date())
delay(
        (str) => {
            return new Error(str)
        },
        3000,
        'wlwlwl'
    )
    .then(
        o => console.log('then:', o)
    ).catch(
        e => {
            console.log('error:', e)
        }
    )
