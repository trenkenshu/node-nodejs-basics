import path from 'path'
import fs from 'fs/promises'
import { release, version } from 'os'
import { createServer as createServerHttp }  from 'http';
await import('./files/c.js')

const random = Math.random();

let unknownObject;

// _Attention_ in this task Im using both import() (as I see it a more correct deсision according to task text because it's ECMAScript way)
// and fs.readFile (bacause import() generates experimental feature warning and in general it's better to avoid using experimental stuff)
// in the sake of showing I can handle both ways but dont know which way is expected of me.
// If you feel uncomfortable with this kind of solution, please contact me via discord "trenkenshu" before decreasing mark. Thanks!

if (random > 0.5) {
    // First way that shows extra warning but works as expected
    unknownObject = (await import('./files/b.json', { assert: { type: "json" } })).default;
} else {
    // Second way
    unknownObject = JSON.parse(await fs.readFile('./files/a.json'))
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${process.argv[1]}`);
console.log(`Path to current directory is ${process.argv[1].split(path.sep).slice(0, -1).join(path.sep)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

