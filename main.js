const solution = n => {
    // 1. init
    let res = 0
    const d = new Array(n+1)
    d[0] = 0
    for(let i=1; i<=n; i++) d[i] = d[i-1] + i

    // 2. two pointer
    let s = 0
    let e = 0
    while(s <= e && e < n + 1) {
        const cur = d[e] - d[s]
        if(cur <= n) {
            if(cur === n) res++
            e++
        }
        else{
            s++
        }
    }

    return res
}

n = 10000

const res = solution(n)

console.log('res', res)