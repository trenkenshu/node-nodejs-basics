import { createHash } from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const pathToFile = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'fileToCalculateHashFor.txt')
const calculateHash = async () => {
    let content = '';
    try {
        content = await fs.readFile(pathToFile)
    } catch {
        throw Error('FS operation failed')
    }
    console.log(createHash('sha256').update(content).digest('hex'))
}

await calculateHash()