const maxNumberOfBalloons = (text) => {
    // 1. init
    const m = new Map()

    // 2. count
    text.split("").forEach(c => {
        const cnt = m.has(c) ? m.get(c) + 1 : 1
        m.set(c, cnt)
    })

    // 3. res
    const res = Math.min(m.get('b'), m.get('a'), Math.trunc(m.get('l')/2), Math.trunc(m.get('o')/2), m.get('n'))

    return isNaN(res) ? 0 : res
};


text = "nlaebolko"
text = "loonbalxballpoon"
text = "leetcode"
text = "loonbalxballpoonballoo"

const res = maxNumberOfBalloons(text)

console.log('res', res)