const construct2DArray = (original, m, n) => {
    // 0. exception
    if(original.length !== m * n) return []

    // 1. init
    const res = []

    // 2. loop
    let cnt = 0
    let t = []
    original.forEach(o => {
        t.push(o)
        cnt++
        if(cnt >= n) {
            cnt = 0
            res.push([...t])
            t = []
        }
    })

    return res
};