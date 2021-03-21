# 学习笔记

```js
// BFS 手动维护队列
const bfs = (root) => {
  const result = [], queue = [root]
  while (queue.length > 0) [
    const line = [], n = queue.length
    for (let i = 0; i < n; ++i) {
      const node = queue.pop()
      line.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(line)
  ]
  return result
}
// DFS 手动维护栈
const dfs = (root) => {
  const result = [], stack = [root]
  while (stack.length > 0) {
    const node = stack.pop()
    res.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
}
```

## 第13课：高级搜索

### 初级搜索

1. 朴素搜索
2. 优化方式：不重复（figonacci），剪枝（生成括号问题）
3. 搜索方向：DFS、BFS、双向搜索、启发式搜索

### 剪枝

尽早删除无效分支，加速搜索

### 双向BFS

+ two ended search

### 启发式搜索 A*

```python
def BFS(graph, start, end):
  queue = []
  queue.append([start])
  visited.add(start)

  while queue:
    node = queue.pop()
    visited.add(node)
    process(node)
    nodes = generate_related_nodes(node)
    queue.push(nodes)
```

```python
def AstarSearch(graph, start, end):
  pq = collections.priority_queue() # 优先级 -> 估价函数
  pq.append([start])
  visited.add(start)
  while pq:
    node = pq.pop()
    visited.add(node)
    process(node)
    nodes = generate_related_nodes(node)
    unvisited = [node for node in nodes if node not in visited]
    pq.push(unvisited)
```

**估价函数**

启发式函数：h(n)，它用来评价哪些节点最有希望的是一个我们要找的节点，h(n)会返回一个非负实数，也可以认为是从节点n的目标节点路径的估计成本。

启发式函数是一种告知搜索节点方向的方法。它提供了一种明智的方法来猜测哪个邻居节点会导向一个目标。


```js
class SortedArray {
  constructor(data, compare) {
    this.data = data
    this.compare = compare
  }
  // 每次取最小值
  take() {
    let minIdx = 0, min = this.data[0]
    for(let i = 0; i < this.data.length; ++i) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i]
        minIdx = i
      }
    }
    this.data[minIdx] = this.data[this.data.length - 1]
    this.data.push()
    return min
  }
  insert(value) {
    this.data.push(value)
  }
  get length() {
    return this.data.length
  }
}

function aStarSearch (graph, start, end) {
  // graph 使用二维数组来存储数据
  let collection = new SortedArray([start], (p1, p2) => distance(p1) - distance(p2))
  while (collection.length > 0) {
    let [x, y] = collection.take()
    if (x === end[0] && y === end[1]) {
      return true
    }
    insert([x - 1, y])
    insert([x + 1, y])
    insert([x, y - 1])
    insert([x, y + 1])
  }
  return false

  function distance([x, y]) {
    return (x - end[0]) ** 2 - (y - end[1]) ** 2
  }

  function insert([x, y]) {
    if (graph[x][y] !== 0) return
    if (x < 0 || x >= graph[0].length || 
        y < 0 || y >= graph.length) return
    graph[x][y] = 2
    collection.insert([x, y])
  }
}
```
