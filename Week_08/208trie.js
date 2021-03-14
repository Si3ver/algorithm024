/**
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 * 208. 实现 Trie (前缀树) | medium
 * 
 */

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

  search (word) {
    let node = this.root
    for (const ch of word) {
      node = node[ch]
      if (node == null) return false
    }
    return node.isWord != void(0)
  }

  startsWith (prefix) {
    let node = this.root
    for (const ch of prefix) {
      node = node[ch]
      if (node == null) return false
    }
    return !!node
  }
}

// ---- test case ----
var trie = new Trie()
trie.insert("apple")
console.log(trie.search("bbb"))
console.log(trie.search("apple"))   // 返回 true
console.log(trie.search("app"))     // 返回 false
console.log(trie.startsWith("app")) // 返回 true
console.log(trie.startsWith("apbbb")) // 返回 false
trie.insert("app")
console.log(trie.search("app"))     // 返回 true
