import zlib from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import path from 'path'

const fromPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'archive.gz')
const unzippedPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'fileToCompress.txt')

const decompress = async () => {
    const from = createReadStream(fromPath)
    const to = createWriteStream(unzippedPath)
    const gunz = zlib.createGunzip()

    from.pipe(gunz)
        .pipe(to)
}

await decompress()