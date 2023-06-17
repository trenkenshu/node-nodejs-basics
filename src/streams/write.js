import { createWriteStream } from 'fs'
import path from 'path'

const pathToFile = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'fileToWrite.txt')

const write = async () => {
    const writeStream = createWriteStream(pathToFile)
    console.log('To exit press Ctrl+C')
    process.stdin.pipe(writeStream)
}

await write()