function major(arr, k) {
  const n = arr.length
  const LOWLINE = n / k
  const map = new Map()
  for (let i = 0; i < n; ++i) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  const ret = [...map.entries()].filter(
                ([_item, times]) => {
                  return times > LOWLINE
                }
              ).map(
                ([item, _times]) => item
              )
  return ret
}

// ---- test case ----
console.log(major([1, 2, 3, 1, 2, 3, 4], 7))  // [1, 2, 3]
console.log(major([4, 1], 1)) // []
