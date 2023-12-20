
function debounce(f, wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            f.apply(this, args);
        }, wait);
    }
}

function throttle(f, wait) {
    let timer;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            f.apply(this, args);
            timer = null;
        }, wait);
    }
}

// 时间戳版 throttle
function throttleByTime(f, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            f.apply(this, args);
            lastTime = now;
        }
    }
}
