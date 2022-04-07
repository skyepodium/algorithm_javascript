const solution = (n, computers) => {
    // 1. init
    const check = Array.from(new Array(n)).fill(false)
    let res = 0

    // 2. bfs
    const bfs = (start) => {
        const q = [start]
        check[start] = true

        while(q.length > 0) {
            const node = q.shift()

            for(let i=0; i<n; i++) {
                if(node === i) continue

                const next = computers[node][i]
                if(next === 1 && !check[i]) {
                    check[i] = true
                    q.push(i)
                }
            }
        }
    }

    // 3. loop
    for(let i=0; i<n; i++) {
        if(!check[i]) {
            console.log()
            console.log("i", i)
            bfs(i)
            res++
        }
    }

    return res
}

n = 3
computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

n = 3
computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]

const res = solution(n, computers)
console.log('res', res)