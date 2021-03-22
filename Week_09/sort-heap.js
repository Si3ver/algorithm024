// 堆排序 不稳定 O(nlogn)
/**
 * [array heap]
 * element    : i
 * left child : 2i + 1
 * right child: 2i + 2
 */

function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

function heapSort(arr) {
  if (!arr.length) return
  const n = arr.length
  for (let i = (n >> 1) - 1; i >= 0; --i) {
    heapify(arr, n, i)
  }
  for (let i = n - 1; i >= 0; --i) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }
}

function heapify(arr, len, i) {
  const left = 2 * i + 1, right = 2 * i + 2
  let largest = i
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== i) {
    swap(arr, i, largest)
    heapify(arr, len, largest)
  }
}


// ---- test case ----
const arr = [3, 2, 32, 45, 767, 234, 66, 32]
heapSort(arr)
console.log(arr)
