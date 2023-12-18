const myDeepClone = function (origin, vm = new WeakMap) {
    if (typeof origin !== 'object' || origin == null) return origin;
    if (origin instanceof Date) return new Date(origin);
    if (origin instanceof RegExp) return new RegExp(origin);
    // weakMap dispose circular deps
    const stashed = vm.get(origin);
    if (stashed) return stashed;
    let target = Array.isArray(origin) ? [] : {};
    vm.set(origin, target);
    for (const key in origin) {
        if (origin.hasOwnProperty(key)) {
            target[key] = myDeepClone(origin[key], vm);
        }
    }
    return target;
}

// ---- test case 1 ----
var p1 = {
    name: 'william',
    age: 12,
    birthday: new Date('1995-09-12'),
    hobby: ['eat', 'sleep', 'code'],
    address: {
      city: 'shenzhen'
    },
}

var p2 = myDeepClone(p1)
p1.address.city = 'beijing'
p2.hobby.push('music')
console.log(p1, p2) // p1、p2 相互独立

// ---- test case 2 ----
var o1 = {x: 1}, o2 = {y: 2}
o1.a = o2
o2.b = o1
var o3 = myDeepClone(o1)
o1.z = 100
console.log(o1, o3)

// ---- test case 3 ----
var arr1 = [1, 2, 3]
arr1.push(arr1)
var arr2 = myDeepClone(arr1)
arr2.push(1)
console.log(arr1, arr2)
