function getFrequentTag() {
    const o = $$('*') // = document.querySelectorAll('*')
        .map(it => it.tagName.toLowerCase())
        .reduce((o, tagName) => {
            o[tagName] = o[tagName] ? o[tagName] + 1 : 1;
            return o;
        }, {});

    return Object.entries(o)
        .reduce((x, y) => x[1] > y[1] ? x : y);
}
