const longestNiceSubstring = (s: string): string => {
    // 1. init
    const n:number = s.length
    let res:string = ""

    // 2. loop
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n+1; j++) {
            // set
            const cur:string = s.substring(i, j)
            const se:Set<string> = new Set(cur)
            let isNice:boolean = true

            for(const c of se.keys()) {
                if((c.charCodeAt(0) < "a".charCodeAt(0) && !se.has(c.toLowerCase()))
                    || (c.charCodeAt(0) >= "a".charCodeAt(0) && !se.has(c.toUpperCase()))) {
                    isNice = false
                    break
                }
            }

            if(isNice && res.length < cur.length) res = cur
        }
    }

    return res
};