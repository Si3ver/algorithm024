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
const dfs = (root) => {
  const res = [], stack = [root]
  while(stack.length > 0) {
    const p = stack.pop()
    if (p == null) continue
    res.push(p.val)
    stack.push(p.right)
    stack.push(p.left)
  }
  return res
}
```

**BFS**

+ 手动维护queue

```js
const bfs = (root) => {
  const res = [], queue = [root]
  while(queue.length > 0) {
    const p = queue.pop()
    if (p == null) continue
    res.push(p.val)
    queue.unshift(p.left)
    queue.unshift(p.right)
  }
  return res
}
```

## 第10课：贪心算法

## 第11课：二分查找
