const construct2DArray = (original: number[], m: number, n: number): number[][] => {
    // 0. exception
    if(original.length !== m * n) return []

    // 1. init
    const res:number[][] = []

    // 2. loop
    let cnt:number = 0
    let t:number[] = []
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