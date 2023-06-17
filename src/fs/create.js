import * as fs from 'node:fs/promises';
import * as path from 'path';

const create = async () => {
    const filePath = path.join(...process.argv[1].split(path.sep).slice(0, -1), 'files')
    const isThere = (await fs.readdir(filePath)).includes('fresh.txt')
    if(isThere)
        throw Error('FS operation failed')
    fs.writeFile(path.join(filePath, 'fresh.txt'), 'I am fresh and young')
}

await create()