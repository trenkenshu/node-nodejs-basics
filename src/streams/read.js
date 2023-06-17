import { createReadStream } from 'fs'
import path from 'path'

const pathToFile = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files', 'fileToRead.txt')

const read = async () => {
    const readStream = createReadStream(pathToFile)
    readStream.pipe(process.stdout)
};

await read()