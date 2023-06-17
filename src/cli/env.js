const parseEnv = () => {
    const output = []
    Object.entries(process.env).forEach(
        item => /^RSS_/.test(item[0]) && output.push(`${item[0]}=${item[1]}`)
    )
    output.length && console.log(output.join('; '))
}

parseEnv()