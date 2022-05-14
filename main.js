const networkDelayTime = (times, n, k) => {
    // 1. init
    const maxVal = 10001
    let res = 0
    const d = Array.from(new Array(n + 1).fill(maxVal))
    const v = Array.from(Array(n + 1), () => [])

    // 2. make graph
    times.forEach(([s, e, c]) => v[s].push([c, e]))

    // 3. dijkstra
    const dijkstra = (startNode) => {
        const q = []
        d[startNode] = 0
        q.push([startNode, d[startNode]])

        while(q.length > 0) {
            const [node, cost] = q.shift()

            if(d[node] < cost) continue

            for(const [nCost, nNode] of v[node]) {
                if(d[nNode] > d[node] + nCost) {
                    d[nNode] = d[node] + nCost
                    q.push([nNode, d[nNode]])
                }
            }
        }
    }

    dijkstra(k)

    // 4. check
    res = Math.max(...d.slice(1, d.length))

    return res === maxVal ? - 1 : res
};

times = [[2,1,1],[2,3,1],[3,4,1]]
n = 4
k = 2

// times = [[1,2,1],[2,1,3]]
// n = 2
// k = 2

const res = networkDelayTime(times, n, k)

console.log('res', res)