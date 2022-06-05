const longestNiceSubstring = (s) => {
    // 1. init
    const n = s.length
    let res = ""

    // 2. loop
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n+1; j++) {
            // set
            const cur = s.substring(i, j)
            const se = new Set(cur)
            let isNice = true
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

s = "YazaAay"
// s = "Bb"
// s = "c"

const res = longestNiceSubstring(s)

console.log('res', res)
