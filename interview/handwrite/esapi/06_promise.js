// 异步链式有点难

const STATUS = {
    PENDING: "PENDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
};

class MyPromise {

    static resolve(value) {
        if (value && value.then) {
            return value;
        }
        return new MyPromise(resolve => resolve(value));
    }

    constructor(executer) {
        this.status = STATUS.PENDING;
        this.value = void 0; // return value when succ
        this.reason = void 0; // return value when fail
        this.resolveQueue = []; // callbacks of succ
        this.rejectQueue = []; // callbacks of fail

        // revert status & execute resolveQueue
        const resolve = (value) => {
            setTimeout(() => {
                if (this.status === STATUS.PENDING) {
                    this.status = STATUS.FULFILLED;
                    this.value = value;
                    // console.log(this.resolveQueue)
                    this.resolveQueue.forEach(({ fn, resolve: res}) => {
                        return res(fn(value));
                    });
                }
            })
        };

        // revert status & execute rejectQueue
        const reject = (reason) => {
            setTimeout(() => {
                if (this.status === STATUS.PENDING) {
                    this.status = STATUS.REJECTED;
                    this.reason = reason;
                    // console.log(this.rejectQueue)
                    this.rejectQueue.forEach(({ fn, reject: rej }) => {
                        return rej(fn(reason));
                    });
                }
            })
        };

        try {
            executer(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFullfilled, onRejected) {
        if (this.status === STATUS.FULFILLED) {
            const result = fn(this.value);
            return MyPromise.resolve(result);
        }
        if (this.status === STATUS.PENDING) {
            return new MyPromise((resolve, reject) => {
                this.resolveQueue.push({ fn: onFullfilled, resolve, reject });
                this.rejectQueue.push({  fn: onRejected,   resolve, reject });
            })
        }
    }
}

// ---- test case ----
// 同步调用
// new MyPromise((resolve, reject) => {
//     console.log("[sync promise]");
//     resolve("🙆‍♂️");
//     reject("🙅‍♂️");
// }).then(
//     (value) => {
//         console.log("[sync fulfilled]", value);
//     },
//     (reason) => {
//         console.log("[sync rejected]", reason);
//     }
// );

// 异步调用
// new MyPromise((resolve, reject) => {
//     console.log("[async promise]");
//     setTimeout(() => {
//         resolve("🙆‍♂️");
//     }, 500);
//     setTimeout(() => {
//         reject("🙅‍♂️");
//     }, 100);
// }).then(
//     (value) => {
//         console.log("[async fulfilled]", value);
//     },
//     (reason) => {
//         console.log("[async rejected]", reason);
//     }
// );

// 异步链式调用
const startTime = new Date();
var p2 = new MyPromise((resolve, reject) => {
    console.log("promise start:", new Date() - startTime);
    setTimeout(() => {
        console.log("promise resolve:", new Date() - startTime);
        resolve("value1");
    }, 2000);
})
    .then((value) => {
        return new MyPromise((resolve) => {
            console.log("then1", value, new Date() - startTime);
            setTimeout(() => {
                console.log("then resolve", new Date() - startTime);
                resolve("value2");
            }, 3000);
        });
    })
    .then((value) => {
        console.log("then2", value, new Date() - startTime);
    }, (err) => {console.log(err)});
// console.log(p2);
