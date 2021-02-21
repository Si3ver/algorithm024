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


// ---- test case ----
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const deserialize = function(data) {
  const treeVals = data.split(',')

  const buildTree = (list) => {
    const rootVal = list.shift()
    if (rootVal === 'X') return null
    const root = new TreeNode(rootVal)
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }
  return buildTree(treeVals)
}

/*
      1
   /     \
  2       5
 / \     /
3   4   6
   / \
  8   9
*/
const t = deserialize('1,2,3,X,X,4,8,X,X,9,X,X,5,6,X,X,X')
console.log(JSON.stringify(t, null, 2))
console.log(dfs_wrap(t))
console.log(dfs(t))
console.log(bfs(t))
