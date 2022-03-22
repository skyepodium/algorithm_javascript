const areAlmostEqual = (s1, s2) => {
    // 1. init
    if(s1 === s2) return true

    const n = s1.length
    const base = []
    let cnt = 0

    // 2. loop
    for(let i=0; i<n; i++) {
        const c1 = s1[i]
        const c2 = s2[i]

        if(c1 !== c2) {
            cnt++
            base.push([c1, c2])
        }

        if(cnt >= 3) return false
    }

    return base.length === 2 && base[0][0] === base[1][1] && base[0][1] === base[1][0]
};