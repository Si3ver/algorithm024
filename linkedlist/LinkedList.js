// JavaScript 实现一个单向链表
class ListNode {
  constructor (val, next) {
    this.val = val == null ? 0 : val
    this.next = next == null ? null : next
  }
}

class LinkedList {
  constructor (head = null) {
    this.dummyHead = new ListNode('head', head)
  }
  // 末尾追加节点
  append (val) {
    let node = this.dummyHead
    while (node && node.next) {
      node = node.next
    }
    node.next = new ListNode(val)
    return this
  }
  // 删除第一个值为 val 的节点
  delete (val) {
    let prev = this.dummyHead
    while (prev && prev.next && prev.next.val != val) {
      prev = prev.next
    }
    prev.next = prev.next.next
    return this
  }
  // 反转链表
  reverse () {
    let prev = null
    let node = this.dummyHead.next
    while (node) {
      const curr = node
      node = node.next
      curr.next = prev
      prev = curr
    }
    this.dummyHead.next = prev
    return this
  }
  // 获取链表长度
  get size() {
    let cnt = 0
    let node = this.dummyHead.next
    while (node) {
      ++cnt
      node = node.next
    }
    return cnt
  }
  // 获取链表头节点
  get head() {
    return this.dummyHead.next
  }
  // 设置新的头节点
  set head(newHead) {
    this.dummyHead.next = newHead
  }
  // 显示链表
  display() {
    let node = this.dummyHead.next
    const res = []
    while (node) {
      res.push(node.val)
      node = node.next
    }
    console.log(res.join(' -> '))
    return this
  }
}

// // ---- test case ----
// let link = new LinkedList()
// link.display()  // ''
//     .append(1)
//     .display()  // 1
//     .append(2)
//     .append(3)
//     .append(4)
//     .append(5)
//     .delete(5)
//     .delete(2)
//     .display()  // 1 -> 3 -> 4
//     .reverse()
//     .display()  // 4 -> 3 -> 1
//     .reverse()
//     .display()  // 1 -> 3 -> 4

// console.log(link.size)

// ---- export ----
module.exports = { ListNode, LinkedList }
