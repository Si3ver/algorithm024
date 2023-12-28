/**
 * 带并发限制的异步调度器
 */

class Scheduler {
    concurrency = 2;
    running = 0;
    queue = [];

    add(task) {
        return new Promise(resolve => {
            this.queue.push({
                taskGenerator: task,
                resolve,
            });
            this.schedule();
        })
    }

    schedule() {
        while (this.queue.length > 0 && this.running < this.concurrency) {
            const curTask = this.queue.shift();
            this.running += 1;
            curTask.taskGenerator().then(result => {
                this.running -= 1;
                curTask.resolve(result);
                this.schedule();
            })
        }
    }
}

// ---- test case ----
const timeout = (time) =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });

const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(`[${new Date().toLocaleString()}] `, order));
};

console.log(`[${new Date().toLocaleString()}] start...`);
addTask(10000, "1");
addTask(5000, "2");
addTask(3000, "3");
addTask(4000, "4");
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
