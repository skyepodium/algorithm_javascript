const solution = board => {
    // 1. init
    const n = board.length
    const m = board[0].length
    const maxVal = n * m * 600
    const d = Array.from(new Array(n), () => Array.from(new Array(m), () => new Array(4).fill(maxVal)))
    const dirList = [[0, -1], [0, 1], [1, 0], [-1, 0]]

    // 2. dijkstra
    const dijkstra = (startX, startY) => {
        const q = []

        for(let i=0; i<4; i++) {
            d[startX][startY][i] = 0
            q.push([startX, startY, i, 0])
        }

        while(q.length > 0) {
            const [x, y, dir, cost] = q.shift()
            if(cost > d[x][y][dir]) continue

            for(let i=0; i<4; i++) {
                const [dx, dy] = dirList[i]
                const nx = x + dx
                const ny = y + dy

                if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue
                if(board[nx][ny] === 1) continue

                const nCost = dir === i ? 100 : 600
                if(d[nx][ny][i] > d[x][y][dir] + nCost) {
                    d[nx][ny][i] = d[x][y][dir] + nCost
                    q.push([nx, ny, i, d[nx][ny][i]])
                }
            }
        }
    }

    dijkstra(0, 0)

    return Math.min(...d[n-1][m-1])
}

board = [[0,0,0],[0,0,0],[0,0,0]]

const res = solution(board)

console.log('res', res)

n = 3
m = 4
