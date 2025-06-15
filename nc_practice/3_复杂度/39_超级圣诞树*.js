// 超级圣诞树
// https://www.nowcoder.com/practice/470d26c9a73e4e17be8cc45cac843423

function solve(n) {
    let arr = Array.from({ length: 500 }, () => new Array(800).fill(0));
    // 初始化小三角形
    arr[0][2] = 1;
    arr[1][1] = 1; arr[1][3] = 1;
    arr[2][0] = 1; arr[2][2] = 1; arr[2][4] = 1;

    let length = 3, width = 5;

    for (let i = 2; i <= n; i++) {
        // 加工左下和右下的小三角形
        for (let j = length; j < length * 2; j++) {
            for (let k = 0; k < width; k++) {
                arr[j][k] = arr[j - length][k];
                arr[j][k + width + 1] = arr[j - length][k];
            }
        }
        // 清空原三角形
        for (let j = 0; j < length; j++) {
            for (let k = 0; k < width; k++) {
                arr[j][k] = 0;
            }
        }
        // 将原三角形挪到中间
        for (let j = 0; j < length; j++) {
            for (let k = Math.floor((width + 1) / 2); k < width + Math.floor((width + 1) / 2); k++) {
                arr[j][k] = arr[j + length][k - Math.floor((width + 1) / 2)];
            }
        }
        length *= 2;
        width = 2 * width + 1;
    }

    // 打印圣诞树
    for (let i = 0; i < length; i++) {
        let line = '';
        for (let j = 0; j < width; j++) {
            line += arr[i][j] === 0 ? ' ' : '*';
        }
        console.log(line);
    }
    // 打印树干
    for (let i = 0; i < n; i++) {
        let trunk = '';
        for (let j = 0; j < Math.floor(width / 2); j++) {
            trunk += ' ';
        }
        trunk += '*';
        console.log(trunk);
    }
}

solve(1)
solve(2)
solve(3)
