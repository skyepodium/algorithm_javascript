const minCostConnectPoints = (points) => {
    // 1. init
    const n = points.length
    const e = []
    let res = 0
    const d = Array.from(Array(n).keys())

    // 2. calDist
    const calDist = (x, y, a, b) => {
        return Math.abs(x - a) + Math.abs(y-b)
    }

    // 3. make graph
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            const [x, y] = points[i]
            const [a, b] = points[j]
            e.push([i, j, calDist(x, y, a, b)])
        }
    }

    // 4. sort
    e.sort((a, b) => a[2] - b[2])

    // 5. find
    const find = node => {
        if(node === d[node]) return node
        else return d[node] = find(d[node])
    }

    // 6. cost
    for(let [a, b, cost] of e) {
        a = find(a)
        b = find(b)
        if(a !== b) {
            d[a] = b
            res += cost
        }
    }

    return res
};