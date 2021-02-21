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
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const buildTree = function(preorder, inorder) {
  const helper = (preorder, pStart, pEnd, inorder, iStart, iEnd) => {
    // terminator
    if (pStart === pEnd) {
      return null
    }
    // process [rootValue -> iRootIdx -> leftSize]
    const rootValue = preorder[pStart], root = new TreeNode(rootValue)
    let iRootIdx = 0
    for(let i = 0; i < inorder.length; ++i) {
      if (inorder[i] === rootValue) {
        iRootIdx = i
        break
      }
    }
    const leftSize = iRootIdx - iStart
    // drill down
    root.left = helper(preorder, pStart + 1, pStart + leftSize + 1, inorder, iStart, iRootIdx)
    root.right = helper(preorder, pStart + leftSize + 1, pEnd, inorder, iRootIdx + 1, iEnd)
    // revert states
    return root
  }

  return helper(preorder, 0, preorder.length, inorder, 0, inorder.length)
}

const t = buildTree([3,9,20,15,7], [9,3,15,20,7])
console.log(JSON.stringify(t, null, 2))
console.log(bfs(t))
console.log(dfs(t))
