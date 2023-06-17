import * as fs from 'node:fs/promises';
import * as path from 'path';

const initPath = process.argv[1].split(path.sep).slice(0, -1)
const sourcePath = path.join(...initPath, 'files')
const destinationPath = path.join(...initPath, 'files_copy')

const areWeOk = async () => {
    try {
        await fs.readdir(sourcePath)
         await fs.mkdir(destinationPath);
    } catch {
        throw Error('FS operation failed')
    }

    return
}

const copy = async () => {
    await areWeOk()
    const files = fs.readdir(sourcePath);
    (await files).forEach(file => {
        fs.copyFile(
            path.join(sourcePath, file),
            path.join(destinationPath, file)
        )
    })
}

await copy()
