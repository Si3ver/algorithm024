## 学习笔记

## 第7课：泛型递归、树的递归

**递归模版**

1. terminator
2. process
3. drill down
4. revert states

## 第8课：分治、回溯

**分治模版**

1. recursion terminator
2. process logic in current level
3. drill down
4. merge results
5. revert the current level status if needed

```js
const divide_conquer = (problem, params) => {
  // terminator
  if (problem == null) {
    process_result
    return
  }
  // process current problem
  subproblems = split_problem(problem, data)
  subresult1 = divide_conquer(subproblem[0], p1)
  subresult2 = divide_conquer(subproblem[1], p1)
  ...
  subresultn = divide_conquer(subproblem[2], p1)
  // merge
  result = process_result(subresult1, rubresult2, ..., subresultn)
  // revert the current level status
}
```

**回溯（backtracing）**

