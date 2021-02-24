/**
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路： 4点： dummy，pre，start，then( 每次只挪动then )
 */

const reverseBetween = function(head, m, n) {
  if (head == null || m === n) return head
  const dummy = new ListNode(-1, head)
  let prev = dummy
  for (let i = 0; i < m - 1; ++i) prev = prev.next
  let start = prev.next, then = start.next
  /*  1  ->  2    ->  3   ->4->5->NULL, m = 2, n = 4
    prev -> start -> then

      _________________
      |               !
      1      2    <-  3        4   ->   5
             |_________________^
     prev   start            then


      __________________________
      |                        !
      1      2   <-   3   <-   4        5
             |__________________________^
     prev  start                       then
  */
  for(let i = 0; i < n - m; ++i) {
    start.next = then.next
    then.next = prev.next
    prev.next = then
    then = start.next // then 右移
  }
  return dummy.next
}
