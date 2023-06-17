import zlib from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import path from 'path'

const fromPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'fileToCompress.txt')
const toPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'archive.gz')

const compress = async () => {
    const from = createReadStream(fromPath)
    const to = createWriteStream(toPath)
    const gz = zlib.createGzip()

    from.pipe(gz)
        .pipe(to)
}

await compress()