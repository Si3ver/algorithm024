const data = [
    { userId: 8, title: 'title1' },
    { userId: 11, title: 'other' },
    { userId: 15, title: null },
    { userId: 19, title: 'title2' },
]

const result = find(data).where({
    "title": /\d$/,
    // "userId": 19,
}).orderBy('userId', 'desc');

console.log(result.value);


// 实现 find
function find(data) {
    return {
        value: data,
        where(match) {
            this.value = this.value.filter(
                item => Object.entries(match).every(([key, value]) => {
                    if (value instanceof RegExp) {
                        return value.test(item[key])
                    }
                    return item[key] === value
                })
            );
            return this;
        },
        orderBy(key, type) {
            this.value.sort((x, y) => type === 'desc' ? y[key] - x[key] : x[key] - y[key]);
            return this;
        }
    }
}


