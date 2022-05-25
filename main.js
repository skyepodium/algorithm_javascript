const validPath = (n, edges, source, destination) => {
    // 1. init
    const check = Array.from(new Array(n).fill(false))
    const v = Array.from(new Array(n), () => [])

    // 2. make graph
    edges.forEach(([s, e]) => {
        v[s].push(e)
        v[e].push(s)
    })

    // 3. DFS
    const dfs = (node) => {
        check[node] = true
        v[node].forEach(nNode => {
            if(check[nNode]) dfs(nNode)
        })
    }

    dfs(source)

    return check[destination]
};