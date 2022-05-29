const maxProduct = (words: string[]): number => {
    // 1. init
    const n:number = words.length
    const w:number[] = words.map(x => {
        let bit:number = 0
        x.split("").forEach(a => {
            const val:number = a.charCodeAt(0) - 'a'.charCodeAt(0)
            bit |= 1 << val
        })
        return bit
    })
    let res:number = 0

    // 2. loop
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            const a:number = w[i]
            const b:number = w[j]
            if((a & b) !== 0) continue

            res = Math.max(res, words[i].length * words[j].length)
        }
    }

    return res
};

const words:string[] = ["abcw","baz","foo","bar","xtfn","abcdef"]

const res = maxProduct(words)

console.log('res', res)
