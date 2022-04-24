const solution = (relation) => {
    // 1. init
    let res = 0
    const n = relation.length
    const m = relation[0].length
    const idxSet = new Set()
    const lList = []

    // 2. go
    const go = (idx, l) => {
        if(idx >= m) {
            if(l.length > 0) lList.push([...l])
            return
        }

        l.push(idx)
        go(idx + 1, l)
        l.pop()

        go(idx + 1, l)
    }

    go(0, [])

    // 3. sort
    lList.sort((a, b) => a.length - b.length)

    for(const l of lList) {
        const cSet = new Set(l.map(x => String(x)))

        let isPossible = true
        for(const idx of idxSet.values()) {
            let cnt = 0

            for(const x of idx.split("")) {
                if(cSet.has(x)) cnt++
            }

            if(cnt === idx.length) {
                isPossible = false
                break
            }
        }

        if(!isPossible) continue

        // 2) make key
        const keyList = []
        for(const c of relation) {
            const key = l.map(x => String(c[x])).join("_")
            keyList.push(key)
        }

        // 3) uniqueness
        const s = new Set(keyList)
        if(s.size < n) continue

        // 4) add key
        idxSet.add(l.map(x => String(x)).join(""))
        res++
    }

    return res
}

relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]

res = solution(relation)

console.log('res', res)