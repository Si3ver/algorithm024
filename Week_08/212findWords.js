/**
 * https://leetcode-cn.com/problems/word-search-ii/
 * 212. 单词搜索 II | hard
 * 
 * trie树
 */

const findWords = function(A, words) {
  if (!Array.isArray(words) || words.length < 1 ||
      !Array.isArray(A) || A.length < 1 ||
      !Array.isArray(A[0]) || A[0].length < 1) return []
  // 1. 构建 trie 树
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  const dfs = (i, j, prefix, trieNode) => {
    prefix += A[i][j]
    trieNode = trieNode[A[i][j]]
    if (trieNode && trieNode.isWord) res.add(prefix)
    const tmp = A[i][j]
    A[i][j] = TAG // 标记已访问过的节点
    for (let direct = 0; direct <= 3; ++direct) {
      const x = i + dx[direct]
      const y = j + dy[direct]
      if (x >= 0 && x < m &&
          y >= 0 && y < n &&
          A[x][y] != TAG &&
          trieNode[A[x][y]]) {
        dfs(x, y, prefix, trieNode)
      }
    }
    A[i][j] = tmp // 去除标记
  }
  // 2. 启动DFS
  const res = new Set(), m = A.length, n = A[0].length
  const TAG = '@'
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (trie.startsWith(A[i][j])) {
        dfs(i, j, '', trie.root)
      }
    }
  }
  return [...res]
}
class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let node = this.root
    for (const ch of word) {
      if (node[ch] == null) node[ch] = {}
      node = node[ch]
    }
    node.isWord = true
  }

  _traverse (word) {
    let node = this.root
    for (const ch of word) {
      node = node[ch]
      if (node == null) return null
    }
    return node
  }

  search (word) {
    const node = this._traverse(word)
    return node != null && node.isWord === true
  }

  startsWith (prefix) {
    const node = this._traverse(prefix)
    return !!node
  }
}

// ---- test words ----
console.log(findWords([
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]], 
  ["oath","pea","eat","rain"]
))
