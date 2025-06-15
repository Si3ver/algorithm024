function isNeighbor(arr, x, y) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] === x && arr[i + 1] === y) return true
        if (arr[i] === y && arr[i + 1] === x) return true
    }
    return false;
}
