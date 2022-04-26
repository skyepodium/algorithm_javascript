const solution = gems => {
    // 1. init
    const totalCnt = new Set(gems).size
    const n = gems.length
    let startIdx = 0
    let endIdx = n-1
    const c = new Map()

    // 2. two pointer
    let s = 0
    for(let e=0; e<n; e++) {
        // 1) cur
        const cur = gems[e]
        if(c.has(cur)) c.set(cur, c.get(cur) + 1)
        else c.set(cur, 1)

        // 2) minify
        while(c.size >= totalCnt) {
            if(endIdx - startIdx > e - s) {
                startIdx = s
                endIdx = e
            }

            const startVal = gems[s]
            c.set(startVal, c.get(startVal) - 1)
            if(c.get(startVal) === 0) c.delete(startVal)
            s++
        }
    }

    return [startIdx + 1, endIdx + 1]
}