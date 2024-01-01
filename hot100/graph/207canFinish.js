/**
 * https://leetcode.cn/problems/course-schedule
 * 课程安排
 */

var canFinish = function (numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0); // 统计节点的入度
    const adjTable = new Map(); // 邻接表
    for (let i = 0; i < prerequisites.length; ++i) {
        const [to, from] = prerequisites[i];
        inDegree[to]++;
        if (adjTable.has(from)) {
            const arr = adjTable.get(from);
            arr.push(to);
        } else {
            adjTable.set(from, [to]);
        }
    }

    const queue = [];
    for (let i = 0; i < inDegree.length; ++i) {
        if (inDegree[i] === 0) queue.push(i); // 入度为零的课入队
    }

    let count = 0;
    while (queue.length) {
        const selected = queue.shift(); // 当前选中的课
        ++count;
        const toList = adjTable.get(selected); // 这门课的后续课程
        if (toList && toList.length) {
            for (const toItem of toList) {
                --inDegree[toItem];
                if (inDegree[toItem] === 0) {
                    queue.push(toItem);
                }
            }
        }
    }
    return count === numCourses;
};

// ---- test cases ----
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
