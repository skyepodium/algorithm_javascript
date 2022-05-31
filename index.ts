const hasAllCodes = (s: string, k: number): boolean => {
    // 1. init
    const seen = new Set<string>()
    const n:number = s.length
    let cnt:number = 1 << k

    // 2. loop
    for(let i=0; i<n-k+1; i++) {
        const cur:string = s.substring(i, i+k)
        if(!seen.has(cur)) {
            cnt--
            seen.add(cur)
        }
        if(cnt === 0) return true
    }

    return false
};