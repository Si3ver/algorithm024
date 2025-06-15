// 吃糖果

// 思路：贪心法，从最不甜的开始吃 O(nlogn)
function solve(arr, k) {
    arr.sort((x, y) => x - y)
    let ans = 0
    for (let i = 0; i < arr.length; ++i) {
        k -= arr[i]
        if (k < 0) {
            break
        }
        ++ans
    }
    return ans;
}
