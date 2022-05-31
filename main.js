const hasAllCodes = (s, k) => {
    // 1. init
    const seen = new Set()
    const n = s.length
    let cnt = 1 << k

    // 2. loop
    for(let i=0; i<n-k+1; i++) {
        const cur = s.substring(i, i+k)
        if(!seen.has(cur)) {
            cnt--
            seen.add(cur)
        }
        if(cnt === 0) return true
    }

    return false
};