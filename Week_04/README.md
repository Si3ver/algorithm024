# 学习笔记

## 第9课：深度优先搜索和广度优先搜索

**DFS(递归版)**

```js
const dfs_wrap = (root)  => {
  const dfs_recur = (root) => {
    if (root == null) return
    res.push(root.val)
    dfs_recur(root.left)
    dfs_recur(root.right)
  }
  const res = []
  dfs_recur(root)
  return res
}
```

**DFS(非递归版)**

+ 手动维护stack

```js
/**
 * 非递归的深搜，手动维护stack (push / pop)
 * 因为stack的 FILO 特点，要注意先入右子，再入左子
 * 
 */
const dfs = (root) => {
  if (root == null) return []
  const res = [], stack = [root]
  while(stack.length > 0) {
    const p = stack.pop()
    if(p.right != null) stack.push(p.right)
    if(p.left  != null) stack.push(p.left)
    res.push(p.val)
  }
  return res
}
```

**BFS**

+ 手动维护queue

```js
const bfs = (root) => {
  if (root == null) return []
  const res = [], queue = [root]
  while(queue.length > 0) {
    const p = queue.pop()
    if(p.left  != null) queue.unshift(p.left)
    if(p.right != null) queue.unshift(p.right)
    res.push(p.val)
  }
  return res
}
```

## 第10课：贪心算法

适用场景：问题能分解成子问题，子问题的最优解能递推到最终问题的最优解。【最优子结构】

## 第11课：二分查找
