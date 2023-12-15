// ---- test -----
const arr = [
    1, 2, 3, 4,
    [
        1, 2, 3,
        [
            1, 2, 3, 4,
            [
                1, 2, 3
            ]
        ]
    ],
    5,
    'string',
    {
        name: '前端收割机'
    }
];

console.log(myFlat(arr, 3));


function myFlat(arr,depath){
    let target =[]

    arr.forEach(el => {
        if (Array.isArray(el) && depath >= 0){
            target = target.concat(arguments.callee(el, depath - 1))
        } else {
            target.push(el)
        }
    })

    return target
}

