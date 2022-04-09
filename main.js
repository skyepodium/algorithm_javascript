const solution = (n) => {
    const num = ~~Math.sqrt(n)

    return num * num === n ? (num + 1) * (num + 1) : -1
}