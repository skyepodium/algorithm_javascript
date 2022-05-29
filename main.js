const maxProduct = (words) => {
    // 1. init
    const n = words.length
    const w = words.map(x => {
        let bit = 0
        x.split("").forEach(a => {
            const val = a.charCodeAt(0) - 'a'.charCodeAt(0)
            bit |= 1 << val
        })
        return bit
    })
    let res = 0

    // 2. loop
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            const a = w[i]
            const b = w[j]
            if((a & b) !== 0) continue

            res = Math.max(res, words[i].length * words[j].length)
        }
    }

    return res
};

words = ["abcw","baz","foo","bar","xtfn","abcdef"]

const res = maxProduct(words)

console.log('res', res)
