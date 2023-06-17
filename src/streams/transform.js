import { Transform } from 'stream'

const transform = async () => {
    const reverse = new Transform({
        transform(data, encoding, cb) {
            cb(null, String(data).split('').reverse().join(''));
        },
    })
    process.stdin
        .pipe(reverse)
        .pipe(process.stdout)
}

await transform()