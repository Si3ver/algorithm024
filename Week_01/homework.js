/**
 * 1. 用 add first 或 add last 这套新的 API 改写 Deque 的代码
 * 双端队列 deque
 */

/**
 * 2. 分析 Queue 和 Priority Queue 的源码
 * 队列：http://fuseyism.com/classpath/doc/java/util/Queue-source.html
 * 优先队列：https://docs.oracle.com/javase/10/docs/api/java/util/PriorityQueue.html
 */

/**
 * 3. 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
 * easy | leetcode-026 | array
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 思路：利用数组是有序的特性，重复元素必相邻。遍历一轮，用cnt记录重复项数量，用第i个元素覆盖i-cnt个元素
 */
var removeDuplicates = function(nums) {
  var cnt = 0;
  for(var i = 1; i < nums.length; ++i) {
      if (nums[i] === nums[i - 1]) {
          cnt++
      } else {
          nums[i - cnt] = nums[i]
      }
  }
  return nums.length - cnt
};

/**
 * 4. 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
 * medium | leetcode-189 | array
 * https://leetcode-cn.com/problems/rotate-array/
 * 思路：反转三次，时间复杂度O(n), 空间复杂度O(1)
 */
// var rotate = function(nums, k) {
//     var gap = nums.length - k
//     nums = nums.slice(gap).concat(nums.slice(0, gap))
//     return nums
// };
// O(1)空间复杂度解法： 反转3次
var rotate = function(nums, k) {
  var reverse = function(nums, start, end) {
      while(start < end) {
          var tmp = nums[start]
          nums[start++] = nums[end]
          nums[end--] = tmp
      }
  }
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};

/**
 * 5. 合并两个有序链表（亚马逊、字节跳动在半年内面试常考）
 * easy | leetcode-021 | link-list
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 思路： 类似归并排序的归并过程
 */
var mergeTwoLists = function(l1, l2) {
  var dummyHead = {val: -1, next: null}, p = dummyHead
  while(l1 && l2) {
      if (l1.val <= l2.val) {
          p.next = l1
          l1 = l1.next
      } else {
          p.next = l2
          l2 = l2.next
      }
      p = p.next
  }
  p.next = l1 || l2
  return dummyHead.next
};

/**
 * 6. 合并两个有序数组（Facebook 在半年内面试常考）
 * easy | leetcode-088 | array
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */
var merge = function(nums1, m, nums2, n) {
  var i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while(j >= 0) {
    nums1[k--] = nums2[j--]
  }
  return nums1
};


/**
 * 7. 两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软在半年内面试中高频常考）
 * leetcode-001
 * https://leetcode-cn.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
  var hashMap = {}
  for (var i = 0; i < nums.length; ++i) {
    if (hashMap[nums[i]] === void(0)) {
      hashMap[target- nums[i]] = i
    } else {
      return [hashMap[nums[i]], i]
    }
  }
  return []
};

/**
 * 8. 移动零（Facebook、亚马逊、苹果在半年内面试中考过）
 * leetcode-283 |
 * https://leetcode-cn.com/problems/move-zeroes/
 * 思路： 用一个标记记录非0的位置
 */
var moveZeroes = function(nums) {
  var swap = function(nums, i, j) {
      var tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
  }

for (var i = 0, j = 0; i < nums.length; ++i) {
  if (nums[i] !== 0) {
    swap(nums, i, j++)
  }
}
return nums
};

/**
 * 9. 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
 * easy | leetcode-066 | array
 * https://leetcode-cn.com/problems/plus-one/
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; --i) {
      if (digits[i] < 9) {
          ++digits[i]
          break
      } else {
          digits[i] = 0
          if (i === 0) {
              digits.unshift(1)
          }
      }
  }
  return digits
};

/**
 * 10. 设计循环双端队列（Facebook 在 1 年内面试中考过）
 * medium | leetcode-641 | deque
 * https://leetcode-cn.com/problems/design-circular-deque/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
 * 思路： js的array完全是超集，约束下 length 可以很简单实现
 */
var MyCircularDeque = function(k) {
  this.queue =  new Array()
  this.length = k
};

MyCircularDeque.prototype.insertFront = function(value) {
  if (this.queue.length < this.length) {
      this.queue.unshift(value)
      return true
  }
  return false
};
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.queue.length < this.length) {
      this.queue.push(value)
      return true
  }
  return false
};
MyCircularDeque.prototype.deleteFront = function() {
  if (this.queue.length > 0) {
      this.queue.shift()
      return true
  }
  return false
};
MyCircularDeque.prototype.deleteLast = function() {
  if (this.queue.length > 0) {
      this.queue.pop()
      return true
  }
  return false
};
MyCircularDeque.prototype.getFront = function() {
  if (this.queue.length === 0) {
      return -1
  }
  return this.queue[0]
};
MyCircularDeque.prototype.getRear = function() {
  if (this.queue.length === 0) {
      return -1
  }
  return this.queue[this.queue.length - 1]
};
MyCircularDeque.prototype.isEmpty = function() {
  return this.queue.length === 0
};
MyCircularDeque.prototype.isFull = function() {
  return this.queue.length === this.length
};


/**
 * 11. 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
 * hard ｜ leetcode-042 | array
 * https://leetcode.com/problems/trapping-rain-water/
 * 思路： maxLeft、maxRight 记录左右最高柱子
 */
var trap = function(A) {
  var left = 0, right = A.length - 1
  var res = 0, maxLeft = 0, maxRight = 0
  while (left < right) {
      if (A[left] <= A[right]) {
          if (A[left] >= maxLeft) {
              maxLeft = A[left]
          } else {
              res += maxLeft - A[left]
          }
          ++left
      } else {
          if (A[right] >= maxRight) {
              maxRight = A[right]
          } else {
              res += maxRight - A[right]
          }
          --right
      }
  }
  return res
};
