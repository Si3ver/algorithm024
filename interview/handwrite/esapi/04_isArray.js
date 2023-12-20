const isArray = (ele) => {
    // return ele instanceof Array
    return Object.prototype.toString.call(ele) === '[object Array]';
}

const log = console.log;
log(isArray(null));
log(isArray(123));
log(isArray('123'));
log(isArray([]));
log(isArray(new Array()));
