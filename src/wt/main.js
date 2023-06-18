import { Worker } from 'worker_threads'
import { cpus } from 'os'
import { join, sep } from 'path'

const workerPath = join(...process.argv[1].split(sep).slice(0, -1), 'worker.js');

const performCalculations = async () => {
    const cpusCount = cpus().length
    const answers = [];
    let finished = 0;
    for (let i = 0; i < cpusCount; i++ ) {
        const worker = new Worker(workerPath, { workerData: { n: i + 10 } })
        worker.on(
            'message',
            data => answers[i] = { data, status: 'resolved' }
        )
        worker.on(
            'error',
            () => answers[i] = { data: null, status: 'error' }
        )
        worker.on(
            'exit',
            () => {
                finished++
                finished === cpusCount && console.log(answers)
            }
        )
    }
}

await performCalculations()