const minimumTotal = (triangle) => {
    // 1. init
    const n = triangle.length
    const MAX_VAL = 2000001
    const d = Array.from(Array(n), () => new Array(n).fill(MAX_VAL))
    d[0][0] = triangle[0][0]

    // 2. loop
    for(let i=1; i<n; i++) {
        for(let j=0; j<n; j++) {
            const t = triangle[i][j]

            if(j === 0 ) d[i][j] = d[i-1][j] + t
            else if(j === i) d[i][j] = d[i-1][j-1] + t
            else d[i][j] = Math.min(d[i-1][j-1], d[i-1][j]) + t
        }
    }

    return Math.min(...d[n-1])
};

triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// triangle = [[-10]]
const res = minimumTotal(triangle)

console.log('res', res)
