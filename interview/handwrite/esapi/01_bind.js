// 手动绑定 this
Function.prototype.fakeBind = function (obj, ...args) {
    return (...rest) => {
        this.call(obj, ...args, ...rest);
    }
}

// ---- test case ----
function f(b) {
    console.log(this.a, b);
}

f.fakeBind({a: 3})(4);
f.fakeBind({a: 3}, 10)(11);
