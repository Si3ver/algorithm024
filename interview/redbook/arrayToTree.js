const arr = [
    {id: 2, title: '部门2', pid: 1},
    {id: 3, title: '部门3', pid: 1},
    {id: 1, title: '部门1', pid: 0},
    {id: 4, title: '部门4', pid: 3},
    {id: 5, title: '部门5', pid: 4},
]

/**
 *    1
 *  /   \
 * 2     3
 *       |
 *       4
 *       |
 *       5
 */

// 解法一：递归
const arrayToTree1 = (source, rootId) => {
	if (!Array.isArray(source)) return [];

	const res = [];
	for (const item of source) {
		if (item.pid === rootId) {
			item.children = arrayToTree1(source, item.id) || [];
			res.push(item);
		}
	}
	return res;
}

// 解法二：构建缓存
const arrayToTree2 = (source, rootId) => {
	if (!Array.isArray(source)) return [];

	const map = new Map();
	for (const item of source) {
        map.set(item.id, item);
	}

    // console.log(JSON.stringify(Object.fromEntries(map.entries()), null, 2));
    const res = [];
    for (const item of source) {
        const { pid }= item;
        if (pid === rootId) {
            res.push(item);
        } else {
            const parentItem = map.get(pid);
            const origChildren = parentItem.children || [];
            console.log(parentItem)
            parentItem.children = [origChildren, item];
        }
    }
    return res;
}

const res = arrayToTree2(arr, 0);
console.log(JSON.stringify(res, null, 2));
