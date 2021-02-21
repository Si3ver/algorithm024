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
const t1 = deserialize('1,2,3,X,X,4,8,X,X,9,X,X,5,6,X,X,X')
console.log(JSON.stringify(t1, null, 2))
console.log(dfs_wrap(t1))
console.log(dfs(t1))
console.log(bfs(t1))

const t2 = null
console.log(dfs_wrap(t2))
console.log(dfs(t2))
console.log(bfs(t2))
