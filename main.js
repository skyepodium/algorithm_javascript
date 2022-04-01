const buildArray = (target, n) => {
    const res = []
    const maxVal = Math.max(...target)
    let idx = 0

    for(let i=1; i<=n; i++) {
        if(i > maxVal) break

        res.push("Push")
        if(i !== target[idx]) res.push("Pop")
        else idx++
    }

    return res
};