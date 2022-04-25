const solution = (k, dungeons) => {
    // 1. init
    let res = 0
    const n = dungeons.length
    const check = Array.from(Array(n).fill(false))
    const permutation = []

    // 2. dfs
    const dfs = (cnt, l) => {
        if(cnt >= n) {
            permutation.push([...l])
            return
        }

        for(let i=0; i<n; i++) {
            if(!check[i]) {
                check[i] = true
                l.push(i)
                dfs(cnt + 1, l)
                check[i] = false
                l.pop()
            }
        }
    }

    dfs(0, [])

    // 3. loop
    for(const p of permutation) {
        let l = k
        let cnt = 0
        for(const idx of p) {
            const [a, b] = dungeons[idx]
            if(l < a || l < b) break
            l -= b
            cnt++
        }
        res = Math.max(res, cnt)
    }

    return res
}

k = 80
dungeons = [[80,20],[50,40],[30,10]]

const res = solution(k, dungeons)

console.log('res', res)