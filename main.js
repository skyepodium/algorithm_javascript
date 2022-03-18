function solution(id_list, report, k) {
    // 0. init
    const res = []
    const info = new Set()
    const count = new Map()
    const sent = new Map()
    const mail = new Map()

    // 1. set count
    report.forEach(r => {
        if(!info.has(r)) {
            const [start, end] = r.split(" ")
            count.has(end) ? count.set(end, count.get(end) + 1) : count.set(end, 1)
            info.add(r)
            sent.has(end) ? sent.set(end, sent.get(end).concat([start])) : sent.set(end, [start])
        }
    })

    // 2. count check
    for(const [key, value] of count.entries()) {
        if(value >= k) {
            sent.get(key).forEach(sender => mail.has(sender) ? mail.set(sender, mail.get(sender) + 1) : mail.set(sender, 1))
        }
    }

    // 3. mail count
    id_list.forEach(id => res.push(mail.has(id) ? mail.get(id) : 0))

    return res
}