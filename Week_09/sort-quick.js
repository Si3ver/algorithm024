// 快速排序 不稳定 O(nlogn)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  const pivotIdx = partition(arr, left, right)
  quickSort(arr, left, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, right)
}

function partition(arr, left, right) {
  const pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) --right
    if (left < right) arr[left] = arr[right]
    while (left < right && arr[left] <= pivot) ++left
    if (left < right) arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}

// ---- test case ----
const arr = [3, 2, 32, 45, 767, 234, 66, 32]
quickSort(arr)
console.log(arr)
