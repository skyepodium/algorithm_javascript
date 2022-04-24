function solution(m, n, board) {
    // 1. init
    let res = 0
    const temp = m
    m = n
    n = temp
    board = board.map(x => x.split(""))
    let check = null
    const d = [[0, 0], [0, 1], [1, 0], [1, 1]]

    // 2. init
    const init = () => {
        check = Array.from(Array(n), ()=> new Array(m).fill(false))
    }

    // 3. search
    const search = () => {
        let cnt = 0

        for(let i=0; i<n-1; i++) {
            for(let j=0; j<m-1; j++) {
                const prev = board[i][j]
                if(prev === "") continue

                let isSame = true
                for(const [dx, dy] of d) {
                    const nx = i + dx
                    const ny = j + dy
                    const cur = board[nx][ny]
                    if(prev !== cur) {
                        isSame = false
                        break
                    }
                }

                if(!isSame) continue

                for(const [dx, dy] of d) {
                    const nx = i + dx
                    const ny = j + dy
                    if(check[nx][ny]) continue
                    check[nx][ny] = true
                    cnt++
                }
            }
        }



        return cnt
    }

    // 4. move
    const move = () => {
        for(let j=0; j<m; j++) {
            for(let idx=n-1; idx>=0; idx--) {
                let i = idx
                if(board[i][j] === "" || check[i][j]) continue

                while(i < n-1 && board[i][j] !== "" && board[i+1][j] === "") {
                    board[i+1][j] = board[i][j]
                    board[i][j] = ""
                    i++
                }
            }
        }

    }

    // 5. clear
    const clear = () => {
        for(let i=0; i<n; i++)
            for(let j=0; j<m; j++)
                if(check[i][j]) board[i][j] = ""
    }

    // 6. loop
    while(true) {
        // 1) init
        init()

        // 2) search
        const searchCnt = search()
        if(searchCnt === 0) break
        res += searchCnt

        // 3) clear
        clear()

        // 4) move
        move()
    }

    return res
}

m = 4
n = 5
board = ["CCBDE", "AAADE", "AAABF", "CCBBF"]

// m = 6
// n = 6
// board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]

const res = solution(m, n, board)

console.log('res', res)