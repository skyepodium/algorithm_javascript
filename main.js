const solution = (n) => {
    const d = Array.from(Array(n+1)).fill(1)

    const eratos = () => {
        for(let i=2; i*i<=n; i++) {
            for(let j=i*2; j<=n; j+=i) {
                if(d[j] === 1) d[j] = 0
            }
        }
    }

    d[0] = 0
    d[1] = 0
    eratos()
    return d.reduce((prev, cur) => prev + cur, 0)
}

n = 10
const res = solution(n)

console.log('res', res)