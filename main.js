const solution = (arr) => {
    // 1. init
    const s = []

    // 2. loop
    arr.forEach(x => {
        if(s.length === 0 || s[s.length - 1] !== x) s.push(x)
    })

    return s
}