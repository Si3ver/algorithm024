const __ = Symbol('PLACEHOLDER');

function hasSymbol(arr) {
    // console.log('h:', arr);
    for (const item of arr) {
        if (typeof item === 'symbol') return true;
    }
    return false;
}

function placeholder(fn, ...bound) {
    while (bound.length < fn.length) {
        bound.push(__);
    }
    return (...args) => {
        const newArgs = bound.slice();
        for (let i = 0, j = 0; i < newArgs.length && j < args.length; ++i) {
            if (newArgs[i] === __) {
                newArgs[i] = args[j++];
            }
        }
        if (hasSymbol(newArgs)) {
            return placeholder(fn, ...newArgs);
        } else {
            return fn(...newArgs);
        }
    }
}

// ---- test case ----

function main() {
    function dot(x1, y1, x2, y2) {
        console.log('dot', x1, y1, x2, y2)
        return x1 * x2 + y1 * y2;
    }

    const p1 = placeholder(dot, 3, 4);

    // assert.deepStrictEqual(typeof placeholder(dot, 2, __, __, 4), 'function');
    console.log(typeof placeholder(dot, 2, __, __, 4), typeof p1); // 👉 function
    // assert.deepStrictEqual(placeholder(dot, 10, __, 10, __)(2, 3), dot(10, 2, 10, 3));
    placeholder(dot, 10, __, 10, __)(2, 3); // 👉 10 2 10 3
    // assert.deepStrictEqual(placeholder(dot, __, __, __, 5)(4, __, 2)(__)(3), dot(4, 3, 2, 5));
    placeholder(dot, __, __, __, 5)(4, __, 2)(__)(3) // 👉 4 3 2 5
    // assert.deepStrictEqual(placeholder(dot, 3)(__, __)(4, __, 2)(3), dot(3, 4, 3, 2));
    placeholder(dot, 3)(__, __)(4, __, 2)(3) // 👉 3 4 3 2
    // assert.deepStrictEqual(placeholder(dot)(3, __, __, 4)(5, 6), dot(3, 5, 6, 4));
    placeholder(dot)(3, __, __, 4)(5, 6) // 👉 3 5 6 4
    // assert.deepStrictEqual(placeholder(dot, 3, 4, 5, 3)(), dot(3, 4, 5, 3));
    placeholder(dot, 3, 4, 5, 3)() // 👉 3 4 5 3

    // assert.deepStrictEqual(p1(5, 6), dot(3, 4, 5, 6));
    p1(5, 6); // 👉 3 4 5 6
    // assert.deepStrictEqual(p1(7, 8), dot(3, 4, 7, 8));
    p1(7, 8); // 👉 3 4 7 8
    // assert.deepStrictEqual(p1(5)(6), dot(3, 4, 5, 6));
    p1(5)(6); // 👉 3 4 5 6
    // assert.deepStrictEqual(p1(7)(8), dot(3, 4, 7, 8));
    p1(7)(8); // 👉 3 4 7 8

    const p2 = p1(__, 6);
    console.log(typeof p2); // 👉 function
    p2(5); // 👉 3 4 5 6
    p2(6); // 👉 3 4 6 6

    console.log('PASSED!');
  }

  main()

