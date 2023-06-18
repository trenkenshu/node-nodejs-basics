import CP from 'child_process'
import { join, sep } from 'path'

const scriptPath = join(...process.argv[1].split(sep).slice(0, -1), 'files', 'script.js')

const spawnChildProcess = async (args) => {
    const cpArgs = args ? args : []
    const childProc =  CP.execFile('node', [scriptPath, ...cpArgs], (err) =>
        console.log(`Child process terminated ${err ? 'with error: ' + JSON.stringify(err): 'gracefully'}`)
    )
    console.log('Spawned child process id:', childProc.pid)
    process.stdin.pipe(childProc.stdin)
    childProc.stdout.pipe(process.stdout)
}

spawnChildProcess(['someArgument1', 'someArgument2', '3'])
