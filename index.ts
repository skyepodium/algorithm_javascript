const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
    // 1. init
    const check:boolean[] = Array.from(new Array(n).fill(false))
    const v:number[][] = Array.from(new Array(n), () => [])

    // 2. make graph
    edges.forEach(([s, e]) => {
        v[s].push(e)
        v[e].push(s)
    })

    // 3. DFS
    const dfs = (node):void => {
        check[node] = true
        v[node].forEach(nNode => {
            if(!check[nNode]) dfs(nNode)
        })
    }

    dfs(source)

    return check[destination]
};