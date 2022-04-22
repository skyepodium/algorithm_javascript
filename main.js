const solution = (begin, target, words) => {
    // 1. init
    const d = {}
    const check = {}
    words.push(begin)

    // 2. get diff
    const getDiff = (a, b) => {
        let res = 0
        for(let i=0; i<a.length; i++) {
            if(a[i] !== b[i]) res++
        }
        return res
    }

    // 3. loop
    for(let i=0; i<words.length; i++) {
        for(let j=0; j<words.length; j++) {
            if(i === j) continue
            const a = words[i]
            const b = words[j]

            if(getDiff(a, b) === 1) {
                if(d[a]) d[a] = [...d[a], b]
                else d[a] = [b]

                if(d[b]) d[b] = [...d[b], a]
                else d[b] = [a]
            }
        }
    }

    // 4. bfs
    const bfs = start => {
        const q = [start]
        check[start] = 0

        while(q.length > 0) {
            const node = q.shift()
            if(d[node]) {
                for(const nNode of d[node]) {
                    if(!check[nNode]) {
                        check[nNode] = check[node] + 1
                        q.push(nNode)
                    }
                }
            }
        }
    }

    bfs(begin)

    return check[target] ? check[target] : 0
}

begin = "hit"
target = "cog"
words = ["hot", "dot", "dog", "lot", "log", "cog"]

begin = "hit"
target = "cog"
words = ["hot", "dot", "dog", "lot", "log"]

const res = solution(begin, target, words)

console.log('res', res)