
setTimeout(() => {
    Promise.resolve(1).then(console.log);
    console.log(2);
}, 0);

setTimeout(() => {
    console.log(3);
}, 0);
console.log(4);

// 4 2 1 3
