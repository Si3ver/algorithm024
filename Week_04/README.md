# 学习笔记

## 第9课：深度优先搜索和广度优先搜索

***DFS(递归版)**

```js
const res = []
const dfs = (root) => {
  if (root == null) return
  res.push(root.val)
  dfs(root.left)
  dfs(root.right)
}
```

***DFS(非递归版)**

+ 手动维护stack

```js
const dfs = (root) => {
  if (root == null) return []

  const res = [], stack = [root]
  while(stack.length > 0) {
    const p = stack.pop()
    res.push(p.val)
    stack.push(p.left)
    stack.push(p.right)
  }
  return res
}
```

***BFS**

+ 手动维护queue

```js
const bfs = (root) => {
  if (root == null) return []

  const res = [], queue = [root]
  while(queue.length > 0) {
    const p = queue.pop()
    res.push(p.val)
    res.unshift(p.left)
    res.unshift(p.right)
  }
}
```

## 第10课：贪心算法

## 第11课：二分查找
