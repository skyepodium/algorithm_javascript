const maxNumberOfBalloons = (text:string):number => {
    // 1. init
    const m = new Map<string, number>()

    // 2. count
    text.split("").forEach(c => {
        const cnt:number = m.has(c) ? m.get(c) + 1 : 1
        m.set(c, cnt)
    })

    // 3. res
    const res:number = Math.min(m.get('b'), m.get('a'), Math.trunc(m.get('l')/2), Math.trunc(m.get('o')/2), m.get('n'))

    return isNaN(res) ? 0 : res
};
