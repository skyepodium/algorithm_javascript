const largestAltitude = (gain) => {
    // 1. init
    let prev = 0
    let res = 0

    // 2. loop
    gain.forEach(g => {
        prev = prev + g
        res = Math.max(res, prev)
    })

    return res
};