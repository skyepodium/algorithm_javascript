const shortestPathBinaryMatrix = (grid: number[][]): number => {
    // 1. init
    const n: number = grid.length
    const m: number = grid[0].length
    const check: number[][] = Array.from(new Array(n), () => new Array(m).fill(-1))
    const d: number[][] = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

    // 2. bfs
    const bfs = (startX:number, startY:number): number => {
        const q: [number, number][] = []
        if(grid[startX][startY] === 0) {
            check[startX][startY] = 1
            q.push([startX, startY])
        }

        while(q.length > 0) {
            const [x, y] = q.shift()

            for(const [dx, dy] of d) {
                const nx = x + dx
                const ny = y + dy
                if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue
                if(grid[nx][ny] !== 0 || check[nx][ny] !== -1) continue

                check[nx][ny] = check[x][y] + 1
                q.push([nx, ny])
            }
        }

        return check[n-1][m-1]
    }

    return bfs(0, 0)
};