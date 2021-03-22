// O(n^2) O(1)
function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}
// 不稳定
function selectionSort(arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; ++i) {
    let j, minIdx = i
    for (j = i + 1; j < n; ++j) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    swap(arr, i, minIdx)
  }
  return arr
}
// 稳定
function insertionSort(arr) {
  const n = arr.length
  let preIdx, curr
  for (let i = 1; i < n; ++i) {
    preIdx = i - 1
    curr   = arr[i]
    while (preIdx >= 0 && arr[preIdx] > curr) {
      arr[preIdx + 1] = arr[preIdx]
      --preIdx
    }
    arr[preIdx + 1] = curr
  }
  return arr
}
// 稳定
function bubbleSort(arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; ++i) {
    for (let j = 0; j < n - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// ---- test case ----
console.log(selectionSort([3,2,32,45,767,234,66,32]))
console.log(insertionSort([3,2,32,45,767,234,66,32]))
console.log(bubbleSort([3,2,32,45,767,234,66,32]))
