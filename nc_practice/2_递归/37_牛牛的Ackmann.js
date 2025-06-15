// https://www.nowcoder.com/practice/3a7a4c26420c4358a1a5cda3da2fa1c8

// 递归
// 解法一：直接按公式递归（自顶向下）
function ack(m, n) {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ack(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    return ack(m - 1, ack(m, n - 1));
  }
  return -1;
}

// 解法二：动态规划递推（自底向上）
// todo

console.log(ack(3, 4));
console.log(ack(0, 10));
