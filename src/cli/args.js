const parseArgs = () => {
    const args = process.argv.slice(2)
    const answer = []
    args.forEach(item => {
        if(/^--/.test(item)) {
            answer.push(item.slice(2))
        } else {
            answer[answer.length - 1] += (` is ${item}`)
        }
    })
    answer.length && console.log(answer.join(', '))
}

parseArgs()