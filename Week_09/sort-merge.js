// 归并排序 稳定 O(nlogn)
// 缺点：需要额外空间
function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  const mid = left + ((right - left) >> 1)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, mid, right)
}

function merge(arr, left, mid, right) {
  const tmp = new Array(right - left + 1)
  let i = left, j = mid + 1, k = 0
  while (i <= mid && j <= right) {
    tmp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
  }
  while (i <= mid)    tmp[k++] = arr[i++]
  while (j <= right)  tmp[k++] = arr[j++]
  for (let p = 0; p < tmp.length; ++p) {
    arr[left + p] = tmp[p]
  }
}

// ---- test case ----
const arr = [3, 2, 32, 45, 767, 234, 66, 32]
mergeSort(arr)
console.log(arr)
