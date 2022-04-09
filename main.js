const solution = (participant, completion) => {
    // 1. init
    const m = new Map()

    completion.forEach(x => {
        if(m.has(x)) m.set(x, m.get(x) + 1)
        else m.set(x, 1)
    })

    for(const p of participant) {
        if(!m.has(p) || m.get(x) === 0) return p

        m.set(p, m.get(p) - 1)
    }

    return ""
}