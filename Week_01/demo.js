let nums = [1,1,2,3,4]
let i = 0, j = nums.length - 1
while (i < j && nums[i] === nums[++i]) {
  console.log('circle x:', i, j)
}

i = 0, j = nums.length - 1
while (i < j && nums[++i] === nums[i]) {
  console.log('circle y:', i, j)
}

// ++i 一定要放到后面！！！，不然先运算 ++i，再判断，起不到效果！
// 3sum 总结
