import * as fs from 'node:fs/promises'
import * as path from 'path'

const initPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files');
const filePath = path.join(initPath, 'fileToRead.txt')

const read = async () => {
    try {
        console.log(await fs.readFile(filePath, 'utf8'))
    } catch {
        throw Error('FS operation failed')
    }
}

await read()