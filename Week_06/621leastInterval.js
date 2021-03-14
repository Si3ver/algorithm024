/**
 * https://leetcode-cn.com/problems/task-scheduler/
 * 621. 任务调度器 | medium
 * 
 */

// 后面的计算方法有点烧脑。。。
const leastInterval = function(tasks, n) {
  const startCodePoint = 'A'.codePointAt(0)
  let counter = Array(26).fill(0)
  let maxCnt = max = 0
  for (const task of tasks) {
    const idx = task.codePointAt(0) - startCodePoint
    counter[idx]++
    if (counter[idx] == max) maxCnt++
    else if (counter[idx] > max) {
      max = counter[idx]
      maxCnt = 1
    }
  }
  const emptySlots = (max - 1) * (n - (maxCnt - 1))
  const availTasks = tasks.length - max * maxCnt
  const idles = Math.max(0, emptySlots - availTasks)
  return tasks.length + idles;
}

// ---- test case ----
console.log(leastInterval(
  ["A","A","A","B","B","B"], 2))  // A B x A B x A B x
console.log(leastInterval(
  ["A","A","A","B","B","B"], 0))
console.log(leastInterval(
  ["A","A","A","A","A","A","B","C","D","E","F","G"], 2))
//  A  B
