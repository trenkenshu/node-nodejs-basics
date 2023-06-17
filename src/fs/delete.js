import * as fs from 'node:fs/promises'
import * as path from 'path'

const initPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files');
const deletePath = path.join(initPath, 'fileToRemove.txt')

const remove = async () => {
    try {
        await fs.rm(deletePath)
    } catch {
        throw Error('FS operation failed')
    }
};

await remove()