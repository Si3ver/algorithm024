/**
 * 构建一个 render 函数，将 data 对象渲染为以下 dom

<ul class="list">
    <li>douyin</li>
    <li>toutiao</li>
</ul>

 */

function Element({ tagName, props, children }) {
    // your code
}

Element.prototype.render = function () {
    // your code
};


// ---- test case ----
const data = {
    tagName: 'url',
    props: { 'class': 'list' },
    children: [
        { tagName: 'li', children: ['douyin'] },
        { tagName: 'li', children: ['toutiao'] },
    ]
}

console.log(Element(data));
