/**
 * 2. 有效字母的异位词（亚马逊、Facebook、谷歌在半年内面试中考过）
 * leetcode-242 | easy
 * https://leetcode-cn.com/problems/valid-anagram/submissions/
 * 思路1: 排序 O(nlogn)
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  var stringSort = function (str) {
    return str.split("").sort().join("");
  };
  return stringSort(s) === stringSort(t);
};
/** 思路2: 用hashmap统计，计数 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  var map = {};
  for (var i = 0; i < s.length; ++i) {
    if (map[s[i]] === void 0) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }
  for (var i = 0; i < t.length; ++i) {
    if (map[t[i]] === void 0 || map[t[i]] <= 0) {
      return false;
    } else {
      --map[t[i]];
    }
  }
  for (key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
};
/** 思路3: 数组记录，增减记数（O(n)）trick: charCodeAt */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  var arr = Array(26).fill(0);
  for (var i = 0; i < s.length; ++i) {
    ++arr[s[i].charCodeAt(0) - "a".charCodeAt(0)];
  }
  for (var i = 0; i < t.length; ++i) {
    --arr[t[i].charCodeAt(0) - "a".charCodeAt(0)];
  }
  return arr.filter((item) => item !== 0).length === 0;
};

/**
 * 3. 两数之和（近半年内，亚马逊考查此题达到 216 次、字节跳动 147 次、谷歌 104 次，Facebook、苹果、微软、腾讯也在近半年内面试常考）
 * https://leetcode-cn.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
  var hashMap = {};
  for (var i = 0; i < nums.length; ++i) {
    if (hashMap[nums[i]] === void 0) {
      hashMap[target - nums[i]] = i;
    } else {
      return [hashMap[nums[i]], i];
    }
  }
  return [];
};

/**
 * 4. N 叉树的前序遍历（亚马逊在半年内面试中考过）
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * leetcode-589
 * 思路1： 递归 + 闭包函数
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  var res = [];
  (function (root) {
    if (root !== null) {
      res.push(root.val)
      root.children.forEach(child => {
        arguments.callee(child)
      })
    }
  })(root)
  return res
};

/**
 * 5. HeapSort
 * 自学 https://www.geeksforgeeks.org/heap-sort/
 * 时间复杂度 O(nlogn), 稳定的原地排序
 * https://time.geekbang.org/column/article/69913
 * Step1: 建堆
 * Step2: 排序
 */

/**
 * 6. 字母异位词分组（亚马逊在半年内面试中常考）
 * https://leetcode-cn.com/problems/group-anagrams/
 * medium | leetcode 049
 * 思路：记录到哈希表中，key值为统计数组toString，value值为字符串数组。最后返回 map 所有的values
 */
var groupAnagrams = function(strs) {
  if (!Object.prototype.toString.apply(strs) === '[object Array]'
    || strs.length < 1
  ) {
    return []
  }

  var map = {}
  strs.forEach(str => {
    var arr = Array(26).fill(0)
    str.split('').forEach(ch => {
      ++arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    })
    if (map[arr.toString()] === void(0)) {
      map[arr.toString()] = [str]
    } else {
      map[arr.toString()].push(str)
    }
  })
  return Object.values(map)
};

/**
 * 7. 二叉树的中序遍历（亚马逊、字节跳动、微软在半年内面试中考过）
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * leetcode-94
 */
var inorderTraversal = function (root) {
  var res = [];
  (function (root) {
    if (root !== null) {
      arguments.callee(root.left)
      res.push(root.val)
      arguments.callee(root.right)
    }
  })(root)
  return res
};

/**
 * 8. 二叉树的前序遍历（字节跳动、谷歌、腾讯在半年内面试中考过）
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * leetcode-144
 */
var preorderTraversal = function (root) {
  var res = [];
  (function (root) {
    if (root !== null) {
      res.push(root.val)
      arguments.callee(root.left)
      arguments.callee(root.right)
    }
  })(root)
  return res
};

/**
 * 9. N 叉树的层序遍历（亚马逊在半年内面试中考过）
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/submissions/
 * easy | leetcode-590
 */
var postorder = function (root) {
  var res = [];
  (function (root) {
    if (root !== null) {
      root.children.forEach(child => {
        arguments.callee(child)
      })
      res.push(root.val)
    }
  })(root)
  return res
};

/**
 * 10. 丑数（字节跳动在半年内面试中考过）
 * https://leetcode-cn.com/problems/ugly-number/
 * easy | leetcode-263
 * 思路： 两重循环，一直判断是否整除2、3、5无余数。最后判断是否得到1
 */
var isUgly = function(num) {
  for(var p of [2, 3, 5]) {
    while(num && num % p === 0) {
      num /= p
    }
  }
  return num === 1
};

/**
 * 11. 前 K 个高频元素（亚马逊在半年内面试中常考）
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * medium ｜ leetcode-347
 * 思路1:
 * Step1: map统计 O(n)
 * Step2: 放入数组
 * Step3: 按照 v 排序 O(nlogn)
 * Step4: 取出前k个
 */
var topKFrequent = function(nums, k) {
  var map = {}
  nums.forEach(num => {
    if (map[num] === void(0)) {
      map[num] = 1
    } else {
      ++map[num]
    }
  })
  var arr = []
  for(var key in map) {
    arr.push([key, map[key]])
  }
  arr.sort(function(a, b) {
    return b[1] - a[1]
  })
  var res = []
  for(var i = 0; i < k; ++i) {
    res.push(arr[i][0])
  }
  return res
};
