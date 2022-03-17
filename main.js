function solution(n, edge) {
    // 1. init
    let res = 0
    let MAX_DIST = 0
    const check = new Array(n+1).fill(-1)
    const v = Array.from(Array(n+1), () => [])

    // 2. make graph
    edge.forEach(ed => {
        const [s, e] = ed
        v[s].push(e)
        v[e].push(s)
    })

    // 3. bfs
    const bfs = (start) => {
        const q = []
        check[start] = 0
        q.push(start)

        while(q.length > 0) {
            const node = q.shift()

            v[node].forEach(nNode => {
                if(check[nNode] === -1) {
                    check[nNode] = check[node] + 1
                    MAX_DIST = Math.max(MAX_DIST, check[nNode])
                    q.push(nNode)
                }
            })
        }
    }

    bfs(1)

    // 4. count
    check.forEach(dist => {
        if(dist === MAX_DIST) res++
    })

    return res
}

const n = 6
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]

const res = solution(n, vertex)

console.log('res', res)