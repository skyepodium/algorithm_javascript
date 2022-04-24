const solution = citations => {
    // 1. init
    let res = 0
    const maxVal = Math.max(...citations)
    const n = citations.length

    // 2. sort
    citations.sort((a, b ) => a - b)

    // 3. lowerBound
    const lowerBound = (s, e, target) => {
        while(s < e) {
            const mid = s + ~~((e-s) / 2)
            if(citations[mid] < target) s = mid + 1
            else e = mid
        }
        return e
    }

    // 4. loop
    for(let i=0; i<=maxVal; i++) {
        const idx = lowerBound(0, n, i)
        const upper = n - idx
        if(upper >= i) res = Math.max(res, i)
    }

    return res
}