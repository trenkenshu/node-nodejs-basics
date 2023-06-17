import * as fs from 'node:fs/promises'
import * as path from 'path'

const initPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files');

const list = async () => {
    try {
        console.table(await fs.readdir(initPath))
    } catch {
        throw Error('FS operation failed')
    }
}

await list()