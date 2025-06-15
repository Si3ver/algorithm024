// 快速排序 不稳定 O(nlogn)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  const pivotIdx = partition(arr, left, right)
  quickSort(arr, left, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, right)
}

function partition(arr, left, right) {
//   const pivot = arr[left]

const mid = left + ((right - left) >> 1);
const pivot = arr[mid];
arr[mid] = arr[left];
// arr[left] = pivot;
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
const arr1 = [5,2,3,1]
quickSort(arr1)
console.log(arr1)

const arr2 = [5,1,1,2,0,0]
quickSort(arr2)
console.log(arr2)



// var quickSort = function(nums) {
//   function quickSortHelper(nums, start, end) {
//       if (start >= end) return nums

//       var pivotValue = nums[start]
//       var smaller = start
//       for (var i = start + 1; i <= end; i++) {
//           var bigger = i
//           if (nums[bigger] < pivotValue) {
//               smaller++
//               var smallerValue = nums[bigger]
//               nums[bigger] = nums[smaller]
//               nums[smaller] = smallerValue
//           }
//       }
//       var smallerCache = nums[smaller]
//       nums[smaller] = nums[start]
//       nums[start] = smallerCache

//       quickSortHelper(nums, start, smaller - 1)
//       quickSortHelper(nums, smaller + 1, end)
//       return nums
//   }

//   return quickSortHelper(nums, 0, nums.length - 1)
// };
