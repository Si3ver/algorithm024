function solve(str) {
    const happyCnt = str.split(':-)').length - 1
    const sadCnt = str.split(':-(').length - 1
    if (happyCnt > sadCnt) {
        return 'Happy'
    } else if (happyCnt < sadCnt) {
        return 'Sad'
    } else if (happyCnt === 0) {
        return 'None'
    }
    return 'Just so so'
}
