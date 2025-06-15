// 小红的数组
// https://ac.nowcoder.com/acm/contest/11218/D

/**
 * 思路：（二分查找）
 * 1. 先对数组进行排序
 * 2. 
 */
function lowerBound(arr, target, left, right) {
    while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function upperBound(arr, target, left, right) {
    while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function solve(arr, k) {
  arr.sort((a, b) => a - b); // O(nlogn)
  let s1 = 0, s2 = 0, s3 = 0;
  for (let i = 0; i < arr.length; i++) {
    const target = k / arr[i];
    const left = i + 1;
    const right = arr.length;

    const l = lowerBound(arr, target, left, right);
    const r = upperBound(arr, target, left, right);

    if (l === right) {
      s3 += right - i - 1
    } else {
      s1 += right - r;
      s2 += r - l;
      s3 += l - left;
    }
  }
  return [s1, s2, s3]
}

console.log(solve([1, 2, 3, 4], 7))
console.log(solve([3, 3, 3, 3, 3], 9))
