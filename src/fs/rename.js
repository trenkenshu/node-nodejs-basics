import * as fs from 'node:fs/promises'
import * as path from 'path'

const initPath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files');
const sourcePath = path.join(initPath, 'wrongFilename.txt')
const destinationPath = path.join(initPath, 'properFilename.md')

const areWeOk = async () => {
    try {
        await fs.readFile(sourcePath)
    } catch {
        throw Error('FS operation failed')
    }
    try {
        await fs.readFile(destinationPath)
        throw Error('FS operation failed')
    } catch {}

    return
}

const rename = async () => {
    await areWeOk();
    fs.rename(
        sourcePath,
        destinationPath
    )
}

await rename()