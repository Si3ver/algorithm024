function solve(arr, start, end) {
    let sum1 = 0, sum2 = 0
    for (let i = 0; i < arr.length; ++i) {
        if (start <= i && i < end) {
            sum1 += arr[i]
        } else {
            sum2 += arr[i]
        }
    }
    return Math.min(sum1, sum2)
}

void async function () {
    // Write your code here
    const lines = []
    while(line = await readline()){
        lines.push(line)
    }
    const arr = lines[1].split(' ').map(Number)
    const [start, end] = lines[2].split(' ').map(str => parseInt(str) - 1).sort((x, y) => x - y) // 排序一下
    console.log(solve(arr, start, end))
}()
